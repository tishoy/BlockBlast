System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCInteger, Component, instantiate, NodeEventType, Prefab, resources, Sprite, SpriteFrame, UITransform, Vec2, Vec3, BlockEnum, GameController, ColorEnum, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Block;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBlockEnum(extras) {
    _reporterNs.report("BlockEnum", "./BlockEnum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfColorEnum(extras) {
    _reporterNs.report("ColorEnum", "./ColorEnum", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCInteger = _cc.CCInteger;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      NodeEventType = _cc.NodeEventType;
      Prefab = _cc.Prefab;
      resources = _cc.resources;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BlockEnum = _unresolved_2.BlockEnum;
    }, function (_unresolved_3) {
      GameController = _unresolved_3.GameController;
    }, function (_unresolved_4) {
      ColorEnum = _unresolved_4.ColorEnum;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "734638CxG1OHLyXf25o1nKD", "Block", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'Component', 'instantiate', 'Node', 'NodeEventType', 'Prefab', 'resources', 'Sprite', 'SpriteFrame', 'UIOpacity', 'UITransform', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Block", Block = (_dec = ccclass('Block'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: CCInteger
      }), _dec(_class = (_class2 = class Block extends Component {
        constructor() {
          super(...arguments);
          this.type = void 0;
          this.rotation = 0;
          this.color = 0;

          _initializerDefineProperty(this, "GridPrefab", _descriptor, this);

          _initializerDefineProperty(this, "Index", _descriptor2, this);

          this.grids = [];
          this.used = void 0;
          this.width = 0;
          this.height = 0;
        }

        start() {
          this.generate();
          this.node.on(NodeEventType.TOUCH_START, this.touchStart, this);
          this.width = 160;
          this.height = 160;
          this.node.getComponent(UITransform).width = 80 * 2;
          this.node.getComponent(UITransform).height = 80 * 2;
          this.node.on(NodeEventType.TOUCH_START, this.touchStart, this);
          addEventListener("resetBlock", () => {
            this.refresh();
          });
        }

        generate() {
          var _this = this;

          this.type = Math.floor(Math.random() * 16);
          this.rotation = (_crd && BlockEnum === void 0 ? (_reportPossibleCrUseOfBlockEnum({
            error: Error()
          }), BlockEnum) : BlockEnum).randomRotation(this.type);
          this.color = Math.floor(Math.random() * (_crd && ColorEnum === void 0 ? (_reportPossibleCrUseOfColorEnum({
            error: Error()
          }), ColorEnum) : ColorEnum).COLOR_RES.length);
          var data = (_crd && BlockEnum === void 0 ? (_reportPossibleCrUseOfBlockEnum({
            error: Error()
          }), BlockEnum) : BlockEnum).getRotation(this.type, this.rotation);
          console.log(data);
          this.node.removeAllChildren();

          var _loop = function _loop() {
            var node = instantiate(_this.GridPrefab);
            var x = (data.rotation[i] % 8 - data.row[i] * 8) * 80 + 40;
            var y = data.row[i] * 80 + 40;
            node.setPosition(new Vec3(x, y, 0));

            _this.node.addChild(node);

            console.log('texture/' + (_crd && ColorEnum === void 0 ? (_reportPossibleCrUseOfColorEnum({
              error: Error()
            }), ColorEnum) : ColorEnum).COLOR_RES[_this.color] + '/spriteFrame');
            resources.load('texture/' + (_crd && ColorEnum === void 0 ? (_reportPossibleCrUseOfColorEnum({
              error: Error()
            }), ColorEnum) : ColorEnum).COLOR_RES[_this.color] + "/spriteFrame", SpriteFrame, (err, asset) => {
              node.getChildByName("Grid").getComponent(Sprite).spriteFrame = asset;
            });

            _this.grids.push(node);
          };

          for (var i = 0; i < data.rotation.length; i++) {
            _loop();
          }
        }

        touchStart(event) {
          this.node.off(NodeEventType.TOUCH_START, this.touchStart, this);
          this.node.on(NodeEventType.TOUCH_CANCEL, this.touchCancel, this);
          this.node.on(NodeEventType.TOUCH_MOVE, this.touchMove, this, true);
          this.node.on(NodeEventType.TOUCH_END, this.touchEnd, this);
          console.log("start");
          (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).Instance.currentBlock = this.node;
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
          var block = {
            type: this.type,
            rotation: this.rotation
          };
          var result = (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).Instance.test(new Vec2(this.node.getPosition().x, this.node.getPosition().y - this.height), block);
          console.log("能放" + result.canAdd);

          if (result.canAdd) {
            (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).Instance.add(result.index, block);
          } else {
            this.reset();
          }
        }

        touchCancel(event) {
          this.node.on(NodeEventType.TOUCH_START, this.touchStart, this);
          this.node.off(NodeEventType.TOUCH_CANCEL, this.touchCancel, this);
          this.node.off(NodeEventType.TOUCH_MOVE, this.touchMove, this);
          this.node.off(NodeEventType.TOUCH_END, this.touchEnd, this);
          var block = {
            type: this.type,
            rotation: this.rotation
          };
          var result = (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).Instance.test(new Vec2(this.node.getPosition().x, this.node.getPosition().y - this.height), block);
          console.log("能放" + result.canAdd);

          if (result.canAdd) {
            (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).Instance.add(result.index, block);
          } else {
            this.reset();
          }
        }

        update(deltaTime) {}

        isUsed() {
          return this.used;
        }

        use() {
          this.node.active = false;
        }

        reset() {
          this.node.setPosition((this.Index - 1) * -200, -100); // this.node.getComponent(UIOpacity).opacity = 255;

          this.node.active = true;
        }

        refresh() {
          this.generate();
          this.reset();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "GridPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Index", [_dec3], {
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
//# sourceMappingURL=8d686b77b877763065e7f9892d48c6af9c0568ca.js.map