import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
const baseUrl = "https://wiki.foxystar.net";
export default defineConfig({
    base: "/",
    title: "FoxyStar Studios — Wiki",
    description: "Documentation, guides, and resources for FoxyStar Studios' projects.",

    head: [
        ["meta", { name: "og:type", content: "website" }],
        ["meta", { name: "twitter:card", content: "summary" }],
    ],
    transformPageData(pageData, ctx) {
        pageData.frontmatter.head ??= [];

        const cleanPath = "/".concat(pageData.relativePath.replace("index.md", '').replace(/\.md$/, ''));
        pageData.frontmatter.head.push(["meta", { property: "og:url", content: baseUrl.concat(cleanPath) }]);

        let image = baseUrl.concat("/assets/icon.png");
        let icon = baseUrl.concat("/assets/icon-empty.png");
        if (/^\/better-on-bedrock\//.test(cleanPath)) {
            image = baseUrl.concat("/better-on-bedrock/assets/icon.png");
            icon = baseUrl.concat("/better-on-bedrock/assets/title.png");
        };

        pageData.frontmatter.head.push(["link", { rel: "shortcut icon", type: "image/png", content: icon }]);
        pageData.frontmatter.head.push(["meta", { property: "og:image", content: image }]);
        pageData.frontmatter.head.push(["meta", { property: "twitter:image", content: image }]);
    },

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

        externalLinkIcon: true,
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