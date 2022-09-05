import { Component } from "react";
import icon from "./icon.png"
export class Grocery extends Component{
    state = {
userInput :"",
groceryList: []
    }

    
    onChangeEvent(e){
       this.setState({userInput: e})
    }
    adItem(input){
        if(input === ""){
            alert("Pease,enter an item")
        }
        else{
        let listArray = this.state.groceryList;
        listArray.push(input);
        this.setState({groceryList: listArray, userInput:""})
    }
}
delete(){
    let listArray = this.state.groceryList;
    listArray = [];
    this.setState({groceryList:listArray})
}
    cross(event){
        const li = event.target;
        li.classList.toggle("cross")

    }
    submitEnter(e){
        e.preventDefault();
    }

    render(){
        return (
            <div>
                <form onSubmit={this.submitEnter}>
            <div className="container">
            <input 
            placeholder="What to you want to bue today?" 
            type ="text"
            onChange = {(e) => {this.onChangeEvent(e.target.value)}}
            value={this.state.userInput}/>
            </div>
            <div className="container">
                <button onClick={() => this.adItem(this.state.userInput)} className="btn-add">ADD</button>
            </div>
            <ul>
                {this.state.groceryList.map((item, index) =>(
                <li onClick={this.cross} key= {index}>
                   
                    <img src = {icon} width="50px" alt = "icon"/>
                    {item}</li>
                ))

                
            }
            </ul>
            <div className="container">
            <button onClick={() => this.delete()} className = "btn-delete">DELETE</button>
            </div>
            </form>
            </div>
        )
    }
}