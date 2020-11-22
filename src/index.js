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
console.log(elem)

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
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0,
            score: 100
        }
    }
    componentDidMount() {
        console.log('componentDidMount...')
    }
    componentDidUpdate() {
        console.log('update...')
    }
    handleAdd() {
        this.setstate({
            num: this.state.num + 1
        })
        this.setstate({
            score: this.state.score + 1
        })
    }
    render() {
        return (
            <div className='App' style={{ color: 'red' }}>
                <p>
                    {this.state.num}--{this.state.score}
                </p>
                <button onClick={this.handleAdd.bind(this)}>点击</button>
            </div>
        )
    }
}
reactDom.render(<App title="hello" />, document.getElementById('root'))
