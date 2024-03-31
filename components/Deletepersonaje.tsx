import { FunctionComponent } from "preact";


const DeletePersonaje: FunctionComponent=()=>{
    return(
        <form action="/delete"  method=""class="deleteForm">
            <h1>Eliminar personaje</h1>
            <input type="text" name="creator" placeholder="creator"></input>
            <input type="text" name="name" placeholder="name"></input>
            <button type="submit">Eliminar Heroe</button>
        </form>

    )
}
export default DeletePersonaje;