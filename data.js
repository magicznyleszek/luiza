(() => {
  // Verify if `name_m,name_f,description,source` row is present in `zawody.csv` file.
  if ('name_m' in window.gepoza[0] === false) {
    console.error('definitely not ready');
    throw new Error('Did you forgot to add a mandatory header row in your CSV file? Yes, you did!');
  }
  
  /**
   * Fetches random item from the big list of ideas, and then renders it in UI.
   */
  function renderRandomIdea() {
    const idea = window.gepoza[Math.floor(Math.random() * window.gepoza.length)];
    console.info('new idea:', idea);
    const nameEl = document.getElementById('js-name');
    const descriptionEl = document.getElementById('js-description');
    if (nameEl && descriptionEl) {
      let fullName = idea.name_m;
      if (idea.name_f) {
        fullName += `/${idea.name_f}`;
      }
      nameEl.innerText = fullName;
      descriptionEl.innerText = idea.description;
    }
  }

  // Listen to event dispatched by button in UI.
  window.addEventListener('randomize', (event) => {
    console.info('randomize event received');
    renderRandomIdea();
  });

  // Load one idea on start.
  window.addEventListener('load', renderRandomIdea);

  console.info('ready');
})();