import { createStore } from "redux";
import Counter from "./reducers/counter";





const store= createStore(Counter)

export default store;