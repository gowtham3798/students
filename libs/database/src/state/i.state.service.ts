import { IBaseService } from "../common/i.base.service";
import { StatePagedModel } from "./state-model";
import { State } from "./state.entity";


export interface IStateService extends IBaseService<State>{
    getStateList(
        pageNumber:number,
        pageSize:number
    ):Promise<StatePagedModel>
}