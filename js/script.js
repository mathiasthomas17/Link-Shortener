const input = document.getElementById('link-input')
const linkform = document.getElementById('link-form')
const erroMessage = document.getElementById('err-msg')


linkform.addEventListener('submit', formSubmit)

function formSubmit(e){
    e.preventDefault()
    // console.log(input.value)
    if(input.value == ''){
        erroMessage.innerHTML = 'Please enter something'
        input.classList.add('border-red')
    }

}