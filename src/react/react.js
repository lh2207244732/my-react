const React = {
    createElement
}
function createElement(tag, props, ...children) {
    return {
        tag,
        props,
        children
    }
}
export default React