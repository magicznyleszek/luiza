---
---
window.gepoza = {{ site.collections | jsonify }};

document.addEventListener('randomize', (event) => {
  alert(window.gepoza?.[0]);
});