function guardar(){
    let computador = {
        id: +$("#id").val(),
        brand:  $("#brand").val(),
        model: +$("#model").val(),
        category_id: $("#category_id").val(),
        name: $("#name").val()
    };

    console.log("voy a guardar", computador);

    $.ajax({
        url: "https://g8ed37e9b235013-computer.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/computer/computer",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(computador),
        statusCode:{
            201:function(){
                alert('Se ha registrado el computador');
            }
        },
    });
}