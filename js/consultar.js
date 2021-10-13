//===============================================
// COMPUTER
//===============================================

function consultarComputer() {

    $.ajax({
        url: "https://g8ed37e9b235013-computer.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/computer/computer",
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta.items);
            mostrarRespuestaComputer(respuesta.items);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        },
        complete: function (xhr, status) {
            //console.log(status);
        }

    });

}

function mostrarRespuestaComputer(items) {
    var tabla = `<table border="1">
                  <tr>
                    <th>ID</th>
                    <th>BRAND</th>
                    <th>MODEL</th>
                    <th>CATEGORY_ID</th>
                    <th>NAME</th>
                    <th>ACTIONS</th>
                  </tr>`;


    for (var i = 0; i < items.length; i++) {
        tabla += `<tr>
                   <td>${items[i].id}</td>
                   <td>${items[i].brand}</td>
                   <td>${items[i].model}</td>
                   <td>${items[i].category_id}</td>
                   <td>${items[i].name}</td>
                   <td>
                   <button class="btn-eliminar" onclick="eliminarComputer(${items[i].id})">Eliminar</button>
                   <a class="edicion" href="detalle.html?id=${items[i].id}">Editar</a>
                   </td> 
                   </tr>`;
    }
    tabla += `</table>`;

    $("#tabla").html(tabla);
}



//===============================================
// CLIENTE
//===============================================

function consultarClient() {

    $.ajax({
        url: "https://g8ed37e9b235013-computer.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta.items);
            mostrarRespuestaClient(respuesta.items);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        },
        complete: function (xhr, status) {
            //console.log(status);
        }
    });
}

function mostrarRespuestaClient(items) {
    var tabla = `<table border="1">
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>AGE</th>                    
                    <th>ACTIONS</th>
                  </tr>`;


    for (var i = 0; i < items.length; i++) {
        tabla += `<tr>
                   <td>${items[i].id}</td>
                   <td>${items[i].name}</td>
                   <td>${items[i].email}</td>
                   <td>${items[i].age}</td>
                   <td>
                   <button class="btn-eliminar" onclick="eliminarClient(${items[i].id})">Eliminar</button>
                   <a class="edicion" href="detalleCliente.html?id=${items[i].id}">Editar</a>                   
                   </td> 
                   </tr>`;
    }
    tabla += `</table>`;

    $("#tablaClient").html(tabla);
}



//===============================================
// MESSAGE
//===============================================


function consultarMessage() {

    $.ajax({
        url: "https://g8ed37e9b235013-computer.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta.items);
            mostrarRespuestaMessage(respuesta.items);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        },
        complete: function (xhr, status) {
            //console.log(status);
        }

    });

}

function mostrarRespuestaMessage(items) {
    var tabla = `<table border="1">
                  <tr>
                    <th>ID</th>
                    <th>MESSAGE</th>                   
                    <th>ACTIONS</th>
                  </tr>`;


    for (var i = 0; i < items.length; i++) {
        tabla += `<tr>
                   <td>${items[i].id}</td>
                   <td>${items[i].messagetext}</td>
                   <td>
                   <button class="btn-eliminar" onclick="eliminarMessage(${items[i].id})">Eliminar</button>
                   <a class="edicion" href="detalleMessage.html?id=${items[i].id}">Editar</a>                   
                   </td> 
                   </tr>`;
    }
    tabla += `</table>`;

    $("#tablaMessage").html(tabla);
}
