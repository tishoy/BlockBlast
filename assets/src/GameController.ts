import { Game, Node } from 'cc';
import { GameArea } from './GameArea';
import { Block } from './Block';

export class GameController {
    constructor() {
        if (GameController.instance != null) {
            console.log("singlon instance error")
        }
    }

    private static instance: GameController = null;

    public static get Instance() {
        if (this.instance == null) {
            this.instance = new GameController();
        }
        return GameController.instance;
    }

    public currentBlock;
    public blocks = [];
    public blockUsing = [0, 0, 0];

    public resetBlock() {
        this.currentBlock.getComponent(Block).reset();
        this.blockUsing[this.currentBlock.getComponent(Block).Index] = 0;
    }

    gameArea;

    public test(pos, block) {
        return this.gameArea.getComponent(GameArea).testBlock(pos, block);
    }

    public add(index, block) {
        this.gameArea.getComponent(GameArea).addBlock(index, block);

        let rows = this.gameArea.getComponent(GameArea).checkRow();
        let cols = this.gameArea.getComponent(GameArea).checkCol();

        console.log(rows);
        console.log(cols);

        let blastGrids = [];
        for (let i = 0; i < rows.length; i++) {
            for (let j = 0; j < 8; j++) {
                this.listAdd(blastGrids, rows[i] * 8 + j);
            }

        }

        for (let i = 0; i < cols.length; i++) {
            for (let j = 0; j < 8; j++) {
                this.listAdd(blastGrids, cols[i] + j * 8);
            }
        }

        console.log(blastGrids);
        for (let i = 0; i < blastGrids.length; i++) {
            this.gameArea.getComponent(GameArea).blast(blastGrids[i]);
        }


        this.currentBlock.getComponent(Block).use();
        this.blockUsing[this.currentBlock.getComponent(Block).Index] = 1;
        let allUsed = true;
        for (let i = 0; i < this.blockUsing.length; i++) {
            console.log(this.blockUsing[i]);
            if (this.blockUsing[i] == 0) {
                allUsed = false;
                break;
            }
        }
        if (allUsed) {
            for (let i = 0; i < this.blockUsing.length; i++) {
                this.blockUsing[i] = 0;
            }
            dispatchEvent(new Event("resetBlock"));
        }

        this.gameArea.getComponent(GameArea).checkGameOver();
    }

    public listAdd(list, value) {
        if (list.indexOf(value) == -1) {
            list.push(value);
        }
    }

}