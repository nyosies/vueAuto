//全局路由自动注册

let _arrKey = []
let requireComponent = require.context('../views', true, /\.vue$/)

requireComponent.keys().forEach(elem => {
    //内置webpack方法，返回一个路径
    const componentConfig = requireComponent(elem)
    console.log(componentConfig?.default)
    const componentPath = elem.replace(/\./, '').replace(/\.vue$/, '')
    let obj ={}
    obj.path=componentPath
    obj.component = componentConfig?.default
    // obj.component = () => import(componentConfig.default||componentConfig)
     _arrKey.push(obj)
});

export default _arrKey