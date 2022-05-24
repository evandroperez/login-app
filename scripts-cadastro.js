let btnseePass = document.querySelector('#seePass')
let btnseePassConfirm = document.querySelector('#seePassConfirm')

let name = document.querySelector('#name')
let labelName = document.querySelector('#labelName')
let validName = false

let user = document.querySelector('#user')
let labelUser = document.querySelector('#labelUser')
let validUser = false

let password = document.querySelector('#password')
let labelPass = document.querySelector('#labelPass')
let validPass = false

let confirm = document.querySelector('#confirm')
let labelConfirm = document.querySelector('#labelConfirm')
let validConfirm = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

// Atribui cor de validação caso não atenda os requisitos
name.addEventListener('keyup', () => {
    if(name.value.length <= 2){
        labelName.setAttribute('style', 'color: red')
        labelName.innerHTML = 'Nome *Insira no minimo 3 caracteres*'
        name.setAttribute('style', 'border-color: red')
        validName = false
    } else {
        labelName.setAttribute('style', 'color: green')
        labelName.innerHTML = 'Nome'
        name.setAttribute('style', 'border-color: green')
        validName = true
    }
})

// Atribui cor de validação caso não atenda os requisitos
user.addEventListener('keyup', () => {
    if(user.value.length <= 4){
        labelUser.setAttribute('style', 'color: red')
        labelUser.innerHTML = 'Usuario *Insira no minimo 5 caracteres*'
        user.setAttribute('style', 'border-color: red')
        validUser = false
    } else {
        labelUser.setAttribute('style', 'color: green')
        labelUser.innerHTML = 'Usuario'
        user.setAttribute('style', 'border-color: green')
        validUser = true
    }
})

// Atribui cor de validação caso não atenda os requisitos
password.addEventListener('keyup', () => {
    if(password.value.length <= 5){
        labelPass.setAttribute('style', 'color: red')
        labelPass.innerHTML = 'Senha *Insira no minimo 6 caracteres*'
        password.setAttribute('style', 'border-color: red')
        validPass = false
    } else {
        labelPass.setAttribute('style', 'color: green')
        labelPass.innerHTML = 'Senha'
        password.setAttribute('style', 'border-color: green')
        validPass = true
    }
})

// Atribui cor caso as senhas não sejam iguais
confirm.addEventListener('keyup', () => {
    if(password.value != confirm.value){
        labelConfirm.setAttribute('style', 'color: red')
        labelConfirm.innerHTML = 'Confirme a senha *As senhas não conseferem*'
        confirm.setAttribute('style', 'border-color: red')
        validConfirm = false
    } else {
        labelConfirm.setAttribute('style', 'color: green')
        labelConfirm.innerHTML = 'Confirme a senha'
        confirm.setAttribute('style', 'border-color: green')
        validConfirm = true
    }
})

//função do botão cadastrar
function cadastrar(){
    if(validName && validUser && validPass && validConfirm){

        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                name: name.value,
                user: user.value,
                password: password.value                
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = 'Cadastrando usuario...'
        msgError.innerHTML = ''
        msgError.setAttribute('style', 'display: none')

        setTimeout(()=>{
            window.location.href = 'http://127.0.0.1:5500/index.html'
        }, 2000)
        

    }else{
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Preencha todos os campos corretamente'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')
    }
}

//botão para visualizar a senha digitada
btnseePass.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#password')

    if(inputSenha.getAttribute('type') == 'password'){
     inputSenha.setAttribute('type', 'text')   
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

//botão para visualizar a senha digitada
btnseePassConfirm.addEventListener('click', ()=>{
    let inputConfirm = document.querySelector('#confirm')

    if(inputConfirm.getAttribute('type') == 'password'){
     inputConfirm.setAttribute('type', 'text')   
    } else {
        inputConfirm.setAttribute('type', 'password')
    }
})
