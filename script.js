const colores = ['green', 'blue', 'red']

// genera números aleatorios de 1 hasta n
function randomHasta() {
    return Math.floor(Math.random() * (4));
}

const h5 = document.getElementsByTagName('h5')
// const prueba = document.getElementById("prueba")

let indiceColor = 0

for (let i = 0; i < h5.length; i++) {
    h5[i].addEventListener('click', function() {
        this.style.color = colores[randomHasta()];
        indiceColor++;
    
        if (indiceColor >= colores.length) {
        indiceColor = 0;
        }
    });
}


// prueba.addEventListener('click', function() {
//     prueba.style.color = colores[indiceColor];
//     indiceColor++;
//     if (indiceColor >= colores.length) {
//       indiceColor = 0;
//     }
// });