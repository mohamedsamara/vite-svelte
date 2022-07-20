<script lang="ts">
  export let variant = 'default';
  export let type = 'button';
  export let style = '';
  let baseStyle = '';

  if (variant === 'primary') {
    baseStyle =
      'border border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-blue-600';
  } else if (variant === 'success') {
    baseStyle =
      'border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-green-600';
  } else if (variant === 'ghost') {
    baseStyle = 'rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-gray-100';
  } else {
    baseStyle =
      'border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-gray-300';
  }

  let buttonStyle = `${style ? `${style} ` : ''}${baseStyle}`;
</script>

<button {type} class={buttonStyle} on:click><slot /></button>
