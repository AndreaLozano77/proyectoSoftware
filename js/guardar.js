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
        url: "http://localhost:8080/api/Computer/save",
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
        url: "http://localhost:8080/api/Client/save",
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
        url: "http://localhost:8080/api/Message/save",
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