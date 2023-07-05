let itemsContainer = document.getElementById("miLista");

function fetchDatos() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        .then(response => response.json())
        .then(json => {
            json.results.forEach(element => {
                getPoke(element)
            });
        })
        .catch(err => console.log("solicitud fallida", err));
}

function getPoke(pokemon) {
    let url = pokemon.url
    fetch(url)
        .then(response => response.json())
        .then(json => {
           addPoke(json)
        })
}

function addPoke(poke) {
    const inyectarHTML =
        `<li class="list-group-item"> ${poke.name} <img src="${poke.sprites.front_default}" alt="avatar"> </li>`

    itemsContainer.innerHTML += inyectarHTML;
}