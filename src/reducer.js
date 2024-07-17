import { combineReducers } from "redux";
import { reducer as formReducer} from "redux-form";
import { dataReducer } from "./models/dataReducer";

const rootReducer = combineReducers({
    form:formReducer,
    data:dataReducer
})
export default rootReducer
