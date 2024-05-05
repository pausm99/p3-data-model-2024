import * as readlineSync from "readline-sync";
import {
    createStatsFromPlayer,
    deleteAllStatsFromPlayer,
    getPlayersWithMostRedCards,
  getPlayersWithMostYellowCards,
  getPlayerWithMostAppearances,
  getPlayerWithMostAssists,
  getPlayerWithMostGoals,
} from "../scripts/playerStats";

export async function managePlayerStats() {
  let exit = false;
  while (!exit ) {
    console.log("\nChoose an action for Player Stats:");
    console.log("1. Get player with most goals");
    console.log("2. Get player with most assists");
    console.log("3. Get player with most appearances");
    console.log("4. Get player with most yellow cards");
    console.log("5. Get player with most red cards");
    console.log("6. Delete all stats from player");
    console.log("7. Create stats for player");
    console.log("8. Back\n");

    const actionChoice = parseInt(
      readlineSync.question("\nEnter action number: ")
    );

    switch (actionChoice) {
      case 1:
        await getPlayerWithMostGoals();
        break;
      case 2:
        await getPlayerWithMostAssists();
        break;
      case 3:
        await getPlayerWithMostAppearances();
        break;
      case 4:
        await getPlayersWithMostYellowCards();
        break;
      case 5:
        await getPlayersWithMostRedCards();
        break;
      case 6:
        handleDeleteAllStatsFromPlayer();
        break;
      case 7:
        handleCreateStatsFromPlayer();  
        break;
      case 8:
        exit = true;
        break;
      default:
        console.log("Invalid action number for Leagues.\n");
        break;
    }
  }
}


async function handleDeleteAllStatsFromPlayer() {
    const playerId = parseInt(readlineSync.question("Enter player ID: "));
    await deleteAllStatsFromPlayer(playerId);
}

async function handleCreateStatsFromPlayer() {
    const playerId = parseInt(readlineSync.question("Enter player ID: "));

    const season = readlineSync.question("Enter season (ex: 2018-2019): ");
    const goals = parseInt(readlineSync.question("Enter player goals: "));
    const assists = parseInt(readlineSync.question("Enter player assists: "));
    const appearences = parseInt(readlineSync.question("Enter player appearences: "));
    const yellowCards = parseInt(readlineSync.question("Enter player yellow cards: "));
    const redCards = parseInt(readlineSync.question("Enter player red cards: "));

    await createStatsFromPlayer(playerId, season, goals, assists, appearences, yellowCards, redCards)
}