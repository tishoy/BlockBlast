System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, NodeEventType, Prefab, UIOpacity, UITransform, Vec2, Vec3, BlockEnum, GameController, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Block;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBlockEnum(extras) {
    _reporterNs.report("BlockEnum", "./BlockEnum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      NodeEventType = _cc.NodeEventType;
      Prefab = _cc.Prefab;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BlockEnum = _unresolved_2.BlockEnum;
    }, function (_unresolved_3) {
      GameController = _unresolved_3.GameController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "734638CxG1OHLyXf25o1nKD", "Block", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'NodeEventType', 'Prefab', 'UIOpacity', 'UITransform', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Block", Block = (_dec = ccclass('Block'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Number
      }), _dec(_class = (_class2 = class Block extends Component {
        constructor(...args) {
          super(...args);
          this.type = Math.floor(Math.random() * 16);
          this.rotation = 0;

          _initializerDefineProperty(this, "GridPrefab", _descriptor, this);

          _initializerDefineProperty(this, "index", _descriptor2, this);

          this.grids = [];
          this.width = 0;
          this.height = 0;
        }

        start() {
          this.node.on(NodeEventType.TOUCH_START, this.touchStart, this);
          let data = (_crd && BlockEnum === void 0 ? (_reportPossibleCrUseOfBlockEnum({
            error: Error()
          }), BlockEnum) : BlockEnum).getRotation(this.type, this.rotation);
          this.width = 160;
          this.height = 160;
          this.node.getComponent(UITransform).width = 80 * 2;
          this.node.getComponent(UITransform).height = 80 * 2;
          console.log(data);

          for (let i = 0; i < data.length; i++) {
            let node = instantiate(this.GridPrefab);
            let x = data[i] % 8 * 80 + 40;
            let y = Math.floor(data[i] / 8) * 80 + 40;
            node.setPosition(new Vec3(x, y, 0));
            this.node.addChild(node);
            node.getComponent(UIOpacity).opacity = 255;
            this.grids.push(node);
          }

          this.node.on(NodeEventType.TOUCH_START, this.touchStart, this);
        }

        touchStart(event) {
          this.node.off(NodeEventType.TOUCH_START, this.touchStart, this);
          this.node.on(NodeEventType.TOUCH_CANCEL, this.touchCancel, this);
          this.node.on(NodeEventType.TOUCH_MOVE, this.touchMove, this, true);
          this.node.on(NodeEventType.TOUCH_END, this.touchEnd, this);
          console.log("start");
          (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).Instance.currentBlock = this.index;
        }

        touchMove(event) {
          // console.log(event.touch);
          this.node.setPosition(new Vec3(event.touch._point.x - 480, event.touch._point.y - event.touch._startPoint.y));
        }

        touchEnd(event) {
          console.log("end");
          this.node.on(NodeEventType.TOUCH_START, this.touchStart, this);
          this.node.off(NodeEventType.TOUCH_CANCEL, this.touchCancel, this);
          this.node.off(NodeEventType.TOUCH_MOVE, this.touchMove, this);
          this.node.off(NodeEventType.TOUCH_END, this.touchEnd, this);
          this.node.getComponent(UIOpacity).opacity = 0;
        }

        touchCancel(event) {
          this.node.on(NodeEventType.TOUCH_START, this.touchStart, this);
          this.node.off(NodeEventType.TOUCH_CANCEL, this.touchCancel, this);
          this.node.off(NodeEventType.TOUCH_MOVE, this.touchMove, this);
          this.node.off(NodeEventType.TOUCH_END, this.touchEnd, this);
          console.log("cancel");
          this.node.getComponent(UIOpacity).opacity = 0;
          console.log(this.node.getPosition());
          (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).Instance.test(new Vec2(this.node.getPosition().x, this.node.getPosition().y - this.height), {
            type: this.type,
            rotation: this.rotation
          });
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "GridPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "index", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6c5f22c9e2177bde8d5b408a1a852c0da0aebabf.js.map