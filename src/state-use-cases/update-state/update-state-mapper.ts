import { ignore } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Injectable } from "@nestjs/common";
import { Mapper } from "@automapper/types";
import { State } from "libs/database/src/state/state.entity";
import { UpdateStateRequest } from "./update-state-request";

@Injectable()
export class UpdateStateMapper extends AutomapperProfile{
    constructor(@InjectMapper() mapper:Mapper){super(mapper)}

    mapProfile() {
        return(mapper:Mapper) => {
            mapper.createMap(UpdateStateRequest,State)
            .forMember(
                (destination) => destination.id,
                ignore()
            )
        }
    }
}