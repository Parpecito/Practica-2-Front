import { FunctionComponent } from "preact";


const SearchHeroe: FunctionComponent=()=>{
    return(  
        <div class="searchHeroeContainer">
        <a href="/">Back</a>
        <h1> Heroes Search</h1>
        <form method="get" action="/listName">
            <input type="text" name="name" placeholder="name" />
            <button> Search </button>
        </form>
        </div>
    )
}
export default SearchHeroe;