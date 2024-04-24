import { _decorator, Component, DistanceJoint2D, instantiate, NodeEventType, Prefab, UIOpacity, Vec3 } from "cc";
import { Grid } from "./Grid";
import { GameController } from "./GameController";
import { BlockEnum } from "./BlockEnum";
const { ccclass, property } = _decorator;

@ccclass('GameArea')
export class GameArea extends Component {
    start() {
        this.createBlock();

    }
    @property({
        type: Prefab,
    })
    GridPrefab: Prefab;

    grids = [];

    public createBlock() {
        for (let i = 0; i < 64; i++) {
            let node = instantiate(this.GridPrefab);
            let x = (i % 8) * 80 - 320 + 40;
            let y = Math.floor(i / 8) * 80 - 320 + 40;
            node.setPosition(new Vec3(x, y, 0));
            this.node.getChildByName("Container").addChild(node);
            this.grids.push(node);
            node.getComponent(Grid).hide();


        }
    }

    public getGridByPosition(pos) {
        let nearest;
        let temp;
        let index;
        for (let i = 0; i < 64; i++) {
            let distance = Math.sqrt(
                Math.pow(pos.x - this.node.getPosition().x - this.grids[i].getPosition().x + 40, 2)
                + Math.pow(pos.y - this.node.getPosition().y - this.grids[i].getPosition().y - 160 + 40, 2)
            )
            if (nearest == undefined) {
                nearest = distance;
                temp = this.grids[i];
                index = i;
            }
            if (distance < nearest) {
                nearest = distance;
                temp = this.grids[i];
                index = i;
            }
        }
        if (nearest > 80) {
            this.resetBlock();
        } else {

        }

        // temp.getComponent(Grid).show();
        return index;
    }

    public resetBlock() {
        GameController.Instance.resetBlock();
    }

    public testBlock(pos, block) {
        let index = this.getGridByPosition(pos);
        return this.testBlockIndex(index, block);
    }

    public testBlockIndex(index, block) {

        let data = BlockEnum.getRotation(block.type, block.rotation);
        let list = data.rotation;
        console.log(list);
        let indexRow = Math.floor(index / 8);

        let canAdd = true;
        for (let i = 0; i < list.length; i++) {
            console.log("格子" + (index + list[i]))
            if (index + list[i] >= 64) {
                canAdd = false;
                break;
            }
            if (Math.floor((index + list[i]) / 8) != indexRow + data.row[i]) {
                canAdd = false;
                break;
            }

            console.log(this.grids[index + list[i]].getComponent(Grid).Filled)
            if (this.grids[index + list[i]].getComponent(Grid).Filled) {
                canAdd = false;
                break;
            }
        }
        return { canAdd: canAdd, index: index };
    }

    public addBlock(index, block) {
        let list = BlockEnum.getRotation(block.type, block.rotation).rotation;
        for (let i = 0; i < list.length; i++) {
            this.grids[index + list[i]].getComponent(Grid).show();
        }
    }

    public checkRow() {
        let rowList = [];
        for (let i = 0; i < 8; i++) {
            let allFilled = true
            for (let j = 0; j < 8; j++) {
                if (!this.grids[i * 8 + j].getComponent(Grid).Filled) {
                    allFilled = false;
                    break;
                }
            }
            console.log(allFilled);
            if (allFilled) {
                rowList.push(i);
            }
        }
        return rowList;
    }

    public checkCol() {
        let colList = [];
        for (let i = 0; i < 8; i++) {
            let allFilled = true
            for (let j = 0; j < 8; j++) {
                console.log(this.grids[i + j * 8].getComponent(Grid).Filled);
                if (!this.grids[i + j * 8].getComponent(Grid).Filled) {
                    allFilled = false;
                    break;
                }
            }
            console.log(allFilled);
            if (allFilled) {
                colList.push(i);
            }

        }
        return colList;
    }

    public blast(index) {
        this.grids[index].getComponent(Grid).hide();
    }

    public checkGameOver() {
        let isOver = true;
        let times = 0;
        for (let j = 0; j < GameController.Instance.blocks.length; j++) {
            if (GameController.Instance.blockUsing[j] == 1) {
                continue;
            }
            for (let i = 0; i < this.grids.length; i++) {
                let result;
                result = this.testBlockIndex(i, GameController.Instance.blocks[j].getComponent("Block").getBlockData());
                times++;
                if (result.canAdd) {
                    isOver = false;
                    break;
                }
            }
        }
        console.log("计算次数" + times + "是否结束" + isOver);
        if (isOver) {
            dispatchEvent(new Event("gameOver"));
        }
    }

}


