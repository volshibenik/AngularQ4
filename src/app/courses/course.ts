import { CourseModel } from './course.model';

export class Course implements CourseModel {
  constructor(
    public id: number,
    public title: string,
    public creationDate: string,
    public duration: string,
    public description: string
  ) { }
}
