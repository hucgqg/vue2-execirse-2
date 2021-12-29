<template>
    <div>
        <Cotegory title="美食">
            <ul>
                <li v-for="(food, index) in foods" :key="index">{{ food }}</li>
            </ul>
            <img
                slot="conter"
                src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.daimg.com%2Fuploads%2Fallimg%2F120727%2F1-120HGA253.jpg&refer=http%3A%2F%2Fimg.daimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641632240&t=93e0701fac17e4a1c8e2baee182d21e9"
                alt=""
            />
        </Cotegory>
        <cotegory title="游戏">
            <ul slot="conter">
                <li v-for="(g, index) in games" :key="index">{{ g }}</li>
            </ul>
            <template slot="footer">
                <div>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
                <h4>wecom</h4>
            </template>
        </cotegory>
        <cotegory title="电影">
            <template slot="conter">
                <ul>
                    <li v-for="(v, index) in films" :key="index">{{ v }}</li>
                </ul>
                <video
                    controls
                    src="https://live-course.sibuqu.com/da1d073b10254a1abe8b562b92487a62/6df7010359b44e089b9445e7a2f6cdad-3f51c0bad0cc66e0eaf5d5a409a2c966-fd.mp4"
                ></video>
            </template>
        </cotegory>
    </div>
</template>

<script>
import Cotegory from "./components/Cotegory.vue";
export default {
    name: "App",
    components: { Cotegory },
    data() {
        return {
            foods: ["火锅", "米饭", "喝水"],
            games: ["游戏1", "游戏2", "游戏3"],
            films: ["电影1", "电影2", "电影3"],
        };
    },
};
</script>

<style>
</style>