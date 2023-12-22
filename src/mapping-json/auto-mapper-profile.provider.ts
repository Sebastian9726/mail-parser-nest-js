import { AutomapperProfile } from '@automapper/nestjs';
import { Mapper, createMap, forMember, mapFrom } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { InjectMapper } from '@automapper/nestjs';
import { EmailReceiptActionDto } from './class/email-receipt-action.dto';
import { TargetDto } from './class/target.dto';

@Injectable()
export class MappingProfile extends AutomapperProfile {
    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    override get profile() {
        return (mapper) => {
            createMap(
                mapper,
                EmailReceiptActionDto,
                TargetDto,
                forMember((d) => d.spam, mapFrom(s => s.Records[0].ses.receipt.spamVerdict.status === "PASS")),
                forMember((d) => d.virus, mapFrom(s => s.Records[0].ses.receipt.virusVerdict.status === "PASS")),
                forMember((d) => d.dns, mapFrom(s => s.Records[0].ses.receipt.dmarcVerdict.status === "PASS" &&
                    s.Records[0].ses.receipt.dkimVerdict.status === "PASS" &&
                    s.Records[0].ses.receipt.spfVerdict.status === "PASS"
                )),
                forMember((d) => d.mes, mapFrom(s => new Date(s.Records[0].ses.mail.timestamp).toLocaleDateString('en-US', { month: 'long' }))),
                forMember((d) => d.retrasado, mapFrom(s => s.Records[0].ses.receipt.processingTimeMillis > 1000)),
                forMember((d) => d.emisor, mapFrom(s => s.Records[0].ses.mail.source.split('@')[0])),
                forMember((d) => d.receptor, mapFrom(s => s.Records[0].ses.mail.destination.map(destinationEmail => destinationEmail.split('@')[0])))
            );
        };
    }
}