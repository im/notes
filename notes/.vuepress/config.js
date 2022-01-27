const path = require("path");
module.exports = (options, context, api) => {
    return {
        title: "糖小米 .",
        description: "Web development, Frontend, JavaScript, Nodejs",
        base: '/notes/',
        theme: "@vuepress/blog",
        head: [
            ['link', { rel: 'icon', href: '/favicon.ico' }]
        ],
        themeConfig: {
            // directories: [
            //     {
            //         id: "posts",
            //         dirname: "_posts",
            //         title: "文章",
            //         path: "/posts/",
            //         itemPermalink: "/posts/:year/:month/:day/:slug"
            //     }
            // ],
            sitemap: {
                hostname: "https://tangxiaomi.top/notes/"
            },
            // comment: {
            //     service: "vssue",
            //     autoCreateIssue: true,
            //     prefix: "[Post]",
            //     owner: "im",
            //     repo: "notes",
            //     clientId: "b5b53b3c7256700567b5",
            //     clientSecret: "b68c52203c9b119d8adc6a38e0e6fbc593d6414e"
            // },
            footer: {
                contact: [
                    {
                        type: "github",
                        link: "https://github.com/im"
                    },
                    {
                        type: "mail",
                        link: "mailto:tangxiaomiemail@gmail.com"
                    }
                ],
                copyright: [
                    {
                        text: "糖小米 © 2022",
                        link: ""
                    }
                ]
            },
            smoothScroll: true
        },
        alias: {
            "@assets": path.resolve(__dirname, "../assets")
        }
    };
};
