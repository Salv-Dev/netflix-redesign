(function(){
    const $openMenuBtn = document.querySelector('.menu-btn');
    const $closeMenuBtn = document.querySelector('.nav__close-btn');
    const $nav = document.querySelector('.nav');

    $openMenuBtn.addEventListener('click', function() {
        $nav.classList.add('nav--open');
    });

    $closeMenuBtn.addEventListener('click', function() {
        $nav.classList.remove('nav--open');
    });

})();