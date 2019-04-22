const defaultState = {
    sideMenuOpen: false,
    isLoading: false
};

export default (state = defaultState, action) => {
    switch(action.type){
        case "START_LOADING":
            return { ...state, isLoading: true}
        case "FINISH_LOADING":
            return { ...state, isLoading: false}
        case 'TOGGLE_SIDE_MENU': 
            return { ...state, sideMenuOpen: !state.sideMenuOpen };
        case 'CLOSE_SIDE_MENU':
            return { ...state, sideMenuOpen: false };
        default:
            return state;
    }
}