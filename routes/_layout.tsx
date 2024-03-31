import { FreshContext } from "$fresh/server.ts";
import Menu from "../components/Menu.tsx"

const Layout= async(req:Request, ctx:FreshContext)=>{
    const Component=ctx.Component;
    const route=ctx.route;

    const page=route.split("/").pop();
    
    const selected=page==="List"?"List":page==="Add"?"Add":page==="delete"?"delete":page==="search"?"search":"listName";

    return(
        <>
            <h1 class="title"> Super Heroes🐱‍🏍🐱‍🏍🐱‍🏍</h1>
            <div class="general">
            <Menu selected={selected}></Menu>
            <Component></Component>

            </div>
        </>
    )
}

export default Layout;
