import { Injectable } from '@nestjs/common';
import { Player } from './interfaces/player.interface';

@Injectable()
export class PlayersService {
    private readonly players: Player[] = [ //replaceable with mongo data
        {
            id: "1", //realistically replaced with mongo id
            username: "luke"
        }
    ];

    findPlayers(): Player[] {
        return this.players;
    }
}
