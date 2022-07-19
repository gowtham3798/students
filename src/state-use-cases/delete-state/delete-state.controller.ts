import { Controller, Delete, HttpCode, HttpException, HttpStatus, Inject, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IStateService } from "libs/database/src/state/i.state.service";

@ApiTags('states')
@Controller('states')

export class DeleteStateController{
    constructor(
        @Inject('IStateService') private readonly stateService:IStateService
    ){ }

    @Delete(':id')
    @HttpCode(204)
    async execute(@Param('id') id:string){
        const isExists = await this.stateService.isExistsById(id)
        if (!isExists)
        throw new HttpException('State Not Found', HttpStatus.BAD_REQUEST);

        await this.stateService.deleteById(id)
    }
}