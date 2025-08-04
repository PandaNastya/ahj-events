import WhackGoblin from "./game";

document.addEventListener("DOMContentLoaded", () => {
  const whackGoblin = new WhackGoblin();
  
  whackGoblin.startGame.bind(whackGoblin)();
});