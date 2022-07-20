<script>
  import { SvelteToast } from '@zerodevx/svelte-toast';

  import Navbar from './Navbar.svelte';
</script>

<Navbar />
<SvelteToast />
<main class="h-screen">
  <slot />
</main>
