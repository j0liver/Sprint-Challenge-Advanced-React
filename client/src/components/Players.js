import React from 'react'

import { useLocalStorage } from '../hooks/useLocalStorage'

const Players = (props) => {
// 

return (
        
        <div key={props.key}>
            <h2>name: {props.name}</h2>
            <h3>country: {props.country}</h3>
            <h4>searches {props.searches}</h4>
        </div>
    )
}

export default Players