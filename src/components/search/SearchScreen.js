import { heroes } from "../../data/heroes"
import { HeroCard } from "../../heroes/HeroCard";
import { useForm } from "./useForm";
import  queryString  from 'query-string';
import { useLocation } from 'react-router';
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { useMemo } from "react";



export const SearchScreen = ( { history } )=>{

    //hook de reactRouterdom para conocer la location
     const location = useLocation();
     //console.log(location);

    const { q= '' } = queryString.parse( location.search );

    const [values,handleInputChange] = useForm({
        searchText : q
    });

    const { searchText } = values;

    const handleSearch = (e)=>{

        e.preventDefault();

        //console.log(searchText);
        history.push(`?q=${ searchText }`)
      

    }

    const heroesFilter = useMemo(()=>getHeroesByName(q),[q]);

    //const heroesFilter = getHeroesByName(searchText);
    return (

       <div className="row">

           <div className="col-5">

               <h4>SearchScreen</h4>
               <hr />

               <form className="form-group" onSubmit={ handleSearch }>


                    <input type="text"
                            className="form-control" 
                            placeholder="find your hero"
                            name="searchText"
                            autoComplete="off"
                            value = {  searchText}
                            onChange= { handleInputChange }
                            />
                    <button type="submit"
                            className="btn m-1 btn-block btn-outline-info">
                         Search...       
                    </button>
               </form>

           </div>

           <div className="col-7">

               <h4>Results..</h4>

               {
                   (q ==='') && <div className="alert alert-danger">Find your Heroe</div>
               }

                {
                   (q !=='' && heroesFilter.length===0)  && <div className="alert alert-danger">No results for { q }</div>
               }

                {
                    heroesFilter.map(hero => (
                        <HeroCard 
                                key = {hero.id}
                                { ...hero }

                        />
                    ))
                }

            </div>


       </div>

    )

}