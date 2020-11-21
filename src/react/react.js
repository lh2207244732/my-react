import {diff} from '../react-dom/diff'
import {patch} from '../react-dom/patch'
import {queue} from './queue'
//虚拟的DOM类
export class Element{
    constructor(tag, props, children){
        this.tag=tag
        this.props=props
        this.children=children
    }
}

function createElement(tag, props, ...children) {
    return new Element(tag, props, children)
}
class Component{
    constructor(props){
        this.props=props,
        this.state={}
    }
    setstate(updateState){
        /*
        // 生成新的state
        Object.assign(this.state,updateState)
        //生成新的虚拟vdom
        const newvdom=this.render()
        //取出旧的vdom
        const oldvdom=this.vdom
        //通过diff算法找出新旧DOM的不同
        const patchs=diff(oldvdom,newvdom)
        //用不同之处更新dom节点
        patch(this.dom,patchs),
        this.vdom=newvdom
        //执行更新完成时的生命周期函数
        typeof this.componentDidUpdate=='function'&&this.componentDidUpdate(this.state,this.props)
        */
       queue(updateState,this)
    }
}
const React = {
    createElement,
    Component
}

export default React
export {Component} 