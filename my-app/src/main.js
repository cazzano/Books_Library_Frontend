import "./main.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createApp } from "vue";
import { createMetaManager } from "vue-meta";
import App from "./App.vue";
import router from "./routes";

const app = createApp(App);
app.use(createMetaManager());
app.use(router);
app.mount("#app");
