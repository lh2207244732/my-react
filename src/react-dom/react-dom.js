/****
 * vdom 虚拟DOM
 * container 挂载的容器
 * 
 * render作用 把虚拟Dom转化为真实DOM，并挂载在容器上
 */
//把虚拟Dom转化为真实DOM
function createDom(vdom) {
    //如果没有传，则直接返会
    if (vdom == undefined) return
    //如果是数字转化为字符串
    if (typeof vdom == 'number') {
        vdom = String(vdom)
    }
    //如果传的是字符串,则返回一个文本节点
    if (typeof vdom == 'string') {
        return document.createTextNode(vdom)
    }
    //如果是虚拟DOM则构建DOM节点，并返回
    else if (typeof vdom.tag === 'string') {
        //创建DOM
        const dom = document.createElement(vdom.tag)
        //设置DOM的属性
        setProperty(dom, vdom.props)
        //处理子节点
        if (vdom.children) {
            vdom.children.forEach(child => render(child, dom));
        }
        dom.innerHTML = '222'
        return dom
    }
}
//设置DOM属性
function setProperty(dom, props) {
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
const reactDom = {
    render
}
function render(vdom, container) {
    const dom = createDom(vdom)
    container.appendChild(dom)
}
export default reactDom