import React from 'react'

export default class Card extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            turned: false,
        };
        this.turn = this.turn.bind(this)
        this.handleHover = this.handleHover.bind(this)
    }
    componentWillReceiveProps (nextProps) {
        if (nextProps.description !=this.props.description){
            if(this.state.turned!=false) {
                this.setState({
                    turned:false
                },()=>{
                    this.card.style.transform ="rotateY(-360deg)"
                    this.props.getSelectedCard("none")
                })
            }
        }
    }
    turn() {
        let turn = this.state.turned
        if (!turn) {
            this.setState({
                turned: !turn
            })

        this.card.style.transform = "rotateY(-180deg)"
        this.props.getSelectedCard(this.props.index)
        }
    }
    handleHover() {
        let turn = this.state.turned
        if (!turn) {
            this.card.style.top = "-20px"
        }else {
            this.props.getSelectedCard(this.props.index)
        }
    }
    render() {
    return (
        <div className="cardContainer" >
            <div className="card" ref={(card)=>{
                this.card = card
                }} onMouseEnter={()=>{
                    this.handleHover()
                    }} onMouseLeave={()=>{
                        this.card.style.top = "0px"
                        }}>
                <div className='back' onClick={()=>{
                    this.turn()
                    }} ref={(back)=>{
                        this.back = back
                        }}>
                </ div >
                <div className="front" ref={(front)=>{
                    this.front = front
                    }}>
                    <img height="300px" width="200px" src={this.props.src}/>
                </ div >
            </ div >
        </ div >
    )
}
}