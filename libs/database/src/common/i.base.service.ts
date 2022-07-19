import { DeepPartial, DeleteResult, FindConditions, FindOneOptions, SelectQueryBuilder, UpdateResult} from "typeorm";
import { PagedModel } from "./paged-model";

export interface IBaseService<T>{
    findById(id:number | string,options?:FindOneOptions<T>):Promise<T>;
    findOne(options?:FindOneOptions<T> | FindConditions<T>): Promise<T>;
    findAll(options?:FindOneOptions<T> | FindConditions<T>):Promise<T[]>;
    insert(record:DeepPartial<T>):Promise<T>;
    insertMany(records:DeepPartial<T>[]):Promise<T[]>;
    isExistsById(
        id: number | string,
        options?: FindOneOptions<T>
    ):Promise<boolean>;
    updateById(id:number | string,record:Partial<T>):Promise<UpdateResult>
    updateMany(
        criteria:FindConditions<T>,
        record:Partial<T>
    ):Promise<UpdateResult>
    deleteById(id:number|string):Promise<DeleteResult>
    createQueryBuilder(alias:string):SelectQueryBuilder<T>;
    paged(
        queryBuilder:SelectQueryBuilder<T>,
        pageNumber:number,
        pageSize:number
    ):Promise<PagedModel<T>>
}