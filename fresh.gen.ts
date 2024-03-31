// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $add from "./routes/add.tsx";
import * as $delete from "./routes/delete.tsx";
import * as $index from "./routes/index.tsx";
import * as $listName from "./routes/listName.tsx";
import * as $paginaUnica_name_ from "./routes/paginaUnica/[name].tsx";
import * as $search from "./routes/search.tsx";

import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/add.tsx": $add,
    "./routes/delete.tsx": $delete,
    "./routes/index.tsx": $index,
    "./routes/listName.tsx": $listName,
    "./routes/paginaUnica/[name].tsx": $paginaUnica_name_,
    "./routes/search.tsx": $search,
  },
  islands: {},
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;