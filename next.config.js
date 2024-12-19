import nextra from 'nextra'
 
const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  mdxOptions: {
    rehypePrettyCodeOptions: {
      theme: {
        dark: 'vesper',
        light: 'min-light'
      }
    }
  }
})
 
export default withNextra()
 
// If you have other Next.js configurations, you can pass them as the parameter:
// export default withNextra({ /* other next.js config */ })