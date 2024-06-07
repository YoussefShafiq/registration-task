//get all accounts form local storage if there
var accounts = []
if (JSON.parse(localStorage.getItem('accounts')) != null) {
    accounts = JSON.parse(localStorage.getItem('accounts'))
}

let valid = false
let email = document.getElementById('email')
let password = document.getElementById('password')
let loginbtn = document.getElementById('loginbtn')

// reset username value on local storage
let username = ''
localStorage.setItem('username', JSON.stringify(username))

// preventing form refresh
loginbtn.addEventListener('click', function (e) {
    e.preventDefault()
})

// validation function
function loginValidation() {
    if (email.value == '') {
        email.classList.add('invalidinput')
    }
    if (password.value == '') {
        password.classList.add('invalidinput')
    }
    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].email == email.value && accounts[i].password == password.value) {
            valid = true
            username = accounts[i].username
        }
    }
    if (valid == false) {
        document.getElementById('alert').classList.remove('d-none')
        console.log('invalid');
    } else {
        document.getElementById('alert').classList.add('d-none')
        localStorage.setItem('username', JSON.stringify(username))
        window.location.href = 'pages/home.html'
    }
}

// validation call
loginbtn.addEventListener('click', loginValidation)


// remove warning borders when typing
email.addEventListener('input', function () {
    email.classList.remove('invalidinput')
})
password.addEventListener('input', function () {
    password.classList.remove('invalidinput')
})



