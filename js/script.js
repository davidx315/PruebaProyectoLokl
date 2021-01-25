const ngForFunctionality = async () => {
    const heroes = await fetch('http://ddragon.leagueoflegends.com/cdn/11.2.1/data/es_MX/champion.json');
    let listadoHeroes = await heroes.json();
    const listadoHeroesArray = Object.values(listadoHeroes.data);

    for (let index = 0; index < listadoHeroesArray.length; index++) {
        const element = listadoHeroesArray[index];
        console.log(element.id);
    }

    let value = '';
    listadoHeroesArray.forEach((post) => {
        value += `
            <div class="container-heroes">
                <img  class="imgRespuesta" src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${post.id}_0.jpg" alt="">
                <div class="container-heroes-descripcion">
                    <h2  class="tituloRespuesta">${post.id}</h2>
                    <p  class="parrafoRespuesta">${post.blurb}</p>
                    <br/>
                    <button class="boton-heroes" id="btnModal">Saber Mas</button>
                </div>
            </div>
            <br/>
        `;
    });
    document.getElementById("myP").innerHTML = value;
};

ngForFunctionality();


if(document.getElementById("btnModal")){
    var modal = document.getElementById("tvesModal");
    var btn = document.getElementById("btnModal");
    var span = document.getElementsByClassName("close")[0];
    var body = document.getElementsByTagName("body")[0];

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