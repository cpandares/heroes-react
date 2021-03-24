import { heroes } from "../data/heroes"



export const GetHeroeByPublisher = ( publisher  )=>{

    const validPublisher = ['DC Comics','Marvel Comics'];

    if(!validPublisher.includes(publisher)){
        throw new Error(`Publisher ${publisher } no es valid`);


    }
  
    return heroes.filter(hero=>hero.publisher === publisher);
}