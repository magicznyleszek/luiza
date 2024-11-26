---
---
(() => {
  // This line is Jekyll x JS code:
  window.gepoza = {{ site.data.zawody | jsonify }} || [];

  // Verify if `name_m,name_f,description,source` row is present in `zawody.csv` file.
  if ('name_m' in window.gepoza[0] === false) {
    console.error('not ready');
    throw new Error('Did you forgot to add a mandatory header row in your CSV file? Yes, you did!');
  }
  
  function renderRandomIdea() {
    const item = window.gepoza[Math.floor(Math.random() * window.gepoza.length)];
    const nameEl = document.getElementById('js-name');
    const descriptionEl = document.getElementById('js-description');
    if (nameEl && descriptionEl) {
      let fullName = item.name_m;
      if (item.name_f) {
        fullName += `/${item.name_f}`;
      }
      nameEl.innerText = fullName;
      descriptionEl.innerText = item.description;
    }
  }

  window.addEventListener('randomize', (event) => {
    console.info('randomize');
    renderRandomIdea();
  });

  window.addEventListener('load', renderRandomIdea);

  console.info('ready');
})();