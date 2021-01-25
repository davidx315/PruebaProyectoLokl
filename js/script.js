const implementarHeroes = async () => {
    const heroes = await fetch('https://ddragon.leagueoflegends.com/cdn/11.2.1/data/es_MX/champion.json');
    let listadoHeroes = await heroes.json();
    const listadoHeroesArray = Object.values(listadoHeroes.data);
    let filas = ''
    let columnas = '';
    let contadorGrupo = 0;
    let contadorGeneral = 0;

    /* forEach utilizado para imprimir los heroes y sus modales respectivos en el html */

    listadoHeroesArray.forEach((post) => {
        contadorGeneral++;
        contadorGrupo++;
        columnas += `
        <td>
            <div class="container-heroes" >
                <img  class="imgRespuesta" src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${post.id}_0.jpg" alt="">
                <div class="container-heroes-descripcion">
                    <h2  class="tituloRespuesta">${post.id}</h2>
                    <p  class="parrafoRespuesta">${post.blurb}</p>
                    <br/>
                    <button class="boton-heroes" id="btnModal${contadorGeneral.toString()}">Saber Mas</button>
                </div>
            </div>
            <br/>
            <div id="tvesModal${contadorGeneral.toString()}" class="modalContainer">
                <div class="modal-content">
                    <img  class="imgModal" src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${post.id}_0.jpg" alt="">
                    <span class="close"></span>  
                         
                    <div class="descripcion-modal">
                        <button class="boton-cerrar" id="btnCerrar${contadorGeneral.toString()}"><strong>X</strong></button>  
                        <h2  class="">${post.id}</h2>
                        <h3  class="">${post.title}</h3>
                        <p  class="">${post.blurb}</p>
                        <p class="">${post.tags}</p>                  
                        <br/>
                    </div>
                </div>
            </div> 
            </td>
        `;

        /* if utilizado para crear filas cada cuatro columnas */ 
        if (contadorGrupo === 4){
            contadorGrupo = 0;
            filas = filas +`<tr>`+columnas+`</tr>`
            columnas = ``;
        }else if(contadorGeneral === listadoHeroesArray.length)
        {
            filas = filas +`<tr>`+columnas+`</tr>`
        }
    });
    document.getElementById("myHeroes").innerHTML =`<table class="tabla-heroes">`+ filas +`</table>`;
    asinarClickModal();   
};
 

const asinarClickModal = () =>{

    let botones = document.getElementsByClassName("boton-heroes");
    let modales = document.getElementsByClassName("modalContainer");
    let botonesCerrar = document.getElementsByClassName("boton-cerrar");
    
    for (let index = 0; index < botones.length; index++) {
        let btn     = botones[index];
        let modal   = modales[index];
        let botonesC  = botonesCerrar[index];
        var body    = document.getElementsByTagName("body")[0];
          
        btn.onclick = function() {
            
            modal.style.display = "block"; 
            body.style.position = "static";
            body.style.height = "100%";
            body.style.overflow = "hidden";
        }

        botonesC.onclick = function() {
            
            modal.style.display = "none";  
            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }        
    }
};
implementarHeroes();


