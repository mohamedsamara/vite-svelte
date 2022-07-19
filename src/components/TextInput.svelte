<script lang="ts">
  import { fade } from 'svelte/transition';

  export let type = 'text';
  export let placeholder = '';
  export let name = '';
  export let value = '';
  export let error = '';
  export let style = '';
  export let containerStyle = '';
  let baseStyle =
    'w-full appearance-none border-2 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:shadow-sm duration-200';

  let inputStyle = `${style ? `${style} ` : ''}${baseStyle} border-gray-100 focus:ring-gray-200`;
  let inputErrorStyle = `${style ? `${style} ` : ''}${baseStyle} border-red-400 focus:ring-red-500`;
</script>

<div class={containerStyle}>
  <input
    {type}
    {name}
    {placeholder}
    class={error ? inputErrorStyle : inputStyle}
    {value}
    on:change
  />
  <div class="my-2 h-[20px]">
    {#if error}
      <p transition:fade class="text-red-400">
        {error}
      </p>
    {/if}
  </div>
</div>
