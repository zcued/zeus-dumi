import { defineConfig } from 'dumi';

const repo = 'zeus-dumi';

export default defineConfig({
  title: repo,
  favicon: 'https://z3.ax1x.com/2021/05/18/gf0Ea4.png',
  logo: 'https://z3.ax1x.com/2021/05/18/gf0Ea4.png',
  outputPath: 'docs',
  mode: 'doc',
  hash: true,
  resolve: { includes: ['components', 'src'] },
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  styles: [
    `.markdown table { width:50%!important }`,
    `space { display: block; margin-bottom: 16px; }`,
  ],
});
