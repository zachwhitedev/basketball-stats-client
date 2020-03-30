import React, { useState } from 'react';

export default function AddPlayersModal(){
    const[state, setState] = useState({
        hidden: true
    })

    return(
        <div>
            <div id='add-players-modal-shadow'></div>
            <p>modal</p>
        </div>
    )
}