import { Module } from '@nestjs/common';

import { DatabaseService } from './database.service';
import { MariaDbModule } from './mariadb/mariadb.module';

@Module({
  imports: [MariaDbModule],
  exports: [DatabaseService],
  providers: [DatabaseService],
})
export class DatabaseModule {}
