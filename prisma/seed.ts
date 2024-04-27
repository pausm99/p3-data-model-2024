import db from "../db";

const league = await db.league.create({
    data: { 
        name: 'La Liga',
        country: 'Spain',
    }
});
console.log(`Created league with ID = ${league.leagueId}`)


const team = await db.team.create({
    data: {
        name: 'FC Barcelona',
        city: 'Barcelona',
        foundation: new Date('1899-11-29'),
        leagueId: league.leagueId,
        players: {
            createMany: {
                data:[
                        {
                            "name": "Lionel Messi",
                            "position": "Forward",
                            "age": 36,
                            "height": 170,
                            "weight": 72
                        },
                        {
                            "name": "Frenkie de Jong",
                            "position": "Midfielder",
                            "age": 27,
                            "height": 180,
                            "weight": 74
                        },
                        {
                            "name": "Pedri",
                            "position": "Midfielder",
                            "age": 20,
                            "height": 177,
                            "weight": 68
                        },
                        {
                            "name": "Lamine Yamal",
                            "position": "Forward",
                            "age": 17,
                            "height": 172,
                            "weight": 68
                        },
                        {
                            "name": "Ilkay Gündogan",
                            "position": "Midfielder",
                            "age": 33,
                            "height": 180,
                            "weight": 80
                        },
                        {
                            "name": "Robert Lewandowski",
                            "position": "Forward",
                            "age": 35,
                            "height": 185,
                            "weight": 81
                        }
                    ]
            }
        }
    }
});
console.log(`Created team with ID = ${team.teamId}`)