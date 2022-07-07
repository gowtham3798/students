import { Module } from '@nestjs/common';
import { Student } from './entities/student.entity';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { College } from './entities/college.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Student,College])],
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule {}


