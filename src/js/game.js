import Points from "./points";

export default class WhackGoblin{
    constructor() {
        this.hits = null;
        this.misses = null;
        this.currentCell = null;
        this.cells = [];
        this.points = new Points;
        this.container = document.querySelector(".container");
    }

    victory() {  //вы выиграли
        if (this.points.increaseHits === 10) {
            alert("VICTORY");
            this.endGame();
        }
    }

    loss() {  //вы проиграли
        if (this.points.increaseMisses === 5) {
            alert("YOU LOST! TRY AGAIN");
            this.endGame();
        }
    }

    startGame() {

    }

    drowContainer() {  //отрисовка таблицы игры
        if (!this.container) {
            console.error("Контейнер не найден!");
            return;
            }

        for(let i = 0; i < 16; i++) {
            let cell = document.createElement("div");
            this.container.append(cell);
            this.cells.push(cell);
        }
    }

    randomMovie() {  //рандомная позиция гоблина
        this.cells[this.currentCell].innerHTML = "";
        let newCell;
        do {
            newCell = Math.floor(Math.random() * this.cells.length);
        } while (newCell === this.currentCell);
        this.cells[newCell].append(goblin);

        setInterval(randomMovie, 1000);
    }

    endGame() {  //игра закончена, обнуление
        this.points.hitPoints = 0;
        this.points.hits.innerText = 0;
        this.points.missPoints = 0;
        this.points.misses.innerText = 0;
    }
}