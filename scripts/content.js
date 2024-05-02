(async () => {
  const response = await chrome.runtime.sendMessage({ type: "translation", text: "Hello" })
  console.log('Ceci est notre réponse :', response)
})()

