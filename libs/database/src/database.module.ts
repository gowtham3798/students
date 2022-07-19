import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
// import { AllEntitiesSubscriber } from './all-entities-subscriber';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { State } from './state/state.entity';
// import { StateService } from './state/state.service';
import providers from './providers';
import { dataBaseProvider } from './database.service';
import entities from './entities';


@Module({
  imports: [
    dataBaseProvider,
    ConfigModule,
    TypeOrmModule.forFeature([...entities]),
  ],
  providers: [...providers],
  exports: [...providers,dataBaseProvider],
})
export class DatabaseModule {}
