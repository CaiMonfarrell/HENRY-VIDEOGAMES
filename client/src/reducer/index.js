import React from 'react';
const initialState = {
    videogames: []
}

function rootReducer(state=initialState, action){
    switch (action.type){
        case 'GET_VIDEOGAMES':
            return{
                ...state,
                videogames: action.payload
            }
    }
}

export default rootReducer; 