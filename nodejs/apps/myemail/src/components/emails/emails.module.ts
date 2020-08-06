import { Module } from '@nestjs/common';

import { EmailsDBModule } from '@shared/database';
import { EmailsAPIController } from './emails.controller';
import { EmailsAPIService } from './emails.service';

@Module({
  imports: [EmailsDBModule],
  controllers: [EmailsAPIController],
  providers: [EmailsAPIService],
})
export class EmailsModule {}
