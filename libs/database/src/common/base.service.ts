import { DeepPartial, DeleteResult, FindConditions, FindOneOptions,Repository, SelectQueryBuilder, UpdateResult} from 'typeorm';
import { IBaseService } from "./i.base.service";
import { PagedModel } from './paged-model';

export class BaseService<TRepository extends Repository<TEntity>,TEntity>
implements IBaseService<TEntity>{
    constructor(protected readonly repository: TRepository){}

    async findAll(options?: FindOneOptions<TEntity>): Promise<TEntity[]> {
        return await this.repository.find(options)
    }

    async findById(id: string | number, options?: FindOneOptions<TEntity>) {
        if(options){
            return await this.repository.findOne(id,options)
        }
        else{
            return await this.repository.findOne(id)
        }
    }

    async findOne(options?: FindOneOptions<TEntity>): Promise<TEntity> {
        return await this.repository.findOne(options)
    }

    async insert(record: DeepPartial<TEntity>): Promise<TEntity> {
        const data = this.repository.create(record);
        return await this.repository.save(data as DeepPartial<TEntity>)
    }

    async insertMany(records: DeepPartial<TEntity>[]): Promise<TEntity[]> {
        const data = this.repository.create(records)
        return await this.repository.save(data as DeepPartial<TEntity[]>)
    }

    async isExistsById(
        id: string | number,
        options?: FindOneOptions<TEntity>,
      ): Promise<boolean> {
        if (options) {
          const result = await this.repository.findOne(id, options);
          if (!result) return false;
          return true;
        } else {
          const result = await this.repository.findOne(id);
          if (!result) return false;
          return true;
        }
      }

      async updateById(
        id: number | string,
        record: TEntity,
      ): Promise<UpdateResult> {
        return await this.repository.update(id, record as TEntity);
      }
    
      async updateMany(
        criteria: FindConditions<TEntity>,
        record: TEntity,
      ): Promise<UpdateResult> {
        return await this.repository.update(criteria, record as TEntity);
      }

      async deleteById(id: number | string): Promise<DeleteResult> {
        return await this.repository.delete(id);
      }
    
      async deleteMany(criteria: FindConditions<TEntity>): Promise<DeleteResult> {
        return await this.repository.delete(criteria);
      }
    
      createQueryBuilder(alias = ''): SelectQueryBuilder<TEntity> {
        return this.repository.createQueryBuilder(alias);
      }

      async paged(
        queryBuilder: SelectQueryBuilder<TEntity>,
        pageNumber: number,
        pageSize: number,
      ):Promise<PagedModel<TEntity>>{
        const [items,itemsCount] = await queryBuilder
        .skip((pageNumber-1)*pageSize)
        .take(pageSize)
        .getManyAndCount()

        const pagedResponse = new PagedModel<TEntity>({
          pageNumber,
          pageSize,
          itemsCount,
          items,
        });

        return pagedResponse
      }
}