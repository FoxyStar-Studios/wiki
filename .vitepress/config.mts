import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: "/",
    title: "FoxyStar Studios — Wiki",
    description: "The official FoxyStar Wiki — documentation, guides, and resources for FoxyStar projects",
    
    head: [
        ["link", { rel: "shortcut icon", type: "image/png", href: "/assets/icon-empty.png" }],

        ["meta", { property: "og:title", content: "FoxyStar Studios — Wiki" }],
        ["meta", { property: "og:description", content: "The official FoxyStar Wiki — documentation, guides, and resources for FoxyStar projects" }],
        ["meta", { property: "og:image", content: "https://wiki.foxystar.net/assets/icon-empty.png" }],
        ["meta", { name: "twitter:card", content: "summary" }],
        ["meta", { name: "twitter:image", content: "https://wiki.foxystar.net/assets/icon-empty.png" }],
    ],
    vite: {
        publicDir: ".vitepress/public"
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: "/assets/icon.png",
        socialLinks: [
            { icon: "github", link: "https://github.com/FoxyStar-Studios" },
            { icon: "discord", link: "https://discord.gg/better-on-bedrock" }
        ],
        search: {
            provider: "local"
        },

        nav: [
            { text: "Home", link: "/" },
            {
                text: "Content",
                items: [
                    {
                        component: "NavbarItem",
                        props: {
                            imageSrc: "/better-on-bedrock/assets/title.png",
                            text: "Better on Bedrock",
                            link: "/better-on-bedrock",
                        },
                    },
                ]
            },
        ],

        sidebar: {
            "/better-on-bedrock": [
                {
                    text: "Better on Bedrock",
                    items: [
                        
                    ],
                }
            ]
        },

        lastUpdated: {
            text: "Updated at",
            formatOptions: {
                dateStyle: 'full',
                timeStyle: 'medium'
            }
        },
        footer: {
            message: "",
            copyright: "Copyright © 2025-present FoxyStar Studios"
        },
    },
});