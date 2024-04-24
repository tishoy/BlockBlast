System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, resources, Sprite, SpriteFrame, ColorEnum, GameController, Block, _dec, _class, _crd, ccclass, property, Grid;

  function _reportPossibleCrUseOfColorEnum(extras) {
    _reporterNs.report("ColorEnum", "./ColorEnum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlock(extras) {
    _reporterNs.report("Block", "./Block", _context.meta, extras);
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
      resources = _cc.resources;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      ColorEnum = _unresolved_2.ColorEnum;
    }, function (_unresolved_3) {
      GameController = _unresolved_3.GameController;
    }, function (_unresolved_4) {
      Block = _unresolved_4.Block;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "77bb7rncRJMbq2DMTqkS46o", "Grid", undefined);

      __checkObsolete__(['_decorator', 'AssetManager', 'Component', 'Node', 'resources', 'Sprite', 'SpriteFrame', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Grid", Grid = (_dec = ccclass('Grid'), _dec(_class = class Grid extends Component {
        constructor() {
          super(...arguments);
          this.color = void 0;
          this.filled = false;
        }

        start() {}

        update(deltaTime) {}

        test() {
          return this.filled;
        }

        hide() {
          this.node.active = false;
          this.filled = false;
          this.color = -1;
        }

        show() {
          // this.node.getChildByName("Grid").getComponent(Sprite)
          this.filled = true;
          var color = (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).Instance.currentBlock.getComponent(_crd && Block === void 0 ? (_reportPossibleCrUseOfBlock({
            error: Error()
          }), Block) : Block).color;
          this.color = color;
          resources.load('texture/' + (_crd && ColorEnum === void 0 ? (_reportPossibleCrUseOfColorEnum({
            error: Error()
          }), ColorEnum) : ColorEnum).COLOR_RES[color] + "/spriteFrame", SpriteFrame, (err, asset) => {
            this.node.getChildByName("Grid").getComponent(Sprite).spriteFrame = asset;
            this.node.active = true;
          });
        }

        get Filled() {
          return this.filled;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a3b907c0afffe12fa11ef2bacb123909051a8cf9.js.map