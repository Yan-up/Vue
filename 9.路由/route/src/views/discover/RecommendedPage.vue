<template>
    <div class="recommended-page">
        <div class="page-top">
            <img src="http://p1.music.126.net/3cnUzgYtLn0o1u3zIhXN4g==/109951169747022416.jpg" alt="" class="bg">
            <div class="carousel-map-box">
                <a href="js:;" class="butl iconfont" @click="onLt">&#xe601; </a>
                <a href="js:;" class="butr iconfont" @click="onRh">&#xe629; </a>
                <div class="carousel-map">
                    <div class="image-list">
                        <a href="js:;" v-for="(image, index) in images" :key="index"
                            :style="{ transform: `translateX(-${currentIndex * 100}%)` }" @mouseenter="stopAutoPlay"
                            @mouseleave="startAutoPlay">
                            <img :src="image" alt="">
                        </a>
                    </div>
                    <div class="down">
                        <a href="js:;"></a>
                        <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-area">
            <div class="area">
                <div class="left-area">
                    <div class="left-navigation">
                        <h3 @click="onJump">热门推荐</h3>
                        <ul>
                            <li>
                                <router-link :to="{
                                    name: 'song',//路由名称
                                    query: {//路由参数
                                        cat: '华语'//参数,赋值个title
                                    }
                                }">华语</router-link>
                            </li>
                            <li>
                                <router-link :to="{
                                    name: 'song',//路由名称
                                    query: {//路由参数
                                        cat: '流行'//参数,赋值个title
                                    }
                                }">流行</router-link>
                            </li>
                            <li><router-link :to="{
                                name: 'song',//路由名称
                                query: {//路由参数
                                    cat: '摇滚'//参数,赋值个title
                                }
                            }">摇滚</router-link>
                            </li>

                            <li>
                                <router-link :to="{
                                    name: 'song',//路由名称
                                    query: {//路由参数
                                        cat: '民谣'//参数,赋值个title
                                    }
                                }">民谣</router-link>
                            </li>
                            <li>
                                <router-link :to="{
                                    name: 'song',//路由名称
                                    query: {//路由参数
                                        cat: '电子'//参数,赋值个title
                                    }
                                }">电子</router-link>
                            </li>
                        </ul>
                    </div>
                    <ul class="song-list">
                        <li>歌单</li>
                    </ul>
                </div>
                <div class="right-area"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecommendedPage',
    data() {
        return {
            currentIndex: 0,// 轮播图索引
            intervalId: null, // 存储定时器ID
            images: [
                'http://p1.music.126.net/sNT5XxuBo1wsABrVhRgx4g==/109951169797966106.jpg?imageView&quality=89',
                ' http://p1.music.126.net/9KagRhivFyFn1hLSApy3Dg==/109951169797975039.jpg?imageView&quality=89',
                'http://p1.music.126.net/wH-3R5FaZMtTtOy2u1rGOw==/109951169797978702.jpg?imageView&quality=89',
                'http://p1.music.126.net/QYsuU1qcfZotKfCWVC95eg==/109951169797979288.jpg?imageView&quality=89',
                'http://p1.music.126.net/ZZ7Ol_l7jw3YPsKcOjjB2g==/109951169797996119.jpg?imageView&quality=89',
                'http://p1.music.126.net/gjv8XsIhKEGPjhVdPQpFkg==/109951169798001298.jpg?imageView&quality=89',
                'http://p1.music.126.net/3Sl2JHfKg471R-7h6V0u2g==/109951169798034210.jpg?imageView&quality=89',
                'http://p1.music.126.net/umTnzpwJoqGM_goo8nZ0mw==/109951169798041589.jpg?imageView&quality=89',
                'http://p1.music.126.net/r6MOaaWl2rnYfI7nwIDPcw==/109951169798050219.jpg?imageView&quality=89'
            ]
        }
    },
    mounted() {
        this.startAutoPlay() // 组件挂载后启动自动播放
    },
    methods: {
        onJump() {
            this.$router.push({//编程式跳转
                path: 'song/',//跳转路径
                query: {//跳转参数
                    cat: '全部'//参数,赋值个title
                }
            })
        },
        onLt() {// 左切图
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length
        },
        onRh() {// 右切图
            this.currentIndex = (this.currentIndex + 1) % this.images.length
        },
        startAutoPlay() {// 启动自动播放
            if (!this.intervalId) {
                this.intervalId = setInterval(this.onLt, 3000) // 每3秒切换到下一张幻灯片
            }
        },
        stopAutoPlay() {
            clearInterval(this.intervalId) // 停止自动播放
            this.intervalId = null
        }
    },
    beforeDestroy() {
        this.stopAutoPlay() // 组件销毁前停止自动播放
    }
}
</script>
<style scoped lang="scss">
.recommended-page {
    width: 100%;

    & .page-top {
        height: 285px;
        position: relative;
        overflow: hidden;

        & img.bg {
            width: 6000px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
            filter: blur(80px);
            z-index: -1;
        }

        & .carousel-map-box {
            width: 1100px;
            position: relative;
            height: 285px;
            margin: 0 auto;
            padding: 0 20px;
            box-sizing: border-box;
            font-size: 12px;

            & .butl,
            .butr {
                width: 40px;
                height: 60px;
                text-align: center;
                line-height: 60px;
                font-size: 40px;
                color: #E7E7E7;
                position: absolute;
                top: 36%;
                z-index: 999;

                &.butl {
                    left: 0;
                }

                &.butr {
                    right: 0;
                }

                &:hover {
                    background-color: rgba(0, 0, 0, .2);
                }
            }

            & .carousel-map {
                width: 980px;
                display: flex;
                flex-direction: row;
                margin: 0 auto;

                & .image-list {
                    width: 730px;
                    height: 285px;
                    display: flex;
                    flex-direction: row;
                    overflow: hidden;

                    &>a img {
                        width: 730px;
                        height: 285px;
                    }
                }

                & .down {
                    width: 250px;
                    background: url("https://s2.music.126.net/style/web2/img/index/download.png?4c113686ceff3982b4546d308e9fc87f");
                    overflow: hidden;
                    position: relative;
                    right: 0.5px;

                    &>a {
                        width: 215px;
                        height: 56px;
                        position: absolute;
                        top: 65%;
                        right: 15px;
                    }

                    & p {
                        position: absolute;
                        bottom: 15px;
                        right: 10px;
                        text-align: center;
                        color: #8d8d8d;
                    }
                }
            }
        }
    }

    & .content-area {
        display: flex;
        flex-direction: row;

        & .area {
            width: 980px;
            margin: 0 auto;

            & .left-area {
                width: 689px;
                padding: 20px 20px 40px;
                border: 1px solid #eee;

                & .left-navigation {
                    height: 33px;
                    padding: 0 10px 0 34px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    border-bottom: 2px solid #C10D0C;

                    & h3 {
                        color: #333;
                        cursor: pointer;
                        font-weight: normal;
                    }

                    ul {
                        display: flex;
                        flex-direction: row;

                        li {
                            width: 40px;
                            height: 11px;
                            margin-left: 20px;
                            display: flex;
                            align-items: center;
                            justify-content: flex-end;

                            &:nth-child(n+2) {
                                border-left: 1px solid #ccc;
                            }

                            a {
                                color: #666;
                                font-size: 12px;
                            }
                        }
                    }
                }

                & .song-list {
                    margin: 20px 0;
                }
            }
        }
    }
}
</style>
