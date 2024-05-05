import * as readlineSync from "readline-sync";
import {
  createTeam,
  deleteTeam,
  getAllTeams,
  getAllTeamsFromLeague,
} from "../scripts/team";

export async function manageTeams() {
  let exit = false;
  while (!exit) {
    console.log("\nChoose an action for Teams:");
    console.log("1. Get all teams");
    console.log("2. Get all teams from league");
    console.log("3. Delete team");
    console.log("4. Create team");
    console.log("5. Back\n");

    const actionChoice = parseInt(
      readlineSync.question("\nEnter action number: ")
    );

    switch (actionChoice) {
      case 1:
        await getAllTeams();
        break;
      case 2:
        handleGetAllTeamsByLeague();
        break;
      case 3:
        handleDeleteTeam();
        break;
      case 4:
        handleCreateTeam();
        break;
      case 5:
        exit = true;
        break;
      default:
        console.log("Invalid action number for Leagues.\n");
        break;
    }
  }
}

async function handleGetAllTeamsByLeague() {
  const leagueId = parseInt(readlineSync.question("Enter league ID: "));
  await getAllTeamsFromLeague(leagueId);
}

async function handleDeleteTeam() {
  const teamId = parseInt(readlineSync.question("Enter team ID: "));
  await deleteTeam(teamId);
}

async function handleCreateTeam() {
  const name = readlineSync.question("Enter team name: ");
  const city = readlineSync.question("Enter team's city: ");
  const leagueID = parseInt(readlineSync.question("Enter league ID: "));
  await createTeam(name, city, leagueID);
}
