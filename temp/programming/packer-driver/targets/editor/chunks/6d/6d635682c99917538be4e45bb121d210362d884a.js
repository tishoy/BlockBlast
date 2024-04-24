System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, resources, _dec, _class, _crd, ccclass, property, GameScene;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      resources = _cc.resources;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4980f+8Sn5APr/ctxsWfhdg", "GameScene", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'resources']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameScene", GameScene = (_dec = ccclass('GameScene'), _dec(_class = class GameScene extends Component {
        constructor(...args) {
          super(...args);
          this.GameArea = void 0;
          this.BlockArea = void 0;
        }

        start() {
          this.GameArea = this.node.getChildByName("GameArea");
          this.BlockArea = this.node.getChildByName("BlockArea");
          resources.loadDir("texture", function (err, assets) {});
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6d635682c99917538be4e45bb121d210362d884a.js.map