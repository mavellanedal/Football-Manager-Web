document.getElementById('imatge').addEventListener('change', function(event) {
	const file = event.target.files[0];
	if (file) {
		const reader = new FileReader();

		reader.onload = function(e) {
			const imgElement = document.getElementById('avatar');
			imgElement.classList.add('avatar-uploaded');

			imgElement.src = e.target.result;
		};

		reader.readAsDataURL(file);
	}

});

document.getElementById('tipus').addEventListener('change', function() {
	const tipusField = document.getElementById('tipus');
	const optionalFields = document.querySelectorAll('.optional');

	// Eliminar la clase 'optional' cuando se selecciona "Jugador"
	if (tipusField.value === "Entrenador") {
		optionalFields.forEach(function(optionalField) {
			optionalField.style.display = 'none'; // Ocultar los campos
		});
	}

	// Añadir la clase 'optional' cuando se selecciona "Entrenador"
	if (tipusField.value === "Jugador") {
		optionalFields.forEach(function(optionalField) {
			optionalField.style.display = 'block'; // Mostrar los campos
		});
	}
});
