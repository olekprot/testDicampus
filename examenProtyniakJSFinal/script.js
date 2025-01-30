const ciudadesItalianas = [
    ["Roma", 2873000, "https://es.wikipedia.org/wiki/Roma", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Pantheon_%28Rome%29_-_Right_side_and_front.jpg/640px-Pantheon_%28Rome%29_-_Right_side_and_front.jpg"],
    ["Milán", 1378689, "https://es.wikipedia.org/wiki/Mil%C3%A1n", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/876MilanoDuomo.JPG/500px-876MilanoDuomo.JPG"],
    ["Nápoles", 959574, "https://es.wikipedia.org/wiki/N%C3%A1poles", "https://drscdn.500px.org/photo/77650975/q%3D80_m%3D600_of%3D1/v2?sig=74c27365e266d7d90c0aac14220379c810703bc20a85d2d25b50cc343586444c"],
    ["Turín", 870599, "https://es.wikipedia.org/wiki/Tur%C3%ADn", "https://lp-cms-production.imgix.net/2024-08/500pxRF69158315.jpg?fit=crop&w=3840&auto=format&q=75"]
  ];
  
/*Generador lista con ciudades de la Italia*/
  let miHTML='';
  for(i=0; i<ciudadesItalianas.length; i++){

	  miHTML+=`
                <li>
                <img src="${ciudadesItalianas[i][3]}" alt="${ciudadesItalianas[i][0]}">
                <h2>${ciudadesItalianas[i][0]}</h2>
                <p>Populacion: ${ciudadesItalianas[i][1]} personas<p>
                <a href="${ciudadesItalianas[i][2]}">Mas Info <img src="img/keyboard-right-arrow-button-1_icon-icons.com_72690.svg" alt="go"></a>
            </li>`;

  }
  document.querySelector('#lista_ciudades').innerHTML=miHTML;
  
/*Funccion para cambiar colores del fondo*/
  function refreshColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.querySelector('body').style.backgroundColor = '#' + randomColor;
    console.log(randomColor);
};