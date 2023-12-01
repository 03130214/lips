<script>
  import { push, location } from "svelte-spa-router";
  import { onDestroy } from "svelte";
  import CircleButtonForPush from "../components/CircleButtonForPush.svelte";

  let src = "userPicture.jpeg";
  let showUserInformation = false;
  function ClickUser(state) {
    showUserInformation = !state;
  }

  function JumpNewPage(address) {
    push("/" + address);
  }
  let currentpath = "";
  const unsubscribe = location.subscribe(($location) => {
    currentpath = $location;
  });
  onDestroy(unsubscribe);
</script>

<h4>LIPS - Lightweight Information Portal Service</h4>

<body>
  {#if currentpath == "/main"}
    <ul>
      <button class="circle" on:click={() => ClickUser(showUserInformation)}>
        <img {src} alt="user" class="button-img" />
      </button>
      <div style:display={showUserInformation ? "block" : "none"}>
        <li>
          <button on:click={() => JumpNewPage("checkInformation")}>
            Todolist
          </button>
        </li>
        <li>
          <button on:click={() => JumpNewPage("login")}> 登出 </button>
        </li>
      </div>
    </ul>
  {/if}
</body>
<div class="button-manage">
  <CircleButtonForPush
    address="/searchChannel"
    info="查找频道"
    src="searchChannelPicture.jpg"
  />
  <CircleButtonForPush
    address="/createChannel"
    info="创建频道"
    src="createChannelPicture.jpg"
  />
  <CircleButtonForPush
    address="/selectTags"
    info="筛选标签"
    src="selectTagsPicture.jpg"
  />
  <CircleButtonForPush
    address="/postnotice"
    info="发送通知"
    src="postnoticePicture.jpg"
  />
  <CircleButtonForPush
    address="/participants"
    info="频道成员"
    src="participantsPicture.jpg"
  />
</div>

<style>
  .circle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    border: none;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .button-manage {
    display: grid;
    grid-template-columns: 1fr;
    width: 30px;
    height: 150px;
  }
</style>
