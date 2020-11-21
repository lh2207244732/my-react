import React, { Component } from './react/react'
import reactDom from './react-dom/react-dom'
// import { Component } from './react/react'
/*
const elem = (
    <div className='App' style={{ color: 'red' }} onClick={() => { console.log(123) }}>
        <ul className='List'>
            <li className='Item'></li>
        </ul>
    </div>
)

function App(props){
    return(
        <div className='App' style={{ color: 'red' }} onClick={() => { console.log(123) }}>
            <ul className='List'>
                <li className='Item'></li>
            </ul>
        </div>
    )
}
*/
class App extends Component{
    constructor(props){
        super(props)
        this.state={
            num:0
        }
    }
    handleAdd(){
        this.setstate({
            num:this.state.num+1
        })
    }
    render(){
        return (
            <div className='App' style={{ color: 'red' }}>
                <ul className='List'>
                    <li className='Item' onClick={this.handleAdd.bind(this)}>
                        {this.state.num}
                    </li>
                 </ul>
            </div>
        )
    }
}
reactDom.render(<App title="hello" />, document.getElementById('root'))
