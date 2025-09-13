import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";

import NavbarItem from "./components/NavbarItem.vue";

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component("NavbarItem", NavbarItem);
    },
} satisfies Theme;