
let datos = [
	["Léon: The Professional", "https://pics.filmaffinity.com/leon_leon-207548886-large.jpg", "1994"],
	["Beautiful Girls", "https://pics.filmaffinity.com/beautiful_girls-847053126-large.jpg", "1996"],
	["Mars Attack", "https://pics.filmaffinity.com/mars_attacks-785566493-large.jpg", "1996"],
	["Star Wars: Episode I - The Phantom Menace", "https://pics.filmaffinity.com/star_wars_episode_ii_attack_of_the_clones-495166632-large.jpg", "1999"],
	["V for Vendetta","https://pics.filmaffinity.com/v_for_vendetta-296729466-large.jpg", "2005"],
	["Closer", 			"https://pics.filmaffinity.com/closer-637452415-large.jpg", "2004"],
	["Todos dicen I Love You",	"https://pics.filmaffinity.com/everyone_says_i_love_you-402495795-large.jpg", "1996"],
	["Black Swan",		"https://pics.filmaffinity.com/black_swan-861293346-large.jpg", "2010"],
	["Thor", 			"https://pics.filmaffinity.com/thor-223512549-large.jpg", "2011"],
	["Jackie", 			"https://pics.filmaffinity.com/jackie-992865954-large.jpg", "2016"],
	["Annihilation",	"https://pics.filmaffinity.com/annihilation-713855494-large.jpg", "2018"],
	["Vox Lux", 		"https://pics.filmaffinity.com/vox_lux-866513004-large.jpg", "2018"]
];


function dibujar(){
    let miHTML='';
    for(i=0; i<datos.length; i++){
        miHTML+='<li><img src="'+datos[i][1]+'" alt="'+datos[i][0]+'"><h2>'+datos[i][0]+'</h2><p>'+datos[i][2]+'</p></li>';
    }
    document.querySelector('ul').innerHTML=miHTML;
    }
function agregar(){
    let nombre = document.querySelector("#nombre").value;
    let link = document.querySelector("#link").value;
    let year = document.querySelector("#year").value;
    datos.push([nombre, link, year]);
    dibujar();
    }
    
function eliminar(){
    let nombreDelete = document.querySelector('#nombreDelete').value;
    for(i=0; i<datos.length; i++){
        let nombresFilm = datos[i][0];
        if (nombreDelete == nombresFilm) {
            console.log(nombresFilm);
            console.log(nombreDelete);
            datos.pop();
            dibujar();
        } else {
            console.log(nombresFilm);
            console.log(nombreDelete);
            dibujar();
        }
    }
    
    
    
    }
    
dibujar();

