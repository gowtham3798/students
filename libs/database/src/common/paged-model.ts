import { ApiProperty } from '@nestjs/swagger';

export class PagedModel<T> {
  @ApiProperty()
  readonly pageNumber: number;

  @ApiProperty()
  readonly pageSize: number;

  @ApiProperty()
  items:T[]

  constructor({
    pageNumber,
    pageSize,
    items
  }:any){
    this.pageNumber = pageNumber;
    this.pageSize = pageSize;
    this.items = items;
  }
}