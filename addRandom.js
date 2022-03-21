import { fillPokemonCard, getPokemonByNameOrId } from './const.js';

const btn = document.querySelector('#add');

btn.addEventListener('click', async (event) => {
    const randomId = Math.floor(Math.random() * 100);
    try {
        const pokemon = await getPokemonByNameOrId(randomId);
        fillPokemonCard(pokemon);
        localStorage.getItem(`${pokemon.name}`);
        localStorage.setItem(`${pokemon.name}`, JSON.stringify(pokemon) );
        const localAdd = localStorage.getItem(`${pokemon.name}`);
        const localAddParse = JSON.parse(localAdd);
    } catch (error) {
        alert(error.message);
    };
    // fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
    //     .then((response) => response.json())
    //     .then((result) => {
    //         const {
    //             name,
    //             base_experience: experience,
    //             // abilities,
    //             abilities: rawAbilities,
    //             sprites: { front_default: image },
    //             // sprites: { front_default },
    //         } = result;
    //         const serailizedAbilities = rawAbilities.map((el) => {
    //             const {
    //                 ability: { name },
    //             } = el;
    //             return name;
    //         });
    //         const pokemon = new Poke(name, serailizedAbilities, experience, image);
    //         fillPokemonCard(pokemon);
    //     });
});