import { Module } from '@nestjs/common';
import { MariaDbService } from './mariadb.service';

import { MariaDBEmails } from './schema/emails.schema';

@Module({
  imports: [],
  exports: [MariaDBEmails, MariaDbService],
  providers: [MariaDBEmails, MariaDbService],
})
export class MariaDbModule {}
