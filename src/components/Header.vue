﻿<template>
    <header class="header">
        <div class="logo">
            <img src="../images/logo.jpg" alt="Logo">
        </div>
        <nav>
            <ul>
                <li><router-link to="/">首页</router-link></li>
                <li @mouseover="showDropdown" @mouseleave="hideDropdown" class="has-dropdown">
                    <router-link to="/study-abroad">留学</router-link>
                    <div v-if="isDropdownVisible" class="dropdown">
                        <ul>
                            <li><a href="#">中小学</a></li>
                            <li><a href="#">本科研究生</a></li>
                        </ul>
                    </div>
                </li>
                <li @mouseover="showDropdown" @mouseleave="hideDropdown" class="has-dropdown">
                    <router-link to="/international-curriculum">国际课程</router-link>
                    <div v-if="isDropdownVisible" class="dropdown">
                        <ul>
                            <li><a href="#">GCSE</a></li>
                            <li><a href="#">A-level</a></li>
                            <li><a href="#">IB</a></li>
                        </ul>
                    </div>
                </li>
                <li><router-link to="/summer-camp">夏令营</router-link></li>
                <li @mouseover="showDropdown" @mouseleave="hideDropdown" class="has-dropdown">
                    <router-link to="/guardianship">监护</router-link>
                    <div v-if="isDropdownVisible" class="dropdown">
                        <ul>
                            <li><a href="#">寄宿家庭</a></li>
                        </ul>
                    </div>
                </li>
                <li><router-link to="/category">私立学校</router-link></li>
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
        grid-gap: 50px;
        height: auto;
        align-items: center;
    }

    nav {
        font-size: 30px;
        margin-left: 180px;
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
                    color: white;
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
        font-size: 25px;
    }

        .dropdown ul {
            list-style-type: none;
            padding: 0;
            margin-top: 10px;
            line-height:30px;
        }

        .dropdown li {
            display: block;
            margin-top: 10px;
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