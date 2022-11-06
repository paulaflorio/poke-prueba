const pokemonName = document.querySelector('.pokemon-name');
const pokemonNumber = document.querySelector('.pokemon-number');
const pokemonImg = document.querySelector('.pokemon-img');
const form = document.querySelector('.form');
const input = document.querySelector('.input-search');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
// let numberPokemon;



const searchPokemon = event => {
    event.preventDefault();
    const {value} = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(data => data.json())
        .then(response => renderPokemonData(response))
        .catch(err => renderNotFound());
}

const renderPokemonData = data => {
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImg.style.display='block';
    pokemonImg.src =  data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    let info = data.name + '\n Pokémon tipo ' + data['types']['0']['type']['name'];
    // numberPokemon = data.id;
    voice(info);
}

const renderNotFound = () => {
    pokemonName.innerHTML = 'Not found';
    pokemonNumber.innerHTML = '';
    pokemonImg.style.display='none';
}

function voice(text){
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}

btnPrev.addEventListener('click', () => {
    if (numberPokemon > 1){
        // numberPokemon -= 1;
        renderPokemonData(pokemon.numberPokemon);
    }
});

btnNext.addEventListener('click', () => {
    // numberPokemon += 1;
    renderPokemonData(pokemon.numberPokemon);
});

// searchPokemon(numberPokemon);
