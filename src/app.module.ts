import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PayfortTokenizationService } from './payfort-tokenization.service';
import { PayfortService } from './payfort.service';
import { PayfortPurchaseService } from './payfort-purchase.service';
import { PayfortCheckStatusService } from './payfort-checkstatus.service';
@Module({
  imports: [ConfigModule.forRoot()],
  providers: [
    PayfortService,
    PayfortTokenizationService,
    PayfortPurchaseService,
    PayfortCheckStatusService
  ]
})
export class AppModule {}
