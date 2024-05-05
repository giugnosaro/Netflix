const pil = document.querySelectorAll('#pillola');
for (var i = 0; i < pil.length; i++) {
    pil[i].classList.add('position-relative')

    const generopillola = document.createElement('span');
    generopillola.classList.add('posizione',);
    generopillola.innerText ='New Episodie';
    pil[i].appendChild(generopillola);
}


console.log(pil);