<<<<<<< HEAD
//Este archivo es en donde haremos PUT
=======
>>>>>>> 005e556df3923f4d7a1e51ca2ef5ea52eb52ec90
console.log("editar: ¡funciona!");

//=======================================
// EDITAR CATEGORIA
//=======================================


function editarCategoria(){
    console.log("ejecutando funcion para actualizar");

    let categoria = {
<<<<<<< HEAD
        id: +$("#id").val(),
=======
        id: +$("#Catid").val(),
>>>>>>> 005e556df3923f4d7a1e51ca2ef5ea52eb52ec90
        name: $("#Catname").val(),
        description: $("#Catdescription").val(),
    };

    console.log(categoria);

    $.ajax({
<<<<<<< HEAD
        // url: "http://129.151.119.152:8080/api/Category/update",
=======
>>>>>>> 005e556df3923f4d7a1e51ca2ef5ea52eb52ec90
        url: "http://localhost:8080/api/Category/update",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(categoria),
        statusCode:{
            201:function(){
                alert('Se ha actualizado la categoria');
            }
        },
    });
}
<<<<<<< HEAD

=======
>>>>>>> 005e556df3923f4d7a1e51ca2ef5ea52eb52ec90
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
        // url: "http://129.151.119.152:8080/api/Computer/update",
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
<<<<<<< HEAD
        id: +$("#idClient").val(),
=======
        idClient: +$("#id").val(),
>>>>>>> 005e556df3923f4d7a1e51ca2ef5ea52eb52ec90
        email: $("#email").val(),
        password: $("#password").val(),
        name: $("#Clname").val(),
        age: +$("#age").val(),
    };

    console.log(client);

    $.ajax({
<<<<<<< HEAD
        // url: "http://129.151.119.152:8080/api/Client/update",
=======
>>>>>>> 005e556df3923f4d7a1e51ca2ef5ea52eb52ec90
        url: "http://localhost:8080/api/Client/update",
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
        id: +$("#idMessage").val(),
        messagetext: $("#messageText").val(),

    };

    console.log(message);

    $.ajax({
<<<<<<< HEAD
        // url: "http://129.151.119.152:8080/api/Message/update",
=======
>>>>>>> 005e556df3923f4d7a1e51ca2ef5ea52eb52ec90
        url: "http://localhost:8080/api/Message/update",
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

<<<<<<< HEAD
//=======================================
// EDITAR RESERVATION
//=======================================


function editarReservation(){
    console.log("ejecutando funcion para actualizar");

    let reservacion = {
        id: +$("#id").val(),
        messagetext: $("#messagetext").val(),

    };

    console.log(reservacion);

    $.ajax({
        // url: "http://129.151.119.152:8080/api/Reservation/update",
=======

//=======================================
// EDITAR RESERVA
//=======================================


function editarReservacion(){
    console.log("ejecutando funcion para actualizar");

    let reserva = {
        date: +$("#date").val(),
        dateDev: $("#messagetext").val(),

    };

    console.log(reserva);

    $.ajax({
>>>>>>> 005e556df3923f4d7a1e51ca2ef5ea52eb52ec90
        url: "http://localhost:8080/api/Reservation/update",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
<<<<<<< HEAD
        data: JSON.stringify(reservacion),
=======
        data: JSON.stringify(reserva),
>>>>>>> 005e556df3923f4d7a1e51ca2ef5ea52eb52ec90
        statusCode:{
            201:function(){
                alert('Se ha actualizado la reservacion');
            }
        },
    });
}
<<<<<<< HEAD
=======

>>>>>>> 005e556df3923f4d7a1e51ca2ef5ea52eb52ec90
