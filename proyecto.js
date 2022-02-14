//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%
var propiedades_recargo = 0.35

var propiedades = 0
var cantidadPropiedades = 0

var salario = 0
var cantidad_salario = 0
var salario_recargo = 0.05
var continuar = 0 //para continuar con cotizaciones
//Recargo
var recargo = 0
var recargo_total = 0

//Precio final 
var precio_final = 0
while (continuar !== "SALIR"){
	//Mensajes de alerta para ingresar datos 
	var nombre = prompt("Ingrese su nombre, por favor")
	var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
	
	var casado = prompt("¿Está casado actualmente?")
	//Comprobamos la edad del cónyuge, solamente si se está casado/a
	var edad_conyuge
	if("SI" == casado.toUpperCase()){
  	edad_conyuge = prompt("¿Que edad tiene su esposo/a?", "si/no")
	}
	//convirtiendo las edades ingresadas a números 
	var edad_numero = parseInt(edad)
	var edad_conyuge_numero = 0
	//convirtiendo la edad del cónyuge si se esta casado/a
	if("SI" == casado.toUpperCase()){
	  edad_conyuge_numero = parseInt(edad_conyuge)
	}
	
	var hijos = prompt("¿Tiene hijos o hijas?")
	var tien_hijos = false
	//Comprobamos la cantidad de hijos solamente si los tienen
	if ("SI" == hijos.toUpperCase()) {
		tien_hijos = true
		var cantidad_hijos = prompt("Cuantos hijos tiene")
		cantidad_hijos = parseInt(cantidad_hijos)
	}
	propiedades = prompt("¿Tiene propiedades a su nombre")
	if ("SI" == propiedades.toUpperCase()) {
		cantidadPropiedades = prompt("Cuántas propiedades tiene a su nombre")
		cantidadPropiedades = parseInt(cantidadPropiedades)
		recargo = cantidadPropiedades * precio_base * propiedades_recargo
		recargo_total = recargo_total + recargo
	}
	salario = prompt("Cuenta con un salario fijo?")
	if ("SI" == salario.toUpperCase()) {
		cantidad_salario = prompt("De cuanto es su ingreso salarial?")
		cantidad_salario = parseInt(cantidad_salario)
		recargo = cantidad_salario * salario_recargo
		recargo_total = recargo_total + recargo
	}
	/**
	 * 1. convierta la cantidad de hijos a numero
	 */

	//Aquí debe calcular el recargo total basado en las respuestas ingresadas
	
	//Aquí es donde debe de calcular los recargos y el valor final
	//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
	if(edad_numero>=18 && edad_numero<25){
	  //Calculamos el recargo en base a la edad 
	  recargo = precio_base * edad_18
	  //Sumamos todos los recargos que hemos obtenido
	  recargo_total = recargo_total + recargo
	}
	else if(edad_numero>=25 && edad_numero<=49){
		recargo = precio_base * edad_25
		recargo_total = recargo_total + recargo
	}
	else if (edad_numero>49) {
		recargo = precio_base * edad_50
		recargo_total = recargo_total + recargo
	}
	 console.log(recargo)
//aqui puede colocar un else if() con el siguiente rango

/** 
 * 2. Recargo por la edad del conyuge
 */
	 if(edad_conyuge_numero>=18 && edad_conyuge_numero<=24){
	 	recargo = precio_base * casado_18
	 	recargo_total = recargo_total + recargo
	 }
	 else if (edad_conyuge_numero>=25 && edad_conyuge_numero<=49) {
	 	recargo = precio_base * casado_25
	 	recargo_total = recargo_total + recargo
	 }
	 else if (edad_conyuge_numero>49) {
	 	recargo = precio_base * casado_50
	 	recargo_total = recargo_total + recargo
	 }
	 console.log(recargo)
/**
 * 3. Recargo por la cantidad de hijos 
 */ 
	if (tien_hijos == true) {
		recargo = (precio_base * hijos_recargo) * cantidad_hijos
		recargo_total = recargo_total + recargo
		console.log(recargo)
	}
	precio_final = precio_base + recargo_total
//Resultado
	alert ("Para el asegurado "+nombre)
	alert ("El recargo total sera de: "+recargo_total)
	alert ("El precio sera de: "+precio_final)

	continuar = prompt("Si no necesita realizar otra cotización escriba Salir de lo contrario presione aceptar")
	continuar = continuar.toUpperCase()
	recargo = 0
	recargo_total = 0
	precio_final = 0
}

