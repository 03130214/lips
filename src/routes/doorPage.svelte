<script>
  import { push, location } from "svelte-spa-router";
  import { onDestroy } from "svelte";

  function handleLogin() {
    push("/login");
  }
  let currentpath = "";

  const unsubscribe = location.subscribe(($location) => {
    currentpath = $location;
  });
  onDestroy(unsubscribe);
</script>

<!-- 添加视频作为背景 -->
<video autoplay loop muted>
  <source src="testBackground.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

<div>
  <h1>
    <span class="highlighted"> LIPS </span> -A lightweight information portal system
  </h1>
  <button on:click={handleLogin}> About us </button>
  {#if currentpath == "/"}
    <button on:click={handleLogin}> Log in </button>
  {/if}
</div>

<style>
  @import "../styles/doorpage.css";
</style>
