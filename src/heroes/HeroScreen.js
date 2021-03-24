import { useMemo } from "react";
import { Redirect, useParams } from "react-router"
import { GetHeroById } from "../selectors/GetHeroById";

export const HeroScreen = ({history})=>{

    const {heroeId} = useParams();

    const hero = useMemo(( ) => GetHeroById(heroeId), [heroeId])
    
    //const hero = GetHeroById(heroeId);
    if(!hero){
        return <Redirect to="/" />
    }

    const handleReturn = ()=>{

        if(history.length <= 2){
            history.push('/')
        }else{
            history.goBack();
        }
       

    }

    const {

        superhero, 
        publisher, 
        alter_ego,
        first_appearance,
        characters

    } = hero;

    return (

        <div className="row mt-5">
            
            <div className="col-md-4">

                <img src={ `../assets/heroes/${heroeId}.jpg` } className="img-thumbnail animate__animated animate__fadeInDown" alt = {superhero} />


            </div>

            <div className="col-md-8">

                <h3 className="text-center">{ superhero }</h3>
                
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter Ego:</b> { alter_ego }</li>
                    <li className="list-group-item"> <b>Publisher:</b> { publisher }</li>
                    <li className="list-group-item"> <b>First Appearance:</b> { first_appearance }</li>


                </ul>

                <h5>Characters</h5>
                <p>{ characters }</p>

                <button 
                        className="btn btn-outline-info"
                        onClick = {handleReturn}
                        >
                    Return
                </button>

            </div>

        </div>
    )


}