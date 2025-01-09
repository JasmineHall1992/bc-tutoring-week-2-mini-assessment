
// Problem #1 //ß
const logBestPlayers = (teams) => {
    teams.forEach(team => {
      team.bestPlayers.forEach(player => {
        console.log(
          `${player.name} - ${player.position} - College: ${player.college.university}`
        );
      });
    });
  };
  
  
  

// Problem #2 //
const getSuperBowlWinners = (array) => {
    return array.filter(team =>
      team.bestPlayoffResults.forEach(
        (result) => result.round === "Final" && result.result === "Won"
      )
    );
  };
  
 

// Problem #3 //
function getTeamsByCollege(array, college) {
    return array.filter(team => {
        const players = teams.bestPlayers;
        for (let i = 0; i < players.length; i++){
            if (players[i].college.university === team){
                return true;
            }
        }
    });

};
   
  

// Problem #4 //

const mapTeams = (array) => {
    return array.map((team) => ({
      team: `${team.location} ${team.teamName}`,
      bestPlayer: team.bestPlayers[0].name,
      bestPlayoffResult: `${team.bestPlayoffResults[0].year} ${team.bestPlayoffResults[0].round}`,
    }));
  };
  
  
  
// Problem #5 // 
const reducePlayoffResults = (array) => {
    return array.reduce((accumulator, team) => {
      team.bestPlayoffResults.forEach((result) => {
        accumulator.push(
          `${result.result} ${result.year} ${result.round} against the ${result.opponent}`
        );
      });
      return accumulator;
    }, []);
  };

  

// Problem #6 //
const funnyTeams = (array) => {
    return array.reduce((accumulator, team) => {
      const collegeName = team.bestPlayers[0].college.university; // Get college of the first player
      return accumulator + `${collegeName} ${team.teamName}\n`; // Append to the result string
    }, "").trim(); // Remove the last unnecessary newline
  };
  