import { SET_ITEM, SET_COMPLETED,  REMOVE_ITEM } from "../actions/actions";


export const initialState = [{
    item:"Learn about reducers",
    completed:false,
    id: Date.now()
},{
    item:"Lfdsafs",
    completed:false,
    id: Date.now()
}
]

export const reducer = (state,action) => {
    switch(action.type){
        case(SET_ITEM):
            return([...state, action.payload]);

        case(SET_COMPLETED):
            return state.map(todo => {
                
                return action.payload === todo.id? {...todo, completed:!todo.completed} : todo.completed});

        case(REMOVE_ITEM):
            return state.filter(item => {
                return !item.completed})
                // ([...state, action.payload]);

        default:
            return(state);
    }
}

