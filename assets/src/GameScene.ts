import { _decorator, AssetManager, Component, Label, Node, resources } from 'cc';
import { GameController } from './GameController';
const { ccclass, property } = _decorator;

@ccclass('GameScene')
export class GameScene extends Component {

    // BlockArea: Node;

    start() {

        // this.BlockArea = this.node.getChildByName("BlockArea");

        resources.loadDir("texture", function (err, assets) {
            resources.preloadDir("texture");
        });
        GameController.Instance.gameArea = this.node.getChildByName("GameArea");
        GameController.Instance.blocks = [
            this.node.getChildByName("BlockArea").getChildByName("Block1"),
            this.node.getChildByName("BlockArea").getChildByName("Block2"),
            this.node.getChildByName("BlockArea").getChildByName("Block3")
        ]
        addEventListener("gameOver", () => {
            this.node.getChildByName("Label").getComponent(Label).string = "游戏失败"
        })
    }

    update(deltaTime: number) {

    }


}

