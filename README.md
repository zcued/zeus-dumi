## 📒 目录介绍

```
├── components             文档存放路径
│   ├── index.md           首页展示
│   └── **.**              网站目录文档
├── docs                   执行build之后push，githubPages的部署目录（dumi的默认docs已被修改为components文件夹）
├── .eslintrc.js           eslint 配置
├── .fatherrc.ts           father 配置
├── .umirc.ts              dumi 配置
└── tsconfig.json          typescript 配置
```

其余文件可自行查阅了解。

## 🤖 命令介绍

| 名称                                        | 描述                 | 备注                                                                        |
| ------------------------------------------- | -------------------- | --------------------------------------------------------------------------- |
| `npm run start`&#124;`yarn start`           | 项目启动             | 使用 [dumi](https://github.com/umijs/dumi)，设置为 doc 模式，只包含文档开发 |
| `npm run prettier`                          | 代码美化             | -                                                                           |
| `npm run docs:build`&#124;`yarn docs:build` | 编译打包成 docs 文件 | -                                                                           |
