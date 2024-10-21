<script lang="ts">
  import type { Snippet } from "svelte";
  let { children }: {
    children: Snippet
  } = $props();
</script>
<h1>HELLO WORLD!</h1>
{@render children()}

<style></style>
