import { join } from 'path'
import { Controller, Get, Post, UseInterceptors, UploadedFile, Res } from '@nestjs/common'
import { UploadService } from './upload.service'
import { CreateUploadDto } from './dto/create-upload.dto'
import { UpdateUploadDto } from './dto/update-upload.dto'
import { FileInterceptor } from '@nestjs/platform-express'
import { Response } from 'express'
import { zip } from 'compressing'

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('album')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file) {
    console.log('file', file)
    return 'true'
  }

  @Get('export')
  downLoad(@Res() res: Response) {
    const url = join(__dirname, '../images/1664672515619.png')
    res.download(url)
  }

  @Get('stream')
  async down(@Res() res: Response) {
    const url = join(__dirname, '../images/1664672515619.png')
    const tarStream = new zip.Stream()
    await tarStream.addEntry(url)

    // 返回流 需要设置请求头
    res.setHeader('Content-Type', 'application/octet-stream')
    res.setHeader('Content-Dispositinn', `attachment filename=ar`)

    tarStream.pipe(res)
  }
}
