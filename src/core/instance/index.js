import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

//初始化Vue实例的属性与函数
initMixin(Vue)
stateMixin(Vue)//混入$data属性，$props属性，$set函数，$delete函数，$watch函数
eventsMixin(Vue)//混入$on函数，$once函数，$off函数，$emit函数
lifecycleMixin(Vue)//混入$forceUpdate函数，$destroy函数
renderMixin(Vue)//混入$nextTick函数，

export default Vue
