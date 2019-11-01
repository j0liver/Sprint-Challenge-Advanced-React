import React from 'react'
import axios from 'axios'

import Players from './Players'

class PlayerData extends React.Component{
    state={
        playerData:[]
        
    }
    componentDidMount(){
        axios
            .get('http://localhost:5000/api/players')
            .then(res => {
                this.setState({
                    playerData: res.data
                })
                // console.log(this.state.playerData);
            })
            .catch(err => {
                console.log(err)
            })
        // this.setState({
        //     playerData: this.props.data
        // })
        // conso
    }
    render(){
        console.log('state',this.state.playerData)
        return (
            <div>
                {this.state.playerData.map(player => (
                    <>
                        {/* {console.log(player)} */}
                        <Players 
                            key={player.id} 
                            name={player.name}  
                            country={player.country}
                            searches={player.searches}
                        />
                        
                       
                    </>
                ))}
            </div>
        )
    }
}
 
export default PlayerData