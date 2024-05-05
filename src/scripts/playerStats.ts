import db from '../db'

export async function getPlayerWithMostGoals(): Promise<void> {
    try {
        const playerStats: any = await db.playerStats.findFirst({
            orderBy: {
                goals: 'desc'
            },
            include: {
                player: true
            }
        });
        if (playerStats) {
            console.log(playerStats.player.name + ' --> ' + playerStats.goals + ' goals')
        }
    } catch (error) {
        console.log(error)
    }
}

export async function getPlayerWithMostAssist(): Promise<void> {
    try {
        const playerStats: any = await db.playerStats.findFirst({
            orderBy: {
                assists: 'desc'
            },
            include: {
                player: true
            }
        });
        if (playerStats) {
            console.log(playerStats.player.name + ' --> ' + playerStats.assists + ' assists')
        }
    } catch (error) {
        console.log(error)
    }
}

export async function getPlayerWithMostAppearances(): Promise<void> {
    try {
        const playerStats: any = await db.playerStats.findFirst({
            orderBy: {
                appearances: 'desc'
            },
            include: {
                player: true
            }
        });
        if (playerStats) {
            console.log(playerStats.player.name + ' --> ' + playerStats.appearances + ' appearances')
        }
    } catch (error) {
        console.log(error)
    }
}

export async function getPlayersWithMostYellowCards(): Promise<void> {
    try {
        const playerStats: any = await db.playerStats.findFirst({
            orderBy: {
                yellowCards: 'desc'
            },
            include: {
                player: true
            }
        });
        if (playerStats) {
            console.log(playerStats.player.name + ' --> ' + playerStats.yellowCards + ' yellow cards')
        }
    } catch (error) {
        console.log(error)
    }
}

export async function getPlayersWithMostRedCards(): Promise<void> {
    try {
        const playerStats: any = await db.playerStats.findFirst({
            orderBy: {
                redCards: 'desc'
            },
            include: {
                player: true
            }
        });
        if (playerStats) {
            console.log(playerStats.player.name + ' --> ' + playerStats.redCards + ' red cards')
        }
    } catch (error) {
        console.log(error)
    }
}

export async function deleteAllStatsFromPlayer(playerId: number): Promise<void> {
    try {
        const playerStats = await db.playerStats.deleteMany({
            where: {
                playerId
            }
        });
        if (playerStats) {
            console.log(`Stats from player deleted`);
        }
    } catch (error) {
        console.log(error)
    }
}

export async function createStatsFromPlayer(playerId: number,  season: string, goals: number, assists: number, appearances: number, yellowCards: number, redCards: number, saves?: number): Promise<void> {
    try {
        const playerStats = await db.playerStats.create({
            data: {
                season: season,
                playerId,
                goals,
                assists,
                appearances,
                yellowCards,
                redCards,
                saves
            },
            include: {
                player: true
            }
        });
        console.log(`Stats for ${playerStats.player.name} created`);
    } catch (error) {
        console.log(error)
    }
}