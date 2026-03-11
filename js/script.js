let value = document.querySelector("select");
let mainSelector = document.querySelector("main");

async function loadData(generation){

    let url =`https://pokebuildapi.fr/api/v1/pokemon/generation/${generation}`
    const data = await fetch(url).then(response => response.json()).catch(error => alert("Erreur : " + error));
    mainSelector.innerHTML = "";
    for (const pokemon of data) {
    let article = document.createElement("article");
    article.innerHTML += 			
                    `<figure>
                        <picture>
                            <img
                                src="${pokemon.image}"
                                alt="Image ${pokemon.name}"
                            />
                        </picture>
                        <figcaption>
                            <span class="types">${pokemon.apiTypes[0].name}</span>
                            <h2>${pokemon.name}</h2>
                            <ol>
                                <li>Points de vie : ${pokemon.stats.HP}</li>
                                <li>Attaque : ${pokemon.stats.attack}</li>
                                <li>Défense : ${pokemon.stats.defense}</li>
                                <li>Attaque spécial : ${pokemon.stats.special_attack}</li>
                                <li>Vitesse : ${pokemon.stats.speed}</li>
                            </ol>
                        </figcaption>
                    </figure>`
    mainSelector.appendChild(article);    
    }
}
//loadData(1);
value.addEventListener('change', ()=>loadData(value.value));

async function loadData2(){

    const data = await fetch(`./data/pokemon.json`).then(response => response.json()).catch(error => alert("Erreur : " + error));
    mainSelector.innerHTML = "";
    for (const pokemon of data.pokemon) {
    let article = document.createElement("article");
    article.innerHTML += 			
                    `<figure>
                        <picture>
                            <img
                                src="${pokemon.image}"
                                alt="Image ${pokemon.name}"
                            />
                        </picture>
                        <figcaption>
                            <span class="types">${pokemon.types[0]}</span>
                            <h2>${pokemon.name}</h2>
                            <ol>
                                <li>Points de vie : ${pokemon.stats.HP}</li>
                                <li>Attaque : ${pokemon.stats.attack}</li>
                                <li>Défense : ${pokemon.stats.defense}</li>
                                <li>Attaque spécial : ${pokemon.stats.special_attack}</li>
                                <li>Vitesse : ${pokemon.stats.speed}</li>
                            </ol>
                        </figcaption>
                    </figure>`

            switch (pokemon.types[0]) {
                case "grass":
                    article.style.backgroundColor = "#78C850";
                    article.style.border = "#78C850 solid 10px";
                break;
                case "fire":
                    article.style.backgroundColor = "#F08030";
                    article.style.border = "#F08030 solid 10px";
                break;
                case "water":
                    article.style.backgroundColor = "#6890F0";
                    article.style.border = "#6890F0 solid 10px";
                break;
                case "bug":
                    article.style.backgroundColor = "#A8B820";
                    article.style.border = "#A8B820 solid 10px";
                break;
                case "normal":
                    article.style.backgroundColor = "#A8A878";
                    article.style.border = "#A8A878 solid 10px";
                break;
                case "poison":
                    article.style.backgroundColor = "#A040A0";
                    article.style.border = "#A040A0 solid 10px";
                break;
                case "electric":
                    article.style.backgroundColor = "#F8D030";
                    article.style.border = "#F8D030 solid 10px";
                break;
                case "ground":
                    article.style.backgroundColor = "#E0C068";
                    article.style.border = "#E0C068 solid 10px";
                break;
                case "fairy":
                    article.style.backgroundColor = "#EE99AC";
                    article.style.border = "#EE99AC solid 10px";
                break;
                case "fighting":
                    article.style.backgroundColor = "#C03028";
                    article.style.border = "#C03028 solid 10px";
                break;
                case "psychic":
                    article.style.backgroundColor = "#F85888";
                    article.style.border = "#F85888 solid 10px";
                break;
                case "rock":
                    article.style.backgroundColor = "#B8A038";
                    article.style.border = "#B8A038 solid 10px";
                break;
                case "ghost":
                    article.style.backgroundColor = "#705898";
                    article.style.border = "#705898 solid 10px";
                break;
                case "ice":
                    article.style.backgroundColor = "#98D8D8";
                    article.style.border = "#98D8D8 solid 10px";
                break;
                case "dragon":
                    article.style.backgroundColor = "#7038F8";
                    article.style.border = "#7038F8 solid 10px";
                break;
                case "flying":
                    article.style.backgroundColor = "#A890F0";
                    article.style.border = "#A890F0 solid 10px";
                break;
                default:
                    article.style.backgroundColor = "lightgray";
                    article.style.border = "lightgray solid 10px";
        }
    mainSelector.appendChild(article);    
    }
}
loadData2();