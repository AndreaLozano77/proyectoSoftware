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
function guardarClient(){
    let client = {
        idClient: +$("#idClient").val(),
        nameClient:  $("#nameClient").val(),
        email: $("#email").val(),
        age: $("#age").val()
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

function guardarMessage(){
    let messages = {
        idMessage: +$("#idMessage").val(),
        message:  $("#message").val()
    };

    console.log("voy a guardar", messages);

    $.ajax({
        url: "https://gacf52a546b7955-computer.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
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