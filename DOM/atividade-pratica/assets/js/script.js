let textMode = document.getElementById('page-title')
let buttonMode = document.getElementById('mode-selector')
let bodyMode = document.querySelector('body')
let footerMode = document.querySelector('footer')

function clickButton() {
    buttonMode.addEventListener('click' , () => {
        buttonMode.classList.toggle('dark-mode');
        bodyMode.classList.toggle('dark-mode');
        footerMode.classList.toggle('dark-mode');
            
        if(textMode.innerHTML === 'Light Mode ON') {
            textMode.innerHTML = ' Dark Mode ON'
            buttonMode.innerHTML = 'Light mode'
        } else {
            textMode.innerHTML = 'Light Mode ON'
            buttonMode.innerHTML = 'Dark mode'
        };
    });
}

clickButton()