const ngForFunctionality = async () => {
    const heroes = await fetch('https://ddragon.leagueoflegends.com/cdn/11.2.1/data/es_MX/champion.json');
    let listadoHeroes = await heroes.json();
    const listadoHeroesArray = Object.values(listadoHeroes.data);

    for (let index = 0; index < listadoHeroesArray.length; index++) {
        const element = listadoHeroesArray[index];
        //console.log(element);
    }

    let value = '';
    let cont = 0;
    listadoHeroesArray.forEach((post) => {
        cont++;
        value += `
            <div class="container-heroes" >
                <img  class="imgRespuesta" src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${post.id}_0.jpg" alt="">
                <div class="container-heroes-descripcion">
                    <h2  class="tituloRespuesta">${post.id}</h2>
                    <p  class="parrafoRespuesta">${post.blurb}</p>
                    <br/>
                    <button class="boton-heroes" id="btnModal${cont.toString()}">Saber Mas</button>
                </div>
            </div>
            <br/>
            <div id="tvesModal${cont.toString()}" class="modalContainer">
                <div class="modal-content">
                    <img  class="" src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${post.id}_0.jpg" alt="">
                    <span class="close"></span>        
                    <div class="container-heroes-descripcion">
                        <h2  class="tituloRespuesta">${post.id}</h2>
                        <p  class="parrafoRespuesta">${post.blurb}</p>
                        <br>
                        <p class="parrafoRespuesta">${post.tags}</p>
                        <br/>
                        <button>Saber Mas</button>
                    </div>
                </div>
            </div> 
        `;
    });

    document.getElementById("myP").innerHTML = value;
    asinarClickModal();   
};

const asinarClickModal = () =>{

    let botones = document.getElementsByClassName("boton-heroes");
    let modales = document.getElementsByClassName("modalContainer");
    
    console.log(botones);

    for (let index = 0; index < botones.length; index++) {
        var btn     = botones[index];
        var modal   = modales[index];
        var span    = document.getElementsByClassName("close")[0];
        var body    = document.getElementsByTagName("body")[0];
        
        console.log(modal);
    
        btn.onclick = function() {
            
            modal.style.display = "block"; 
            body.style.position = "static";
            body.style.height = "100%";
            body.style.overflow = "hidden";
        }
    
        span.onclick = function() {
            modal.style.display = "none";
    
            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
    
                body.style.position = "inherit";
                body.style.height = "auto";
                body.style.overflow = "visible";
            }
        }    
    }



};

ngForFunctionality();


