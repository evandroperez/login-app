let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#password')

    if(inputSenha.getAttribute('type') == 'password'){
     inputSenha.setAttribute('type', 'text')   
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

function entrar(){
    let user = document.querySelector('#user')
    let userLabel = document.querySelector('#userLabel')

    let password = document.querySelector('#password')
    let labelPass = document.querySelector('#labelPass')

    let msgError = document.querySelector('#msgError')
    let listaUser = []

    let userValid = {
        name: '',
        user: '',
        password: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if(user.value == item.user && password.value == item.password){
            userValid = {
                name: item.name,
                user: item.user,
                password: item.password
            }
        }
    })
  if(user.value == userValid.user && password.value == userValid.password){
    window.location.href = 'http://127.0.0.1:5500/home.html'

    let token = Math.random().toString(16).substring(2)

    localStorage.setItem('token', token)

    localStorage.setItem('userLogin', JSON.stringify(userValid))

  }else{
      userLabel.setAttribute('style', 'color: red')
      user.setAttribute('style', 'border-color: red')
      labelPass.setAttribute('style', 'color: red')
      password.setAttribute('style', 'border-color: red')
      msgError.setAttribute('style', 'display: block')
      msgError.innerHTML = 'Usuario ou senha invalido'
      user.focus()
  }
}