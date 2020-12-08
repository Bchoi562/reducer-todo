import { SET_ITEM, SET_COMPLETED, SET_ID } from "../actions/actions";


export const initialState = [{
    item:"Learn about reducers",
    completed:false,
    id: Date.now()
}]

const reducer = (state,action) => {
    switch(action.type){
        case(SET_ITEM):
            return([...state, action.payload]);
        case(SET_COMPLETED):
            return state.map(todo => action.payload === todo.id? {...todo, complete:!todo.completed} : todo);
        case(SET_ID):
            return([...state, action.payload]);
        default:
            return(state);
    }
}

export default reducer;