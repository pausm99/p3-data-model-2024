import type { League } from '@prisma/client';
import db from '../db'

export async function getAllLeagues(): Promise<void> {
    try {
        const leagues = await db.league.findMany();
        printData(leagues);
    } catch (error) {
        console.log(error)
    }
}

export async function getLeagueById(leagueId: number): Promise<void> {
    try {
        const league = await db.league.findUnique({
            where: {
                leagueId
            }
        });
        if (league) printData([league]);
        else console.log('League not found');
    } catch (error) {
        console.log(error)
    }
}

export async function createLeague(name: string, country: string): Promise<void> {
    try {
        const league = await db.league.create({
            data: {
                name: name,
                country: country
            }
        });
        console.log(`League ${ league.name } created`);
    } catch (error) {
        console.log(error)
    }
}

export async function deleteLeague(leagueId: number): Promise<void> {
    try {
        const league = await db.league.delete({
            where: {
                leagueId
            }
        });
        console.log(`League ${ league.name } deleted`);
    } catch (error) {
        console.log(error)
    }
}

export async function updateLeagueName(leagueId: number, name: string): Promise<void> {
    try {
        const league = await db.league.update({
            where: {
                leagueId
            },
            data: {
                name
            }
        });
        console.log(`League ${ league.name } name updated`);
    } catch (error) {
        console.log(error)
    }
}

function printData(leagues: League[]) {
    if (leagues.length === 0) console.log('No leagues found')
    else {
        leagues.forEach((league: League) => {
            console.log(league.leagueId, league.name, league.country);
        });
    }
}