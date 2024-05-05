import * as readlineSync from "readline-sync";
import {
  createPlayer,
  deletePlayer,
  getAllPlayers,
  getAllPlayersFromTeam,
} from "../scripts/player";
import { Position } from "../models/Player";

export async function managePlayers() {
  let exit = false;
  while (!exit) {
    console.log("\nChoose an action for Players:");
    console.log("1. Get all players");
    console.log("2. Get all teams from team");
    console.log("3. Delete player");
    console.log("4. Create player");
    console.log("5. Back\n");

    const actionChoice = parseInt(
      readlineSync.question("\nEnter action number: ")
    );

    switch (actionChoice) {
      case 1:
        await getAllPlayers();
        break;
      case 2:
        handleGetAllPlayersFromTeam();
        break;
      case 3:
        handleDeletePlayer();
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

async function handleGetAllPlayersFromTeam() {
  const teamId = parseInt(readlineSync.question("Enter team ID: "));
  await getAllPlayersFromTeam(teamId);
}

async function handleDeletePlayer() {
  const playerId = parseInt(readlineSync.question("Enter player ID: "));
  await deletePlayer(playerId);
}

async function handleCreateTeam() {
  const name = readlineSync.question("Enter player name: ");
  const teamID = parseInt(readlineSync.question("Enter team ID: "));

  let position = readlineSync.question(
    "Enter player position (Goalkeeper, Defender, Midfieler, Forward): "
  );
  while (!positionValid(position)) {
    console.log("Invalid position. Please enter a valid position.");
    position = readlineSync.question(
      "Enter player position (Goalkeeper, Defender, Midfieler, Forward): "
    );
  }
  const age = parseInt(readlineSync.question("Enter player age: "));
  const height = parseInt(readlineSync.question("Enter player height: "));
  const weight = parseInt(readlineSync.question("Enter player weight: "));

  await createPlayer(name, teamID, position, age, height, weight);
}

function positionValid(position: string): boolean {
  return Object.values(Position).includes(position as unknown as Position);
}
