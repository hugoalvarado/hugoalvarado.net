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
            '@vuepress/plugin-google-analytics',
            {
                'ga': 'UA-171809471-1'
            }
        ]
    ]
}
