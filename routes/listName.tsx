import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { heroes } from "../types.ts";
import axios from "npm:axios"
import HeroeName from "../components/HeroeName.tsx";
import { heroeess } from "../types.ts";

export const handler: Handlers={
    GET: async(_req:Request,ctx:FreshContext<unknown,heroeess>)=>{
        try {
            const url= new URL(_req.url)
            const name=url.searchParams.get("name")||"";
           
            const response=await axios.get<heroes>(`https://supermondongo.deno.dev/${name}`);

            
            const hero=response.data;
            return ctx.render({hero});
            
        } catch (_error) {
            throw new Error("No se ha encontrado el personaje")
        }
    }
}

export default function Page(props: PageProps<heroeess>){
    return(
    <HeroeName
    heroess={props.data.hero}>
    </HeroeName>
    )
}


