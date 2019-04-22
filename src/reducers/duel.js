const defaultState = false;

export default (state = defaultState, action) => {
    switch(action.type){
        case 'ADD_DUEL': 
        console.log(action.duel)
            return action.duel;
        default:
            return state;
    }
}