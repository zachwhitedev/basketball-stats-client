import React, { useState } from 'react';

export default function EditPlayersModal(){
    const[state, setState] = useState({
        hidden: true
    })

    return(
        <div>
            <div id='edit-players-modal-shadow'></div>
            <p>modal</p>
        </div>
    )
}