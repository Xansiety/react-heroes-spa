import { heroes } from "../data/heroes"

export const getHeroesByTerm = (term = '')=>{

    name = name.toLowerCase().trim();

    if(term.length === 0) return [];
 
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(term))
}