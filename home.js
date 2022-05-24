let userLogin = JSON.parse(localStorage.getItem('userLogin'))

let = login = document.querySelector('#login')

login.innerHTML = `Olá ${userLogin.name}`

if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar a pagina')
    window.location.href = 'http://127.0.0.1:5500/index.html'
}

function sair(){
    localStorage.removeItem('token')
    localStorage.removeItem('userLogin')
    window.location.href = 'http://127.0.0.1:5500/index.html'
}