const scriptURL = 'https://script.google.com/macros/s/AKfycbxxf7ufbwPA8TwUyT8PKCekAsgDRlaIYwA_9BNodSDNmTWTY2i0NwSfkMWV7q3WW0wq/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            msg.innerHTML = "Menssagem enviada"
            setTimeout(function(){
              msg.innerHTML = ""
            },5000)
            form.reset()
          })
          .catch(error => console.error('Error!', error.message))
      })