import { NavLink, useNavigate } from "react-router-dom";


import React from 'react'

export default function banner() {
    return (
        <div className="banner">
            <h1 className="h2">Welcome to Narre boutique</h1>

            <div id="banner-btns">
                <button className="btn2">Rooms</button>

                <button className="btn3">Book now</button>
            </div>



        </div>
    )
}
