System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, resources, GameController, _dec, _class, _crd, ccclass, property, GameScene;

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
      resources = _cc.resources;
    }, function (_unresolved_2) {
      GameController = _unresolved_2.GameController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4980f+8Sn5APr/ctxsWfhdg", "GameScene", undefined);

      __checkObsolete__(['_decorator', 'AssetManager', 'Component', 'Node', 'resources']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameScene", GameScene = (_dec = ccclass('GameScene'), _dec(_class = class GameScene extends Component {
        // BlockArea: Node;
        start() {
          // this.BlockArea = this.node.getChildByName("BlockArea");
          resources.loadDir("texture", function (err, assets) {
            resources.preloadDir("texture");
          });
          (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).Instance.blocks = [this.node.getChildByName("BlockArea").getChildByName("Block1"), this.node.getChildByName("BlockArea").getChildByName("Block2"), this.node.getChildByName("BlockArea").getChildByName("Block3")];
          (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).Instance.gameArea = this.node.getChildByName("GameArea");
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e3f91723b5ea584a12bd0ce97908a3b645f87cba.js.map