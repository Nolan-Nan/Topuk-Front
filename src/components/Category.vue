<template>
    <div class="category">
        <Header />
        <div class="entry-header">
            <h1 class="entry-title">分类</h1>
        </div>
        <div class="entry-content">
            <div class="left">
                <div class="parent-wrap">
                    <div class="parent-item">
                        <a href="https://www.topukschool.cn/listings/category/sixth-form/" title="">
                            Sixth Form高中
                            <span class="count-label">269</span>
                        </a>
                    </div>
                </div>
                <div class="parent-wrap">
                    <div class="parent-item">
                        <a href="https://www.topukschool.cn/listings/category/price/" title="">
                            价格
                            <span class="count-label">301</span>
                        </a>
                    </div>
                    <div class="sub-list">
                        <div class="item">
                            <a href="https://www.topukschool.cn/listings/category/low/" title="">
                                £
                                <span class="count-label">110</span>
                            </a>
                        </div>
                        <div class="item">
                            <a href="https://www.topukschool.cn/listings/category/medium/" title="">
                                ££
                                <span class="count-label">127</span>
                            </a>
                        </div>
                        <div class="item">
                            <a href="https://www.topukschool.cn/listings/category/high/" title="">
                                £££
                                <span class="count-label">64</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="parent-wrap">
                    <div class="parent-item">
                        <a href="https://www.topukschool.cn/listings/category/%e4%bd%8f%e5%ae%bf%e7%b1%bb%e5%9e%8b/" title="">
                            住宿类型
                            <span class="count-label">22</span>
                        </a>
                    </div>
                    <div class="sub-list">
                        <div class="item">
                            <a href="https://www.topukschool.cn/listings/category/%e4%bd%8f%e5%ae%bf/" title="">
                                住宿
                                <span class="count-label">1</span>
                            </a>
                        </div>
                        <div class="item">
                            <a href="https://www.topukschool.cn/listings/category/%e8%b5%b0%e8%af%bb/" title="">
                                走读
                                <span class="count-label">22</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="parent-wrap">
                    <div class="parent-item">
                        <a href="https://www.topukschool.cn/listings/category/%e5%9c%b0%e5%8c%ba/" title="">
                            地区
                            <span class="count-label">299</span>
                        </a>
                    </div>
                    <div class="sub-list">
                        <div class="item">
                            <a href="https://www.topukschool.cn/listings/category/%e4%b8%9c%e5%8c%97%e9%83%a8/" title="">
                                东北部
                                <span class="count-label">7</span>
                            </a>
                        </div>
                        <div class="item">
                            <a href="https://www.topukschool.cn/listings/category/%e4%b8%9c%e5%8d%97%e9%83%a8/" title="">
                                东南部
                                <span class="count-label">59</span>
                            </a>
                        </div>
                        <div class="item">
                            <a href="https://www.topukschool.cn/listings/category/%e4%b8%ad%e9%83%a8%e4%b8%9c/" title="">
                                中东部
                                <span class="count-label">17</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="parent-wrap">
                    <div class="parent-item">
                        <a href="https://www.topukschool.cn/listings/category/%e7%89%b9%e8%89%b2/" title="">
                            特色
                            <span class="count-label">55</span>
                        </a>
                    </div>
                    <div class="sub-list">
                        <div class="item">
                            <a href="https://www.topukschool.cn/listings/category/%e4%bd%93%e8%82%b2/" title="">
                                体育
                                <span class="count-label">1</span>
                            </a>
                        </div>
                        <div class="item">
                            <a href="https://www.topukschool.cn/listings/category/%e5%85%ac%e5%ad%a6%e9%a2%84%e5%a4%87%e6%a0%a1/" title="">
                                公学预备校
                                <span class="count-label">0</span>
                            </a>
                        </div>
                        <div class="item">
                            <a href="https://www.topukschool.cn/listings/category/%e5%85%b6%e4%bb%96/" title="">
                                其他
                                <span class="count-label">47</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="parent-wrap">
                    <div class="parent-item">
                        <a href="https://www.topukschool.cn/listings/category/%e7%94%b7%e5%a5%b3%e6%a0%a1/" title="">
                            男女校
                            <span class="count-label">8</span>
                        </a>
                    </div>
                    <div class="sub-list">
                        <div class="item">
                            <a href="https://www.topukschool.cn/listings/category/%e5%a5%b3%e6%a0%a1/" title="">
                                女校
                                <span class="count-label">3</span>
                            </a>
                        </div>
                        <div class="item">
                            <a href="https://www.topukschool.cn/listings/category/%e6%b7%b7%e6%a0%a1/" title="">
                                混校
                                <span class="count-label">3</span>
                            </a>
                        </div>
                        <div class="item">
                            <a href="https://www.topukschool.cn/listings/category/%e7%94%b7%e6%a0%a1/" title="">
                                男校
                                <span class="count-label">2</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Header from './Header.vue';
    import Footer from './Footer.vue';

    export default {
        components: {
            Header,
            Footer,
        },
    };
</script>

<style>

    .entry-content {
        display: grid;
        grid-template-columns: repeat(2, 50%);
        grid-column-gap: 0px;
        grid-row-gap: 2em;
        margin: 20px 40px;
        font-size: 1.0625rem;
        font-family: 'Lato', sans-serif;
    }

    .entry-title {
        font-size: 1.5rem;
        font-family: 'Lato', sans-serif;
        margin-left: 50px;
    }

    .parent-item {
        justify-content: space-between;
    }

        .parent-item a {
            color: #1AB394;
            display: block;
            line-height: 1;
            white-space: nowrap;
            padding: 0.7rem 1rem;
            text-decoration: none;
        }

    span {
        background-color: #F5F5F5;
        color: #777;
        margin-left: 5px;
        float: right;
    }


    .item a {
        display: block;
        color: #8A8A8A;
        padding: 0.4rem 0rem 0.4rem 1rem;
        text-decoration: none;
    }

</style>



