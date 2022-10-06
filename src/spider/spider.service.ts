import { Injectable } from '@nestjs/common'
import axios from 'axios'
import * as cheerio from 'cheerio'
import { createWriteStream } from 'fs'
import { join } from 'path'
import { CreateSpiderDto } from './dto/create-spider.dto'
import { UpdateSpiderDto } from './dto/update-spider.dto'

@Injectable()
export class SpiderService {
  create(createSpiderDto: CreateSpiderDto) {
    return 'This action adds a new spider'
  }

  async findAll() {
    const urls: string[] = []
    const baseUrl = 'https://www.jpmn5.com'
    const nextText = '下一页'
    let pageIndex = 0
    const getPhotos = async () => {
      const body = await axios
        .get(`${baseUrl}/Cosplay/Cosplay10772${pageIndex ? '_' + pageIndex : ''}.html`)
        .then((res) => res.data)

      const $ = cheerio.load(body)

      const page = $('.pagination').eq(0).find('a')

      const pageArray = page
        .map(function () {
          return $(this).text()
        })
        .toArray()

      if (pageArray.includes(nextText)) {
        $('.article-content p img').each(function () {
          urls.push(baseUrl + $(this).attr('src'))
        })

        pageIndex++

        await getPhotos()
      }
    }
    await getPhotos()
    this.writeFile(urls)
    return 'cos'
  }

  writeFile(urls: string[]) {
    urls.forEach(async (url) => {
      const buffer = await axios.get(url, { responseType: 'arraybuffer' }).then((res) => res.data)
      const ws = createWriteStream(join(__dirname, '../photos' + new Date().getTime() + '.jpg'))
      ws.write(buffer)
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} spider`
  }

  update(id: number, updateSpiderDto: UpdateSpiderDto) {
    return `This action updates a #${id} spider`
  }

  remove(id: number) {
    return `This action removes a #${id} spider`
  }
}
