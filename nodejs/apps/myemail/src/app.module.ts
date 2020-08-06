import { Module } from '@nestjs/common';

import { EmailsModule } from './components/emails';

@Module({
  imports: [EmailsModule],
})
export class AppModule {}
