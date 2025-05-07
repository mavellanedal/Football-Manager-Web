document.addEventListener("DOMContentLoaded", function () {
	fetch('../../scripts/jugadors.json')
		.then(response => response.json())
		.then(data => {
			const contenedorEntrenadores = document.getElementById('cards-entrenadores');
			const contenedorPorters = document.getElementById('cards-porters');
			const contenedorDefenses = document.getElementById('cards-defenses');
			const contenedorCentrecampistes = document.getElementById('cards-centrecampistes');
			const contenedorDavanters = document.getElementById('cards-devanters');
			const contenedorMainInfo = document.getElementById('main-info');

			const urlParams = new URLSearchParams(window.location.search);
			const id = urlParams.get('team');

			if (!data[id]) {
				console.error("Equipo no encontrado");
				return;
			}

			contenedorMainInfo.innerHTML = `
				<div class="escudo-nombre">
					<img src="${data[id].escut}" alt="Escudo del ${data[id].equip}" class="escudo-ficha">
					<h1 class="nombre-equipo-ficha">${data[id].equip}</h1>
				</div>
				<div class="datos">
					<div class="textos-container">
						<div class="textos">
							<p>Any fundació:</p>
							<h3>${data[id].any}</h3>
						</div>
						<div class="textos">
							<p>Estadi:</p>
							<h3>${data[id].estadi}</h3>
						</div>
						<div class="textos">
							<p>President:</p>
							<h3>${data[id].president}</h3>
						</div>
						<div class="textos">
							<p>Web Oficial:</p>
							<a href="${data[id].web}" target="_blank">${data[id].web}</a>
						</div>
						<div></div>
						<div class="redes-ficha">
							<a href="${data[id].facebook}" target="_blank" class="footer-b">
								<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none"><g clip-path="url(#a)"><path fill="#fff" d="M12.5 29.833C5.417 28.583 0 22.417 0 15 0 6.75 6.75 0 15 0s15 6.75 15 15c0 7.417-5.417 13.583-12.5 14.833l-.833-.666h-3.334l-.833.666Z"/><path fill="#01598D" d="M20.833 19.167 21.5 15h-4v-2.917c0-1.166.417-2.083 2.25-2.083h1.917V6.167c-1.084-.167-2.25-.334-3.334-.334-3.416 0-5.833 2.084-5.833 5.834V15H8.75v4.167h3.75V29.75c.833.167 1.667.25 2.5.25s1.667-.083 2.5-.25V19.167h3.333Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h30v30H0z"/></clipPath></defs></svg>
							</a>
							<a href="${data[id].instagram}" target="_blank" class="footer-b">
								<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none"><g clip-path="url(#a)"><path fill="#fff" d="M15 2.703c4.005 0 4.48.015 6.061.087 1.463.067 2.257.311 2.786.517.7.272 1.2.597 1.724 1.122.525.525.85 1.024 1.122 1.724.206.529.45 1.323.517 2.786.072 1.582.087 2.056.087 6.061s-.015 4.48-.087 6.061c-.067 1.463-.311 2.257-.517 2.786-.272.7-.597 1.2-1.122 1.724a4.645 4.645 0 0 1-1.724 1.122c-.529.206-1.323.45-2.786.517-1.581.072-2.056.087-6.061.087s-4.48-.015-6.061-.087c-1.463-.067-2.257-.311-2.786-.517-.7-.272-1.2-.597-1.724-1.122a4.648 4.648 0 0 1-1.122-1.724c-.206-.529-.45-1.323-.517-2.786-.072-1.581-.087-2.056-.087-6.061s.015-4.48.087-6.061c.067-1.463.311-2.257.517-2.786.272-.7.597-1.2 1.122-1.724a4.648 4.648 0 0 1 1.724-1.122c.529-.206 1.323-.45 2.786-.517 1.581-.072 2.056-.087 6.061-.087ZM15 0c-4.074 0-4.585.017-6.184.09-1.597.073-2.688.327-3.642.697a7.352 7.352 0 0 0-2.656 1.73 7.352 7.352 0 0 0-1.73 2.657C.417 6.13.163 7.22.09 8.816.017 10.416 0 10.926 0 15s.017 4.585.09 6.184c.073 1.597.327 2.688.697 3.642a7.35 7.35 0 0 0 1.73 2.657 7.351 7.351 0 0 0 2.657 1.73c.955.37 2.045.624 3.641.697 1.6.073 2.111.09 6.185.09s4.585-.017 6.184-.09c1.597-.073 2.687-.327 3.642-.698a7.35 7.35 0 0 0 2.656-1.73 7.352 7.352 0 0 0 1.73-2.656c.371-.955.625-2.045.698-3.641.073-1.6.09-2.111.09-6.185s-.017-4.585-.09-6.184c-.073-1.597-.327-2.687-.698-3.641a7.352 7.352 0 0 0-1.73-2.657 7.35 7.35 0 0 0-2.656-1.73C23.87.417 22.78.163 21.184.09 19.584.017 19.075 0 15 0Zm0 7.297a7.703 7.703 0 1 0 0 15.406 7.703 7.703 0 0 0 0-15.406ZM15 20a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm9.807-13.007a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h30v30H0z"/></clipPath></defs></svg>
							</a>
							<a href="${data[id].twitter}" target="_blank" class="footer-b">
								<svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" fill="none"><path fill="#fff" d="M18.45 12.703 29.99 0h-2.735l-10.02 11.03L9.23 0H0l12.103 16.679L0 30h2.735l10.582-11.648L21.769 30H31L18.448 12.703h.001Zm-3.747 4.123-1.226-1.66L3.72 1.95h4.2l7.875 10.665 1.226 1.66L27.256 28.14h-4.2l-8.353-11.312v-.001Z"/></svg>
							</a>
						</div>
					</div>
					<div class="estadi-container">
						<img src="${data[id].estadiImatge}" alt="Estadi del ${data[id].equip}" class="estadi-ficha">
						<svg width="25%" height="25%" viewBox="0 0 64 64" fill="#ffa500" xmlns="http://www.w3.org/2000/svg" class="svg-logo">
							<path d="M2.91 25.173 20.332 0h16.854L15.497 30.861h14.08L7.675 42.026l-4.41-5.618C1.701 34.346.99 32.782.99 30.648c0-1.92.712-3.77 1.92-5.475zM17.203 51.2c0-1.778.712-3.698 1.99-5.547L51.265 0h18.56L33.841 51.2h16.213L24.882 64l-5.405-6.897c-1.493-1.92-2.275-3.84-2.275-5.902l.001-.002z"/>
						</svg>
					</div>
				</div>
			`;

			data[id].jugadors.forEach(jugador => {
				let contenedor;
				switch (jugador.posicio) {
					case "Porter":
					case "Segon Porter":
					case "Tercer Porter":
						contenedor = contenedorPorters;
						break;
					case "Defensa":
						contenedor = contenedorDefenses;
						break;
					case "Migcampista":
						contenedor = contenedorCentrecampistes;
						break;
					case "Davanter":
						contenedor = contenedorDavanters;
						break;
					default:
						return;
				}

				contenedor.innerHTML += `
					<div class="card-jugador">
						<div class="card-info">
							<div class="dorsal">
								<h5>${jugador.dorsal}</h5>
							</div>
							<div class="nombre-equipo">
								<h3>${jugador.nomPersona}</h3>
								<div class="escudo-pais">
									<img src="${data[id].escut}" alt="Escut del ${data[id].equip}">
									<p>${data[id].equip}</p>
								</div>
							</div>
							<div class="nombre-equipo">
								<h4>${jugador.posicio}</h4>
								<div class="escudo-pais-2">
									<img src="${jugador.bandera}" alt="Bandera de ${jugador.pais}" class="bandera">
									<h4>${jugador.pais}</h4>
								</div>
							</div>
						</div>
						<div class="foto-jugador">
							<img src="${jugador.foto}" alt="Foto de ${jugador.nomPersona}">
						</div>
					</div>
				`;
			});

			data[id].entrenadors.forEach(entrenador => {
				contenedorEntrenadores.innerHTML += `
						<div class="card-entrenador">
							<div class="card-info-entrenador">
								<div class="nombre-equipo">
									<h3>${entrenador.nomPersona}</h3>
									<div class="escudo-pais">
										<img src=${data[id].escut} alt="Escudo del ${data[id].equip}">
										<p>${data[id].equip}</p>
									</div>
								</div>
								<div class="nombre-equipo">
									<h4>${entrenador.rangoEntrenador}</h4>
									<div class="escudo-pais-2">
										<img src="${entrenador.bandera}" alt="Bandera de ${entrenador.pais}" class="bandera">
										<h4>${entrenador.pais}</h4>
									</div>
								</div>
							</div>
							<div class="foto-jugador">
								<img src="${entrenador.foto}" alt="Foto de ${entrenador.nomPersona}">
							</div>
						</div>
					`;
			});
		})
		.catch(error => console.error('Error al cargar los datos:', error));
});
