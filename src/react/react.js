
function createElement(tag, props, ...children) {
    return {
        tag,
        props,
        children
    }
}
class Component{
    constructor(props){
        this.props=props,
        this.state={}
    }
    setstate(updateState){
        // 生成新的state
        Object.assign(this.state,updateState)
        //生成新的虚拟DOM
        const newvDOM=this.render()
        //生成新的DOM
        const newDOM=createDom(newvDOM)

    }
}
const React = {
    createElement,
    Component
}

export default React
export {Component} 