import { Injectable } from '@nestjs/common'
import { readdirSync } from 'fs'
import path from 'path'

@Injectable()
export class MyConfigService {
  myConfig = {}
  constructor() {
    const myConfig = {
      path: path.resolve(__dirname, '../config'),
    }

    readdirSync(myConfig.path).map(async (file) => {
      if (file.slice(-10) === '.config.js') {
        const module = await import(path.resolve(myConfig.path, file))
        this.myConfig = { ...this.myConfig, ...module.default() }
      }
    })
  }

  get(path: string) {
    return path.split('.').reduce((config, name) => {
      return config[name]
    }, this.myConfig)
  }
}
