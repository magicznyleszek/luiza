---
---
(() => {
  window.gepoza = {{ site.data.zawody | jsonify }} || [];
  
  function renderRandomIdea() {
    const randomItem = window.gepoza[Math.floor(Math.random() * window.gepoza.length)];
    console.log(randomItem);
  }

  window.addEventListener('randomize', (event) => {
    console.info('randomize');
    renderRandomIdea();
  });

  console.info('ready');
})();