<template>
    <div class="container">
        <div class="nav">
            <div class="time">{{ now }}</div>
            <div class="city" @click="state.show = true">切换城市</div>
        </div>
        <div class="city-info">
            <p class="city">{{ state.city }}</p>
            <p class="weather">{{ state.today.weather }}</p>
            <h2 class="temp">
                <em>{{ state.today.temperature }}</em>℃
            </h2>
            <div class="detail">
                <span>风力: {{ state.today.windPower }}级</span> |
                <span>风向: {{ state.today.windDirection }}风</span> |
                <span>空气湿度: {{ state.today.humidity }}%</span>
            </div>
        </div>

        <div class="future" v-if="state.future.length">
            <div class="group">
                明天:
                <span class="tm"> 白天：{{ state.future[1].dayTemp }}℃ {{ state.future[1].dayWeather }} {{
                    state.future[1].dayWindDir
                }} {{ state.future[1].dayWindPower
                    }}级</span>
                <span class="tm"> 夜晚：{{ state.future[1].nightTemp }}℃ {{ state.future[1].nightWeather }} {{
                    state.future[1].nightWindDir
                }} {{ state.future[1].nightWindPower
                    }}级</span>
            </div>
            <div class="group">
                明天:
                <span class="tm"> 白天：{{ state.future[2].dayTemp }}℃ {{ state.future[2].dayWeather }} {{
                    state.future[2].dayWindDir
                }} {{ state.future[2].dayWindPower
                    }}级</span>
                <span class="tm"> 夜晚：{{ state.future[2].nightTemp }}℃ {{ state.future[2].nightWeather }} {{
                    state.future[2].nightWindDir
                }} {{ state.future[2].nightWindPower
                    }}级</span>
            </div>
        </div>

        <div class="echarts-wrap" ref="echartsDom"></div>


        <van-action-sheet v-model:show="state.show" title="">
            <div class="content">
                <van-area @confirm="selectCity" @cancel="state.show = false" title="地区" :area-list="areaList"
                    :columns-num="2" />
            </div>
        </van-action-sheet>



    </div>
</template>

<script setup>
import { reactive, ref, onMounted, nextTick } from 'vue';
import { areaList } from '@vant/area-data';
import * as echarts from 'echarts';

let now = ref('00:00:00')
const echartsDom = ref(null)

const selectCity = ({ selectedOptions }) => {
    console.log(selectedOptions[1].text);
    state.city = selectedOptions[1].text
    getWeather(state.city)
    state.show = false
}

setInterval(() => {
    now.value = new Date().toLocaleTimeString()
}, 1000);

const state = reactive({
    city: '',
    today: {},
    show: false,
    future: []
})

AMap.plugin('AMap.CitySearch', function () {
    var citySearch = new AMap.CitySearch()
    citySearch.getLocalCity(function (status, result) {
        if (status === 'complete' && result.info === 'OK') {
            // 查询成功，result即为当前所在城市信息
            // console.log(result);
            state.city = result.city
            getWeather(result.city)
        }
    })
})


const getWeather = (city) => {
    //加载天气查询插件
    AMap.plugin("AMap.Weather", function () {
        //创建天气查询实例
        var weather = new AMap.Weather();
        //执行实时天气信息查询
        weather.getLive(city, function (err, data) {
            state.today = data
            // console.log(data);
        });
        //执行未来天气信息查询
        weather.getForecast(city, function (err, data) {
            state.future = data.forecasts

            nextTick(() => {  //保证内部的逻辑在页面渲染后执行
                initEcharts(data.forecasts.map(item => item.dayTemp))
            })
        });
    });
}

const initEcharts = (arr) => {
    if(myChart){
        myChart.dispose()
    }

    var myChart = echarts.init(echartsDom.value);
    myChart.setOption({
        tooltip: {},
        xAxis: {
            data: ['今天', '明天', '后天', '大后天']
        },
        yAxis: {
            splitNumber: 2 ,
            min:30
        },
        series: [
            {
                name: '温度',
                type: 'line',
                data: arr
            }
        ]
    });
}
</script>

<style lang="css" scoped>
.content {
    padding: 16px 16px 160px;
}

.container {
    min-height: 100vh;
    background-image: linear-gradient(to bottom, rgb(221, 167, 176), #344799),
        url('https://picsum.photos/1920/1080/?random');
    background-blend-mode: overlay;
    /* 确保两者同时显示 */
    background-size: cover;
    /* 使图片覆盖整个容器 */
    background-repeat: no-repeat;
    /* 防止图片重复 */
    opacity: 0.6;
    color: aliceblue;
}

.nav {
    display: flex;
    justify-content: space-between;
    padding: 20px;
}

.city-info {
    text-align: center;
}

p {
    margin-top: 12px;
}

.temp {
    font-size: 30px;
    margin: 10px 0;
}

.temp em {
    font-size: 34px;
}

.future {
    margin-top: 30px;
}

.group {
    height: 44px;
    line-height: 44px;
    background-color: rgba(255, 255, 255, 0.15);
    font-size: 13px;
    padding: 0 10px;
    margin: 10px;
    border-radius: 5px;
}

.echarts-wrap {
    width: 100%;
    height: 50vh;
    margin: 20px;
}
</style>