import { FunctionComponent } from "preact";
import {  heroes} from "../types.ts";


const HeroeName: FunctionComponent<{heroess:heroes[]}>=(
    {heroess},
    )=>{
    return(
        <div class="HeroeNamecontainer">
            <ul class="listado-ul">
            {heroess.map((h)=>{
                return (
                <li key={h.id}>
                    <h1>{h.name}</h1>
                    <image src={h.image} alt={h.image}></image>
                    <audio controls>
                        <source src={h.sound} type="audio/mpeg"></source>
                    </audio>

                </li> 
            )})}
            <a href="/">Back</a>
            </ul>
        </div>
    )
}

export default HeroeName;
