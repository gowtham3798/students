
import { AutoMap } from "@automapper/classes";
import { State } from "./state.entity";


export class StatePagedModel{
    @AutoMap({typeFn:()=>State})
    items:State[];
}