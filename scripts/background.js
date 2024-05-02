chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'translation') {
    fetch('https://swapi.dev/api/people/1', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        sendResponse(data)
      })

    return true  // Indique que la réponse sera envoyée de manière asynchrone
  }
})
