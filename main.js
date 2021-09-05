function pares(max) {
    var num = 2;
    for (var i = 1; i <= max; i++) {
        var b = num * i;
        console.log(b);
    }
}

pares(12);
pares(3);
pares(100);


function nombreCompleto(nombre,apellido) {
    alert(nombre+' '+apellido)
  
}

nombreCompleto ('Lupita','Luna')

function permiso(nombre,edad) {
    if (edad >= 18){
        console.log (nombre +'No tienes edad para solicitar tu permiso');
    }else
        console.log(nombre + 'Puedes tramitar tu permiso')
    }


permiso ('Lupita',16)
permiso ('Luna',30)

function obtenerPromedio(calificacion1,calificacion2,calificacion3,calificacion4,calificacion5){
    var suma=calificacion1+calificacion2+calificacion3+calificacion4+calificacion5;
    var promedio = suma/5
    alert (promedio)
    if (promedio>7) {
        console.log ("Estas Aprobado")
    }
}
