import { createInertiaApp } from "@inertiajs/svelte";
import createServer from "@inertiajs/svelte/server";

createServer((page) =>
  createInertiaApp({
    page,
    resolve: (name) => {
      // @ts-expect-error
      const pages = import.meta.glob("./pages/**/*.svelte", { eager: true });
      return pages[`./pages/${name}.svelte`] || import("./pages/error.svelte");
    },
  }),
);
