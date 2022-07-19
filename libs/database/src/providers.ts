import { StateService } from "./state/state.service";


export default [
    {
        provide:'IStateService',
        useClass:StateService
    }
]