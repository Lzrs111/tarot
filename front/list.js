import React, { Component } from 'react'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            extended: false
        }
    this.extendSwitch = this.extendSwitch.bind(this)
    }
    extendSwitch() {
        console.log("CLICC!!")
        let a = this.state.extended
        this.setState({
            extended: !a
        },()=>{
            console.log(this.state.extended)
            })

    }
    render () {
        return (
            <div >
                <h1 onClick={()=>{
                    this.extendSwitch()
                    }} style={{color: "white"}}>
                    {this.props.title}
                </h1 >
                <ul >
                    {this.state.extended ? 
                        this.props.content.map((val,ind)=>{
                            return (
                                <li style={{color:"white"}} onClick={()=>{
                                    if (typeof(this.props.setCard)=="function") {
                                        this.props.setCard(this.props.suite,ind)
                                    }
                                }}>
                                    {val}
                                </li>
                            ) 
                            })
                    : null}
                </ul>
            </ div >
        )
    }
}

export default List