const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalScore = document.getElementById("finalScore");



const leaderBoard = JSON.parse(localStorage.getItem('leaderBoard')) || [];
//console.log(JSON.parse(localStorage.getItem("highScores")));

const MAX_SCORES = 5;
console.log(leaderBoard);



finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  //console.log(username.value);
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
  console.log("Clicked the save button!");
  e.preventDefault();

  const score = {
    score: Math.floor(Math.random()*100),
    name: username.value
  };
  leaderBoard.push(score);
  leaderBoard.sort((a,b) =>  b.score - a.score);
  leaderBoard.splice(5);
  localStorage.setItem('leaderBoard', JSON.stringify(leaderBoard));
  //window.location.assign("/index.html");
};





