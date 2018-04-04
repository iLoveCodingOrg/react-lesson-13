import React from 'react'
import ReactDOM from 'react-dom'
import Printer from './Printer';

class App extends React.Component{
    constructor(){
        super();

        this.state = {
            text: 'initial text'
        }
        console.log('constructor');
    }

    handleChange(e){
        this.setState({
            text: e.target.value
        })
    }
    shouldComponentUpdate(nextProp, nextState){
        console.log('shouldComponentUpdate');
        if(nextState.text === 'no'){
            return false
        }else{
            return true
        }
    }
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    componentWillMount(){
        console.log('componentWillMount');
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    render(){
        console.log('render');
        return (
            <div>
                <Printer input={this.state.text} />
                <br />
                <input type="text"
                    onChange={this.handleChange.bind(this)}
                    value={this.state.text} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)