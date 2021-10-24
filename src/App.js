import React, {Component} from 'react';
import './App.css'


class App extends Component {
  constructor(props) {
	  super(props);
  	this.state = {
	  userInput : "",
	  list:[]
	  }
  }

  updateInput(value){
	  this.setState({
	  userInput: value,
	  });
  }

  addItem(){
	  if(this.state.userInput !== '' ){
	    const userInput = {
		    id : Math.random(),
		    value : this.state.userInput
	    };

	    const list = [...this.state.list];
	    list.push(userInput);

	    this.setState({
		    list,
		    userInput:""
	    });
	  }
  }

  deleteItem(key){
	  const list = [...this.state.list];
	  const updateList = list.filter(item => item.id !== key);
	  this.setState({
	  list:updateList,
	});
}

  render(){
    return(
    <div className="container">

      <div className="heading" > TODO LIST </div>

      <div className="input-btn-container">
        <input
          placeholder="add new item "
          value = {this.state.userInput}
          onChange = {item => this.updateInput(item.target.value)}
        />
        <button className="btn" onClick = {()=>this.addItem()} >
          +
        </button>
      </div>

      <div className="list-items-container">
        {this.state.list.map(item => {
          return(
            <div className="del-item" onClick = { () => this.deleteItem(item.id) }>
              {item.value}
            </div>
          )
        })}
      </div>
    </div>
    );
  }
}

export default App;
