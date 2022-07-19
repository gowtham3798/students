import { ApiPropertyOptional } from "@nestjs/swagger";
import { PagingParams } from "libs/database/src/common/paging-params";

export class GetStateListRequest extends PagingParams{
    @ApiPropertyOptional()
    id: string;

    @ApiPropertyOptional()
    name: string;
}