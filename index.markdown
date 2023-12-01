---
layout: home
title: Home
---

<div class="hero-section">
  <h1 class="hero-title">
    <span id="typing-container">
      <span id="line1"></span>
      <span id="line2"></span>
      <span id="typing-cursor" class="cursor"></span>
    </span>
  </h1>

  <p>
    QuantAlpha is a trading firm building <strong>Quant Finance 2.0 for Digital Assets</strong>.
  </p>

  <p>
    We harness traditional quant methodologies - data analytics, technical analysis, statistical methods - to generate alpha by uncovering trading signals and market patterns.
  </p>

  <p>
    We overlay Quant Finance 2.0 to enhance pattern detection and enable us to extract alpha from unstructured text data, such as news, events, social media.
  </p>

  <div class="latex-block">
    <h3>What is Quant Finance 2.0?</h3>
    <p>
      Deploying cutting-edge, rapidly advancing machine learning technologies, data analytics, artificial intelligence, deep learning, and generative AI in quantitative trading.
    </p>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const cursor = document.getElementById('typing-cursor');
    line1.style.fontFamily = 'Courier New, monospace'; // Apply the font-family to line1

    const typeWriter = (text, element, i, cb) => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(text, element, i, cb), 50);
      } else {
        cb();
      }
    };

    const startTyping = () => {
      typeWriter("Quant Finance 2.0 ", line1, 0, () => {
        line1.innerHTML += '<br>'; // Add line break
        line2.style.fontFamily = 'Courier New, monospace'; // Apply the font-family to line2
        cursor.style.animation = 'blinkCursor 1s step-end infinite';
        setTimeout(() => {
          typeWriter("for Digital Assets", line2, 0, () => {});
        }, 1000); // Adjust the delay based on your preference
      });
    };

    startTyping();
  });
</script>
