const btn = document.getElementById('submit')

const btnFunc = e => {
    e.preventDefault();
    console.log('hobvered')
}

document.getElementById('form').addEventListener('submit', e => {
    e.preventDefault()
    console.log('form submitted')
});

btn.addEventListener('click', btnFunc);
