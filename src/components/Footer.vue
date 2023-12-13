<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section about">
          <h1>Top UKschool</h1>
          <p class="about-text">英国私校指南的创立，是为了给海内外的华人建立一座桥梁，让大家能更加便捷有效地为自己的孩子们找到合适的私立学校，并及时了解发生在学校内的故事。</p>
          <div class="links-container">
            <ul class="footer-links">
              <li><router-link to="/">首页</router-link></li>
              <li><router-link to="/study-abroad">留学</router-link></li>
              <li><router-link to="/international-curriculum">国际课程</router-link></li>
            </ul>
            <ul class="footer-links">
                <li><router-link to="/summer-camp">夏令营</router-link></li>
                <li><router-link to="/guardianship">监护</router-link></li>
                <li><router-link to="/private-schools">私立学校</router-link></li>
            </ul>
          </div>
        </div>
        <div class="footer-section test">
          <h2>contact us</h2>
          <a href="#" class="test-link">联系我们</a>
        </div>
        <div class="footer-section contact">
          <h2>我们最近的办公室</h2>
          <address>
            Klingenberggata 5, 0161 Oslo
          </address>
        </div>
      </div>
      <div class="footer-divider"></div> <!-- Divider line -->
      <div class="footer-bottom">
        <p>© 2023 by TOPUK. All rights reserved</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    // Your script here
  }
  </script>
  
  <style scoped>
    .footer {
      background-color: #720000; /* Match the dark red color */
      color: white;
      padding: 40px 20px; /* Spacing */
      font-size: 16px;
      font-family: 'Open Sans', sans-serif; /* Change as needed */
    }
  
    .footer-content {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  
    .footer-section {
      flex: 1; /* Each section will take equal space */
      margin-right: 20px;
      min-width: 200px; /* Minimum width for each section */
    }
  
    .about h1 {
      margin-bottom: 0; /* Remove margin for tighter spacing */
    }
  
    .about-text {
      max-width: 50%; /* Limit the width of the text */
      margin-bottom: 20px; /* Add some margin below the paragraph */
    }
  
    .links-container {
      columns: 2; /* Create two columns */
      -webkit-columns: 2;
      -moz-columns: 2;
      margin-top: 20px; /* Space from the text above */
    }
  
    .footer-links {
      -webkit-column-break-inside: avoid; /* Prevent column break inside links */
      page-break-inside: avoid;
      break-inside: avoid;
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
  
    .footer-links li {
      padding-bottom: 5px; /* Space between links */
    }
  
    .footer-links li a {
      text-decoration: none;
      color: white;
      font-size: 0.9em; /* Slightly smaller font size */
    }
  
    .footer-section p, .footer-section address {
      margin-top: 10px; /* Spacing after the links */
    }
  
    .footer-divider {
      border-top: 1px solid white; /* White line */
      margin-top: 40px; /* Spacing from the content above */
      margin-bottom: 20px; /* Spacing from the content below */
    }
  
    .footer-bottom {
      text-align: center;
      width: 100%; /* Ensure it spans the full width */
    }
  
    .test-link {
      background-color: white;
      color: #720000;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 20px;
      font-weight: bold;
      display: inline-block; /* To allow padding and border-radius */
      margin-top: 10px; /* Spacing from the title */
    }
  
    .test-link:hover {
      background-color: #f0f0f0;
    }
  
    @media (max-width: 768px) {
      .footer-content {
        flex-direction: column;
      }
  
      .footer-section {
        margin-right: 0;
        margin-bottom: 20px;
      }
  
      .about-text, .links-container {
        max-width: 100%; /* Allow text to fill the column on small screens */
      }
  
      .footer-bottom {
        margin-top: 0;
      }
    }
  </style>
  