import type { Team } from "./Team";

export interface League {
    leagueId: number;
    name: string;
    country: string;
    teams: Team[];
}  