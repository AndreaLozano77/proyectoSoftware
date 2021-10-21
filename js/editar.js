/* //Este archivo es en donde haremos PUT
console.log("editar: ¡funciona!");
//=======================================
// EDITAR COMPUTER
//=======================================


function editarComputer(){
    console.log("ejecutando funcion para actualizar");

    let computer = {
        id: +$("#id").val(),
        name: $("#Cname").val(),
        brand: $("#brand").val(),
        year: +$("#year").val(),
        description: $("#description").val(),
    };

    console.log(computer);

    $.ajax({
        url: "http://localhost:8080/api/Computer/update",
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
        url: "http://",
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
        url: "http://",
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
 */