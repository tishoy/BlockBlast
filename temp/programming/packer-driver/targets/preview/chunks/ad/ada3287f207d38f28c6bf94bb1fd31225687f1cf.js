System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GameArea, GameController, _crd;

  function _reportPossibleCrUseOfGameArea(extras) {
    _reporterNs.report("GameArea", "./GameArea", _context.meta, extras);
  }

  _export("GameController", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      GameArea = _unresolved_2.GameArea;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2df4eee+mtHfbnU4Gdkxqbq", "GameController", undefined);

      __checkObsolete__(['Node']);

      _export("GameController", GameController = class GameController {
        constructor() {
          this.gameArea = void 0;

          if (GameController.instance != null) {
            console.log("singlon instance error");
          }
        }

        static get Instance() {
          if (this.instance == null) {
            this.instance = new GameController();
          }

          return GameController.instance;
        }

        test(pos, block) {
          var targetPos = this.gameArea.getComponent(_crd && GameArea === void 0 ? (_reportPossibleCrUseOfGameArea({
            error: Error()
          }), GameArea) : GameArea).getGridByPosition(pos);
          this.add(targetPos, block);
        }

        add(pos, block) {
          this.gameArea.getComponent(_crd && GameArea === void 0 ? (_reportPossibleCrUseOfGameArea({
            error: Error()
          }), GameArea) : GameArea).addBlock(pos, block);
        }

      });

      GameController.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ada3287f207d38f28c6bf94bb1fd31225687f1cf.js.map