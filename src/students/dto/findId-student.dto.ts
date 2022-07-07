import { ApiProperty } from "@nestjs/swagger";

export class FindStudentDto{
    @ApiProperty({required:false})
    id:string

    @ApiProperty({required:false})
    page:string

}