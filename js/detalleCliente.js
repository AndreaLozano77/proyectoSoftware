$(document).ready(function () {
    console.log("document ready!");
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('id')){
        let id = searchParams.get('id')
        consultarById(id);
    }
});

function consultarById(id){
    $.ajax({

        url: "http://localhost:8080/api/Client/"+id,
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
                alert('No se encuentra el cliente con el id '+id);
            }
        },        
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function llenarDatos(item){
    +$("#idClient").val(item.id);
    $("#email").val(item.email);
    $("#password").val(item.password);
    $("#Clname").val(item.name);
    +$("#age").val(item.age);
} 
