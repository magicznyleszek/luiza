---
---
(() => {
  window.gepoza = {{ site.data.zawody | jsonify }} || [];
  
  function renderRandomIdea() {
    const randomItem = window.gepoza[Math.floor(Math.random() * window.gepoza.length)];
    console.log(randomItem);
    const out = document.getElementById('out');
    if (out) {
      out.innerHTML = JSON.stringify(randomItem, null, "  ");
    }
  }

  window.addEventListener('randomize', (event) => {
    console.info('randomize');
    renderRandomIdea();
  });

  window.addEventListener('load', renderRandomIdea);

  console.info('ready');
})();