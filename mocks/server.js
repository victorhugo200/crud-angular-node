const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
let coursesList = require('./data.json');



app.use(bodyParser())
app.use(cors()) //Essa linha aqui


app.get('/courses', (req, res) => {

    return res.jsonp(
        coursesList
    )
});
app.delete('/courses/:id', (req, res) => {
    const id = req.params.id;
    const idValid = idIsValid(id);
    if (idValid) {
        coursesList = deleteCourse(id);
        return res.status(200).send();
    } else {
        return res.status(403).send({ error: 'ID inválido' });
    }

});

app.post('/courses/add', (req, res) => {

    const id = generateID();
    const { name, category, description } = req.body['course'];
    const course = { _id: id, name, category, description };
    const hasCourse = coursesList.some((item) =>
        item.name.toLocaleLowerCase() === name.toLocaleLowerCase());
    if (!hasCourse) {
        coursesList.push(course);
        return res.status(200).send();
    } else {
        return res.status(431).send({ message: 'Este curso já foi cadastrado na nossa base de dados.' });
    }


});

app.put('/courses/:id', (req, res) => {

    const id = req.params.id;
    const { name, category, description } = req.body['course'];


    const course = { _id: id, name, category, description };
    const arrayIndex = coursesList.map(({ _id }) => _id);

    const index = arrayIndex.indexOf(id);
    coursesList.splice(index, 1, course);
    return res.status(200).jsonp(coursesList);

});

app.get('/courses/detail/:id', (req, res) => {

    const id = req.params.id;

    const filteredCourse = coursesList.filter(({ _id }) => _id === id);
    const item = filteredCourse.map(({ _id, name, category, description }) => {
        return {
            _id: _id,
            title: name,
            description,
            category

        }
    });
    const course = item[0];
    return res.status(200).jsonp(course);

});

function idIsValid(id) {
    return coursesList.some(({ _id }) => _id === id);
}

function deleteCourse(id) {
    return coursesList.filter((item) => item._id !== id);
}

function generateID() {
    const { _id } = coursesList[coursesList.length - 1];
    const newID = (+_id + 1) + '';
    return newID;

}



app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`));