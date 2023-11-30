/* cre amos una funcion para enviar valores a nuestro input */
function agregar(valor) {
    document.getElementById('pantalla').value += valor; //.value += valor es lo mismo que decir que/valor = value + valor
                                                        //El .value lo vamos autiñlizar para enviar un valor al input
}; 


/*ahora hay que crear una funcion para borrar los valos que introduscamos al input */
function borrar() {
    document.getElementById('pantalla').value = '';
};

/*ahora hay que crear la funcion calcular para poder hacer nuestars operaciones */

function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla); //eval e sun metodo propio de javascript el cual va agarrar un string y calcularlo matematicamente
    document.getElementById('pantalla').value = resultado;
};




