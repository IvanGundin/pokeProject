import { fillPokemonCard } from './const.js';
for (let i = 0; i < localStorage.length; i++){
    if (localStorage.key(i) == 'user') {
            continue
            } 
    else {
        let parsingPoke = JSON.parse(localStorage.getItem((localStorage.key(i))))
        fillPokemonCard(parsingPoke)
    }
};
//console.log(parsingPoke)