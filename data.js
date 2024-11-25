---
---
(() => {
  window.gepoza = {{ site.data.collections | jsonify }};
  
  document.addEventListener('randomize', (event) => {
    alert(window.gepoza?.[0]);
  });

  console.info('ready');
})();