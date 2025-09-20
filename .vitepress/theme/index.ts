import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";

import NavbarItem from "./components/NavbarItem.vue";
import ParallaxHero from "./components/ParallaxHero.vue";
import StatBadge from "./components/StatBadge.vue";
import Callout from "./components/Callout.vue";
import FeatureGrid from "./components/FeatureGrid.vue";
import GalleryMasonry from "./components/GalleryMasonry.vue";

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component("NavbarItem", NavbarItem);
        app.component("ParallaxHero", ParallaxHero);
        app.component("StatBadge", StatBadge);
        app.component("Callout", Callout);
        app.component("FeatureGrid", FeatureGrid);
        app.component("GalleryMasonry", GalleryMasonry);
    },
} satisfies Theme;