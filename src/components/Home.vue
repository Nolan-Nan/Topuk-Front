<template>
    <div class="home">
        <Header />
        <section class="section1">
            <h1> - </h1>
            <h1>最专业团队，最顶尖的老师</h1>
            <h3>专注留学生学术辅导10年：</h3>
            <h3>全学科，全阶段，全方位</h3>
        </section>
        <section class="section2">
            <h2>产品简介</h2>
            <div class="products">
                <div class="item">
                    <h3>留学</h3>
                    <p>中小学至研究生阶段的英国本土留学申请服务。</p>
                    <p>低龄留学：综合评估孩子家庭情况和学习能力，提供语言培训、文化适应、专业课程辅导服务。</p>
                    <p>大学/研究生申请：资深的留学团队，中英双方老师共同提供服务，高端的文书团队，丰富的成功案例。</p>
                </div>
                <div>
                    <img src="../images/study.jpg" alt="图片1">
                </div>
                <div>
                    <img src="../images/study.jpg" alt="图片1">
                </div>
                <div class="item">
                    <h3>冬/夏令营</h3>
                    <p>专业团队全程陪伴和指导，确保学生安全与福祉。</p>
                    <p>丰富多彩、有意义的学习之旅</p>
                    <p>夏令营收益：提升英语语言能力、融入英国文化、亲身体验英国教育系统、在寓教于乐的环境中增长知识、拓展视野，并培养适应英国学习氛围的能力。</p>
                </div>
                <div class="item">
                    <h3>Alevel · GCSE · IB</h3>
                    <p>面向14到18岁的学生，涵盖广泛的学科范围,提供全球化的学术课程</p>
                    <p>资深的教师团队提供个性化的学术辅导，帮助学生在考试中取得优异成绩。</p>
                    <p>为学生进入国际高等教育做好准备，培养全球视野和创新实践能力。</p>
                </div>
                <div>
                    <img src="../images/study.jpg" alt="图片1">
                </div>
                <div>
                    <img src="../images/study.jpg" alt="图片1">
                </div>
                <div class="item">
                    <h3>监护 · 住宿</h3>
                    <p>这里是住宿的内容</p>
                </div>
            </div>
        </section>

        <section class="section3">
            <h2>留学成功案例</h2>
            <p>这里是成功案例的内容</p>
        </section>

        <section class="section4">
            <h2>师资一览</h2>
            <p>这里是师资一览的内容</p>
        </section>

        <section class="section5">
            <h2>夏令营 · 住宿家庭 Video</h2>
            <p>这里是活动视频的内容</p>
        </section>

        <Footer />
    </div>
</template>

<script>
    import Header from './Header.vue';
    import Footer from './Footer.vue';

    export default {
        components: {
            Header,
            Footer
        },
    }
</script>

<style>
    section {
        text-align: center;
        margin: 0;
    }

    .section1 {
        width: auto;
        height: 400px;
        text-align: left;
        line-height:50px;
        background-image: url('../images/home1.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .section2 {
        background-color: #CCDFF2; /* 设置第二个section的背景颜色为绿色 */
    }

    .products {
        display: grid;
        justify-items: center;
        align-items: center;
        grid-template-columns: repeat(2, 50%);
        grid-column-gap: 0px;
        grid-row-gap: 2em;
        margin: 30px;
    }

        .products p {
            text-align: left;
        }

    .item {
        width: 80%;
    }

    img {
        max-width: 100%;
        max-height: 100%;
    }

    .section3 {
        background-color: #e3ebf3; /* 设置第三个section的背景颜色为蓝色 */
    }

    .section4 {
        background-color: #efefef; /* 设置第一个section的背景颜色为红色 */
    }

    .section5 {
        background-color: #ccdff2; /* 设置第一个section的背景颜色为红色 */
    }

    

    

</style>