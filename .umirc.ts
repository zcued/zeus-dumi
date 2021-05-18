import { defineConfig } from 'dumi';

const repo = 'zeus-ui';

export default defineConfig({
  title: repo,
  favicon: 'https://z3.ax1x.com/2021/05/17/gRIp0s.jpg',
  logo: 'https://z3.ax1x.com/2021/05/17/gRIp0s.jpg',
  outputPath: 'docs-dist',
  mode: 'doc',
  hash: true,
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  styles: [
    `.markdown table { width:50%!important }`,
    `space { display: block; margin-bottom: 16px; }`,
  ],
});
