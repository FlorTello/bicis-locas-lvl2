function crearTooltip(mensaje){
  var span = document.createElement('span');
  span.setAttribute('class','tooltipp active');
  span.innerHTML = mensaje;
  return span;
}
window.addEventListener('load',function(){
  document.getElementById('div-name').appendChild(crearTooltip('Debe ingresar su nombre'));
  document.getElementById('div-lastname').appendChild(crearTooltip('Debe ingresar su Apellido'));
  document.getElementById('div-email').appendChild(crearTooltip('Debe ingresar su correo'));
  document.getElementById('div-password').appendChild(crearTooltip('La contrseña debe tener al menos 6 caracteres'));
  document.getElementById('div-bicis').appendChild(crearTooltip('Debe seleccionar al menos una Bici'));
});
function validateForm(){
	/* Escribe tú código aquí */
  var span = crearTooltip('');
  var name = document.getElementById('name');
	var lastname = document.getElementById('lastname');
	var email = document.getElementById('input-email');
	var password = document.getElementById('input-password');
	var opcion = document.getElementsByClassName('form-control')[4];
	//Expresiones Regulares
	var ExpNombre = /([A-ZÁÉÍÓÚ][a-zñáéíóú]+[\s]*)+$/;
	var ExpEmail = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;

  if(name.value == "" || ExpNombre.test(name.value) == false ){
    ocultarTooltip();
    span.textContent = "La primera letra debe empezar con mayuscula";
    document.getElementById('div-name').appendChild(span);
		name.focus();
	}
	else if(lastname.value == "" || ExpNombre.test(lastname.value) == false){
    ocultarTooltip();
    span.textContent = "La primera letra debe empezar con mayuscula";
    document.getElementById('div-lastname').appendChild(span);
    lastname.focus();
	}
  else if(email.value == "" || !ExpEmail.test(email.value)){
    ocultarTooltip();
    span.textContent = "El Email debe ser Valido Ejm. name@domain.com \n ";
    document.getElementById('div-email').appendChild(span);
    email.focus();
	}
	else if(password.value == "" || password.value.length < 6 || password.value == '123456' || password.value == '098754' || password.value == 'password'){
    ocultarTooltip();
    span.textContent = "El Password debe tener al menos 6 caracteres o diferente\n";
    document.getElementById('div-password').appendChild(span);
    password.focus();
	}
	else if(opcion.value == 0){
    ocultarTooltip();
    span.textContent = "Debe seleccionar una Bici\n";
    document.getElementById('div-bicis').appendChild(span);
		opcion.focus();
	}
  else {
    ocultarTooltip();
  }
}

function ocultarTooltip(){ Oculta y Remueve los nodos tooltip
  var arrayTooltip = document.getElementsByClassName('tooltipp');
  for (var i = 0; i < arrayTooltip.length; i++) {
    arrayTooltip[i].setAttribute('class','tooltipp unactive');
    arrayTooltip[i].parentNode.removeChild(arrayTooltip[i]);
  }
}
