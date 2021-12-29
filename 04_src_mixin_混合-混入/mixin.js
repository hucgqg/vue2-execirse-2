export const mixin = {
    data() {
        return {
            x: 100,
            y: 200
        }
    },
    methods: {
        showName() {
            alert(this.name);
        },
    },
}