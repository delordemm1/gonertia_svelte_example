import { createInertiaApp } from "@inertiajs/svelte";
import { mount, hydrate } from "svelte";
import RootLayout from "./layouts/root.svelte";
import "../css/app.css";

createInertiaApp({
  resolve: (name) => {
    // @ts-ignore
    const pages = import.meta.glob("./pages/**/*.svelte", { eager: true });
    let page =
      pages[`./pages/${name}.svelte`] || import("./pages/error.svelte");
    return pages[`./pages/${name}.svelte`] || import("./pages/error.svelte");
    return { default: page.default, layout: page.layout || RootLayout };
  },
  setup({ el, App, props }) {
    console.log({ props, el, App });
    hydrate(App, { target: el, props });
    // mount(App, { target: el, props });
  },
});
