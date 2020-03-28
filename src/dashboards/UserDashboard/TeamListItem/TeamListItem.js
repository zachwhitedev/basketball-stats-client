import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { Link, Redirect } from 'react-router-dom';
import { selectTeam } from '../userDashboardActions';

export default function TeamListItem(props){
    const { dispatch } = props;
    const[state, setState] = useState({

        redirect: false
    })
    
    const viewTeam = (id, name) => {
        dispatch(selectTeam({
            id: id,
            name: name
        }))
        setState({
            ...state,
            redirect: true
        })
    }

    if(state.redirect){
        return <Redirect to={`/team/${props.teamname}/${props.teamid}`} />
    }

    return(
        <div onClick={() => viewTeam(props.teamid, props.teamname)}>
            <h3>{props.teamname}</h3>
        </div>
    )
}