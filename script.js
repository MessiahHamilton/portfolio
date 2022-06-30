var content = document.getElementsByTagName('body')[0]

var dark_mode  = document.getElementById('darkMode')

dark_mode.addEventListener('click', () => {


dark_mode.classList.toggle('active')
content.classList.toggle('night')


})