---
layout: home
title: About
permalink: /about/
---

<div class="hero-section">
  <h1 class="hero-title">
    <span id="typing-container">
      <span id="line1"></span>
      <span id="typing-cursor" class="cursor"></span>
    </span>
  </h1>

  <p>
    The QuantAlpha team combines extensive expertise from traditional finance
    (22 years combined investment banking experience), crypto market making
    (founders of <a href="https://coinalpha.com" target="_blank" class="about-link">CoinAlpha</a>
    est. 2017 and <a href="https://hummingbot.org" target="_blank" class="about-link">Hummingbot</a>),
    and multiple fields of engineering (blockchain, data analytics/engineering/science,
    machine learning/AI/NLP).
  </p>
</div>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const line1 = document.getElementById('line1');
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
      typeWriter("About", line1, 0, () => {
        cursor.style.animation = 'blinkCursor 1s step-end infinite';
      });
    };

    startTyping();
  });
</script>
