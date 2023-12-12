<template>
    <header class="newheader">
        <div class="content">
            <div class="logo">
                <img src="../images/logo.jpg" alt="Logo">
            </div>
            <nav>
                <ul>
                    <li><router-link to="/">首页</router-link></li>
                    <li @mouseover="showDropdown" @mouseleave="hideDropdown" class="has-dropdown">
                        <a href="#">留学</a>
                        <div v-if="isDropdownVisible" class="dropdown">
                            <ul>
                                <li><a href="#">中小学</a></li>
                                <li><a href="#">本科研究生</a></li>
                            </ul>
                        </div>
                    </li>
                    <li @mouseover="showDropdown" @mouseleave="hideDropdown" class="has-dropdown">
                        <a href="#">国际课程</a>
                        <div v-if="isDropdownVisible" class="dropdown">
                            <ul>
                                <li><a href="#">GCSE</a></li>
                                <li><a href="#">A-level</a></li>
                                <li><a href="#">IB</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#">夏令营</a></li>
                    <li @mouseover="showDropdown" @mouseleave="hideDropdown" class="has-dropdown">
                        <a href="#">监护</a>
                        <div v-if="isDropdownVisible" class="dropdown">
                            <ul>
                                <li><a href="#">寄宿家庭</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><router-link to="/category">私立学校</router-link></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
    import { RouterLink } from 'vue-router';

    export default {
        components: {
            RouterLink,
        },
        data() {
            return {
                isDropdownVisible: false
            }
        },
        methods: {
            showDropdown() {
                this.isDropdownVisible = true;
            },
            hideDropdown() {
                this.isDropdownVisible = false;
            }
        }
    }
</script>

<style>
    .newheader {
        position: relative;
        grid-template-columns: repeat(12,58px);
        padding-left: 0;
        padding-right: 0;
        justify-content: center;
        display: grid;
        grid-column-gap: 24px;
    }

    .content {
        grid-column-end: -1;
        grid-column-start: 1;
        align-items: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }



    nav {
        font-size: 15px;
    }

        nav > ul {
            display: flex;
            list-style-type: none;
            margin-left: 20px;
        }

            nav > ul li {
                flex-grow: 1;
                margin-right: 10px;
                position: relative; /* 添加相对定位 */
                display: inline-block;
            }

                nav > ul li a {
                    text-decoration: none;
                    color: #333;
                }

    .has-dropdown:hover .dropdown {
        display: block;
    }

    .dropdown {
        position: absolute; /* 添加绝对定位 */
        min-width: 100px;
        top: 100%; /* 将下拉列表定位到父元素底部 */
        left: 0; /* 将下拉列表与父元素左对齐 */
        display: none; /* 默认隐藏下拉列表 */
    }

        .dropdown ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
            line-height:30px;
        }

        .dropdown li {
            display: block;
        }

            .dropdown li a {
                display: block;
                text-decoration: none;
                color: #333;
                background-color: #eee;
            }


    li:hover .dropdown {
        display: flex; /* 悬浮时显示下拉列表 */
    }
</style>