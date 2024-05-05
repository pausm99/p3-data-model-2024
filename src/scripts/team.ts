import db from '../db'
import type { Team } from '../models/Team';

export async function getAllTeams(): Promise<void> {
    try {
        const teams: any = await db.team.findMany({
            include: {
                league: true
            }
        });
        printData(teams);
    } catch (error) {
        console.log(error)
    }
}

export async function getAllTeamsFromLeague(leagueId: number): Promise<void> {
    try {
        const teams: any = await db.team.findMany({
            where: {
                leagueId
            },
            include: {
                league: true
            }
        });
        printData(teams);
    } catch (error) {
        console.log(error)
    }
}

export async function deleteTeam(teamId: number): Promise<void> {
    try {
        const team = await db.team.delete({
            where: {
                teamId
            }
        });
        console.log(`Team ${ team.name } deleted`);
    } catch (error) {
        console.log(error)
    }
}

export async function createTeam(name: string, city: string, leagueId: number): Promise<void> {
    try {
        const team = await db.team.create({
            data: {
                name: name,
                city: city,
                leagueId: leagueId
            }
        });
        console.log(`Team ${ team.name } created`);
    } catch (error) {
        console.log(error)
    }
}

function printData(teams: Team[]): void {
    teams.forEach((team: Team) => {
        console.log(team.teamId, team.name, team.city, team.league.name);
    });
}