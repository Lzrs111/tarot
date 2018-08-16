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
                                        var num
                                        switch (this.props.prefix) {
                                            case 0:
                                                num = ind+0
                                                break;
                                            case 1:
                                                num = ind+14
                                                break;
                                            case 2:
                                                num = ind+28
                                                break;
                                            case 3:
                                                num = ind+42
                                                break;
                                            default:
                                                break;
                                        }
                                        this.props.setCard(num)
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