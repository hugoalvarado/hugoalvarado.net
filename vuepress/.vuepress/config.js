module.exports = {
    host: 'localhost',
    title: ' ',
    description: ' ',
    themeConfig: {
        search: false,
        nav: [
            {text: 'Home', link: "/"},
            {text: 'Blog', link: "/blog/"}
        ]
    },
    sidebar: false,
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-00000000-0'
            }
        ]
    ]
}
