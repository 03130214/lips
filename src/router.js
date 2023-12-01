import Login from "./routes/login.svelte";
import MainPage from "./routes/mainpage.svelte";
import DoorPage from "./routes/doorPage.svelte";
import Register from "./routes/register.svelte";
import CreateChannel from "./routes/createChannel.svelte";
import CheckInformation from "./routes/checkInformation.svelte";
import YourChannel from "./routes/yourChannel.svelte";
export default {
  "/": DoorPage,
  "/login": Login,
  "/main": MainPage,
  "/register": Register,
  "/createChannel": CreateChannel,
  "/checkInformation": CheckInformation,
  "/yourChannel": YourChannel,
};
