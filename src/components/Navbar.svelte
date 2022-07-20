<script lang="ts">
  import { Link, navigate } from 'svelte-routing';

  import AuthStore from '../stores/auth';
  import { ACCESS_TOKEN_STORAGE } from '../constants';
  import svelteLogo from '../assets/svelte.svg';
  import Button from './Button.svelte';
  import ButtonLink from './ButtonLink.svelte';

  let authenticated = false;
  AuthStore.subscribe((data) => {
    authenticated = data.authenticated;
  });

  const logout = async () => {
    localStorage.setItem(ACCESS_TOKEN_STORAGE, '');
    AuthStore.set({ authenticated: false });
    navigate('/login', { replace: true });
  };
</script>

<header>
  <nav class="flex justify-around py-4 bg-white/80 backdrop-blur-md shadow-md w-full">
    <div class="flex items-center">
      <Link to="/" class="cursor-pointer">
        <h3 class="text-2xl font-medium text-blue-500">
          <img class="h-10 object-cover" src={svelteLogo} alt="Brand Logo" />
        </h3>
      </Link>
    </div>
    <div class="items-center hidden lg:flex" />
    <div class="flex items-center">
      <ButtonLink to="/">Home</ButtonLink>

      {#if authenticated}
        <ButtonLink to="/dashboard">Dashboard</ButtonLink>
        <ButtonLink on:click={logout}>Log out</ButtonLink>
      {:else}
        <ButtonLink to="/signup">Sign Up</ButtonLink>
        <ButtonLink to="/login">Sign In</ButtonLink>
      {/if}
    </div>
  </nav>
</header>
