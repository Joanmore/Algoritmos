function saludo() {
  alert("Bienvenido usuario");
  alert(
    "A continuacion encontrarás unos botones que ejecuatn algoritmos realizados con JS puro");
}
function suma() {
  let A = 0;
  let B = 0;
  let SUMA = 0;

  A = parseInt(prompt("Por favor ingrese el primer valor a sumar"));
  B = parseInt(prompt("Por favor ingrese el segundo valor a sumar"));

  SUMA = A + B;

  alert("El resultado entre la suma de los dos valores es: " + SUMA);
}
function operaciones() {
  let A = 0;
  let B = 0;
  let SUMA = 0;
  let RESTA = 0;
  let MULTI = 0;
  let DIVISION = 0;

  A = parseInt(prompt("Por favor ingrese el primer valor a sumar,restar,multiplicar y dividir"));
  B = parseInt(prompt("Por favor ingrese el primer valor a sumar,restar,multiplicar y dividir"));

  SUMA = A + B;
  RESTA = A - B;
  MULTI = A * B;
  DIVISION = A / B;

  alert("\nEl resultado entre la suma de los dos valores es: " + SUMA);
  alert("\nEl resultado entre la resta de los dos valores es: " + RESTA);
  alert("\nEl resultado entre la multiplicacion de los dos valores es: " + MULTI);
  alert("\nEl resultado entre la division de los dos valores es: " + DIVISION);
}
function cuadrado() {
  let A = 0;
  let M = 0;
  A = parseInt(prompt("Por favor ingrese el numero "));

  M = A * A;

  alert("El cuadrado del numero es:  " + M);
}
function area() {
  let A = 0;
  let B = 0;
  let AREA = 0;
  const p = 2;

  A = parseInt(prompt("Por favor ingrese la altura del triangulo"));
  B = parseInt(prompt("Por favor ingrese la base del triangulo"));

  AREA = (A * B) / p;

  alert("El area del triangulo es: " + AREA);
}
function inversion() {
  let nombre;
  let capital = 0;
  let NA = 0;
  let descuento = 1.7*12;

  nombre = String(prompt("Ingrese el nombre del que inviersionista"));
  capital = parseInt(prompt("Ingrese el capital del individuo"));
  NA = parseInt(prompt("Ingrese cantidad de años"));

  let ganancia = (descuento * NA)*capital/100;
  let total = capital + ganancia;

  alert("\nEl nombre inversionista es:  " +nombre +"\nEl capiatl del inversionista es:  " +capital +"\nLos años que invirtio fueron:   " +NA +"\nY la ganancia que tuvo fue de :  " +ganancia+"\nY el total de la invercion fue de :  "+total);
}
function pnotas() {
  let nombre, materia, e;
  let n1, n2, n3, n4, n5, n6, n7;
  let P = 0;

  nombre = String(prompt("Por favor ingrese el nombre del estudiante"));
  materia = String(prompt("Por favor ingrese la materia del estudiante"));
  n1 = parseFloat(prompt("Ingrese primera nota del estudiante"));
  n2 = parseFloat(prompt("Ingrese segunda nota del estudiante"));
  n3 = parseFloat(prompt("Ingrese tercera nota del estudiante"));
  n4 = parseFloat(prompt("Ingrese cuarta nota del estudiante"));
  n5 = parseFloat(prompt("Ingrese quinta nota del estudiante"));
  n6 = parseFloat(prompt("Ingrese sexta nota del estudiante"));
  n7 = parseFloat(prompt("Ingrese septima nota del estudiante"));

  P = (n1 + n2 + n3 + n4 + n5 + n6 + n7) / 7;
  e = P;

  if (P <= 6.2) {

    alert("\nEl estudiante con el nombre: " +nombre +"\nCon la materia: " +materia +"\nCon la primera nota: " +n1 +"\nCon la segunda nota: " +n2 +"\nCon la tercra nota: " +n3 +"\nCon la cuarta nota: " +n4 +"\nCon la quinta nota: " +n5 +"\nCon la sexta nota: " +n6 +"\nCon la septima nota: " +n7 +"\nDonde Reprobo con : " +e);
  
  } else {
    
    alert("\nEl estudiante con el nombre: " +nombre +"\nCon la materia: " +materia +"\nCon la primera nota: " +n1 +"\nCon la segunda nota: " +n2 +"\nCon la tercra nota: " +n3 +"\nCon la cuarta nota: " +n4 +"\nCon la quinta nota: " +n5 +"\nCon la sexta nota: " +n6 +"\nCon la septima nota: " +n7 +"\nDonde Aprobo con : " +e);
  
  }
}
function mayorn() {
  let N1 = 0;
  let N2 = 0;

  N1 = parseInt(prompt("Por favor ingrese el primer numero"));
  N2 = parseInt(prompt("Por favor ingrese el segundo numero"));

  if (N1 == N2) {
    alert("Los numeros son iguales");
  } else if (N1 > N2) {
    alert("El mayor es: " + N1);
  } else {
    alert("El mayor es: " + N2);
  }
}
function menorn() {
  let N1 = 0;
  let N2 = 0;
  let N3 = 0;

  N1 = parseInt(prompt("Por favor ingrese el primer numero"));
  N2 = parseInt(prompt("Por favor ingrese el segundo numero"));
  N3 = parseInt(prompt("Por favor ingrese el tercer numero"));

  if ((N1 == N2) & (N1 == N3)) {
    alert("Los numeros son iguales");
  } else {
    let menor = Math.min(N1, N2, N3);
    alert("El numero menor es: " + menor);
  }
}
function kilos() {
  let precio = 4500;
  let nombre = String(prompt("Ingrese el nombre del cliente"));
  let cantidad = parseInt(prompt("Ingrese los kilos de la manzana del cliente"));
  let descuento = 0;

  if (cantidad <=2) {
    
    let subtotal = parseInt(precio*cantidad);
    descuento = parseInt(subtotal *(0/100));
    let total = subtotal - descuento;


    alert("\nEl nombre del cliente: " +nombre+"\nEl kilo de las manzanas es: " +cantidad+"\nNo tiene descuento: " +descuento +"\nSu subtotal es: "+subtotal+"\nY su total es: " +total);

  } else if (cantidad <=5) {
    let subtotal = parseInt(precio*cantidad);
    descuento = parseInt(subtotal *(10/100));
    let total = subtotal - descuento;

    alert("\nEl nombre del cliente es : " +nombre+"\nEl kilo de las manzanas es : " +cantidad+"\n Tiene un descuento del 10% : " +descuento+"\nSu subtotal es: "+subtotal+"\nY su total es: " +total);

  } else if (cantidad <=8) {
    let subtotal = parseInt(precio*cantidad);
    descuento = parseInt(subtotal *(16/100));
    let total = subtotal - descuento;

    alert("\nEl nombre del cliente: " +nombre+"\nEl numero manzanas es: " +cantidad+"\nY  tiene descuento del 16% : " +descuento+"\nSu subtotal es: "+subtotal+"\nY su total es: " +total);

  } else if (cantidad >= 9) {
    let subtotal = parseInt(precio*cantidad);
    descuento = parseInt(subtotal *(20/100));
    let total = subtotal - descuento;

    alert("\nEl nombre del cliente: " +nombre+"\nEl numero manzanas es: " +cantidad+"\nY  tiene descuento del 20%: " +descuento+"\nSu subtotal es: "+subtotal+"\nY su total es: " +total);

  }
}
