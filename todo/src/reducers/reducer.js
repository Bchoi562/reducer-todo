import { SET_ITEM, SET_COMPLETED,  REMOVE_ITEM } from "../actions/actions";


export const initialState = [{
    item:"Learn about reducers",
    completed:false,
    id: 1
},{
    item:"Lfdsafs",
    completed:false,
    id: 2
}
]

export const reducer = (state,action) => {
    switch(action.type){
        case(SET_ITEM):
            return([...state, action.payload]);

        case(SET_COMPLETED):
            return state.map(todo => {
                
                return action.payload === todo.id? {...todo, completed:!todo.completed} : todo});

        case(REMOVE_ITEM):
            return state.filter(item => !item.completed)
              

        default:
            return(state);
    }
}

