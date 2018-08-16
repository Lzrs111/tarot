import React from "react"
import Sidebar from './sidebar'
import Screen from "./screen"
import './style.css';

export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            game: 0,
            cards:{},
            cardDB: {},
            selectedCard: {} 
        };
        this.setGame = this.setGame.bind(this)
        this.getCards = this.getCards.bind(this)
        this.getSelectedCard = this.getSelectedCard.bind(this)
        this.setCard = this.setCard.bind(this)
    }
    componentDidMount () {
        var req = new Request("cards",{method:"GET"})
        fetch(req).then(res=>{
            return res.json()
        }).then((data)=>{
            this.setState({
                cardDB: data
            })
            })
    }
    setGame(game) {
        this.setState({
            game:game
        },()=>{
            this.getCards()
            })
    }
    getCards() {
        let num = this.state.game
        let cards = {}
        let len = Object.keys(this.state.cardDB).length-1
        for (var i = 0; i < num; i++) {
            let cardNo = Math.floor(Math.random()*len)
            let random = this.state.cardDB[cardNo]
            cards = Object.assign(cards,{[i]:random})
        }
        this.setState({
            cards: cards
        },()=>{
            console.log(this.state.cards)
            })
    }   
    setCard(number) {
        let c = {}
        c = Object.assign(c,{0:this.state.cardDB[number]}) 
        this.setState({
            cards: c 
        },()=>{
            console.log(this.state.cards)
            })
    }
    getSelectedCard(index) {
        let card;
        if (typeof(index)=="number"){
            card = this.state.cards[index]
        } else {
            card = {} 
        }
        this.setState({
            selectedCard: card 
        })
    }
    render() {
        return(
           <div style={{width:"100%",height: "100%", display:"flex",justifyContent:"space-evenly"}}  >
                <Sidebar set={this.setGame} cardDB={this.state.cardDB} setCard={this.setCard}/>
                <Screen cards={this.state.cards} game={this.state.game} getSelectedCard={this.getSelectedCard} selectedCard={this.state.selectedCard}/>
           </div> 
        )
    }
}