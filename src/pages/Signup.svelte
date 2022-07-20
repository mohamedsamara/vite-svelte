<script lang="ts">
  import { navigate } from 'svelte-routing';
  import { toast } from '@zerodevx/svelte-toast';

  import { extractErrors, loginSchema } from '../utils/validation';
  import AuthStore from '../stores/auth';
  import { ACCESS_TOKEN_STORAGE, API_URI } from '../constants';
  import TextInput from '../components/TextInput.svelte';
  import Button from '../components/Button.svelte';

  const form = {
    email: '',
    password: '',
  };

  let errors = {
    email: '',
    password: '',
  };

  const handleSignup = async () => {
    try {
      await loginSchema.validate(form, { abortEarly: false });
      errors = {
        email: '',
        password: '',
      };

      const response = await fetch(`${API_URI}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      const { access_token, success } = result;

      if (success) {
        AuthStore.set({ authenticated: true });
        localStorage.setItem(ACCESS_TOKEN_STORAGE, access_token);
        navigate('/dashboard', { replace: true });
      } else {
        toast.push(result.message);
      }
    } catch (error) {
      errors = extractErrors(error);
    }
  };

  const handleFormChange = (e) => {
    form[e.target.name] = e.target.value;
  };
</script>

<div class="flex flex-col justify-center h-screen container mx-auto px-4 lg:max-w-xl">
  <h1 class="text-3xl font-semibold text-center mb-6">Sign Up</h1>
  <form on:submit|preventDefault={handleSignup} class="flex flex-col">
    <TextInput
      containerStyle="mb-2"
      placeholder="Email address"
      name="email"
      on:change={handleFormChange}
      error={errors.email}
    />
    <TextInput
      containerStyle="mb-2"
      placeholder="Password address"
      type="password"
      name="password"
      on:change={handleFormChange}
      error={errors.password}
    />
    <Button style="mt-4" type="submit" variant="primary">Sign up</Button>
  </form>
</div>
