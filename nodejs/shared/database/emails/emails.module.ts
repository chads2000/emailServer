import { Module } from '@nestjs/common';
import { EmailsDBService } from './emails.service';
import { DatabaseModule } from '../database.module';

import { MariaDbModule } from '../mariadb/mariadb.module';

@Module({
  imports: [DatabaseModule, MariaDbModule],
  exports: [EmailsDBService],
  providers: [EmailsDBService],
})
export class EmailsDBModule {}
