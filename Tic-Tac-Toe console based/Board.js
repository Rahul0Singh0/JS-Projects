class Board {
    constructor() {
        this.board = [
            ['|',' ',' ',' ',' ',' ','|',' ',' ',' ',' ',' ','|',' ',' ',' ',' ',' ','|'],
            ['|','_','_','_','_','_','|','_','_','_','_','_','|','_','_','_','_','_','|'],
            ['|',' ',' ',' ',' ',' ','|',' ',' ',' ',' ',' ','|',' ',' ',' ',' ',' ','|'],
            ['|','_','_','_','_','_','|','_','_','_','_','_','|','_','_','_','_','_','|'],
            ['|',' ',' ',' ',' ',' ','|',' ',' ',' ',' ',' ','|',' ',' ',' ',' ',' ','|'],
            ['|','_','_','_','_','_','|','_','_','_','_','_','|','_','_','_','_','_','|'],
        ];
        this.size = 0;
        this.visited = [
                           ['-','-','-'],
                           ['-','-','-'],
                           ['-','-','-'],
                        ]
    }
    printBoard() {
        console.clear();
        for(let i = 0; i < this.board.length; i++) {
            let str = "";
            for(let j = 0; j < this.board[i].length; j++) {
                str += this.board[i][j];
            }
            console.log(str);
        }
    }
    updateBoard(location, player) {
        if(location == 1) {
            this.board[1][3] = player;
            this.visited[0][0] = player;
        } else if(location == 2) {
            this.board[1][9] = player;
            this.visited[0][1] = player;
        } else if(location == 3) {
            this.board[1][15] = player;
            this.visited[0][2] = player;
        } else if(location == 4) {
            this.board[3][3] = player;
            this.visited[1][0] = player;
        } else if(location == 5) {
            this.board[3][9] = player;
            this.visited[1][1] = player;
        } else if(location == 6) {
            this.board[3][15] = player;
            this.visited[1][2] = player;
        } else if(location == 7) {
            this.board[5][3] = player;
            this.visited[2][0] = player;
        } else if(location == 8) {
            this.board[5][9] = player;
            this.visited[2][1] = player;
        } else if(location == 9) {
            this.board[5][15] = player;
            this.visited[2][2] = player;
        }
        this.size++;
        this.printBoard();
    }
    checkWin(player) {
        for(let i = 0; i < 3; i++) {
            // column checked
            if(this.visited[i][0] == player && this.visited[i][1] == player && this.visited[i][2] == player) return true;
            // row checked
            else if(this.visited[0][i] == player && this.visited[1][i] == player && this.visited[2][i] == player) return true;
            // diagonals checked
            else if(this.visited[0][0] == player && this.visited[1][1] == player && this.visited[2][2] == player) return true;
            else if(this.visited[0][2] == player && this.visited[1][1] == player && this.visited[2][0] == player) return true;
        }
        return false;
    }
    isFull() {
        return this.size == 9;
    }
};

export default Board;