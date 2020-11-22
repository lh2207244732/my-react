/**
 * 把需要更新的state对象和需要更新的组件对象放入到队列中
 * @param {需要更新的state对象} updateState 
 * @param {需要更新的组件对象} comp 
 */
const stateQueue = [] //保存组件和需要更新的state的对象的队列
const compQueue = [] //去除重复保存需要更新的组件实例
export function queue(updateState, comp) {
    if (stateQueue.length == 0) {
        setTimeout(flush, 0)
    }

    stateQueue.push({
        updateState,
        comp
    })

    let hasComp = compQueue.some(item => item == comp)
    if (!hasComp) {
        compQueue.push(comp)
    }
}
function flush() {
    let item, comp
    //统一合并需要更新的state
    while (item = stateQueue.shift()) {
        const { updateState, comp } = item
        Object.assign(comp.state, updateState)
    }
    //统一更新
    while (comp = compQueue.shift()) {
        comp.update()
    }
}
