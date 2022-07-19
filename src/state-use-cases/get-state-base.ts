import { AutomapperModule } from "@automapper/nestjs";
import { StateBase } from "./state-base";
import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";

export class GetStateBase extends StateBase{
    @AutoMap()
    @ApiProperty()
    id:string;
    
}