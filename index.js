const whoWon = (team1, team2) => {
    if (team1.score > team2.score){
      const difference = team1.score - team2.score
      const winningStatement = `The ${team1.city} ${team1.name} beat the ${team2.city} ${team2.name} 
      in Super Bowl LIV by ${difference} points.`
      console.log(winningStatement)
    } else {
      const difference = team2.score - team1.score
      const winningStatement = `The ${team2.city} ${team2.name} beat the ${team1.city} ${team1.name} 
      in Super Bowl LIV by ${difference} points.`
      console.log(winningStatement)
    }
  }
  
  const chiefs = {
    name: "Chiefs",
    city: "Kansas City",
    score: 45
  }
  
  const niners = {
    name: "49ers",
    city: "San Fransisco",
    score: 21
  }
  
  whoWon(chiefs, niners)






