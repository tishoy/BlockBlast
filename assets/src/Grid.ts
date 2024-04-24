import { _decorator, AssetManager, Component, Node, resources, Sprite, SpriteFrame, UIOpacity } from 'cc';
import { ColorEnum } from './ColorEnum';
import { GameController } from './GameController';
import { Block } from './Block';
const { ccclass, property } = _decorator;

@ccclass('Grid')
export class Grid extends Component {

    color;
    private filled = false;

    start() {
    }

    update(deltaTime: number) {

    }

    public test() {
        return this.filled;
    }

    public hide() {
        this.node.active = false;
        this.filled = false;
        this.color = -1;
    }

    public show() {
        // this.node.getChildByName("Grid").getComponent(Sprite)
        this.filled = true;

        let color = GameController.Instance.currentBlock.getComponent(Block).color;

        this.color = color;
        resources.load('texture/' + ColorEnum.COLOR_RES[color] + "/spriteFrame", SpriteFrame, (err, asset) => {
            this.node.getChildByName("Grid").getComponent(Sprite).spriteFrame = asset;

        });
        this.node.active = true;
    }

    public get Filled() {
        return this.filled;
    }
}

