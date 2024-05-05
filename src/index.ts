import * as readlineSync from 'readline-sync';
import { manageLeagues } from './modules/leagueModule';
import { managePlayerStats } from './modules/statsModule';

function main() {
    while (true) {
      console.log('\n1. Manage Leagues');
      console.log('2. Manage Teams');
      console.log('3. Manage Players');
      console.log('4. Manage PlayerStats');
      console.log('5. Exit\n');
  
      const choice = readlineSync.question('Enter your choice: ');
  
      switch (choice) {
        case '1':
          manageLeagues();
          break;
        case '2':
          manageTeams();
          break;
        case '3':
          managePlayers();
          break;
        case '4':
          managePlayerStats();
          break;
        case '5':
          console.log('Exiting program.');
          return;
        default:
          console.log('Invalid choice. Please try again.');
      }
    }
  }
  
function manageTeams(){}
function managePlayers(){}

main();