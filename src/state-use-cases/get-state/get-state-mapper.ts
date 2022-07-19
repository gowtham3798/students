import { State } from "libs/database/src/state/state.entity";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { GetStateResponse } from "./get-state-response";

@Injectable()
export class GetStateMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper.createMap(State,GetStateResponse)
    };
  }
}
