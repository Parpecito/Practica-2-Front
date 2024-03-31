import { FunctionComponent } from "preact";
//target="/heroeNombre/name"

const AddForm: FunctionComponent=()=>{
    return(
        
            <form action="/add" method="post" class="formulario" >
                <h1 class="addtitle">Añade nuevo heroe</h1>
                <input type="text" name="name" placeholder="name"></input>
                <input type="text" name="image" placeholder="image"></input>
                <input type="text" name="sound" placeholder="sound"></input>
                <input type="text" name="creator" placeholder="creator"></input>
                <button type="submit">Publish</button>
            </form>
    )
}

export default AddForm;