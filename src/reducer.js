import { combineReducers } from "redux";
import { reducer as formReducer} from "redux-form";
import { dataReducer } from "./models/dataReducer";
import { signReducer } from "./models/signReducer";

const rootReducer = combineReducers({
    form:formReducer,
    data:dataReducer,
    sign:signReducer
})
export default rootReducer
