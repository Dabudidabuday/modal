//  *** MODAL OPEN & CLOSE ***

let    open = document.querySelector('.modal__open'),
  container = document.querySelector('.modal__container'),
      modal = document.querySelector('.modal');

function openModal() {
    container.style.display='block';
    modal.style.display='block';
};

function closeModal() {
    container.style.display='none';
    modal.style.display="none";
};

open.addEventListener('click', function() {
    openModal();
});

container.addEventListener('click', function() {
    closeModal();
});

// *** SEND MODAL VALUE (Email, Password) ***

let email = document.querySelector('.modal__email'),
     pass = document.querySelector('.modal__pass'),
   submit = document.querySelector('.modal__submit-field');

function collectValue() {

    let Data = {
         emailValue: String(email.value),
         passValue: String(pass.value),
    }

    return Data;
};


submit.addEventListener('click', function() {
    console.log(collectValue());
    closeModal();
});
