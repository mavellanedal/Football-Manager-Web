
function mostrarCamposExtras() {
	var tipus = document.getElementById("tipus").value;
	var extraFields = document.getElementById("jugadorFields");
	if (tipus === "Jugador") {
		extraFields.classList.remove("ocult");
	} else {
		extraFields.classList.add("ocult");
	}
}
