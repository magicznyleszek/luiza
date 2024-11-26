---
---
(() => {
  window.gepoza = {{ site.data.zawody | jsonify }} || [];
  
  function renderRandomIdea() {
    const randomItem = window.gepoza[Math.floor(Math.random() * window.gepoza.length)];
    const nameEl = document.getElementById('js-name');
    const descriptionEl = document.getElementById('js-description');
    if (nameEl && descriptionEl) {
      nameEl.innerText = randomItem.name.join('/');
      descriptionEl.innerText = randomItem.description;
    }
  }

  window.addEventListener('randomize', (event) => {
    console.info('randomize');
    renderRandomIdea();
  });

  window.addEventListener('load', renderRandomIdea);

  console.info('ready');
})();