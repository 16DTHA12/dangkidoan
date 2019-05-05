
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyCdj23crb_h_UZ0iGeMR_JGHM1jQvwHs0FtZj1mYrR3SBYPNs/exec'
    const form = document.forms['submit-to-google-sheet']
    const loading = document.querySelector('.js-loading')
    const successMessage = document.querySelector('.js-success-message')
    const errorMessage = document.querySelector('.js-error-message')

    form.addEventListener('submit', e => {
      e.preventDefault()
      showLoadingIndicator()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => showSuccessMessage(response))
        .catch(error => showErrorMessage(error))
    })

    function showLoadingIndicator () {
      form.classList.add('is-hidden')
      loading.classList.remove('is-hidden')
    }

    function showSuccessMessage (response) {
      console.log('Success!', response)
      setTimeout(() => {
        successMessage.classList.remove('is-hidden')
        loading.classList.add('is-hidden')
      }, 500)
    }

    function showErrorMessage (error) {
      console.error('Error!', error.message)
      setTimeout(() => {
        errorMessage.classList.remove('is-hidden')
        loading.classList.add('is-hidden')
      }, 500)
    }
    function resizeTextarea (id) {
        var a = document.getElementById(id);
        a.style.height = '110px';
        a.style.height = a.scrollHeight+'px';
      }
      
      function init() {
        var a = document.getElementsByTagName('textarea');
        for(var i=0,inb=a.length;i<inb;i++) {
           if(a[i].getAttribute('data-resizable')=='true')
            resizeTextarea(a[i].id);
        }
      }
      