import { _decorator, CCInteger, Component, instantiate, Node, NodeEventType, Prefab, resources, Sprite, SpriteFrame, UIOpacity, UITransform, Vec2, Vec3 } from 'cc';
import { BlockEnum } from './BlockEnum';
import { GameController } from './GameController';
import { ColorEnum } from './ColorEnum';
const { ccclass, property } = _decorator;

@ccclass('Block')
export class Block extends Component {


    type;
    rotation = 0;
    color = 0;

    @property({
        type: Prefab,
    })
    GridPrefab: Prefab;

    @property({
        type: CCInteger,
    })
    Index;

    grids = [];

    used;

    width = 0;
    height = 0;

    start() {
        this.generate();

        this.node.on(NodeEventType.TOUCH_START, this.touchStart, this);


        this.width = 160;
        this.height = 160;

        this.node.getComponent(UITransform).width = 80 * 2;
        this.node.getComponent(UITransform).height = 80 * 2;



        this.node.on(NodeEventType.TOUCH_START, this.touchStart, this);
        addEventListener("resetBlock", () => {
            this.refresh()
        })
    }

    public generate() {
        this.type = Math.floor(Math.random() * 16);
        this.rotation = BlockEnum.randomRotation(this.type)
        this.color = Math.floor(Math.random() * ColorEnum.COLOR_RES.length);

        let data = BlockEnum.getRotation(this.type, this.rotation);

        console.log(data);

        this.node.removeAllChildren();

        for (let i = 0; i < data.rotation.length; i++) {
            let node = instantiate(this.GridPrefab);
            let x = (data.rotation[i] % 8 + (Math.floor(data.rotation[i] / 8) - data.row[i]) * 8) * 80 + 40;
            let y = (data.row[i]) * 80 + 40;
            node.setPosition(new Vec3(x, y, 0));
            console.log(x, y);
            this.node.addChild(node);
            console.log('texture/' + ColorEnum.COLOR_RES[this.color] + '/spriteFrame');
            resources.load('texture/' + ColorEnum.COLOR_RES[this.color] + "/spriteFrame", SpriteFrame, (err, asset) => {
                node.getChildByName("Grid").getComponent(Sprite).spriteFrame = asset;
            });

            this.grids.push(node);
        }

    }

    public touchStart(event) {
        this.node.off(NodeEventType.TOUCH_START, this.touchStart, this);
        this.node.on(NodeEventType.TOUCH_CANCEL, this.touchCancel, this);
        this.node.on(NodeEventType.TOUCH_MOVE, this.touchMove, this, true);
        this.node.on(NodeEventType.TOUCH_END, this.touchEnd, this);
        console.log("start");
        this.node.setScale(1, 1);
        GameController.Instance.currentBlock = this.node;
    }

    public touchMove(event) {
        // console.log(event.touch);
        this.node.setPosition(new Vec3(event.touch._point.x - 480,
            event.touch._point.y - event.touch._startPoint.y));
    }

    public touchEnd(event) {
        console.log("end");
        this.node.on(NodeEventType.TOUCH_START, this.touchStart, this);
        this.node.off(NodeEventType.TOUCH_CANCEL, this.touchCancel, this);
        this.node.off(NodeEventType.TOUCH_MOVE, this.touchMove, this);
        this.node.off(NodeEventType.TOUCH_END, this.touchEnd, this);

        let block = { type: this.type, rotation: this.rotation };
        let result = GameController.Instance.test(new Vec2(this.node.getPosition().x, this.node.getPosition().y - this.height),
            block);
        console.log("能放" + result.canAdd);
        if (result.canAdd) {
            GameController.Instance.add(result.index, block);
        } else {
            this.reset();
        }
    }

    public touchCancel(event) {
        this.node.on(NodeEventType.TOUCH_START, this.touchStart, this);
        this.node.off(NodeEventType.TOUCH_CANCEL, this.touchCancel, this);
        this.node.off(NodeEventType.TOUCH_MOVE, this.touchMove, this);
        this.node.off(NodeEventType.TOUCH_END, this.touchEnd, this);

        let block = { type: this.type, rotation: this.rotation };
        let result = GameController.Instance.test(new Vec2(this.node.getPosition().x, this.node.getPosition().y - this.height),
            block);
        console.log("能放" + result.canAdd);
        if (result.canAdd) {
            GameController.Instance.add(result.index, block);
        } else {
            this.reset();
        }
    }

    update(deltaTime: number) {

    }

    public isUsed() {
        return this.used;
    }

    public use() {
        this.node.active = false;
    }

    public reset() {
        this.node.setPosition((this.Index - 1) * (-200), -100);
        // this.node.getComponent(UIOpacity).opacity = 255;
        this.node.setScale(0.5, 0.5);
        this.node.active = true;
    }

    public refresh() {
        this.generate();
        this.reset();
    }

    public getBlockData() {
        return { type: this.type, rotation: this.rotation, color: this.color }
    }
}

