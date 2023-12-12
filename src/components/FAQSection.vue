<template>
    <section class="faq-section">
      <h1>常见问题</h1>
      <p>下文是一些我们收到的关于我们的国际高中中国校区的常见问题。</p>
      <div class="faq-container">
        <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
          <button class="faq-question" @click="toggleFAQ(index)">{{ faq.question }}</button>
          <div class="faq-answer" v-show="faq.open">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'FAQSection',
    data() {
      return {
        // Create an array with unique objects rather than using `fill`, which references the same object.
        faqs: [
          { question: '1+1=?', answer: '答案是 2', open: false },
          { question: '1+1=?', answer: '答案是 2', open: false },
          { question: '1+1=?', answer: '答案是 2', open: false },
          { question: '1+1=?', answer: '答案是 2', open: false },
          { question: '1+1=?', answer: '答案是 2', open: false },
        ],
      };
    },
    methods: {
      toggleFAQ(index) {
        // Toggle only the clicked FAQ's open state
        this.faqs[index].open = !this.faqs[index].open;
      },
    },
  };
  </script>
  
  
  <style scoped>
    .faq-section {
      margin: 20px;
      padding: 20px;
      background-color: #fff;
    }
  
    .faq-container {
      margin-top: 20px;
    }
  
    .faq-item:not(:last-child) {
      margin-bottom: 10px;
    }
  
    .faq-question {
      width: 100%;
      text-align: left;
      padding: 10px;
      font-size: 1em;
      font-weight: bold;
      cursor: pointer;
      background-color: #f7f7f7;
      border: none;
      border-bottom: 1px solid #ddd;
      outline: none;
      transition: background-color 0.3s ease;
    }
  
    .faq-question:hover {
      background-color: #e1e1e1;
    }
  
    .faq-answer {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }
  
    .faq-answer p {
      padding: 10px;
      margin: 0;
      background-color: #f0f0f0;
    }
  
    .faq-item .faq-answer {
      border-left: 4px solid #007bff;
    }
  
    .faq-item .faq-question::after {
      content: '+';
      float: right;
      transition: transform 0.3s ease;
    }
  
    .faq-item .faq-question[aria-expanded="true"]::after {
      content: '-';
    }
  
    .faq-answer[style] {
      max-height: 1000px; /* Maximum height when open */
    }
  </style>
  