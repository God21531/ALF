    const scriptURL = 'https://script.google.com/macros/s/AKfycbxVH6-jZmWa--92oEBIrUwSl1JjJj9AIa3D7CT7XFGS-SU-Y29yGIOmYEIK8VSfVXSE/exec'
    const form = document.forms['google-sheet']

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
            .catch(error => console.error('Error!', error.message))
    })
