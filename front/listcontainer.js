import React from "react"
import List from "./list"


class ListContainer extends React.Component {
        constructor (props) {
            super(props)
            this.state = {
                content: []
            }
        }
        componentWillReceiveProps(nextProps) {
            if (nextProps.cardDB.hasOwnProperty("0")){
                var suites = ["Wands","Cups","Pentacles","Swords"]
                var count = 0
                suites = suites.map((val,ind)=>{
                   let content = []
                   for (var i = count; i < count+14 ; i++) {
                       content.push(nextProps.cardDB[i]["name"])
                   } 
                   count+=14
                   return (
                       <List content={content} title={val} setCard={this.props.setCard} prefix={ind}/>
                   )
                   })
                this.setState({
                    content: suites
                })
                }
        }
    render() {
        return(
            <div >
                <List content={this.state.content} title={"main"} setCard={null} num ={null} prefix={null} />
            </div>
        )
    }
}

export default ListContainer