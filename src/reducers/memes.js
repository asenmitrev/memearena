const defaultState = {
    home: [],
    comments: [],
    totalComments: 0,
    meme: false
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_HOME_MEMES':
            return { ...state, home: action.memes };
        case 'ADD_MEME':
        console.log(action.meme);
            return { ...state, meme: action.meme };
        case 'LOAD_COMMENTS':
            return { ...state, comments: action.comments };
        case 'MORE_COMMENTS':
            return { ...state, comments: state.comments.concat(action.comments) };
        case 'ADD_COMMENT':
            return { ...state, comments: state.comments.concat([action.comment]) };
        case 'TOTAL_COMMENTS':
            return { ...state, totalComments: action.totalComments };
        default:
            return state;
    }
}