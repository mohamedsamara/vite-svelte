<script lang="ts">
  import { Router, Route } from 'svelte-routing';

  import AuthStore from './stores/auth';
  import { ACCESS_TOKEN_STORAGE } from './constants';
  import Layout from './components/Layout.svelte';
  import ProtectedRoute from './components/ProtectedRoute.svelte';
  import Home from './pages/Home.svelte';
  import Login from './pages/Login.svelte';
  import Signup from './pages/Signup.svelte';
  import Dashboard from './pages/Dashboard.svelte';

  export let url = '';

  const token = localStorage.getItem(ACCESS_TOKEN_STORAGE);
  AuthStore.set({ authenticated: token ? true : false });
</script>

<Router {url}>
  <Layout>
    <Route path="/"><Home /></Route>
    <Route path="/login"><Login /></Route>
    <Route path="/signup"><Signup /></Route>
    <ProtectedRoute path="/dashboard">
      <Dashboard />
    </ProtectedRoute>
  </Layout>
</Router>

<style>
</style>
