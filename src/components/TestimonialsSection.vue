<template>
    <section class="testimonials-wrapper">
      <h1 class="testimonials-title">学生感言</h1>
        <Carousel :autoplay="5000" :itemsToShow="3.95" :wrapAround="true" :transition="500">
            <Slide v-for="slide in 10" :key="slide">
                <div class="carousel__item">
                    <img src="../images/study.jpg" alt="图片1" class="carousel__image">
                    <div class="testimonial-text">123456789123456789123456789</div>
                </div>
            </Slide>
        
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </section>
  </template>
  

 


  <script>
  import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
  import 'vue3-carousel/dist/carousel.css';
  import studentImage from '../images/offer/Bristol-AFM.png';
  
  export default {
    name: 'StudentTestimonials',
    components: {
      Carousel,
      Slide,
      Navigation,
      Pagination,
    },
    data() {
      return {
        studentImage
      };
    },
  }
  </script>
  
  <style scoped>
  .testimonials-wrapper {
    text-align: center;
  }
  
  .testimonials-title {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 24px;
    /* Additional styles for the title, if needed */
  }
  
  .carousel__item {
    min-height: 400px; /* Increased height to make the section longer */
    background-color: #f7f7f7; /* Light background for the carousel item */
    color: #333; /* Darker text color for better contrast */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px; /* Add space between image and text */
  }
  
  .student-image {
    max-width: 150px; /* Adjust as needed */
    max-height: 150px; /* Adjust as needed */
    border-radius: 50%;
  }
  
  .testimonial-text {
    font-size: 18px; /* Adjust as needed */
    color: #333;
    padding: 0 20px;
    background-color: #fff; /* White background for the text */
    border: 1px solid #ddd; /* Border around the text */
    border-radius: 4px;
    margin: 0 30px; /* Add horizontal padding */
  }
  

  /* Ensure navigation buttons and pagination are visible and positioned correctly */
  </style>
  