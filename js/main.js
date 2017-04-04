//Todos los inputs a validar
var textInputs = document.getElementsByTagName('input');
//Validando el input de ombre
textInputs[0].addEventListener('blur',function(e){
  var ExpNombre = /([A-ZÁÉÍÓÚ][a-zñáéíóú]+[\s]*)+$/;
  validarInputText(textInputs[0],ExpNombre);
});
//Validando el input de Apellido
textInputs[1].addEventListener('blur',function(e){
  var ExpNombre = /([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
  validarInputText(textInputs[1],ExpNombre);
});
//validando el input de email
textInputs[2].addEventListener('blur',function(e){
  ocultarTooltip();
  var ExpEmail = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
  var span = crearTooltip('');
  if(this.value == "" || !ExpEmail.test(this.value)){
    span.textContent = "El Email debe ser Valido Ejm. name@domain.com \n ";
    this.parentNode.appendChild(span);
    this.focus();
	}
  else{
    ocultarTooltip();
  }
});
//Validando el input de Password
textInputs[3].addEventListener('blur',function(){
  ocultarTooltip();
  var span = crearTooltip('');
  if(this.value == "" || this.value.length < 6 || this.value == '123456' || this.value == '098754' || this.value == 'password'){
    span.textContent = "El Password debe tener al menos 6 caracteres o diferente\n";
    this.parentNode.appendChild(span);
    this.focus();
  }
  else{
    ocultarTooltip();
  }
});

//Función para validdar el nombre o apellido primera letra con mayuscula Ejemplo (Ana Maria);
function validarInputText(inputText,ExpReg){
    var span = crearTooltip('');
    // Valida que cada palabra empiece con mayuscula ejemplo Maria Rosa
    if( inputText.value == "" || ExpReg.test(inputText.value) == false ||
        inputText.value.split(' ').map((e,i) =>  e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()).join('') !== inputText.value.split(' ').join('')){
      ocultarTooltip();
      span.textContent = "La primera letra de cada palabra debe empezar con mayuscula";
      inputText.parentNode.appendChild(span);
      inputText.focus();
    }
    else{
      ocultarTooltip();
      return true;
    }
}
//Función para crear Span de Errores
function crearTooltip(mensaje){
  var span = document.createElement('span');
  span.setAttribute('class','tooltipp active');
  span.innerHTML = mensaje;
  return span;
}
//Función para ocultar y eliminar span de errores
function ocultarTooltip(){
  var arrayTooltip = document.getElementsByClassName('tooltipp');
  for (var i = 0; i < arrayTooltip.length; i++) {
    arrayTooltip[i].setAttribute('class','tooltipp unactive');
    arrayTooltip[i].parentNode.removeChild(arrayTooltip[i]);
  }
}
//Función que se ejecuta en el evento click del boton Registrar
function validateForm(){
  var span = crearTooltip('');//creando Tootip Vacio paa modificar textContent
  var opcion = document.getElementsByClassName('form-control')[4];
  //Expresiones Regulares
  var ExpEmail = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
  ocultarTooltip();
  //Validando Que todos los datos no esten vacios antes de envíar a registrar
  if(textInputs[0].value == "" && textInputs[1].value == "" && textInputs[2].value == "" && textInputs[3].value == "" && opcion.value == 0){
    document.getElementsByTagName('div')[9].append(crearTooltip('Debe llenar todos los datos'));
    textInputs[0].focus();
  }
  else if(opcion.value == 0){ //Validando la selección de al menos una bicicleta
    ocultarTooltip();
    span.textContent = "Debe seleccionar una Bici\n";
    document.getElementById('div-bicis').appendChild(span);
  	opcion.focus();
  }
  else {
    ocultarTooltip();
    document.getElementsByTagName('div')[9].append(crearTooltip('Datos Correctos :D'));
  }
}
