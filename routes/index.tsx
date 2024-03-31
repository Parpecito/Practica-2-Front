import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { heroes } from "../types.ts";
import axios from "npm:axios"
import { heroeess } from "../types.ts";
import HeroeUnico from "../components/HeroeUnico.tsx"

type Data = {
  hero: Array<heroes>;
};

export const handler: Handlers<Data> = {
  GET: async (_req: Request, ctx: FreshContext<unknown, heroeess>) => {
    const response=await axios.get<heroes>(`https://supermondongo.deno.dev/`);

    const hero = response.data;

    //const hero = await HeroesModel.find();
    

    return ctx.render({ hero })
  }
};

export default function Home(props:PageProps<Data>){
  return (
  <HeroeUnico
  heroess={props.data?.hero}>
  </HeroeUnico>
  )
}