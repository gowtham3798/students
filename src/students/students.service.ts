import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StudentsService {

  constructor(
    @InjectRepository(Student)
    private studentRepository:Repository<Student>
  ){}

  async findAll(id:string,page:string,pagesize:string){
  
    const user =  this.studentRepository
    .createQueryBuilder("student")
    .leftJoinAndSelect("student.college","college")
    
    if(id)
    user.where("student.college.id = :id",{id:+id});

    if(page)
    user
    .limit(5)
    .offset((+page-1)*5)
    
    if(page && pagesize)
    user
    .limit(+pagesize)
    .offset((+page-1)*+pagesize)
    
    
    return (await user.orderBy("student.name","ASC").getMany())
                         
  }
 
}
