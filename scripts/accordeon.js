const buttons = document.querySelectorAll('.faqs__accordion');
const descriptions = document.querySelectorAll('.faqs__panel');

for (let index = 0; index <= buttons.length; index++) {
    buttons[index].addEventListener('click', () => {
        buttons[index].classList.toggle('active');
        descriptions[index].classList.toggle('active');
    });
}
