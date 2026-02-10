// Появление элементов при скролле
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.style.animationDelay = `${Math.random()*0.5}s`;
    entry.target.style.opacity = 1;
    entry.target.style.transform = 'translateY(0)';
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// Переключение языка
const langBtn = document.getElementById('switch-lang');
let lang = 'en'; // по умолчанию английский

// Сразу меняем все тексты на английский при загрузке страницы
const allText = document.querySelectorAll('[data-ru]');
allText.forEach(el => el.textContent = el.getAttribute('data-en'));
langBtn.textContent = 'RU'; // кнопка показывает, на какой язык переключить

langBtn.addEventListener('click', () => {
  if(lang === 'en'){
    allText.forEach(el => el.textContent = el.getAttribute('data-ru'));
    langBtn.textContent = 'EN';
    lang = 'ru';
  } else {
    allText.forEach(el => el.textContent = el.getAttribute('data-en'));
    langBtn.textContent = 'RU';
    lang = 'en';
  }
});
