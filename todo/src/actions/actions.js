export const SET_ITEM = "SET_ITEM";
export const SET_COMPLETED = "SET_COMPLETED";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const setItem = (item) => {
    return({type:SET_ITEM, payload:{item:item, id:Date.now(), completed:false}});
}

export const setCompleted = (id) => {
    return({type:SET_COMPLETED, payload:id});
}

export const removeItem = () => {
    return({type:REMOVE_ITEM});
}

