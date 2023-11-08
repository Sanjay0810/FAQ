const faqItems =
document.querySelectorAll('.faq-item');


faqItems.forEach((item) => {
const question =
item.querySelector('.question');
const answer =
item.querySelector('.answer');

question.addEventListener
('click', () => {

item.classList.toggle('active');


if (item.classList.contains('active')) {
answer.style.display = 'block';
} else {
answer.style.display = 'none';
}
});
});