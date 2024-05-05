import type { PlayerStats } from "./PlayerStats";
import type { Team } from "./Team";

export interface Player {
    playerId: number;
    name: string;
    teamId: number;
    team: Team;
    position: Position;
    age: number;
    height: number;
    weight: number;
    playerStats: PlayerStats[];
}

export enum Position {
    Goalkeeper,
    Defender,
    Midfielder,
    Forward,
}