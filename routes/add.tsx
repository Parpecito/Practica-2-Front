import { FreshContext, Handlers } from "$fresh/server.ts";
import axios  from "npm:axios";
import AddForm from "../components/AddForm.tsx";

export const handler: Handlers={
    POST: async(req: Request,ctx: FreshContext)=>{
        try {
            const formulario= await req.formData();

            const data={
                name: formulario.get("name"),
                image: formulario.get("image"),
                sound: formulario.get("sound"),
                creator: formulario.get("creator")
            }
            if(!data.name || !data.image || !data.sound || !data.creator){
                return new Response("Faltan datos",{
                    status:400
                })
            }
            axios.post("https://supermondongo.deno.dev/",data)
            return new Response("", { status: 303, headers: { Location: `/` } }); 

  

        } catch (error) {
            return new Response(error.message, {
                status: 500,
              });
        }
    }
}

const Page=()=>{
    return(
       <div>
        <AddForm />
       </div> 
    )
}
export default Page;