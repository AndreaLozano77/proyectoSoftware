//===============================================
// COMPUTER
//===============================================

function guardarComputer(){
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



//===============================================
// CLIENTE
//===============================================

function guardarClient(){
    let client = {
        id: +$("#idClient").val(),
        name:  $("#nameClient").val(),
        email: $("#email").val(),
        age: +$("#age").val()
    };

    console.log("voy a guardar", client);

    $.ajax({
        url: "https://g8ed37e9b235013-computer.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(client),
        statusCode:{
            201:function(){
                alert('Se ha registrado el cliente');
            }
        },
    });
}



//===============================================
// MESSAGE
//===============================================

function guardarMessage(){
    let messages = {
        id: +$("#idMessage").val(),
        messagetext:  $("#message").val()
    };

    console.log("voy a guardar", messages);

    $.ajax({
        url: "https://g8ed37e9b235013-computer.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(messages),
        statusCode:{
            201:function(){
                alert('Se ha registrado el mensaje');
            }
        },
    });
} 