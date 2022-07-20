<script lang="ts">
  import { navigate } from 'svelte-routing';

  export let to = '';
  export let type = 'button';
  export let style = '';
  let baseStyle =
    'rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-gray-100 text-gray-600 hover:text-blue-500';

  let buttonLinkStyle = `${style ? `${style} ` : ''}${baseStyle}`;

  const handleToNavigation = () => {
    navigate(to, { replace: true });
  };
</script>

{#if to}
  <button {type} class={buttonLinkStyle} on:click={handleToNavigation}><slot /></button>
{:else}
  <button {type} class={buttonLinkStyle} on:click><slot /></button>
{/if}
