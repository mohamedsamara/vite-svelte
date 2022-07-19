<script lang="ts">
  import { extractErrors, loginSchema } from '../utils/validation';

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

  const handleLogin = async () => {
    try {
      await loginSchema.validate(form, { abortEarly: false });
      errors = {
        email: '',
        password: '',
      };
    } catch (error) {
      errors = extractErrors(error);
    }
  };

  function handleFormChange(e) {
    form[e.target.name] = e.target.value;
  }
</script>

<div class="flex flex-col justify-center h-screen container mx-auto px-4 lg:max-w-xl">
  <h1 class="text-3xl font-semibold text-center mb-6">Sign In</h1>
  <form on:submit|preventDefault={handleLogin} class="flex flex-col">
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
    <Button style="mt-4" type="submit" on:click={handleLogin} variant="primary">Login</Button>
  </form>
</div>
