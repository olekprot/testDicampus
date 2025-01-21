const animales = [
    ["Leon", "leon.jfif", "Canino"], 
    ["Tigre", "tigre.jfif", "Felino"], 
    ["Gato", "gato.jfif", "Equino"], 
];
const carpetaimg = "img/";

let currentIndex = 0; 
function next() { 
    
    if (currentIndex < animales.length) { 
        document.querySelector("h2").textContent = animales[currentIndex][0]; 
        document.querySelector("img").src = carpetaimg + animales[currentIndex][1]; 
        document.querySelector("p").textContent = animales[currentIndex][2]; 
        currentIndex++; 
    } else { 
        currentIndex = 0; 
        document.querySelector("h2").textContent = animales[currentIndex][0]; 
        document.querySelector("img").src = carpetaimg + animales[currentIndex][1]; 
        document.querySelector("p").textContent = animales[currentIndex][2]; 
        currentIndex++; 
    } 
    
};




