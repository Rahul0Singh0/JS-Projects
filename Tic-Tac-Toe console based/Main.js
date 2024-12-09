import Board from './Board.js';
import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

class Game {
    constructor() {
        console.clear();
        console.log("Welcome to Tic-Tac-Toe Two Player Game\n");
        console.log("First Player: X\nSecond Player: O\n");
        this.player = 'X';
    }
    play() {
        this.b = new Board();
        this.b.printBoard();
        let location;
        while(true) {
            if(this.b.isFull()) {
                console.log("Draw the game!\n\n");
                return;
            }

            console.log(`Player : ${this.player}`);
            location = parseInt(prompt("Enter your location (1-9): "));
            if(location < 1 && location > 9) {
                cout<<"Invalid location!!!\n";
                cout<<"Try Again: ";
            } 
            
            this.b.updateBoard(location, this.player);

            if(this.b.checkWin(this.player)) {
                console.log(`${this.player} won the game!\n\n`);
                prompt("");
                return;
            } 

            this.player = this.player == 'X' ? 'O' : 'X'; // player switched
        }
    }
};

function main() {
    while(true) {
        let ga = new Game();
        console.log("1.Start Game\n");
        console.log("2.End Game\n");
        let n = prompt();
        switch(n) {
            case '1':
                ga.play();
                break;
            case '2':
                return;
                break;
            default:
                console.log("Invalid Input!\n");
                break;
        }
    }
}

main();