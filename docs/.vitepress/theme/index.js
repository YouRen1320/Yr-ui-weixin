import DefaultTheme from "vitepress/theme";
import "./style.css";
import Layout from "./Layout.vue";
import Device from "./components/Device.vue";

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component("Device", Device);
  },
};
