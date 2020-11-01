import Vue from 'vue'

//全局自动注册
let requireComponent = require.context('../components/index.module/components', true, /\.vue$/)
requireComponent.keys().forEach(elem => {
    //内置webpack方法，返回一个路径
    const componentConfig = requireComponent(elem)
    // console.log(requireComponent)
    const componentName = elem.replace(/\.\//, '').replace(/\.vue$/, '')
    Vue.component(componentName, componentConfig.default || componentConfig)
});
