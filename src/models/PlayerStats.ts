import type { Player } from "./Player";

export interface PlayerStats {
    playerStatsId: number;
    season: string;
    playerId: number;
    player: Player;
    appearances: number;
    goals: number;
    assists: number;
    yellowCards: number;
    redCards: number;
}