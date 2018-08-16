import React from 'react'
import Card from './card'

export default class Screen extends React.Component{
    constructor (props) {
        super(props)
    }
    render() {
        return(
            <div className='screenWrap' >
                <div className='screen' >
                    {Object.keys(this.props.cards).map((value,index)=>{
                        return <Card src={this.props.cards[index]["src"]} index={index} getSelectedCard={this.props.getSelectedCard} description={this.props.cards[index]["description"]}/>
                        })}
                </div>
                <div className="description" >
                        <p >
                            {this.props.selectedCard["description"]}
                        </ p >
                </div>
            </ div >
        )
    }
}