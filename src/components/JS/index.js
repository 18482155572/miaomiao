import Vue from 'vue'
import MessageBox from './MessageBox'

export var messageBox = (function() {
    var defaults = {
        title: '',
        content: '',
        change:'',
        cancel: '',
        ok: '',
        handleCancel: null,
        handleOk: null
    }

    var MyComponent = Vue.extend(MessageBox)

    return function(opts) { //配置参数
        for (var attr in opts) {
            defaults[attr] = opts[attr]
        }
        var vm = new MyComponent({
            el: document.createElement('div'), //el会被template覆盖掉
            data: {
                title: defaults.title,
                content: defaults.content,
                change:defaults.change,
                cancel: defaults.cancel,
                ok: defaults.ok
            },
            methods: {
                handleCancel() {
                    defaults.handleCancel && defaults.handleCancel.call(this) //获取到vm对象
                    document.body.removeChild(vm.$el)
                },
                handleOk() {
                    defaults.handleOk && defaults.handleOk.call(this)
                    document.body.removeChild(vm.$el)
                }
            }
        })
        document.body.appendChild(vm.$el)
    }
})()