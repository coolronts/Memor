import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
});