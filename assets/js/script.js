var xos = document.querySelectorAll('.xo');

for (const xo of xos) {
    xo.addEventListener('click', function displayXO() {
        xo.innerHTML = 'x';
    })
}
