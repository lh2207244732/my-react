/****
 * vdom 虚拟DOM
 * container 挂载的容器
 * 
 * render作用 把虚拟Dom转化为真实DOM，并挂载在容器上
 */

import { Component } from "../react/react"

function createDom(vdom) {
    //如果没有传，则直接返回
    if (vdom == undefined) return

    //如果是数字转化为字符串
    if (typeof vdom == 'number') {
        vdom = String(vdom)
    }

    //如果传的是字符串,则返回一个文本节点
    if (typeof vdom == 'string') {
        return document.createTextNode(vdom)
    }

    //如果是虚拟DOM  则构建DOM节点，并返回
    else if (typeof vdom.tag === 'string') {
        //创建DOM节点
        const dom = document.createElement(vdom.tag)
        //设置DOM的属性
        setProperty(dom, vdom.props)
        //处理子节点
        if (vdom.children) {
            vdom.children.forEach(child => render(child, dom));
        }
        return dom
    }

    //如果参数是一个组件
    if(typeof vdom.tag =='function'){
       //生成组件的实例
       const instance=createComponentIstance(vdom.tag,vdom.props)
       //生成组件实例的DOM节点
       createComponentNode(instance)
       //返回DOM节点
       return instance.dom
    }
}

export function setProperty(dom, props) {
    for (var key in props) {
        if (key == 'style' && typeof props[key] == 'object') {
            let attrs = ''
            for (let attr in props[key]) {
                attrs += `${attr}:${props[key][attr]}`
            }
            props[key] = attrs
        }
        if (props[key]) {
            if (key.startsWith('on')) {
                dom[key.toLowerCase()] = props[key]
            } else {
                dom[key] = props[key]
            }
        } else {
            dom.removeAttribute(key)
        }

    }
}
function createComponentIstance(comp,props){
    let instance
     //如果是类组件,直接生成实例
     if(comp.prototype.render){
        instance=new comp(props)
     }
      // 如果是函数组件
     else{
        //  先生成一个Component实例
        instance=new Component(props)
        //实例的constructor指向comp
        instance.constructor=comp
        //给实例添加一个render方法
        instance.render=function(){
            return comp()
        }

     }

   return instance
}
function createComponentNode(instance){

    // 获取虚拟DOM,并挂在组件实例上
    instance.vdom=instance.render()
        //如果组件实例上还没有挂载虚拟DOM，说明是创建阶段
    if(!instance.vdom){
        //添加生命周期函数,只在创建阶段执行
        console.log('component...')
        typeof instance.componentDidMount=='function'&&instance.componentDidMount()
    }
    //转换为真实DOM
    instance.dom=createDom(instance.vdom)
}

function render(vdom, container) {

    //把虚拟vdom转化为真实DOM
    const dom = createDom(vdom)

    //挂载在容器上
    container.appendChild(dom)

}

const reactDom = {
    render
}

export default reactDom