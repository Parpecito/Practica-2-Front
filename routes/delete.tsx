import { FreshContext, Handlers } from "$fresh/server.ts";
import axios from "npm:axios";
import DeletePersonaje from "../components/DeletePersonaje.tsx"


export const handler: Handlers={
    DELETE: async(req: Request,ctx: FreshContext)=>{
        try {
            console.log("entra")
            const formulario_delete= await req.formData();
            if(!formulario_delete){
                return new Response("No se ha encontrado en la base de datos",{
                    status:404
                })
            }
            console.log(formulario_delete)
            const name=formulario_delete.get("name")
            const creator=formulario_delete.get("creator")
            if( !creator||!name){
                return new Response("Es obligatorio el creador y el nombre",{
                    status:400
                })
            }
            
            console.log(name)
            axios.delete(`https://supermondongo.deno.dev/${name}`);
            
            return new Response("", { status: 204, headers: { Location: `/` } }); 

        } catch (error) {
            return new Response(error.message, {
                status: 500,
              });
        }
    }
    
}

const Page=()=>{
    return(
        <DeletePersonaje />
    )
}
export default Page;