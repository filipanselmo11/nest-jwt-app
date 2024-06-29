import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProdsModule } from './prods/prods.module';

@Module({
  imports: [UsersModule, ProdsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
