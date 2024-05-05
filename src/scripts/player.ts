import db from '../db'
import type { Player } from '../models/Player';

export async function getAllPlayers(): Promise<void> {
    try {
        const players: any = await db.player.findMany({
            include: {
                team: true
            }
        });
        printData(players);
    } catch (error) {
        console.log(error)
    }
}

export async function getAllPlayersFromTeam(teamId: number): Promise<void> {
    try {
        const players: any = await db.player.findMany({
            where: {
                teamId
            },
            include: {
                team: true
            }
        });
        printData(players);
    } catch (error) {
        console.log(error)
    }
}

export async function deletePlayer(playerId: number): Promise<void> {
    try {
        const player = await db.player.delete({
            where: {
                playerId
            }
        });
        console.log(`Player ${ player.name } deleted`);
    } catch (error) {
        console.log(error)
    }
}

export async function createPlayer(name: string, teamId: number, position: any, age: number, height: number, weight: number): Promise<void> {
    try {
        const player = await db.player.create({
            data: {
                name: name,
                teamId: teamId,
                position: position,
                age: age,
                height: height,
                weight: weight,
            }
        });
        console.log(`Player ${ player.name } created`);
    } catch (error) {
        console.log(error)
    }
}

function printData(players: Player[]): void {
    if (players.length === 0) console.log('No players found for this team');
    else {
        players.forEach((player: Player) => {
            console.log(player.playerId, player.name, player.team.name, player.position, player.age + ' years', player.height + ' cm', player.weight + ' kg');
        });    
    }
}
  