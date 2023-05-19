const initialData = {
    gameName: 'Football',
    playerName: 'Messi'
}

const gameReducer = (state = initialData, action) =>{
    switch(action.type){
        case "UPDATE_GAME":
            return {...state, gameName: action.payload}

        case "UPDATE_PLAYER":
            return { ...state, playerName: action.payload}

        default:
            return state;
    }
}

export default gameReducer