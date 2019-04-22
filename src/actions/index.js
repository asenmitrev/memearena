import axios from 'axios';
import CONSTANTS from '../const';
import { push } from 'connected-react-router'

export const toggleSideMenu = () => {
    return {
        type: 'TOGGLE_SIDE_MENU',
    }
}

export const closeSideMenu = () => {
    return {
        type: 'CLOSE_SIDE_MENU',
    }
}

export const addMemesToFrontPage = memes => {
    return {
        type: 'ADD_HOME_MEMES',
        memes
    }
}

export const addMeme = meme => {
    return {
        type: 'ADD_MEME',
        meme
    }
}

export const addDuel = duel => {
    return {
        type: 'ADD_DUEL',
        duel
    }
}

export const startLoading = () => {
    return {
        type: "START_LOADING"
    }
}

export const finishLoading = () => {
    return {
        type: "FINISH_LOADING"
    }
}

export const loadComments = (comments) => {
    return {
        type: 'LOAD_COMMENTS',
        comments
    }
}

export const moreComments = (comments) => {
    return {
        type: 'MORE_COMMENTS',
        comments
    }
}

export const addComment = (comment) => {
    return {
        type: 'ADD_COMMENT',
        comment
    }
}

export const totalComments = (totalComments) => {
    return {
        type: 'TOTAL_COMMENTS',
        totalComments
    }
}

export const getMemes = () => dispatch => {
    axios.get(`${CONSTANTS.apiUrl}/memes`)
        .then(res => {
            const memes = res.data;
            dispatch(addMemesToFrontPage(memes));
        });
}

export const getMeme = (memeId) => dispatch => {
    dispatch(startLoading());
    axios.get(`${CONSTANTS.apiUrl}/memes/${memeId}`)
        .then(res => {
            const meme = res.data;
            dispatch(addMeme(meme));
            dispatch(finishLoading())
        })
        .catch(err => {
            dispatch(finishLoading())
        });
}

export const getDuel = () => dispatch => {
    dispatch(startLoading());
    axios.get(`${CONSTANTS.apiUrl}/duel`)
        .then(res => {
            const duel = res.data;
            dispatch(addDuel(duel));
            dispatch(finishLoading())
        })
        .catch(err => {
            dispatch(finishLoading())
        });
}

export const vote = (duelId, memeWinner) => dispatch => {
    dispatch(startLoading());
    axios.post(`${CONSTANTS.apiUrl}/duel`, { duelId, memeWinner })
        .then(res => {
            axios.get(`${CONSTANTS.apiUrl}/duel`)
                .then(res => {
                    const duel = res.data;
                    dispatch(addDuel(duel));
                    dispatch(finishLoading())
                })
                .catch(err => {
                    dispatch(finishLoading())
                });
        })
        .catch(err => {
            dispatch(finishLoading())
        });
}

export const uploadImage = (link) => dispatch => {
    axios.post(`${CONSTANTS.apiUrl}/memes`, { link })
        .then(res => {
            dispatch(push(`/memes/${res.data._id}`));
        })
}

export const getComments = (memeId) => dispatch => {
    axios.get(`${CONSTANTS.apiUrl}/comments/${memeId}`)
        .then(res => {
            const comments = res.data.comments;
            dispatch(totalComments(res.data.count));
            dispatch(loadComments(comments))
        });
}

export const getMoreComments = (memeId, offset) => dispatch => {
    axios.get(`${CONSTANTS.apiUrl}/comments/${memeId}/${offset}`)
        .then(res => {
            const comments = res.data.comments;
            dispatch(totalComments(res.data.count));
            dispatch(moreComments(comments))
        });
}

export const comment = (comment, memeId) => dispatch => {
    axios.post(`${CONSTANTS.apiUrl}/comment/${memeId}`, { content: comment })
        .then(res => {
            const comment = res.data.comment;
            dispatch(addComment(comment));
        })
}