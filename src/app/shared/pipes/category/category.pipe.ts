import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    const category = value.toLowerCase();
   switch(category) {
     case 'front-end': 
     return 'code';
     case 'back-end':
     return 'computer'
     case 'android':
     return 'phone_android'
    default:
      return 'computer'
   }
  
  }

}
