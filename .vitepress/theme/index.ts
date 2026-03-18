import { watchEffect } from "vue";
import DefaultTheme, { useSidebar } from "vitepress/theme";
import { useData, type Theme } from "vitepress";

import NavbarItem from "./components/NavbarItem.vue";
import ParallaxHero from "./components/ParallaxHero.vue";
import StatBadge from "./components/StatBadge.vue";
import Callout from "./components/Callout.vue";
import FeatureGrid from "./components/FeatureGrid.vue";
import GalleryMasonry from "./components/GalleryMasonry.vue";

import "./overrides.css";

export default {
    extends: DefaultTheme,
    setup() {
        const { frontmatter } = useData();
        const { hasSidebar } = useSidebar();

        if (typeof window !== "undefined") {
            watchEffect(() => {
                const isWide =
                    frontmatter.value.wide === true || frontmatter.value.layoutClass === "wide-structure"

                document.body.classList.toggle("wide-content", isWide);
            });
        };
    },
    enhanceApp({ app }) {
        app.component("NavbarItem", NavbarItem);
        app.component("ParallaxHero", ParallaxHero);
        app.component("StatBadge", StatBadge);
        app.component("Callout", Callout);
        app.component("FeatureGrid", FeatureGrid);
        app.component("GalleryMasonry", GalleryMasonry);
    },
} satisfies Theme;