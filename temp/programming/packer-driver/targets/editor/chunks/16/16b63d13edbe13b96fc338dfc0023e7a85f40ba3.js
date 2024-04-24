System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, resources, Sprite, SpriteFrame, UIOpacity, ColorEnum, _dec, _class, _crd, ccclass, property, Grid;

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
      Component = _cc.Component;
      resources = _cc.resources;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      UIOpacity = _cc.UIOpacity;
    }, function (_unresolved_2) {
      ColorEnum = _unresolved_2.ColorEnum;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "77bb7rncRJMbq2DMTqkS46o", "Grid", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'resources', 'Sprite', 'SpriteFrame', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Grid", Grid = (_dec = ccclass('Grid'), _dec(_class = class Grid extends Component {
        constructor(...args) {
          super(...args);
          this.color = void 0;
          this.filled = false;
        }

        start() {}

        update(deltaTime) {}

        test() {
          return this.filled;
        }

        hide() {
          this.node.getComponent(UIOpacity).opacity = 0;
          this.filled = false;
        }

        show() {
          // this.node.getChildByName("Grid").getComponent(Sprite)
          this.filled = true;
          resources.load('texture/' + (_crd && ColorEnum === void 0 ? (_reportPossibleCrUseOfColorEnum({
            error: Error()
          }), ColorEnum) : ColorEnum).COLOR_RES[this.color] + "/spriteFrame", SpriteFrame, (err, asset) => {
            this.node.getChildByName("Grid").getComponent(Sprite).spriteFrame = asset;
          });
          this.node.getComponent(UIOpacity).opacity = 255;
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
//# sourceMappingURL=16b63d13edbe13b96fc338dfc0023e7a85f40ba3.js.map