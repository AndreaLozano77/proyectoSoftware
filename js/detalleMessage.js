<<<<<<< HEAD
$(document).ready(function () {
=======
 $(document).ready(function () {
>>>>>>> 005e556df3923f4d7a1e51ca2ef5ea52eb52ec90
    console.log("document ready!");
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('id')){
        let id = searchParams.get('id')
        consultarById(id);
    }
});

function consultarById(id){
    $.ajax({
<<<<<<< HEAD
        url: "https://localhost:8080/api/Message"+id,
=======
        url: "http://localhost:8080/api/Message/"+id,
>>>>>>> 005e556df3923f4d7a1e51ca2ef5ea52eb52ec90
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){

            var length= 0;
            for(var key in respuesta) {
                if(respuesta.hasOwnProperty(key)){
                    length++;
                }
            }

            if (length>0){
                console.log(respuesta)
                llenarDatos(respuesta);
            }else{
                $("#boton").hide();
                alert('No se encuentra el mensaje con el id '+id);
            }
        },

        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function llenarDatos(item){
<<<<<<< HEAD
    $("#idMessage").val(item.idMessage);
    $("#messageText").val(item.messageText);
=======
    $("#id").val(item.id);
    $("#messagetext").val(item.messagetext);
>>>>>>> 005e556df3923f4d7a1e51ca2ef5ea52eb52ec90
} 