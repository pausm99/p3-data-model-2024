import type { League } from "./League";
import type { Player } from "./Player";

export interface Team {
    teamId: number;
    name: string;
    leagueId: number;
    league: League;
    city: string;
    players: Player[];
}