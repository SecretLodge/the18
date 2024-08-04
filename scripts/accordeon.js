const buttons = document.querySelectorAll('.faqs__accordion');
const descriptions = document.querySelectorAll('.faqs__panel');

for (let index = 0; index <= buttons.length; index++) {
    const button = buttons[index];
    const description = descriptions[index];

    button.addEventListener('click', () => {
        button.classList.toggle('active');
        description.classList.toggle('active');
    });
}
