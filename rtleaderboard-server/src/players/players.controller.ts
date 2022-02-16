import { Body, Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { PlayersService } from './players.service';
import { Player } from './interfaces/player.interface';

@Controller('players')
export class PlayersController {

    constructor(private readonly playersService: PlayersService) {};

    @Get()
    getPlayers(): Player[] {
        return this.playersService.findPlayers();
    }

    @Post() //Obv would be encrypted if real
    createPlayer(@Body() createPlayerDto: CreatePlayerDto): string {
        return `Name: ${createPlayerDto.username} Password: ${createPlayerDto.password}`;
    }

    @Delete(':username')
    deletePlayer(@Param('username') username): string {
        
        return `Deleted ${username}`;
    }

    

}
