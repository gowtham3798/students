import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { StateUseCasesModule } from './state-use-cases/state-use-cases.module';
import { DatabaseModule } from 'libs/database/src/database.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    AutomapperModule.forRoot({
      options: [{ name: 'mapper', pluginInitializer: classes }],
      singular: true,
    }),
    DatabaseModule,
    StateUseCasesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
