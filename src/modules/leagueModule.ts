import * as readlineSync from "readline-sync";
import {
  createLeague,
  deleteLeague,
  getAllLeagues,
  getLeagueById,
} from "../scripts/league";

export function manageLeagues() {
  let exit = false;
  while (true) {
    console.log("\nChoose an action for Leagues:");
    console.log("1. Get all Leagues");
    console.log("2. Get League by ID");
    console.log("3. Create League");
    console.log("4. Delete League");
    console.log("5. Back");

    const actionChoice = parseInt(
      readlineSync.question("Enter action number: ")
    );

    switch (actionChoice) {
      case 1:
        getAllLeagues();
        break;
      case 2:
        handleGetLeagueById();
        break;
      case 3:
        handleCreateLeagueById();
        break;
      case 4:
        handleDeleteLeagueById();
        break;
      case 5:
        exit = true;
        break;
      default:
        console.log("Invalid action number for Leagues.");
        break;
    }
  }
}

function handleGetLeagueById() {
  const leagueId = parseInt(readlineSync.question("Enter league ID: "));
  getLeagueById(leagueId);
}

function handleDeleteLeagueById() {
  const leagueId = parseInt(readlineSync.question("Enter league ID: "));
  deleteLeague(leagueId);
}

function handleCreateLeagueById() {
  const name = readlineSync.question("Enter league name: ");
  const country = readlineSync.question("Enter league country: ");
  createLeague(name, country);
}
