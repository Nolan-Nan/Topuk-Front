<template>
    <div class="home">
        <Header />
        <section class="section1">
            <div class="centered-content">
                <h1>最专业团队，最顶尖的老师</h1>
                <h3>专注留学生学术辅导10年：</h3>
                <h3>全学科，全阶段，全方位</h3>
            </div>
        </section>
        <section class="section2">
            <h1>产品简介</h1>
            <div class="products">
                <div>
                    <img src="../images/london.jpg" alt="London">
                    <p><router-link to="/">留学</router-link></p>
                    <p>中小学至研究生阶段的英国本土留学申请服务。</p>
                    <p>低龄留学：综合评估孩子家庭情况和学习能力，提供语言培训、文化适应、专业课程辅导服务。</p>
                    <p>大学/研究生申请：资深的留学团队，中英双方老师共同提供服务，高端的文书团队，丰富的成功案例。</p>
                </div>
                <div>
                    <img src="../images/school.jpg" alt="School">
                    <p><router-link to="/international-curriculum">Alevel · GCSE · IB</router-link></p>
                    <p>面向14到18岁的学生，涵盖广泛的学科范围,提供全球化的学术课程</p>
                    <p>资深的教师团队提供个性化的学术辅导，帮助学生在考试中取得优异成绩。</p>
                    <p>为学生进入国际高等教育做好准备，培养全球视野和创新实践能力。</p>
                </div>
                <div>
                    <img src="../images/oxford.jpg" alt="Oxford">
                    <p><router-link to="/summer-camp">冬/夏令营</router-link></p>
                    <p>专业团队全程陪伴和指导，确保学生安全与福祉。</p>
                    <p>丰富多彩、有意义的学习之旅</p>
                    <p>夏令营收益：提升英语语言能力、融入英国文化、亲身体验英国教育系统、在寓教于乐的环境中增长知识、拓展视野，并培养适应英国学习氛围的能力。</p>
                </div>
                <div>
                    <img src="../images/cambridge.jpg" alt="Cambridge">
                    <p><router-link to="/guardianship">监护</router-link></p>
                    <p>这里是住宿的内容</p>
                </div>
            </div>
        </section>

        <section class="section3">
            <h1>留学成功案例</h1>
            <Carousel :autoplay="5000" :items-to-show="3.95" :wrap-around="true" :transition="500">
                <Slide v-for="slide in 11" :key="slide">
                    <div class="carousel__item">
                        <img :src="'src/images/offers/offer' + slide + '.png'" :alt="'图片' + slide" class="carousel__image">
                    </div>
                </Slide>
                <template #addons>
                    <Navigation />
                    <Pagination />
                </template>
            </Carousel>
        </section>

        <section class="section4">
            <h1>师资一览</h1>
            <Carousel :autoplay="5000" :items-to-show="3.95" :wrap-around="true" :transition="500">
                <Slide v-for="slide in 12" :key="slide">
                    <div class="carousel__item">
                        <img :src="'src/images/info/Picture' + slide + '.png'" :alt="'图片' + slide" class="carousel__image">
                    </div>
                </Slide>
                <template #addons>
                    <Navigation />
                    <Pagination />
                </template>
            </Carousel>
        </section>

        <section class="section5">
            <h1>夏令营 · 住宿家庭 Video</h1>
            <video controls width="1200" height="800">
                <source src="../images/vlog.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </section>


        <TestimonialsSection />
        <FAQSection />
        <Footer />
        <Window />
        <SuspenPopup />
    </div>

</template>

<script>
    import Header from './Header.vue';
    import Footer from './Footer.vue';
    import Window from './Window.vue';
    import SuspenPopup from './suspenPopup.vue';
    import FAQSection from './FAQSection.vue';
    import TestimonialsSection from './TestimonialsSection.vue';
    import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

    import 'vue3-carousel/dist/carousel.css'

    export default {
        components: {
            SuspenPopup,
            Header,
            TestimonialsSection,
            FAQSection,
            Footer,
            Window,
            Carousel,
            Slide,
            Pagination,
            Navigation,
        },
    };
</script>

<style>
    section {
        text-align: center;
        margin: 0;
    }

    .section1 {
        width: auto;
        height: 800px;
        text-align: left; /* 水平居中 */
        display: flex;
        flex-direction: column;
        justify-content: center; /* 垂直居中 */
        background-image: url('../images/HomeBack.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        margin-top: -150px;
    }

        .section1 h1, .section1 h3 {
            color: white; /* 设置文本颜色为白色 */
            margin-left: 100px;
        }

        .section1 h1 {
            font-size: 4.5rem;
        }

        .section1 h3 {
            font-size: 2rem;
        }

    .section2 {
        background-color: white; /* 设置第二个section的背景颜色为绿色 */
    }

        .section2 h1 {
            font-size: 2.5rem;
        }

    .products {
        display: grid;
        grid-template-columns: repeat(4, 1fr); /* Two columns with equal width */
        gap: 50px; /* Adjust the gap between items */
        margin-left: 100px;
        margin-right: 100px;
    }

        .products div {
            overflow: hidden; /* Ensure images don't overflow their containers */
        }

        .products img {
            width: 100%; /* Make images fill the container */
            height: auto; /* Maintain aspect ratio */
        }

        .products p {
            margin-top: 10px; /* Add space between image and text */
            font-size: 1.5rem;
        }

        .products a {
            text-decoration: none; /* Remove underlines from links */
            color: #333; /* Set link color */
            font-weight: bold; /* Make text bold */
        }

            .products a:hover {
                color: #0066cc; /* Change link color on hover */
            }

    img {
        max-width: 100%;
        max-height: 100%;
    }

    .section3 {
        background-color: #e3ebf3; /* 设置第三个section的背景颜色为蓝色 */
    }


        .section3 h1 {
            font-size: 2.5rem;
        }

        .section3 img {
            width: 100%;
            margin-top: 0px;
            margin-left: 10px;
            margin-right: 10px;
        }

    .section4 {
        background-color: #efefef;
    }

        .section4 h1 {
            font-size: 2.5rem;
        }

    .carousel__item {
        min-height: 200px;
        width: 100%;
        background-color: var(--vc-clr-primary);
        color: var(--vc-clr-white);
        font-size: 20px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .carousel__slide {
        padding: 10px;
    }

    .carousel__prev,
    .carousel__next {
        box-sizing: content-box;
        border: 5px solid white;
    }



    .section5 {
        background-color: #ccdff2; /* 设置第一个section的背景颜色为红色 */
    }

        .section5 h1 {
            font-size: 2.5rem;
        }

    .supen-popup {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20rpx;
        box-sizing: border-box;
        background: white;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        border: 1px solid #aaa;
        font-size: 24rpx;
        width: 100%;
        height: 100%;
    }
</style>