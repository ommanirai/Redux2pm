import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Games = () => {
    const [game, setGame] = useState('')
    const [player, setPlayer] = useState('')

    const store = useSelector(store => store)
    // const game_name = store.gameName;
    // const player_name = store.playerName;

    const game_name = useSelector(store => store.game.gameName) 

    const player_name = useSelector(store => store.game.playerName)

    const dispatch = useDispatch()

    const updateGame = () =>{
        dispatch({type: "UPDATE_GAME", payload: game})
    }

    const updatePlayer = () =>{
        dispatch({type: "UPDATE_PLAYER", payload: player})
    }

    return (
        <>
            Game Name: {game_name}
            <br/>
            Player Name: {player_name}
            <br/>
            <label htmlFor='gamename'>Game</label>
            <input type='text' id='gamename' onChange={e => setGame(e.target.value)}/>
            <br/>
            <label htmlFor='playername'>PlayerName</label>
            <input type='text' id='playername' onChange={e => setPlayer(e.target.value)} />
            <br/>
            <button onClick={updateGame}>Update Game</button>
            <button onClick={updatePlayer}>Update Player</button>
        </>
    )
}

export default Games