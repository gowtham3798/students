import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './entities';

export const dataBaseProvider = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => {
    return {
    keepConnectionAlive: true,
    entities: [...entities],
    type: 'mysql',
    host: configService.get('DB_HOST'),
    port: 3306,
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_DATABASE'),
    synchronize: true
    };
  },
  inject: [ConfigService],
});
