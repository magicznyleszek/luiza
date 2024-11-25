---
---
(() => {
  window.gepoza = {{ site.data.zawody | jsonify }};
  
  window.addEventListener('randomize', (event) => {
    alert(window.gepoza?.[0]);
  });

  console.info('ready');
})();