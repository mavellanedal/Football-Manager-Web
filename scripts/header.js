function toggleSidebar() {
	const sidebar = document.getElementById("sidebar");
	sidebar.classList.toggle("open");
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
				<img src="${equip.escudo}" alt="${equip.nombre}">
				${equip.nombre}
			</a>
		`;
		submenu.appendChild(li);
	});
}
