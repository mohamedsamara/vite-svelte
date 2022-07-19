<script lang="ts">
  import { Router, Route } from 'svelte-routing';

  import Layout from './components/Layout.svelte';
  import Home from './pages/Home.svelte';
  import Login from './pages/Login.svelte';

  export let url = '';
</script>

<Router {url}>
  <Layout>
    <Route path="/login"><Login /></Route>
    <Route path="/"><Home /></Route>
  </Layout>
</Router>

<style>
</style>
