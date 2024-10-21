import { createInertiaApp } from "@inertiajs/svelte";
import "../css/app.css";

createInertiaApp({
  resolve: (name) => {
    // @ts-expect-error
    const pages = import.meta.glob("./pages/**/*.svelte", { eager: true });
    return pages[`./pages/${name}.svelte`] || import("./pages/error.svelte");
  },
  setup({ el, App, props }) {
    new App({ target: el, props });
  },
});
