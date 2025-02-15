export function SubmitMessage(message) {
    fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({userMessage: message})
      })
      .then(response => response.json())
      .then(json => console.log(json))
}