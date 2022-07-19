import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Injectable } from "@nestjs/common";
import { Mapper } from "@automapper/types";
import { State } from "libs/database/src/state/state.entity";
import { GetStateBase } from "../get-state-base";
import { GetStateResponse } from "../get-state/get-state-response";
import { StateBase } from "../state-base";
import { StatePagedModel } from "libs/database/src/state/state-model";
import { GetStateListtResponse } from "./get-state-list-response";


@Injectable()
export class GetStateListMapper extends AutomapperProfile{
    constructor(@InjectMapper() mapper:Mapper){
        super(mapper)
     }

     mapProfile() {
         return(mapper:Mapper) => {
            mapper.createMap(State,GetStateBase);

            mapper.createMap(StatePagedModel,GetStateListtResponse)
         }
     }
}