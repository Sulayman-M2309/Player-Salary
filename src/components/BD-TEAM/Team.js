import React, { useEffect, useState } from 'react';
import teamData from '../../data.json'
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import Players from '../Players/Players';
import './Team.css'


const Team = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        setData(teamData)
    }, [])

    // handleAddPlayer
    const [player, setPlayer] = useState([])
    const handleAddPlayer = (teammate) => {
        if (player.includes(teammate)) {
            console.log("hiii");
        } else {
            const newPlayer = [...player, teammate]
            setPlayer(newPlayer)
        }

    }
    return (
        <div>
            <Header></Header>
            <div className="cricket-container">
                <div className="player-container">
                    {
                        data.map(data => <Players data={data} handleAddPlayer={handleAddPlayer} key={data.jersey_number}></Players>)
                    }
                </div>
                <div className="players-cart">
                    <Cart player={player}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Team;