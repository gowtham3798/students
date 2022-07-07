import { Controller, Get, Query } from '@nestjs/common';
import { StudentsService } from './students.service';
import { ApiTags } from '@nestjs/swagger';
import { FindStudentDto } from './dto/findId-student.dto';



@ApiTags('students')
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  findAll(@Query('id') id:FindStudentDto) {
    console.log(id)
    return this.studentsService.findAll(id)
  }

}
