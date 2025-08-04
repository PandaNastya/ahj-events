export default class Points {
    constructor() {
        this.hitPoints = 0; 
        this.missPoints = 0;
        this.hits = document.querySelector(".hits");
        this.misses = document.querySelector(".misses");
    }

    increaseHits() {  //подсчет очков попаданий
        this.hitPoints++;
        this.hits.innerText = this.hitPoints;
    }

    increaseMisses() {  //подсчет очков промахов
        this.missPoints++;
        this.misses.innerText = this.missPoints;
    }
}