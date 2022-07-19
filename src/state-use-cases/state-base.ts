import { AutomapperModule } from "@automapper/nestjs";
import { classes, AutoMap } from '@automapper/classes';
import { ApiProperty } from "@nestjs/swagger";


export class StateBase{
    @AutoMap()
    @ApiProperty()
    id!:string

    @AutoMap()
    @ApiProperty()
    name!:string
}