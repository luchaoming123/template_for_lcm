
import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import $ from './jquery.min.js';
import GLOBAL from './template/GLOBAL_and_extend.js';


/********************引入js模块*************************/
import VueRouters from './router.js';
import index from './views/index.vue';
/********************引入HTML模块***********************/
import index_html from './template/index.html';
/********************引入CSS模块***********************/
import './my-theme/index.less';
/********************use插件***********************/
Vue.use(VueRouter);
Vue.use(iView);

// 路由配置
/*const router = new VueRouter({
    mode: 'history',
    routes: {
        path: '/attrs',
        meta: {
            title: ''
        },
        props: { name: 'attrs' },
        component: require('./views/index.vue')
    }
});*/

/*const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/attrs',
            component:  require('./views/index.vue'),
            props: {
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model1:{
                    hello:''
                },
                model1_return: function (obj) {
                    console.log(obj)
                }
            }
        }
    ]
});

new Vue({
    router
}).$mount('#app');*/
/*Vue.component('child-us',/!*{
    /!*template:'<div><div>hello world!!!{{name}} {{message}}</div><button v-on:click="click_fs">dddd</button></div>',*!/
    template:index_html,
    props: [],
    data:function () {
        return {
            cityList: [
                {
                    value: 'New York',
                    label: 'New York'
                },
                {
                    value: 'London',
                    label: 'London'
                },
                {
                    value: 'Sydney',
                    label: 'Sydney'
                },
                {
                    value: 'Ottawa',
                    label: 'Ottawa'
                },
                {
                    value: 'Paris',
                    label: 'Paris'
                },
                {
                    value: 'Canberra',
                    label: 'Canberra'
                }
            ],
            model1:''
        };
    },
    methods:{
        click_fs:function () {
            this.$emit('submit',this.name);
        },
        model1_return: function (obj) {
            console.log(obj);
            VueRouters.hello(obj);
        }
    }
}*!/
    index
);
new Vue({
    el:"#test_app",
    data:{
      'show':'个风格吧',
        /!*cityLists:[
            {
                value: 'New ssYork',
                label: 'New ssYork'
            },
            {
                value: 'London',
                label: 'London'
            },
            {
                value: 'Sydney',
                label: 'Sydney'
            },
            {
                value: 'Ottawa',
                label: 'Ottawa'
            },
            {
                value: 'Paris',
                label: 'Paris'
            },
            {
                value: 'Canberra',
                label: 'Canberra'
            }
        ]*!/
    },
    methods:{
        sub_us:function (data) {
            alert(data);
        },
        //下拉框数据
        select_data:function () {
            return [
                {
                    value: 'New ssYork1',
                    label: 'New ssYork'
                },
                {
                    value: 'London1',
                    label: 'London'
                },
                {
                    value: 'Sydney1',
                    label: 'Sydney'
                },
                {
                    value: 'Ottawa1',
                    label: 'Ottawa'
                },
                {
                    value: 'Paris1',
                    label: 'Paris'
                },
                {
                    value: 'Canberra1',
                    label: 'Canberra'
                }
            ]
        },
        test_alert:function () {
            console.log(this.select_data());
        }
    }
});*/


/*******************************************
*  1.用途: 全局变量
*  2.属性: show us
*  3.方法: 公共
//******************************************/
GLOBAL.namespace('A.hide');
let Pub=GLOBAL.A.hide;
(function () {
    Pub={
        hello_1:$("#test_app"),
        hello_2:$(".hello_select_2"),
        hello_3:$(".hello_select_3"),
        hello_4:$(".hello_select_4"),
        hello_5:$(".hello_select_5"),
        hello_6:$(".hello_select_6"),
        hello_7:$(".hello_select_7"),
        hello_8:$(".hello_select_8"),
        hello_9:$(".hello_select_9"),
        hello_10:$(".hello_select_10"),
        hello_11:$(".hello_select_11"),
        hello_12:$(".hello_select_12"),
        hello_13:$(".hello_select_13"),
    };
})();

/*******************************************
*  1.用途: 公共类，大家共同使用的
*  2.属性: show us
*  3.方法: 公共
*******************************************/
//公共构造
GLOBAL.A.hide.Public=function(name) {
    this.value='hello';
};
//公共原型
GLOBAL.A.hide.Public.prototype={
    show:function () {
        alert(this.$$hello_1.html());
        return this;
    },
    hide:function () {
        alert('刚刚的');
        return this;
    },
    //vue混合
    myMixin:function () {
        // 定义一个混合对象
        GLOBAL.A.hide.myMixin = {
            myMixin_1:function () {
                // 定义一个混合对象
                var myMixin = {
                    created: function () {
                        this.hello()
                    },
                    methods: {
                        hello: function () {
                            console.log('hello from mixin!')
                        }
                    }
                }
            },
            myMixin_2:function () {

            }
        };
        return this;
    },
    //全局的组件
    compnents:function () {
        //select
        Vue.component('public-show',index);
        //shows
        return this;

    }
};
//实列化
GLOBAL.A.hide.pub=new GLOBAL.A.hide.Public();
//执行函数
GLOBAL.A.hide.pub.compnents().myMixin();


/*******************************************
*  1.用途: 公共类，大家共同使用的
*  2.属性: show us
*  3.方法: 公共
*******************************************/
//构造
GLOBAL.A.hide.Animal= function() {
    GLOBAL.A.hide.Public.call(this,name);
    /*this.constructor.superclass.constructor.apply(this,arguments);*/
    this.name='hello';
};
//继承
GLOBAL.A.extend.extend(GLOBAL.A.hide.Animal,GLOBAL.A.hide.Public);
//原型
GLOBAL.A.hide.Animal.prototype.hi=function () {
    alert('都不能');
    return this;
};
GLOBAL.A.hide.Animal.prototype.vue_start=function () {
    new Vue({
        el:'#test_obj',
        data:{
            mesaage:'哈哈哈哈哈或或或或或或或或或'
        },
        methods:{

        }
    });
    return this;
};
//实列化
GLOBAL.A.hide.ani=new GLOBAL.A.hide.Animal();
//执行函数
GLOBAL.A.hide.ani.vue_start();






