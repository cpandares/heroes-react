import { useMemo } from "react";
import { GetHeroeByPublisher } from "../selectors/GetHeroeByPublisher"
import {  HeroCard } from './HeroCard'


export const HeroList = ({ publisher })=>{

    const heroes = useMemo(( ) => GetHeroeByPublisher(publisher), [publisher])

    //const heroes = GetHeroeByPublisher(publisher);
    
  
    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map(heroe=>(
                    <HeroCard key={heroe.id} 
                        {...heroe }
                    />
                ))
            }

        </div>
    )

}