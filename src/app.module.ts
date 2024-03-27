import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SGBD } from './constante/sgbdType';
import { join } from 'path';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: SGBD.POSTGRES,
        username: process.env.USER_NAME,
        password: process.env.PASSWORD,
        applicationName: 'umarket',
        host: process.env.DATA_HOST_NAME,
        database: process.env.DB_NAME,
        port: parseInt(<string>process.env.PORT),
        synchronize: true,
        autoLoadEntities: true,
        entityPrefix: 't',
        entities: [join(process.cwd(), 'dist/**/*.entity.js')]
      })
    }),
    UsersModule
  ],

})
export class AppModule { }
