<template>
    <header class="header">
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
                <li><a href="#">私立学校</a></li>
            </ul>
        </nav>
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
    header {
        display: grid;
        grid-template-columns: 1fr 3fr; /* 设置左右列的比例为1:3 */
        grid-gap: 10px;
        height: auto;
        background-color: #f5f5f5;
        align-items: center;
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