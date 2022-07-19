import { InjectMapper } from "@automapper/nestjs";
import { Controller, Get, HttpStatus, Inject, Query } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { IStateService } from "libs/database/src/state/i.state.service";
import { GetStateResponse } from "../get-state/get-state-response";
import { Mapper } from "@automapper/types";
import { StatePagedModel } from "libs/database/src/state/state-model";
import { GetStateListtResponse } from "./get-state-list-response";
import { GetStateListRequest } from "./get-state-list-request";


@ApiTags('states')
@Controller('states')
export class GetStateListController{
    constructor(
        @Inject('IStateService')
        private readonly stateService:IStateService,
        @InjectMapper() private mapper:Mapper
    ){ }

    @Get()
    @ApiResponse({
    status: HttpStatus.OK,
    description: '',
    type: GetStateListtResponse,
    })
    async execute(@Query() request:GetStateListRequest)
    : Promise<Partial<GetStateListtResponse>>
    {
      const result = await this.stateService.getStateList(
        request.pageNumber,
        request.pageSize,
      );
      
      const response = this.mapper.map(result,GetStateListtResponse,StatePagedModel)
      return response
    }
}