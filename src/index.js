import React from './react/react'
import reactDom from './react-dom/react-dom'
const elem = (
    <div className='App' style={{ color: 'red' }} onClick={() => { console.log(123) }}>
        <ul className='List'>
            <li className='Item'></li>
        </ul>
    </div>
)

reactDom.render(elem, document.getElementById('root'))
