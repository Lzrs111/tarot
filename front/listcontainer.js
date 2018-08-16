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
            if (nextProps.cardDB.hasOwnProperty("Wands")){
                var suites = Object.keys(nextProps.cardDB) 
                suites = suites.map((val,ind)=>{
                    let content = []
                    Object.keys(nextProps.cardDB[suites[ind]]).forEach(element=> {
                        content.push(nextProps.cardDB[suites[ind]][element]["name"])
                    })
                    return (
                        <List content={content} setCard={this.props.setCard} title={suites[ind]} suite={suites[ind]} />
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