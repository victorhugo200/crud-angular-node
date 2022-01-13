import { TestBed } from '@angular/core/testing';

import { DetailCourseResolver } from './detail-course.resolver';

describe('DetailCourseResolver', () => {
  let resolver: DetailCourseResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DetailCourseResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
