import { Redirect, Route, Switch } from "react-router"
import { DcScreen } from "../components/dc/DcScreen"
import { MarvelScreen } from "../components/marvel/MarvelScreen"
import { SearchScreen } from "../components/search/SearchScreen"
import { Navbar } from "../components/ui/NavBar"

import { HeroScreen } from "../heroes/HeroScreen"


export const DashboardRoutes = ()=>{

    
    return (

        <>
            <Navbar />
               <div className="container">

                    <Switch>
                        

                        <Route exact path="/dc" component ={ DcScreen } />
                        <Route exact path="/hero/:heroeId" component ={ HeroScreen } />
                        <Route exact path="/marvel" component = { MarvelScreen } />
                        <Route exact path="/search" component={ SearchScreen }/>
                        <Redirect to="/marvel" />

                    </Switch>


               </div>
        </>
    )

}