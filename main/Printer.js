import React from 'react';

export default class Printer extends React.Component{
    constructor(props){
        super(props)
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.input === 'someValue'){
            
        }
        console.log('componentWillReceiveProps Printer');
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate Printer');
        return true
    }
    componentWillUpdate(){
        console.log('componentWillUpdate Printer');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate Printer');
    }
    render(){
        return(
            <div>
                Here is what you entered: <br/>
                {this.props.input}
            </div>
        )
    }
}