import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, Max, Min } from 'class-validator';


export class PagingParams{
    @ApiPropertyOptional({
        minimum: 1,
        default: 1
      })
      @Type(() => Number)
      @IsInt()
      @Min(1)
      @IsOptional()
      readonly pageNumber: number = 1;
    
      @ApiPropertyOptional({
        minimum: 1,
        maximum: 200,
        default: 50
      })
      @Type(() => Number)
      @IsInt()
      @Max(200)
      @IsOptional()
      readonly pageSize: number = 200;
}