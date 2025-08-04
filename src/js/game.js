import Points from "./points";

export default class WhackGoblin{
    constructor() {
        this.hits = null;
        this.misses = null;
        this.currentCell = null;
        this.cells = [];
        this.points = new Points;
        this.container = document.querySelector(".container");
        this.interval = null;
    }

    victory(e) {  //вы выиграли
        if (!e.target.classList.contains('goblin')) {
		    return;
	    }
        this.points.increaseHits();
	    e.target.removeEventListener('click', this.victory);
        if (this.points.increaseHits === 10) {
            alert("VICTORY");
            this.endGame();
        }
        document.querySelector('.goblin').remove();
        clearInterval(this.interval);
        this.startGame();
    }

    startGame() {
        if (document.querySelector('.goblin')) {
		document.querySelector('.goblin').remove();
		this.points.increaseDefeat();
		clearInterval(this.interval);

        if (this.points.increaseMisses === 5) { //вы проиграли
            alert("YOU LOST! TRY AGAIN");
            this.endGame();
        }
        }
            //отрисовка таблицы игры
        if (!this.container) {
            console.error("Контейнер не найден!");
            return; 
        }

        for(let i = 0; i < 16; i++) {
            let cell = document.createElement("div");
            this.container.append(cell);
            this.cells.push(cell);
        }

            //рандомная позиция гоблина
        this.cells[this.currentCell].innerHTML = "";
        let newCell;
        do {
            newCell = Math.floor(Math.random() * this.cells.length);
        } while (newCell === this.currentCell);
        this.cells[newCell].append(goblin);

        goblin.addEventListener('click', this.victory.bind(this));
	    this.interval = setInterval(this.startGame.bind(this), 1000);
    }

    endGame() {  //игра закончена, обнуление
        this.points.hitPoints = 0;
        this.points.hits.innerText = 0;
        this.points.missPoints = 0;
        this.points.misses.innerText = 0;
    }
}