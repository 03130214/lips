<script>
  import PocketBase from "pocketbase";
  import { push } from "svelte-spa-router";
  let username = "";
  let password = "";
  let passwordconfirm = "";
  const pb = new PocketBase("http://127.0.0.1:8090");

  async function creatCount() {
    const data = {
      emailVisibility: true,
      passwordConfirm: password,
      name: "test",
      email: username,
      password: password,
    };
    try {
      await pb.collection("users").create(data);
      push("/login");
    } catch (error) {
      alert("fail to register");
    }
  }
</script>

<h1>register</h1>
<form on:submit|preventDefault={creatCount}>
  <input type="email" bind:value={username} placeholder="Email" />
  <input type="password" bind:value={password} placeholder="Password" />
  <input
    type="password"
    bind:value={passwordconfirm}
    placeholder="Password confirm"
  />
  <button type="submit">注册</button>
</form>
