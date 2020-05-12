import PokemonsJSON from './config/Pokemons.js'
import * as Pokemon from './js/Pokemon.js'


document.title = "pokedex"

var divImagens = document.getElementById("container_pokemons");
Pokemon.RenderAllPokemonInContainer(divImagens, PokemonsJSON)

var pokemonContainer = document.getElementsByClassName('pokemon_container')

const dataModel = {
    idModal: 'modal-1',
    ModalTitle: document.getElementById('modal-1-title'),
    ImagePokemon: document.getElementById('imagePokemon'),
    ModalContent: document.getElementById('content'),

    prev: document.getElementById('prev'),
    prevImage: document.getElementById('prevImg'),
    prevName: document.getElementById('prevName'),

    next: document.getElementById('next'),
    nextImage: document.getElementById('nextImg'),
    nextName: document.getElementById('nextName'),

    table: {
        height_properties: document.getElementById('height_properties'),
        height_value: document.getElementById('height_value'),

        weight_properties: document.getElementById('weight_properties'),
        weight_value: document.getElementById('weight_value'),

        candy_properties: document.getElementById('candy_properties'),
        candy_value: document.getElementById('candy_value'),

        candy_count_properties: document.getElementById('candy_count_properties'),
        candy_count_value: document.getElementById('candy_count_value'),

        egg_properties: document.getElementById('egg_properties'),
        egg_value: document.getElementById('egg_value'),

        spawn_chance_properties: document.getElementById('spawn_chance_properties'),
        spawn_chance_value: document.getElementById('spawn_chance_value'),

        avg_spawns_properties: document.getElementById('avg_spawns_properties'),
        avg_spawns_value: document.getElementById('avg_spawns_value'),

        spawn_time_properties: document.getElementById('spawn_time_properties'),
        spawn_time_value: document.getElementById('spawn_time_value'),

        multipliers_properties: document.getElementById('multipliers_properties'),
        multipliers_value: document.getElementById('multipliers_value'),
    },

    type: document.getElementById('type_block'),
    weaknesses: document.getElementById('weaknesses_block')
}

Pokemon.SetEventToOpenModal(pokemonContainer, PokemonsJSON, dataModel);

//MicroModal.show('modal-1')