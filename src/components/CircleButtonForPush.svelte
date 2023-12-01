<script>
  import { push } from "svelte-spa-router";
  export let address;
  export let src;
  export let info;
  let mouseOn = false;
  function Click() {
    push(address);
  }
</script>

<div class="button-container">
  <button
    class="circle"
    on:click={Click}
    on:mouseover={() => (mouseOn = true)}
    on:focus={() => (mouseOn = true)}
    on:mouseout={() => (mouseOn = false)}
    on:blur={() => (mouseOn = false)}
    title={info}
  >
    <img {src} alt="1" class="button-img" />
  </button>
  {#if mouseOn}
    <div class="info-board">{info}</div>
  {/if}
</div>

<style>
  .circle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .button-img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 保持图像的纵横比 */
  }

  .info-board {
    visibility: hidden;
    position: absolute;
    left: 65%;
    top: 50%;
    transform: translateY(-50%); /*让文本框显示在按钮右侧中间位置*/
    background-color: black;
    color: white;
    padding: 5px;
    border-radius: 5px;
    white-space: nowrap; /*不加这个显示出来的文本是竖着的*/
  }

  .circle:hover + .info-board {
    visibility: visible;
  }

  .button-container {
    position: relative;
  }
</style>
