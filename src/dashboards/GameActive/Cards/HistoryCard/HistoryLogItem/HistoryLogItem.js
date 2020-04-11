import React from 'react';

export default function HistoryLogItem(props){
    return(
    <p>{props.player + ' - ' + props.description}</p>
    )
}