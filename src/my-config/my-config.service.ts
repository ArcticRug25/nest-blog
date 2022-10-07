import { Inject, Injectable, Optional } from '@nestjs/common'
import { readdirSync } from 'fs'
import path from 'path'

@Injectable()
export class MyConfigService {
  constructor(@Inject('CONFIG_OPTIONS') private options, @Optional() private myConfig = {}) {
    readdirSync(options.path).map(async (file) => {
      if (file.slice(-10) === '.config.js') {
        const module = await import(path.resolve(options.path, file))
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
