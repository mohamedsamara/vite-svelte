<script lang="ts">
  import { Link } from 'svelte-routing';

  import svelteLogo from '../assets/svelte.svg';
</script>

<header>
  <nav class="flex justify-around py-4 bg-white/80 backdrop-blur-md shadow-md w-full">
    <div class="flex items-center">
      <!-- Logo -->

      <Link to="/" class="cursor-pointer">
        <h3 class="text-2xl font-medium text-blue-500">
          <img class="h-10 object-cover" src={svelteLogo} alt="Brand Logo" />
        </h3>
      </Link>
    </div>

    <div class="items-center hidden space-x-8 lg:flex" />

    <div class="flex items-center space-x-5">
      <Link
        to="/"
        class="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300"
        >Home</Link
      >

      <Link
        to="/login"
        class="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibol"
        >Login</Link
      >
    </div>
  </nav>
</header>
