import { InjectMapper } from "@automapper/nestjs";
import { Body, Controller, HttpCode, HttpStatus, Inject, Post } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { Mapper } from "@automapper/types";
import { IStateService } from "libs/database/src/state/i.state.service";
import { CreateStateResponse } from "./create-state-response";
import { request } from "http";
import { CreateStateRequest } from "./create-state-request";
import { State } from "libs/database/src/state/state.entity";

@ApiTags('states')
@Controller('states')
export class CreateStateController{
    constructor(
        @Inject('IStateService') private readonly stateService:IStateService,
        @InjectMapper() private mapper:Mapper 
    ){ }

    @Post()
    @ApiResponse({
        status: HttpStatus.OK,
        description: '',
        type: CreateStateResponse,
      })
      @HttpCode(201)
      async execute(@Body() request:CreateStateRequest):Promise<CreateStateResponse>{
        const state = this.mapper.map(request,State,CreateStateRequest)
        const result = await this.stateService.insert(state)
        return result
}
}