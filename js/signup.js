var accounts = []
if (JSON.parse(localStorage.getItem('accounts')) != null) {
    accounts = JSON.parse(localStorage.getItem('accounts'))
}



let NewName = document.getElementById('name')
let NewEmail = document.getElementById('email')
let NewPass = document.getElementById('Password')
let signbtn = document.getElementById('signupbtn')
let emailregex = new RegExp(`^[a-z]+[a-z0-9]+@[a-z]+[.][a-z]{2,3}$`);

// prevent form refresh
signbtn.addEventListener('click', function (e) {
    e.preventDefault()
})

// name oninput validation
NewName.addEventListener('input', function () {
    NewName.classList.remove('empty')
    if (NewName.value.length < 5) {
        NewName.classList.add('invalidinput')
        NewName.classList.remove('validinput')
        NewName.classList.add('empty')
    }
    else {
        NewName.classList.add('validinput')
        NewName.classList.remove('invalidinput')
    }
})

// email on input validation
NewEmail.addEventListener('input', function () {
    NewEmail.classList.remove('empty')
    if (!emailregex.test(NewEmail.value)) {
        NewEmail.classList.add('invalidinput')
        NewEmail.classList.remove('validinput')
        NewEmail.classList.add('empty')
    }
    else {
        NewEmail.classList.add('validinput')
        NewEmail.classList.remove('invalidinput')
    }
})

// password on input validation
NewPass.addEventListener('input', function () {
    NewPass.classList.remove('empty')
    if (NewPass.value.length < 4) {
        NewPass.classList.add('invalidinput')
        NewPass.classList.remove('validinput')
        NewPass.classList.add('empty')
    }
    else {
        NewPass.classList.add('validinput')
        NewPass.classList.remove('invalidinput')
    }
})


// validation function
function signValidation() {
    if (NewEmail.value == '') {
        NewEmail.classList.add('empty')
    }
    if (NewPass.value == '') {
        NewPass.classList.add('empty')
    }
    if (NewName.value == '') {
        NewName.classList.add('empty')
    }

    if (document.querySelectorAll('.validinput').length < 3) {
        document.getElementById('alert').classList.remove('d-none')
    }
    else {
        let exist = false
        for (let i = 0; i < accounts.length; i++) {
            if (accounts[i].email == NewEmail.value) {
                exist = true
            }
        }
        if (exist) {
            document.getElementById('alert').classList.add('d-none')
            document.getElementById('exist').classList.remove('d-none')
        } else {
            let newAccount = { username: `${NewName.value}`, email: `${NewEmail.value}`, password: `${NewPass.value}` }
            accounts.push(newAccount)
            localStorage.setItem('accounts', JSON.stringify(accounts))
            window.location.href = '../index.html'
        }
    }
}

// validation call
signbtn.addEventListener('click', signValidation)

