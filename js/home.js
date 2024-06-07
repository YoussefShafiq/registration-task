let username = JSON.parse(localStorage.getItem('username'))


if (username == '') {
    document.getElementById('hellomsg').innerHTML = 'you are unauthorized to access this page'
} else {
    document.getElementById('username').innerHTML = username.split(' ')[0]
}


document.getElementById('logout').addEventListener('click', function () {
    window.location.href = '../index.html'
})