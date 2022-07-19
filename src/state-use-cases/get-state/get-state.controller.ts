import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Controller, Get, HttpCode, HttpException, HttpStatus, Inject, Param } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { IStateService } from "libs/database/src/state/i.state.service";
import { GetStateResponse } from "./get-state-response";
import { State } from "libs/database/src/state/state.entity";

@ApiTags('states')
@Controller('states')
export class GetStateController{
    constructor(
        @Inject('IStateService') private readonly stateService:IStateService,
        @InjectMapper() private mapper:Mapper
    ) { }

    @Get(':id')
    @ApiResponse({
        status:HttpStatus.OK,
        description:'',
        type: GetStateResponse
    })
    @HttpCode(200)
    async execute(@Param('id') id:string):Promise<GetStateResponse>{
         const state = await this.stateService.findById(id);
         
         if(!state)
         throw new HttpException('State Not Found',HttpStatus.BAD_REQUEST);

         const response = this.mapper.map(state,GetStateResponse,State);

         return response
    }
}