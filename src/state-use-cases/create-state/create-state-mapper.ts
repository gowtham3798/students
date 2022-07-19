import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Inject, Injectable } from "@nestjs/common";
import { Mapper } from "@automapper/types";
import { CreateStateRequest } from "./create-state-request";
import { State } from "libs/database/src/state/state.entity";
import { ignore } from "@automapper/core";

@Injectable()
export class CreateStateMapper extends AutomapperProfile{
    constructor(@InjectMapper() mapper:Mapper){ super(mapper) }

    mapProfile() {
        return(mapper:Mapper)=>{
            mapper.createMap(CreateStateRequest,State,{})
            .forMember(
                (destination) => destination.id,
                ignore()
            )
        }
    }

}