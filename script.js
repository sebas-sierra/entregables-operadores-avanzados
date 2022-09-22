//difinicion de la clase constructora para el objeto resultado
class Resultado {
    constructor(id, local, visitante, golesL, golesV, ) {
        this.id = id,
        this.equipoLocal = local;
        this.equipoVisitante = visitante;
        this.golesLocal = golesL;
        this.golesVisitante = golesV;
    }    
}

//array donde se van a guardar los resultados cargados por el usuario
let resultadosUser = []

let golesL = '';
let golesV = '';
resultadosUser.push(new Resultado(resultadosUser.length+1,"Banfield", "Defensa y Justicia", golesL, golesV));
resultadosUser.push(new Resultado(resultadosUser.length+1,"Quilmes", "Arsenal de Sarandi", golesL, golesV));
resultadosUser.push(new Resultado(resultadosUser.length+1,"Deportivo Moron", "Patronato", golesL, golesV));
resultadosUser.push(new Resultado(resultadosUser.length+1,"Central Cordoba", "Atlanta", golesL, golesV));

//formulario donde cargo mis resultados => estos resultados se guardan en el array resultados Almacenados
const resultadosdelusuario = document.querySelector('#resultadosDelUsuario');
//array donde se almacenan mis resultados porvenientes del formulario
const resultadosAlmacenados = [];

//tabla de puntajes de usuarios
const tablaPuntos = document.querySelector("#tablapuntaje tbody");
//tabla de la izquierda abajo
const tablaResultadosGuardados = document.querySelector('#misResultadosGuardados tbody')

//funcion que me trae la plantilla del formulario
mostrarPlantilla();

//funcion que arma la plantilla que el usuario debe cargar
function mostrarPlantilla(){
    resultadosdelusuario.innerHTML = "";
    resultadosUser.forEach((match) => {
        const matchHTML = document.createElement('div');
        matchHTML.innerHTML = `
        
            <div class="card mb-3 " id="juego_${match.id}" >
                <div class="card-body">
                <h6 class="card-title"><label id="partido-ID">Partido nro.: ${match.id}</label></h6>
                <div class="input-group mb-3">
                    <label id="equipo-local" for="golLocal" class="input-group-text">${match.equipoLocal}</label>
                    <input class="form-control" id="goles-local" type="number" name="golLocal" ></div>
                <div class="input-group mb-3">
                    <label id="equipo-visitante" for="golVisitante" class="input-group-text">${match.equipoVisitante}</label>
                    <input class="form-control" id="goles-visitante" type="number" name="golVisitante" value=" "></div>
                    <button id="guardarBtn_${match.id}" type="button" onclick="agregarProde(event)" class="btn btn-primary">Guardar resultado</button>
                </div>
                </div>
            </div>`
                
                ;
    resultadosdelusuario.appendChild(matchHTML);
    })
}
console.log(resultadosUser);

//con esta neva fn tomo los valores ingresados en la plantilla y los guardo en un nuevo array
//el id del boton 'guardarBtn_id' tiene que ser igual al 'match.id'
function agregarProde(event) {
    const btn = event.target;
    const id = btn.id.split('_')[1];
    console.log("Partido nro: " + id);

    const encuentro = resultadosUser.filter((result) => result.id == id)[0];
    console.log('Imprimo el id: ' + encuentro.id + encuentro.equipoLocal);
    //console.dir(encuentro)
        
        let idNuevoProde = document.getElementById("partido-ID").innerText;
        let equipoLocalNuevoProde = document.getElementById("equipo-local").innerText;
        let equipoVisitanteNuevoProde = document.getElementById("equipo-visitante").innerText;
        let golesLocalNuevoProde = document.getElementById("goles-local").value[i];
        let golesVisitanteNuevoProde = document.getElementById("goles-visitante").value[i];

        const nuevoProde = new Resultado(
            idNuevoProde,
            equipoLocalNuevoProde,
            equipoVisitanteNuevoProde,
            golesLocalNuevoProde,
            golesVisitanteNuevoProde
        );
        resultadosAlmacenados.push(nuevoProde);

    console.log(resultadosAlmacenados);
    mostrarListado();
    compararResultados()
}

//fn de prueba - (nofunciona...)
/*function cambiarNombre(){
    for (let i = 0; i < resultadosUser.length; i++) {
        let idNuevoProde = document.getElementById("partido-ID").innerText;
        let equipoLocalNuevoProde = document.getElementById("equipo-local").innerText;
        let equipoVisitanteNuevoProde = document.getElementById("equipo-visitante").innerText;
        let golesLocalNuevoProde = document.getElementById("goles-local").value;
        let golesVisitanteNuevoProde = document.getElementById("goles-visitante").value;
    
        function saveGoles(event){
            const nuevoProde = new Resultado(
                idNuevoProde,
                equipoLocalNuevoProde,
                equipoVisitanteNuevoProde,
                golesLocalNuevoProde,
                golesVisitanteNuevoProde
            );
            resultadosAlmacenados.push(nuevoProde);
        }
    }
    mostrarListado();
}*/


/*
function guardarResultado(event){
    const btn = event.target;
    const id= btn.id.split('_')[1];
    console.log("Partido nro: " + id);

    
    //este codigo me borra los elementos del array generandonos un nuevo array sin el elemento eliminado
    const encuentro = resultadosUser.filter((result) => result.id == id)[0];
    console.log(encuentro.id);
    
    
    console.dir('Imprimo el id: ' + encuentro.id);
    console.dir(encuentro) 

    //console.log(resultadosdelusuario[1].golesLocal.value);
    // console.log(resultadosdelusuario[1].golesVisitante.value);
   

  
    
   */ 
    
//- - - - - - - - - - - - - HASTA ACA TODO BIEN - - - - - - - - - - - - - //


    /*
        hay que revisar la condicion
    */
/*
    for (let i = 0; i < resultadosUser.length; i++) {
         console.log('resultadosdelusuario.id: ' + resultadosdelusuario[i].equipoLocal);
         if (resultadosUser[i].id == encuentro.id) {
            resultadosUser[i].golesLocal = encuentro.glocal;
            resultadosUser[i].golesVisitante = encuentro.gvisitante;
            break;
        }
        
    }
   
    console.log(btn);


    console.log(resultadosUser);
    
     
  
 }*/







function mostrarListado() {
    tablaResultadosGuardados.innerHTML = "";

    resultadosAlmacenados.forEach((partido) => {
        const partidoHTML = document.createElement('tr');
        partidoHTML.innerHTML = `<td>${partido.id}</td>
                                 <td id="glocal">${partido.equipoLocal}: <span id="localg">${partido.golesLocal}</span></td>
                                 <td id="gvisitante">${partido.equipoVisitante}: <span id="visitanteg">${partido.golesVisitante}</span></td>
                                 <td><button id="editarBtn_${partido.id}" type="button" onclick="editarResultado(event)" class="btn btn-outline-primary">editar resultado</button></td>`;
        tablaResultadosGuardados.appendChild(partidoHTML);
        partidoHTML.setAttribute('id', `position_${partido.id}`);
    })
};








//- - - - - - - - - - LOCALSTORAGE && JASON - - - - - - - - - - 


//Aca esta mi array de usuarios para guardar en el localStorage
let usuarios =[ 
    {id:1, nombre:'Noe-CARP', aciertos_exactos: 4, puntos_total: 12 },
    {id:2, nombre:'Toni_capo_del_sur', aciertos_exactos: 3, puntos_total: 9 },
    {id:3, nombre:'NegroEl31', aciertos_exactos: 3, puntos_total: 9 },
    {id:4, nombre:'ParrillaCaco', aciertos_exactos: 2, puntos_total: 6 },
    {id:5, nombre:'Toni_capo_del_sur', aciertos_exactos: 0, puntos_total: 90 }
];

//Guardo cada uno de los objetos del array en el localStorage
const usuariosJSON = (clave, valor) =>{localStorage.setItem(clave, valor)};
/*for (const usuario of usuarios) {
    usuariosJSON(usuario.id, JSON.stringify(usuario));
    
}*/
usuariosJSON('listausuarios', JSON.stringify(usuarios));

//Para sacar los objetos del array defino una clase constructora
class Usuario {
    constructor(el) {
        this.nombre = el.nombre;
        this.aciertos_exactos = el.aciertos_exactos;
        this.puntos_total = el.puntos_total;
    }
}

//Tomo la mi listadusuarios del localStorage y la separo usando un for para formatear 
//el string con la clase constructora anterior y lo meto en un nuevo array guardados
const guardados = JSON.parse(localStorage.getItem('listausuarios'));
usuarios = [];

for (const coso of guardados) {
    usuarios.push(new Usuario(coso));
    
};

//lo muestro por consola
console.log(usuarios);
console.log(guardados[2].nombre);

function mostrarpuntajes() {
    tablaPuntos.innerHTML = "";
    guardados.forEach((usuarioenguardados) => {
        const puntajeHTML = document.createElement("tr");
        puntajeHTML.innerHTML = `<th scope="row">${usuarioenguardados.id}</th>
                          <td>${usuarioenguardados.nombre}</td>
                          <td>${usuarioenguardados.aciertos_exactos}</td>
                          <td>${usuarioenguardados.puntos_total}</td>
                           `;
        tablaPuntos.appendChild(puntajeHTML);
    });
}
mostrarpuntajes()

class Partido2 {
    constructor(local, visitante, golesA, golesB) {
        this.equipoLocal = local;
        this.equipoVisitante = visitante;
        
        this.golesLocal = golesA;
        this.golesVisitante = golesB;
    }    
}
let resultadoOficial=[]
resultadoOficial.push(new Partido2("equipoLocalA", "equipoVisitanteB" , 1, 2));




//- - - - - - - - - - USO DE OPERADOR TERNARIO Y DESESTRUCTURACION - - - - - - - - - - 

function compararResultados(){
const [{golesLocal:mrgl}] = resultadosAlmacenados;
const [{golesVisitante:mrgv}] = resultadosAlmacenados;

const [{golesLocal:rogl}] = resultadoOficial;
const [{golesVisitante:rogv}] = resultadoOficial;
console.log(mrgv, mrgl);console.log(rogv, rogl);

//Mensajes que se muestran segun el resultado de la ejecucion de los condicionales
let msg1 = "Tu pronostico fue exacto, sumas 5 puntos extra!" ;
let msg2 = "Tu pronostico no fue exacto, pero el partido fue empate";
let msg3 = "Tu pronostico no fue exacto, pero acertaste el ganador local";
let msg4 = "Tu pronostico no fue exacto, pero acertaste el ganador visitante";
let msg5 = "Tu pronostico fue errado, no sumas puntos";


//TERNARIO
//por ultimo estecondicional lo pase a operador ternario
(mrgl == rogl) && (mrgv == rogv)? console.log(msg1) : (mrgl == mrgv) && (rogl == rogv)? console.log(msg2): (mrgl > mrgv) && (rogl > rogv)? console.log(msg3) : (mrgl < mrgv) && (rogl < rogv )? console.log(msg4) : console.log(msg5);
}
