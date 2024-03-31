import { FunctionComponent } from "preact";

type Menuprops={
    selected:"List" |"Add"|"listName"|"delete"| "search"
}
const Menu:FunctionComponent<Menuprops>=({selected})=>{
    return(
        <div class="menu">
            <a href="/" class={selected==="List"?"selected":""}>
                List All Heroes
            </a>
            <a href="/add" class={selected==="Add"?"selected":""}>
                Add new Heroes
            </a>
            <a href="/delete" class={selected==="delete"?"selected":""}>
                Delete Heroe
            </a>
            <a href="/search" class={selected==="search"?"selected":""}>
                Search Heroe
            </a>
            <a href={"/paginaUnica/name"} class={selected==="listName"?"selected":""}>
                Página única por cada heroe
            </a>

        </div>
    )
}

export default Menu;