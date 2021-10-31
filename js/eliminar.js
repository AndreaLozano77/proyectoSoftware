
// ELIMINAR CATEGORIA

function eliminarComputer(identificador){
    console.log("ejecutando funcion para eliminar");

    let categorias = {
        id: +identificador
    };

    console.log(categorias);

    $.ajax({
        // url: "http://129.151.119.152:8080/api/Category/delete",
        url: "http://localhost:8080/api/Category/delete",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(categorias),
        statusCode:{
            204:function(){
                alert('Se ha eliminado la categoria');
            }
        },
    });
} 


// ELIMINAR COMPUTADORES

function eliminarComputer(identificador){
    console.log("ejecutando funcion para eliminar");

    let computer = {
        id: +identificador
    };

    console.log(computer);

    $.ajax({
        // url: "http://129.151.119.152:8080/api/Computer/delete",
        url: "http://localhost:8080/api/Computer/delete",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(computer),
        statusCode:{
            204:function(){
                alert('Se ha eliminado el computador');
            }
        },
    });
} 



// ELIMINAR CLIENTES


function eliminarClient(identificador){
    console.log("ejecutando funcion para eliminar");

    let client = {
        id: +identificador
    };

    console.log(client);

    $.ajax({
        // url: "http://129.151.119.152:8080/api/Client/delete",
        url: "http://localhost:8080/api/Client/delete",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(client),
        statusCode:{
            204:function(){
                alert('Se ha eliminado el cliente');
            }
        },
    });
}


// ELIMINAR MENSAJES


function eliminarMessage(identificador){
    console.log("ejecutando funcion para eliminar");

    let message = {
        id: +identificador
    };

    console.log(message);

    $.ajax({
        // url: "http://129.151.119.152:8080/api/Message/delete",
        url: "http://localhost:8080/api/Message/delete",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(message),
        statusCode:{
            204:function(){
                alert('Se ha eliminado el message');
            }
        },
    });
} 

// ELIMINAR RESERVA


function eliminarMessage(identificador){
    console.log("ejecutando funcion para eliminar");

    let reserva = {
        id: +identificador
    };

    console.log(reserva);

    $.ajax({
        // url: "http://129.151.119.152:8080/api/Reservation/delete",
        url: "http://localhost:8080/api/Reservation/delete",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(reserva),
        statusCode:{
            204:function(){
                alert('Se ha eliminado la reserva');
            }
        },
    });
} 