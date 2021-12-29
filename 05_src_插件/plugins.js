export default {
    install(Vue) { // 可以接收多个参数 install(Vue, x, y, z)
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            }
        });
        Vue.directive('fbind', {
            bind(element, binding) { element.value = binding.value },
            inserted(element) { element.focus() },
            update(element, binding) { element.value = binding.value },
        });
        Vue.prototype.hello = () => {
            alert("hello")
        };
    }
}