import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Body, Controller, HttpCode, HttpException, HttpStatus, Inject, Param, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { request } from "http";
import { IStateService } from "libs/database/src/state/i.state.service";
import { State } from "libs/database/src/state/state.entity";
import { MappedColumnTypes } from "typeorm/driver/types/MappedColumnTypes";
import { UpdateStateRequest } from "./update-state-request";

@ApiTags('states')
@Controller('states')
export class UpdateStateController{
    constructor(
        @Inject('IStateService') private readonly stateService:IStateService,
        @InjectMapper() private mapper:Mapper
    ){ }

    @Put(':id')
    @HttpCode(204)
    async execute(@Param('id') id:string,@Body() request:UpdateStateRequest):Promise<void>{
        const isExists = await this.stateService.isExistsById(id);
        if(!isExists)
            throw new HttpException('State Not Found',HttpStatus.BAD_REQUEST);

      const state = this.mapper.map(request,State,UpdateStateRequest)
      state.setId(id)
      await this.stateService.updateById(id,state)
       
    }
}