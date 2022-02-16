import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayersController } from './players/players.controller';
import { GamesController } from './games/games.controller';
import { PlayersService } from './players/players.service';

@Module({
  imports: [],
  controllers: [AppController, PlayersController, GamesController],
  providers: [AppService, PlayersService],
})
export class AppModule {}
