const tarjetasEquipos = [
	{nombre: "Athletic Club", escudo: "../public/escudos/athletic.png", param: "7", anoFundacion: 1898, estadio: "../public/estadis/bilbao.png", colorTarjeta: "#9C2121", colorTarjetaHover: "#CECECE", colorLogoHover: "#9C212180", estadioWidth: "158px", estadioHeight: "61px"},
	{nombre: "Atl. de Madrid", escudo: "../public/escudos/atletico-madrid.png", param: "2", anoFundacion: 1903, estadio: "../public/estadis/atl-madrid.png", colorTarjeta: "#CF0000", colorTarjetaHover: "#00507F", colorLogoHover: "#CF000080", estadioWidth: "157px", estadioHeight: "51px"},
	{nombre: "CA Osasuna", escudo: "../public/escudos/osasuna.png", param: "13", anoFundacion: 1920, estadio: "../public/estadis/ossasuna.png", colorTarjeta: "#9C2121", colorTarjetaHover: "#16284c", colorLogoHover: "#9C212180", estadioWidth: "156px", estadioHeight: "84px"},
	{nombre: "CD Leganés", escudo: "../public/escudos/leganes.png", param: "17", anoFundacion: 1928, estadio: "../public/estadis/leganes.png", colorTarjeta: "#002CB1", colorTarjetaHover: "#CECECE", colorLogoHover: "#002CB180", estadioWidth: "157px", estadioHeight: "57px"},
	{nombre: "Dep. Alavés", escudo: "../public/escudos/alaves.png", param: "20", anoFundacion: 1921, estadio: "../public/estadis/alaves.png", colorTarjeta: "#002CB1", colorTarjetaHover: "#A2A0A0", colorLogoHover: "#002CB180", estadioWidth: "157px", estadioHeight: "58px"},
	{nombre: "FC Barcelona", escudo: "../public/escudos/barcelona.png", param: "0", anoFundacion: 1899, estadio: "../public/estadis/fcbarcelona.png", colorTarjeta: "#00507F", colorTarjetaHover: "#9C2121", colorLogoHover: "#00507F80", estadioWidth: "157px", estadioHeight: "61px"},
	{nombre: "Getafe CF", escudo: "../public/escudos/getafe.png", param: "14", anoFundacion: 1983, estadio: "../public/estadis/getafe.png", colorTarjeta: "#002CB1", colorTarjetaHover: "#1c4581", colorLogoHover: "#9C2121", estadioWidth: "157px", estadioHeight: "55px"},
	{nombre: "Girona FC", escudo: "../public/escudos/girona.png", param: "12", anoFundacion: 1930, estadio: "../public/estadis/girona.png", colorTarjeta: "#9C2121", colorTarjetaHover: "#B82A2A", colorLogoHover: "#CECECE", estadioWidth: "157", estadioHeight: "46px"},
	{nombre: "R. Vallecano", escudo: "../public/escudos/rayo.png", param: "19", anoFundacion: 1924, estadio: "../public/estadis/rayo.png", colorTarjeta: "#CF0000", colorTarjetaHover: "#9C2121", colorLogoHover: "#A2A0A0", estadioWidth: "157px", estadioHeight: "50px"},
	{nombre: "RC Celta", escudo: "../public/escudos/celta.png", param: "10", anoFundacion: 1923, estadio: "../public/estadis/celta.png", colorTarjeta: "#00D4D6", colorTarjetaHover: "#0099A1", colorLogoHover: "#B1052D", estadioWidth: "156px", estadioHeight: "58px"},
	{nombre: "RCD Espanyol", escudo: "../public/escudos/espanyol.png", param: "16", anoFundacion: 1900, estadio: "../public/estadis/espanyol.png", colorTarjeta: "#007FB1", colorTarjetaHover: "#00507F", colorLogoHover: "#bc0b14", estadioWidth: "157px", estadioHeight: "67px"},
	{nombre: "RCD Mallorca", escudo: "../public/escudos/mallorca.png", param: "11", anoFundacion: 1916, estadio: "../public/estadis/mallorca.png", colorTarjeta: "#9C2121", colorTarjetaHover: "#B82A2A", colorLogoHover: "#c9b203", estadioWidth: "157px", estadioHeight: "53px"},
	{nombre: "Real Betis", escudo: "../public/escudos/betis.png", param: "6", anoFundacion: 1907, estadio: "../public/estadis/betis.png", colorTarjeta: "#39A430", colorTarjetaHover: "#2D7F24", colorLogoHover: "#A2A0A0", estadioWidth: "157px", estadioHeight: "69px"},
	{nombre: "Real Madrid", escudo: "../public/escudos/real-madrid.png", param: "1", anoFundacion: 1902, estadio: "../public/estadis/madrid.png", colorTarjeta: "#002CB1", colorTarjetaHover: "#004FD6", colorLogoHover: "#A2A0A0", estadioWidth: "157px", estadioHeight: "61px"},
	{nombre: "Real Sociedad", escudo: "../public/escudos/real-sociedad.png", param: "14", anoFundacion: 1909, estadio: "../public/estadis/realSociedad.png", colorTarjeta: "#004FD6", colorTarjetaHover: "#002CB1", colorLogoHover: "#c66d20", estadioWidth: "157px", estadioHeight: "44px"},
	{nombre: "R. Valladolid CF", escudo: "../public/escudos/valladolid.png", param: "18", anoFundacion: 1928, estadio: "../public/estadis/valladolid.png", colorTarjeta: "#70009F", colorTarjetaHover: "#500070", colorLogoHover: "#147c49", estadioWidth: "156px", estadioHeight: "58px"},
	{nombre: "Sevilla FC", escudo: "../public/escudos/sevilla.png", param: "4", anoFundacion: 1905, estadio: "../public/estadis/sevilla.png", colorTarjeta: "#CF0000", colorTarjetaHover: "#9C2121", colorLogoHover: "#ca7401", estadioWidth: "157px", estadioHeight: "60px"},
	{nombre: "UD Las Palmas", escudo: "../public/escudos/las-palmas.png", param: "15", anoFundacion: 1949, estadio: "../public/estadis/lasPalmas.png", colorTarjeta: "#FFD400", colorTarjetaHover: "#CCA500", colorLogoHover: "#03429f", estadioWidth: "157px", estadioHeight: "46px"},
	{nombre: "Valencia CF", escudo: "../public/escudos/valencia.png", param: "9", anoFundacion: 1919, estadio: "../public/estadis/valencia.png", colorTarjeta: "#000000", colorTarjetaHover: "#444444", colorLogoHover: "#9C2121", estadioWidth: "157px", estadioHeight: "65px"},
	{nombre: "Villarreal CF", escudo: "../public/escudos/villarreal.png", param: "8", anoFundacion: 1923, estadio: "../public/estadis/villarreal.png", colorTarjeta: "#FFD400", colorTarjetaHover: "#CCA500", colorLogoHover: "#03429f", estadioWidth: "157px", estadioHeight: "65px"}
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
			<a href="../sections/equipos/fichaEquip.html?team=${equipo.param}" class="link-team-card">Veuere fitxa ></a>
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
