import { Optional } from "@nestjs/common";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class FindStudentDto{
    @ApiProperty({required:false})
    id:string
}