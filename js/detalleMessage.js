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
        url: "https://g8ed37e9b235013-computer.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message/"+id,
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta.items);
            if (respuesta.items.length==1){
                llenarDatos(respuesta.items[0]);
            }else{
                $("#boton").hide();
                alert('No se encuentra el message con el id '+id);
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function llenarDatos(item){
    $("#id").val(item.id);
    $("#messagetext").val(item.messagetext);
}