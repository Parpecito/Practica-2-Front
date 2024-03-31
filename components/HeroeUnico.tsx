import { FunctionComponent } from "preact";
import { heroes} from "../types.ts";


const HeroeUnico: FunctionComponent<{heroess:heroes[]}>=(
    {heroess},
    )=>{
    return(
        <div class="HeroeUnicontainer ">
            <ul class="listado-ul">
        
            {heroess.map((h)=>{
                return (
                <li key={h.id}>
                    <a href={`/paginaUnica/${h.name}`} class="link">
                    <h1>{h.name}</h1>
                    <image src={h.image} alt={h.image}></image>
                    <audio controls>
                        <source src={h.sound} type="audio/mpeg"></source>
                    </audio>
                    </a>

                </li> 
                
            )})}
            
            </ul>
            
        </div>
    )
}

export default HeroeUnico;
