(() => {
  /**
   * Verifies if data coming from Jekyll is present and in good shape.
   */
  function verifyDataReady() {
    // Verify if `name_m,name_f,description,source` row is present in `zawody.csv` file.
    if ('name_m' in window.luiza[0] === false) {
      console.error('definitely not ready')
      throw new Error('Did you forgot to add a mandatory header row in your CSV file? Yes, you did!')
    }

    // Check how much data is ready
    let countReady = 0
    if (window.luiza) {
      window.luiza.forEach((item) => {
        if (item.description) {
          countReady++
        }
      })

      if (countReady === window.luiza.length) {
        console.info('data ready: 100%')
      } else {
        const percentageReady = Math.round((countReady / window.luiza.length) * 100)
        console.warn(`data ready: ${percentageReady}%`)
      }
    }
  }
  
  /**
   * Renders idea in the UI.
   */
  function renderIdea(idea) {
    const nameEl = document.getElementById('js-name')
    const descriptionEl = document.getElementById('js-description')
    if (nameEl && descriptionEl) {
      // Display random name (m or f), because some names are too long to 
      // display both of them at the same time.
      const names = []
      if (idea.name_m) {names.push(idea.name_m)}
      if (idea.name_f) {names.push(idea.name_f)}
      if (names.length === 0) {names.push('przepraszam, ale jest błąd!')}
      const randomName = names[Math.floor(Math.random()*names.length)]
      
      nameEl.innerText = randomName
      descriptionEl.innerText = idea.description
    }
    console.info('rendered idea', idea)
  }

  /**
   * Looks into query parameters for idea.
   * @return either found idea object or `undefined`.
   */
  function getQueryIdea() {
    const urlParams = new URLSearchParams(window.location.search)
    const queryIdea = urlParams.get('idea')
    return window.luiza.find((item) => item.name_m === queryIdea)
  }

  /**
   * Stores given idea in query parameter.
   */
  function setQueryIdea(idea) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('idea', idea.name_m)
    const newURL = `${window.location.pathname}?${urlParams.toString()}`
    window.history.pushState({ path: newURL }, '', newURL);
  }

  /**
   * Gets random idea, renders it, and updates query.
   */
  function selectRandomIdea() {
    const randomIdea = window.luiza[Math.floor(Math.random() * window.luiza.length)]
    renderIdea(randomIdea)
    setQueryIdea(randomIdea)
  }

  // Listen to event dispatched by button in UI.
  window.addEventListener('randomize', (event) => {
    console.info('randomize event received')
    selectRandomIdea()
  })

  // Load one idea on start.
  window.addEventListener('load', () => {
    verifyDataReady() // :check:
    
    const queryIdea = getQueryIdea()
    const isComingFromReload = (window.performance.getEntriesByType('navigation')[0]).type === 'reload';
    
    // When arriving from browser reload, we want to choose new random idea, even if one can be found in the search parameters
    if (!isComingFromReload && queryIdea) {
      renderIdea(queryIdea)
    } else {
      selectRandomIdea()
    }
  })

  console.info('ready')
})()