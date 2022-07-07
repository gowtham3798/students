import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsModule } from './students/students.module';
import { Student } from './students/entities/student.entity';
import { College } from './students/entities/college.entity';
import { getEnvPath } from './common/helper/env.helper';
import { ConfigModule } from '@nestjs/config';

const envFilePath: string = getEnvPath(`${__dirname}/.env`);


@Module({
  imports: [ ConfigModule.forRoot({ envFilePath, isGlobal: true }),TypeOrmModule.forRoot(
    {  type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: 3306,
    database: process.env.DATABASE_DB,
    username: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    entities: [Student,College],
    synchronize: true,
  }
  ), StudentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
