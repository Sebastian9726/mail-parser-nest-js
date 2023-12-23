import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as util from 'util';
import { simpleParser } from 'mailparser';
import { IMailMappingService } from '../mail-mapping.service.impl';

const readFileAsync = util.promisify(fs.readFile);

@Injectable()
export class MailMappingService  implements IMailMappingService{

    constructor() { }

    async mapppingEmail(urlOrPath: string): Promise<any> {
        try {
            const emailContent = await readFileAsync(urlOrPath, 'utf8');
            const { attachments, text, html } = await simpleParser(emailContent);
            return { attachments, text, html };
        } catch (error) {
            throw new HttpException('Error when the server IS trying to transform the input', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
