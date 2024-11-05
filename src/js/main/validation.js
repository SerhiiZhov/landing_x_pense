let telInput = document.querySelector("._tel");
let validData = document.querySelector('.success__desr_item')
let errroMsgButton = document.querySelector('.changeMessage')
let maskOptions = {
  mask: "{+38}(\\000)000-00-00",
  lazy: false,
};
let mask = new IMask(telInput, maskOptions);



function validateForm(forma) {
  const form = document.querySelector(forma);

  form.addEventListener("submit", formSend); 

  function formSend(e) {
    e.preventDefault();
    let error = formValidate(form);
    if (error !== 0) return
    let erSave =  errroMsgButton.innerHTML
    let formData = new FormData(form);
    form.classList.add("_sending");

    setTimeout(() => {
      if (e.target.classList.contains("popup__form")) {
        formData.forEach((value, key) => {
          let li = document.createElement("li"); 
          li.textContent = `${key}: ${value}`;  
          validData.appendChild(li);                    
        });
        form.classList.remove('_sending')
        form.classList.add("_hiden");
    } else {
      form.classList.remove('_sending')
      form.classList.add('succes')
      errroMsgButton.innerHTML = 'You just subscribed 😎';
    }
    }, 2000);
    form.reset()

    setTimeout(() => {
      form.classList.remove("_hiden");
      document.querySelector('.popup').classList.remove("active");
      if (e.target.classList.contains("popup__form")) {
        document.querySelector('.popup__form').classList.remove("_hiden");
        validData.innerHTML = '';
      } else {
        form.classList.remove('succes')
        errroMsgButton.innerHTML = erSave;
      }
    }, 10000);
   
  }

  function formValidate(form) {
    let error = 0;
    let formReq = form.querySelectorAll("._req");

    for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input);

      if (input.classList.contains("_email")) {
        if (emailValidate(input)) {
          formAddError(input);
          error++;
        }
      } else if (
        input.getAttribute("type") === "checkbox" 
        
      ) {

        if(input.checked === false){
          formAddError(input);
          error++;
        }
        
      } else if (
        input.classList.contains("_tel")
      ) {
        if(mask.unmaskedValue.length !== 12){
          formAddError(input);
          error++;
        }
       
      } else {
        if (
          input.value === "" ||
          input.value.length < 3 ||
          /\d/.test(input.value)
        ) {
          formAddError(input);
          error++;
        }
      } 
    }

    return error;
  }

  function formAddError(input) {
    input.classList.add("_error");
  }

  function formRemoveError(input) {
    input.classList.remove("_error");
  }

  function emailValidate(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
}

validateForm(".footer__form");
validateForm(".popup__form");
