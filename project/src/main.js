import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import "amfe-flexible";

import { Button,Swipe, SwipeItem } from "vant";
import "vant/lib/index.css";

const app = createApp(App);
app.use(Button).use(Swipe).use(SwipeItem).use();
app.use(store);
app.use(router);
app.mount("#app");

  
