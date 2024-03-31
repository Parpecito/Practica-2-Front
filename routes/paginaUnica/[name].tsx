import { Handlers,FreshContext, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import { heroes,heroeess } from "../../types.ts";
import HeroeName from "../../components/HeroeName.tsx"

export const handler: Handlers = {
    GET: async(_req:Request,ctx:FreshContext<unknown,heroeess>)=>{
        const url = new URL(_req.url);
        const path = url.pathname; //Se obtiene el path de la url
        const name =  path.split('/').pop(); //Accede al ultimo elemento de la URL que se obtiene al separar el path por /, que es el id solo

        const response = await axios.get<heroes>(`https://supermondongo.deno.dev/${name}`);        
        const hero = response.data;
        return ctx.render({hero});
}
}
export default function Page(props: PageProps<heroeess>){
    return(
     <div>
        <HeroeName heroess={props.data.hero}></HeroeName>
     </div>
    )
}