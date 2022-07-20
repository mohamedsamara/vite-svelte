import { writable } from 'svelte/store';

const AuthStore = writable({
  authenticated: false,
});

export default AuthStore;
