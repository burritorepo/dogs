function init() {
  let body = document.querySelector('body');
  let close = document.querySelector('.close');

  setTimeout(function () {
    body.classList.add("show-modal");
  }, 1000);

  function handleEventClose() {
    close
      .addEventListener('click', function () {
        body.classList.remove("show-modal")
      })
  }
  handleEventClose();


  function getValueForm() {
    let inputName = document.querySelector('.js_input');
    let inputEmail = document.querySelector('.js_email');
    let button = document.querySelector('.js_button');
    

    button.addEventListener('click', (e)=> {
      e.preventDefault();
    })
  }

  getValueForm();
}

init();


