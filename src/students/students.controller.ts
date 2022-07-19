import { Controller, Get, Query } from '@nestjs/common';
import { StudentsService } from './students.service';
import { ApiTags } from '@nestjs/swagger';
import { FindStudentDto } from './dto/findId-student.dto';
import { ResponseDto } from './dto/response-entity.dto';

@ApiTags('students')
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  async findAll(@Query() request:FindStudentDto):Promise<ResponseDto[]>{
    const user = this.studentsService.findAll(request.id,request.page,request.pagesize);
    let data = (await user).map((x)=>({id:+(x.id),name:x.name,college:x.college.name}))

    return data
  }
}


