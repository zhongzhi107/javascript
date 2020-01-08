# Portal Eslint Setup

在 node 编译服务器上安装 `eslint` 环境。

## 安装
```
npm i
```

## 使用
```
npm start -- --config $1 --ignore-pattern $2 --output-file $3 $4
```
- `--config` eslint 配置文件位置
- `--ignore-pattern` 需要忽略的文件
- `--output-file` 结果文件输出位置
- `$4` 要校验的文件（夹）

```
npm test -- --config eslint-config-qunar-react.js ~/workspace/q/h_pc_ssr/src
npm test -- --config eslint-config-qunar-typescript-node.js ~/workspace/q/flow-graphql-node/src
npm test -- --config eslint-config-qunar-typescript-node.js ~/workspace/q/h_pc_transaction/src
npm test -- --config eslint-config-qunar-typescript-react.js --ignore-pattern detailForTest ~/workspace/q/h-pc-transaction/src
npm test -- --config eslint-config-qunar-typescript-node.js ~/workspace/q/tuan_food_node/src
npm test -- --config eslint-config-qunar-react.js ~/workspace/q/h-touch-transaction/src
npm test -- --config eslint-config-qunar-react.js ~/workspace/q/marketing-center/src
npm test -- --config eslint-config-qunar-typescript-node.js ~/workspace/q/marketing-center-node
npm test -- --config eslint-config-qunar-base.js ~/workspace/q/marketing-center-topic/src
npm test -- --config eslint-config-qunar-react.js ~/workspace/q/pgc_rn/src
npm test -- --config eslint-config-qunar-react.js ~/workspace/q/tuan-food-fe/src/common/component/FadeView.js
npm test -- --config eslint-config-qunar-react.js ~/workspace/q/open-platform/src
npm test -- --config eslint-config-qunar-typescript-node.js ~/workspace/q/graphfas/src
npm test -- --config eslint-config-qunar-typescript-node.js ~/workspace/q/graphqlFD/src
```

## 配置文件类型
根据前端常用的工程类型，抽象了 6 种校验规则：
- `eslint-config-qunar-base`- 使用 ES5 或 ES6 开发的前端（浏览器端）工程
- `eslint-config-qunar-node`- 使用 ES5 或 ES6 开发的 node 工程
- `eslint-config-qunar-react`- 使用 ES6 + react 开发的前端工程
- `eslint-config-qunar-typescript-base`- 使用 typescript 开发的前端（浏览器端）工程
- `eslint-config-qunar-typescript-node`- 使用 typescript 开发的 node 工程
- `eslint-config-qunar-typescript-react`- 使用 typescript + react 开发的前端工程

## eslint disable
在实际的项目开发过程中，在某些特殊情况下会有禁用某种规则的需求。为了保证系统的灵活性，从人性的角度，我们保留了通过注释来修改规则的能力，但使用上和官方的 disable 方式略有区别：
- 支持 `// eslint-disable-line` `// eslint-disable-next-line` 两种注释方式。
- 和官方不同的是 **注释中必须加上禁用的规则名称**
  - 禁用单个规则： `// eslint-disable-line no-alert`
  - 禁用多个规则，用逗号分隔： `// eslint-disable-line no-alert,quotes`
  - 禁用插件的单个规则，需要加上插件名称： `// eslint-disable-line jsx-a11y/aria-role`

## 本地配置
建议本地开发时使用和服务器一样的 eslint 配置，同时在 IDE 配置好 eslint 校验，这样就能在开发过程中实时发现代码问题，实时修改。

## 申请分支放行
如果是忽略分支， 可以在这里申请按分支放行
http://万事屋/qualitycheck/application.html
