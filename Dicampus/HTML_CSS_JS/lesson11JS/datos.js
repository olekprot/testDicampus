let clubs = [
    ["Real Madrid", "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png", 1902 ],
    ["Barcelona","https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png", 1899],
    ["Liverpool","https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/800px-Liverpool_FC.svg.png", 1892],
    ["Real Oviedo","https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Real_Oviedo_logo.svg/1200px-Real_Oviedo_logo.svg.png", 1926],
    ["Betis","https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Real_betis_logo.svg/1200px-Real_betis_logo.svg.png", 1907],
    ["Sevilla","https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Sevilla_FC_logo.svg/1200px-Sevilla_FC_logo.svg.png", 1890],
    ["Mallorca","https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Rcd_mallorca.svg/1200px-Rcd_mallorca.svg.png", 1916],
    ["Valencia","https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Valenciacf.svg/1200px-Valenciacf.svg.png", 1919],
    ["Sporting Gijon","https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Real_Sporting_de_Gijon.svg/1200px-Real_Sporting_de_Gijon.svg.png", 1905],
    ["Atletic Bilbao","https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Club_Athletic_Bilbao_logo.svg/1200px-Club_Athletic_Bilbao_logo.svg.png", 1898]
  ];

let currentIndex = 0; 
function printInfo() {
    document.querySelector("h2").textContent = clubs[currentIndex][0]; 
    document.querySelector("img").src = clubs[currentIndex][1]; 
    document.querySelector("p").textContent = clubs[currentIndex][2]; 

}
function next() {
    for(i = 0; i<=clubs.length; i++){
        printInfo(clubs[currentIndex]);
        currentIndex++;
        break;
    } 
    
}
function back() {
    for(i = clubs.length; i>=currentIndex; i--){
        printInfo(clubs[currentIndex]);
        currentIndex--;
        break;
    }
} 




/*
function next() { 
    if (currentIndex <= clubs.length) { 
            currentIndex++; 
        } else { 
            currentIndex=0;  
    } printInfo(); 
} 
    function back() { 
        if (currentIndex >= 0) { 
            currentIndex--; 
        } else { 
            currentIndex = clubs.length - 1; 
        } printInfo(); 
}*/
