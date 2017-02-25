import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){

super()
this.state = {

  counter : 0
}


this.add = this.add.bind(this)
this.dec = this.dec.bind(this)
this.addition = this.addition.bind(this)
  }


add(){
this.setState({
counter : this.state.counter +1

})

console.log(this.state.counter)

}


dec(){
this.setState({
counter : this.state.counter -1

})

}


addition(e){

e.preventDefault()
let input = parseInt(this.refs.demo.value)
console.log(typeof input)
this.setState({
counter : this.state.counter + input 

})
}



  render() {
    console.log(this.props.data)
    return (
      <div className="App">

      <form onSubmit={this.addition}>
       <input type = "text" ref = "demo"/>
      <button>ADD</button>
      </form>
     
      <h2>Counter : {this.state.counter}</h2>
       <button onClick = {this.add}> ADD</button>
       <button onClick = {this.dec}> DEC</button>
        </div>
    );
  }
}

export default App;
