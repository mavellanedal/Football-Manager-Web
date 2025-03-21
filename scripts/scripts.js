function toggleSidebar() {
	const sidebar = document.getElementById("sidebar");
	sidebar.classList.toggle("open");
}

function mostrarCamposExtras() {
    var tipus = document.getElementById("tipus").value;
    var extraFields = document.getElementById("jugadorFields");
    if (tipus === "Jugador") {
        extraFields.classList.remove("ocult");
    } else {
        extraFields.classList.add("ocult");
    }
}

const equipsSubmenu = [
	{nombre: "Athletic Club", escudo: "./public/escudos/athletic.png", link: "./sections/equipos/athletic-club.html"},
	{nombre: "Atlético de Madrid", escudo: "./public/escudos/atletico-madrid.png", link: "./sections/equipos/atletico-madrid.html"},
	{nombre: "CA Osasuna", escudo: "./public/escudos/osasuna.png", link: "./sections/equipos/osasuna.html"},
	{nombre: "CD Leganés", escudo: "./public/escudos/leganes.png", link: "./sections/equipos/leganes.html"},
	{nombre: "Deportivo Alavés", escudo: "./public/escudos/alaves.png", link: "./sections/equipos/alaves.html"},
	{nombre: "FC Barcelona", escudo: "./public/escudos/barcelona.png", link: "./sections/equipos/barcelona.html"},
	{nombre: "Getafe CF", escudo: "./public/escudos/getafe.png", link: "./sections/equipos/getafe.html"},
	{nombre: "Girona FC", escudo: "./public/escudos/girona.png", link: "./sections/equipos/girona.html"},
	{nombre: "Rayo Vallecano", escudo: "./public/escudos/rayo.png", link: "./sections/equipos/rayo.html"},
	{nombre: "RC Celta", escudo: "./public/escudos/celta.png", link: "./sections/equipos/ceta.html"},
	{nombre: "RCD Espanyol de Barcelona", escudo: "./public/escudos/espanyol.png", link: "./sections/equipos/espanyol.html"},
	{nombre: "RCD Mallorca", escudo: "./public/escudos/mallorca.png", link: "./sections/equipos/mallorca.html"},
	{nombre: "Real Betis", escudo: "./public/escudos/betis.png", link: "./sections/equipos/betis.html"},
	{nombre: "Real Madrid", escudo: "./public/escudos/real-madrid.png", link: "./sections/equipos/madrid.html"},
	{nombre: "Real Sociedad", escudo: "./public/escudos/real-sociedad.png", link: "./sections/equipos/real-soceidad.html"},
	{nombre: "Real Valladolid CF", escudo: "./public/escudos/valladolid.png", link: "./sections/equipos/valladolid.html"},
	{nombre: "Sevilla FC", escudo: "./public/escudos/sevilla.png", link: "./sections/equipos/sevilla.html"},
	{nombre: "UD Las Palmas", escudo: "./public/escudos/las-palmas.png", link: "./sections/equipos/las-palmas.html"},
	{nombre: "Valencia CF", escudo: "./public/escudos/valencia.png", link: "./sections/equipos/valecia.html"},
	{nombre: "Villareal CF", escudo: "./public/escudos/villarreal.png", link: "./sections/equipos/villarreal.html"},
]

function generarSubmenuEquipos() {
	const submenu = document.getElementById("submenu-equipos");

	if (!submenu) return;
	equipsSubmenu.forEach(equip => {
		const li = document.createElement("li");
		li.classList.add("submenu-li");
		li.innerHTML = `
			<a class="submenu-a" href="${equip.link}">
				<img src="${equip.escudo}" alt="${equip.nombre}" class="escudo">
				${equip.nombre}
			</a>
		`;
		submenu.appendChild(li);
	});
}
/*
fetch('../public/jugadors.json')
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.error('Error cargando JSON:', error));
*/
	const tarjetasEquipos = [
		{nombre: "Athletic Club", escudo: "../public/escudos/athletic.png", link: "../sections/equipos/athletic-club.html", anoFundacion: 1898, estadio: "../public/estadis/bilbao.png", colorTarjeta: "#9C2121", colorTarjetaHover: "#CECECE", colorLogoHover: "#9C212180", estadioWidth: "158px", estadioHeight: "61px"},
		{nombre: "Atl. de Madrid", escudo: "../public/escudos/atletico-madrid.png", link: "../sections/equipos/atletico-madrid.html", anoFundacion: 1903, estadio: "../public/estadis/atl-madrid.png", colorTarjeta: "#CF0000", colorTarjetaHover: "#00507F", colorLogoHover: "#CF000080", estadioWidth: "157px", estadioHeight: "51px"},
		{nombre: "CA Osasuna", escudo: "../public/escudos/osasuna.png", link: "../sections/equipos/osasuna.html", anoFundacion: 1920, estadio: "../public/estadis/ossasuna.png", colorTarjeta: "#9C2121", colorTarjetaHover: "#16284c", colorLogoHover: "#9C212180", estadioWidth: "156px", estadioHeight: "84px"},
		{nombre: "CD Leganés", escudo: "../public/escudos/leganes.png", link: "../sections/equipos/leganes.html", anoFundacion: 1928, estadio: "../public/estadis/leganes.png", colorTarjeta: "#002CB1", colorTarjetaHover: "#CECECE", colorLogoHover: "#002CB180", estadioWidth: "157px", estadioHeight: "57px"},
		{nombre: "Dep. Alavés", escudo: "../public/escudos/alaves.png", link: "../sections/equipos/alaves.html", anoFundacion: 1921, estadio: "../public/estadis/alaves.png", colorTarjeta: "#002CB1", colorTarjetaHover: "#A2A0A0", colorLogoHover: "#002CB180", estadioWidth: "157px", estadioHeight: "58px"},
		{nombre: "FC Barcelona", escudo: "../public/escudos/barcelona.png", link: "../sections/equipos/barcelona.html", anoFundacion: 1899, estadio: "../public/estadis/fcbarcelona.png", colorTarjeta: "#00507F", colorTarjetaHover: "#9C2121", colorLogoHover: "#00507F80", estadioWidth: "157px", estadioHeight: "61px"},
		{nombre: "Getafe CF", escudo: "../public/escudos/getafe.png", link: "../sections/equipos/getafe.html", anoFundacion: 1983, estadio: "../public/estadis/getafe.png", colorTarjeta: "#002CB1", colorTarjetaHover: "#1c4581", colorLogoHover: "#9C2121", estadioWidth: "157px", estadioHeight: "55px"},
		{nombre: "Girona FC", escudo: "../public/escudos/girona.png", link: "../sections/equipos/girona.html", anoFundacion: 1930, estadio: "../public/estadis/girona.png", colorTarjeta: "#9C2121", colorTarjetaHover: "#B82A2A", colorLogoHover: "#CECECE", estadioWidth: "157", estadioHeight: "46px"},
		{nombre: "R. Vallecano", escudo: "../public/escudos/rayo.png", link: "../sections/equipos/rayo.html", anoFundacion: 1924, estadio: "../public/estadis/rayo.png", colorTarjeta: "#CF0000", colorTarjetaHover: "#9C2121", colorLogoHover: "#A2A0A0", estadioWidth: "157px", estadioHeight: "50px"},
		{nombre: "RC Celta", escudo: "../public/escudos/celta.png", link: "../sections/equipos/celta.html", anoFundacion: 1923, estadio: "../public/estadis/celta.png", colorTarjeta: "#00D4D6", colorTarjetaHover: "#0099A1", colorLogoHover: "#B1052D", estadioWidth: "156px", estadioHeight: "58px"},
		{nombre: "RCD Espanyol", escudo: "../public/escudos/espanyol.png", link: "../sections/equipos/espanyol.html", anoFundacion: 1900, estadio: "../public/estadis/espanyol.png", colorTarjeta: "#007FB1", colorTarjetaHover: "#00507F", colorLogoHover: "#bc0b14", estadioWidth: "157px", estadioHeight: "67px"},
		{nombre: "RCD Mallorca", escudo: "../public/escudos/mallorca.png", link: "../sections/equipos/mallorca.html", anoFundacion: 1916, estadio: "../public/estadis/mallorca.png", colorTarjeta: "#9C2121", colorTarjetaHover: "#B82A2A", colorLogoHover: "#c9b203", estadioWidth: "157px", estadioHeight: "53px"},
		{nombre: "Real Betis", escudo: "../public/escudos/betis.png", link: "../sections/equipos/betis.html", anoFundacion: 1907, estadio: "../public/estadis/betis.png", colorTarjeta: "#39A430", colorTarjetaHover: "#2D7F24", colorLogoHover: "#A2A0A0", estadioWidth: "157px", estadioHeight: "69px"},
		{nombre: "Real Madrid", escudo: "../public/escudos/real-madrid.png", link: "../sections/equipos/madrid.html", anoFundacion: 1902, estadio: "../public/estadis/madrid.png", colorTarjeta: "#002CB1", colorTarjetaHover: "#004FD6", colorLogoHover: "#A2A0A0", estadioWidth: "157px", estadioHeight: "61px"},
		{nombre: "Real Sociedad", escudo: "../public/escudos/real-sociedad.png", link: "../sections/equipos/real-soceidad.html", anoFundacion: 1909, estadio: "../public/estadis/realSociedad.png", colorTarjeta: "#004FD6", colorTarjetaHover: "#002CB1", colorLogoHover: "#c66d20", estadioWidth: "157px", estadioHeight: "44px"},
		{nombre: "R. Valladolid CF", escudo: "../public/escudos/valladolid.png", link: "../sections/equipos/valladolid.html", anoFundacion: 1928, estadio: "../public/estadis/valladolid.png", colorTarjeta: "#70009F", colorTarjetaHover: "#500070", colorLogoHover: "#147c49", estadioWidth: "156px", estadioHeight: "58px"},
		{nombre: "Sevilla FC", escudo: "../public/escudos/sevilla.png", link: "../sections/equipos/sevilla.html", anoFundacion: 1905, estadio: "../public/estadis/sevilla.png", colorTarjeta: "#CF0000", colorTarjetaHover: "#9C2121", colorLogoHover: "#ca7401", estadioWidth: "157px", estadioHeight: "60px"},
		{nombre: "UD Las Palmas", escudo: "../public/escudos/las-palmas.png", link: "../sections/equipos/las-palmas.html", anoFundacion: 1949, estadio: "../public/estadis/lasPalmas.png", colorTarjeta: "#FFD400", colorTarjetaHover: "#CCA500", colorLogoHover: "#03429f", estadioWidth: "157px", estadioHeight: "46px"},
		{nombre: "Valencia CF", escudo: "../public/escudos/valencia.png", link: "../sections/equipos/valecia.html", anoFundacion: 1919, estadio: "../public/estadis/valencia.png", colorTarjeta: "#000000", colorTarjetaHover: "#444444", colorLogoHover: "#9C2121", estadioWidth: "157px", estadioHeight: "65px"},
		{nombre: "Villarreal CF", escudo: "../public/escudos/villarreal.png", link: "../sections/equipos/villarreal.html", anoFundacion: 1923, estadio: "../public/estadis/villarreal.png", colorTarjeta: "#FFD400", colorTarjetaHover: "#CCA500", colorLogoHover: "#03429f", estadioWidth: "157px", estadioHeight: "65px"}
	];

	document.addEventListener("DOMContentLoaded", function () {
		const container = document.getElementById("equips-container");

		tarjetasEquipos.forEach(equipo => {
			const card = document.createElement("div");
			card.classList.add("card");
			card.style.backgroundColor = equipo.colorTarjeta;

			// Efecto hover
			card.addEventListener("mouseover", () => {
				card.style.backgroundColor = equipo.colorTarjetaHover;
				const svg = card.querySelector(".svg-logo path");
				if (svg) {
					svg.setAttribute("fill", equipo.colorLogoHover);
				}
			});

			card.addEventListener("mouseout", () => {
				card.style.backgroundColor = equipo.colorTarjeta;

				const svg = card.querySelector(".svg-logo path");
				if (svg) {
					if (equipo.nombre === "Valencia CF") {
						svg.setAttribute("fill", "#FFFFFF");
					} else
					svg.setAttribute("fill", "#000000");
				}
			});

			card.innerHTML = `
			<svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-logo">
			<path d="M2.91 25.173 20.332 0h16.854L15.497 30.861h14.08L7.675 42.026l-4.41-5.618C1.701 34.346.99 32.782.99 30.648c0-1.92.712-3.77 1.92-5.475zM17.203 51.2c0-1.778.712-3.698 1.99-5.547L51.265 0h18.56L33.841 51.2h16.213L24.882 64l-5.405-6.897c-1.493-1.92-2.275-3.84-2.275-5.902l.001-.002z"/>
			</svg>
			<div class="content">
			<div class="escudo-container">
			<img src="${equipo.escudo}" alt="${equipo.nombre}">
			</div>
			<p class="name-team-card">${equipo.nombre}</p>
			<p class="fundation-year-card">Fundació ${equipo.anoFundacion}</p>
			<img src="${equipo.estadio}" alt="Estadio de ${equipo.nombre}" style="width: ${equipo.estadioWidth}; height: ${equipo.estadioHeight}; margin-top: 3px;">
			<a href="${equipo.link}" class="link-team-card">Veuere fitxa ></a>
			</div>
			`;

			const svgPre = card.querySelector(".svg-logo path");
			if (svgPre) {
				if (equipo.nombre === "Valencia CF") {
					svgPre.setAttribute("fill", "#FFFFFF");
				}
				else
					svgPre.setAttribute("fill", "#000000");
			}
			container.appendChild(card);
		});
	});

fetch('../public/jugadors.json')
.then(response => response.json())
.then(data => {
  // Seleccionamos el contenedor donde se insertarán las tarjetas
  const contenedorEntrenadores = document.querySelector('.contenedor-entrenadores');
  const contenedorJugadores = document.querySelector('.contenedor-jugadores');
  const contenedorMainInfo = document.querySelector('.main-info');

  // Recorrer los equipos
  data.forEach(equipo => {
	// Crear tarjeta para el entrenador
	const tarjetaEntrenador = document.createElement('div');
	tarjetaEntrenador.classList.add('card-entrenador');
	tarjetaEntrenador.innerHTML = `
	  <div class="card-info-entrenador">
		<div class="nombre-equipo">
		  <h3>${equipo.entrenador.nomPersona}</h3>
		  <div class="escudo-pais">
			<img src="${equipo.escut}" alt="Escudo ${equipo.equip}">
			<p>${equipo.equip}</p>
		  </div>
		</div>
		<div class="nombre-equipo">
		  <h4>Entrenador</h4>
		  <div class="escudo-pais-2">
			<img src="${equipo.entrenador.bandera}" alt="" class="bandera">
			<h4>${equipo.entrenador.pais}</h4>
		  </div>
		</div>
	  </div>
	  <div class="foto-jugador">
		<img src="${equipo.entrenador.foto}" alt="${equipo.entrenador.nomPersona}">
	  </div>
	`;
	contenedorEntrenadores.appendChild(tarjetaEntrenador);

	equipo.jugadors.forEach(jugador => {
	  const tarjetaJugador = document.createElement('div');
	  tarjetaJugador.classList.add('card-jugador');
	  tarjetaJugador.innerHTML = `
		<div class="card-info">
		  <div class="dorsal">
			<h5>${jugador.dorsal}</h5>
		  </div>
		  <div class="nombre-equipo">
			<h3>${jugador.nomPersona}</h3>
			<div class="escudo-pais">
			  <img src="${equipo.escut}" alt="Escudo ${equipo.equip}">
			  <p>${equipo.equip}</p>
			</div>
		  </div>
		  <div class="nombre-equipo">
			<h4>${jugador.posicio}</h4>
			<div class="escudo-pais-2">
			  <img src="${jugador.bandera}" alt="" class="bandera">
			  <h4>${jugador.pais}</h4>
			</div>
		  </div>
		</div>
		<div class="foto-jugador">
		  <img src="${jugador.foto}" alt="${jugador.nomPersona}">
		</div>
	  `;
	  contenedorJugadores.appendChild(tarjetaJugador);
	});

	contenedorMainInfo.innerHTML = `
	  <div class="escudo-nombre">
		<img src="${equipo.escut}" alt="Escudo ${equipo.equip}" class="escudo-ficha">
		<h1 class="nombre-equipo-ficha">${equipo.equip}</h1>
	  </div>
	  <div class="datos">
		<div class="textos-container">
		  <div class="textos">
			<p>Any fundació:</p>
			<h3>${equipo.any}</h3>
		  </div>
		  <div class="textos">
			<p>Estadi:</p>
			<h3>${equipo.estadi}</h3>
		  </div>
		  <div class="textos">
			<p>President:</p>
			<h3>${equipo.president}</h3>
		  </div>
		  <div class="textos">
			<p>Web Oficial:</p>
			<a href="${equipo.web}">${equipo.web}</a>
		  </div>
		</div>
		<div class="redes-ficha">
		  <a href="${equipo.facebook}" target="_blank" class="footer-b">
			<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none">
			  <g clip-path="url(#a)">
				<path fill="#fff" d="M12.5 29.833C5.417 28.583 0 22.417 0 15 0 6.75 6.75 0 15 0s15 6.75 15 15c0 7.417-5.417 13.583-12.5 14.833l-.833-.666h-3.334l-.833.666Z"/>
				<path fill="#01598D" d="M20.833 19.167 21.5 15h-4v-2.917c0-1.166.417-2.083 2.25-2.083h1.917V6.167c-1.084-.167-2.25-.334-3.334-.334-3.416 0-5.833 2.084-5.833 5.834V15H8.75v4.167h3.75V29.75c.833.167 1.667.25 2.5.25s1.667-.083 2.5-.25V19.167h3.333Z"/>
			  </g>
			  <defs><clipPath id="a"><path fill="#fff" d="M0 0h30v30H0z"/></clipPath></defs>
			</svg>
		  </a>
		  <a href="${equipo.instagram}" target="_blank" class="footer-b">
			<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none">
			  <g clip-path="url(#a)">
				<path fill="#fff" d="M15 2.703c4.005 0 4.48.015 6.061.087 1.463.067 2.257.311 2.786.517.7.272 1.2.597 1.724 1.122.525.525.85 1.024 1.122 1.724.206.529.45 1.323.517 2.786.072 1.582.087 2.056.087 6.061s-.015 4.48-.087 6.061c-.067 1.463-.311 2.257-.517 2.786-.272.7-.597 1.2-1.122 1.724a4.645 4.645 0 0 1-1.724 1.122c-.529.206-1.323.45-2.786..."/>
			  </g>
			</svg>
		  </a>
		</div>
	  </div>
	`;
  });
})
.catch(error => console.error('Error al cargar el archivo JSON:', error));
