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
    head: [
      ['script', {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=UA-171809471-1'
      }],
        ['script', {
          async: true,
          crossorigin: 'anonymous',
          src: 'https://kit.fontawesome.com/d06759fb7a.js',
      }],
      ['script', {}, `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
      
          gtag('config', 'UA-171809471-1');
      `]
  ],
}
