<script>
  import { Route, navigate } from 'svelte-routing';

  import AuthStore from '../stores/auth';
  import Login from '../pages/Login.svelte';

  export let path;

  let authenticated = false;
  AuthStore.subscribe((data) => {
    authenticated = data.authenticated;
  });

  if (!authenticated) {
    navigate('/login', { replace: true });
  }
</script>

{#if authenticated}
  <Route {path}>
    <slot />
  </Route>
{:else}
  <Route {path}><Login /></Route>
{/if}
