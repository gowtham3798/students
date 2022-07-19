import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { GetStateBase } from "../get-state-base";


export class GetStateListtResponse {
    @ApiProperty({type: [GetStateBase]})
    @AutoMap({typeFn:()=>GetStateBase})
    items!: GetStateBase[];
}