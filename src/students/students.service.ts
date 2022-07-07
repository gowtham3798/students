import { Injectable } from '@nestjs/common';
import {  Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindStudentDto } from './dto/findId-student.dto';



@Injectable()
export class StudentsService {

  constructor(
    @InjectRepository(Student)
    private studentRepository:Repository<Student>
  ){}

  async findAll(id:FindStudentDto){
  
    if(id && id!==null){
      let arr=[]
      let std = await this.studentRepository.find({relations:{college:true}})
      let std1 = std.filter(x => x.college.id === +id)
        std1.map((x) => arr.push({'id':x.id,'name':x.name,"college":x.college.name}))
        return arr
    }

    else if(id==undefined){
      let arr=[]
      let std = await this.studentRepository.find({relations:{college:true}})    
      std.map((x)=>arr.push({'id':x.id,'name':x.name,"college":x.college.name}))
      return arr
    }
  }
 
}
