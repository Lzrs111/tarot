import React, { Component } from 'react'
import ListContainer from "./listcontainer"


class Sidebar extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div className="sidebar">
                <div className='buttonWrapper' >
                    <button className='sidebarButton' onClick={()=>{
                        this.props.set(1)
                        }} >
                        Single card reading
                    </button>
                    <button className='sidebarButton' onClick={()=>{
                        this.props.set(3)
                        }} >
                        Past/present/future reading
                    </button>
                    <button className='sidebarButton' onClick={()=>{
                        this.props.set(10)
                        }} >
                        Celtic cross reading
                    </button>
                </div>
                <div className="cardSelector" >
                        <ListContainer cardDB={this.props.cardDB} setCard={this.props.setCard} />
                </div>
            </div>
        )
    }
}

export default Sidebar 