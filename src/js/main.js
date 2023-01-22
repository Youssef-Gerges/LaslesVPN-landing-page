import '../styles/main.css';
import '../styles/header.css';
import '../styles/info-card.css';
import '../styles/features.css';
import '../styles/plans.css';

var btn = document.querySelector('#humburger');
var hidden = document.querySelectorAll('#hide')
btn.addEventListener('click', () => {
    for (let i = 0; i < hidden.length; i++) {
        hidden[i].classList.toggle('hidden');
        hidden[i].classList.toggle('flex-col');
    }
})