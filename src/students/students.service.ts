import { Injectable } from '@nestjs/common';
import {  Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StudentsService {

  constructor(
    @InjectRepository(Student)
    private studentRepository:Repository<Student>
  ){}

  async findAll(id:string,page:string){
  
    const user =  this.studentRepository
    .createQueryBuilder("student")
    .leftJoinAndSelect("student.college","college")
    
    if(page)
    user
    .limit(2)
    .offset((+page-1)*2)
    
    if(id)
    user.where("student.college.id = :id",{id:+id});
    
    return (await user.getMany())
                         
  }
 
}
