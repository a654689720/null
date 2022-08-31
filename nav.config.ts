import { IConfig } from './src/types'

const c: IConfig = {
  // [Mondatory], Please replace following Github url with your own Github address which you forked in.
  // [必填], 请填写您的仓库地址，
  // 如果修改过仓库名为hotnav，请用最新的:aiever/hotnav
  gitRepoUrl: 'https://github.com/a654689720/null/tree/mynav',

  // Deployment branch name
  // 部署分支,此处为自己创建的mynav分支
  branch: 'mynav',

  // Whether the route is in Hash mode, if it is deployed on github pages, it must be set to true
  // 路由是否Hash模式, 如果是部署在github pages 务必设为 true
  hashMode: true,
}

export default c
