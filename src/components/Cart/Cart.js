import React from 'react';
import './Cart.css'
const Cart = (props) => {
    console.log(props.player);
    const player = props.player
    let totalExpense = 0;
    for (let i = 0; i < player.length; i++) {
        const element = player[i];
        totalExpense = totalExpense + Number(element.salary)
    }
    return (
        <div >

            <div className="cart">
                <h4>totalExpense : {totalExpense}</h4>
            </div>
            <div className="cart">

                {/* <h5>name : {name}</h5>
                <h3>salary : {total} </h3> */}
                {player.map(player => <div>player Name : {player.player_name} salary : {player.salary} </div>)}
            </div><br />
        </div >
    );
};

export default Cart;