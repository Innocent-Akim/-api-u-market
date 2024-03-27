import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SGBD } from './constante/sgbdType';
import { UsersModule } from './users/users.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: SGBD.POSTGRES,
      username: process.env.USER_NAME,
      password: process.env.PASSWORD,
      applicationName: 'umarket',
      host: process.env.DATA_HOST_NAME,
      database: process.env.DB_NAME,
      port: parseInt(<string>process.env.PORT),
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
