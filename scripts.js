let btnLogin = document.querySelector('.btn-login');
let form = document.querySelector('form');

btnLogin.addEventListener('click',(e) => {
    e.preventDefault();

    let field = [...document.querySelectorAll('.input-block input')]

    field.forEach((fields) => {
        if(fields.value == '') {
            form.classList.add('validate-error')
        }
    })

    let formError = document.querySelector('.validate-error');

    if(formError) {
        formError.addEventListener('animationend',(e)=> {
            if(e.animationName === 'nono') {
                formError.classList.remove('validate-error')
            }
        })
    } else {
        form.classList.add('form-hide')
    }
});

form.addEventListener('animationstart',(e) => {
    if(e.animationName === 'Down') {
        document.querySelector('body').style.overflow = 'hidden'
    }
})

form.addEventListener('animationend',(e) => {
    if(e.animationName === 'Down') {
        form.style.display = 'none';
        document.querySelector('body').style.overflow = 'scroll'
    }
});

let squares = document.querySelector('ul.squares');

for(let i = 0; i < 31; i++) {

    let li = document.createElement('li');

    let random = (min, max) => Math.random() * (max - min) + min

    let size = Math.floor(random(10,120));
    let position = random(1,99);
    let delay = random(5,1);
    let scale = random(0,1)

    li.style.animationDelay = `${delay}s`
    li.style.animationDuration = `${delay}s`
    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`
    li.style.left = `${position}%`
    li.style.scale = `${scale}`


    squares.appendChild(li)
}

