//Este archivo es en donde haremos PUT
console.log("editar: ¡funciona!");
//=======================================
// EDITAR COMPUTER
//=======================================


function editarComputer(){
    console.log("ejecutando funcion para actualizar");

    let computer = {
        id: +$("#id").val(),
        brand: $("#brand").val(),
        model: +$("#model").val(),
        category_id: $("#category_id").val(),
        name: $("#name").val()
    };

    console.log(computer);

    $.ajax({
        url: "https://g8ed37e9b235013-computer.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/computer/computer",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(computer),
        statusCode:{
            201:function(){
                alert('Se ha actualizado el computador');
            }
        },
    });
}

//=======================================
// EDITAR CLIENTE
//=======================================


function editarClient(){
    console.log("ejecutando funcion para actualizar");

    let client = {
        id: +$("#id").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: +$("#age").val(),
    };

    console.log(client);

    $.ajax({
        url: "https://g8ed37e9b235013-computer.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(client),
        statusCode:{
            201:function(){
                alert('Se ha actualizado el cliente');
            }
        },
    });
}


//=======================================
// EDITAR MESSAGE
//=======================================


function editarMessage(){
    console.log("ejecutando funcion para actualizar");

    let message = {
        id: +$("#id").val(),
        messagetext: $("#messagetext").val(),

    };

    console.log(message);

    $.ajax({
        url: "https://g8ed37e9b235013-computer.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(message),
        statusCode:{
            201:function(){
                alert('Se ha actualizado el mensaje');
            }
        },
    });
}
