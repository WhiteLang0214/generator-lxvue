/*
 * @file name: vue项目目录生成器
 * @Descripttion: 
 * @version: 
 * @Author: langxue
 * @Date: 2022-10-14 20:10:00
 * @LastEditors: langxue
 * @LastEditTime: 2022-10-14 21:12:39
 */
const Generator = require("yeoman-generator")

module.exports = class extends Generator {

  // 命令行交互
  prompting() {
    // promise
    return this.prompt([
      // 交互命令
      {
        type: 'input',
        name: 'title',
        message: '你的项目名称？:',
        default: this.appname
      }
    ]).then(answers => {
      this.answers = answers
    })
  }

  // 写入目录结构/文件
  writing() {
    // // 参数1：写的文件的路径和文件名
    // // 参数2：写的文件的内容
    // this.fs.write(this.destinationPath('temp.txt'), Math.random().toString())
    

    const templates = [
      'public/index.html',
      'public/favicon.ico',
      'src/api/index.js',
      'src/assets/logo.png',
      'src/axios/index.js',
      'src/components/HelloWorld.vue',
      'src/store/index.js',
      'src/styles/index.js',
      'src/utils/index.js',
      'src/views/layout.vue',
      'src/App.vue',
      'src/main.js',
      '.env.dev',
      '.env.pre',
      '.env.k8s',
      '.env.production',
      '.gitignore',
      'babel.config.js',
      'package.json',
      'vue.config.js',
      'README.md'
    ]

    templates.forEach(item => {
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answers
      )
    })

    // // 读取/写入文件
    // const tmpl = this.templatePath('index.html')
    // const output = this.destinationPath('index.html')
    // const context = this.answers

    // this.fs.copyTpl(tmpl, output, context)
  }

}