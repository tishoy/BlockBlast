System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GameArea, Block, GameController, _crd;

  function _reportPossibleCrUseOfGameArea(extras) {
    _reporterNs.report("GameArea", "./GameArea", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlock(extras) {
    _reporterNs.report("Block", "./Block", _context.meta, extras);
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
    }, function (_unresolved_3) {
      Block = _unresolved_3.Block;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2df4eee+mtHfbnU4Gdkxqbq", "GameController", undefined);

      __checkObsolete__(['Node']);

      _export("GameController", GameController = class GameController {
        constructor() {
          this.currentBlock = void 0;
          this.blockUsing = [0, 0, 0];
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
          return this.gameArea.getComponent(_crd && GameArea === void 0 ? (_reportPossibleCrUseOfGameArea({
            error: Error()
          }), GameArea) : GameArea).testBlock(pos, block);
        }

        add(index, block) {
          this.gameArea.getComponent(_crd && GameArea === void 0 ? (_reportPossibleCrUseOfGameArea({
            error: Error()
          }), GameArea) : GameArea).addBlock(index, block);
          this.currentBlock.getComponent(_crd && Block === void 0 ? (_reportPossibleCrUseOfBlock({
            error: Error()
          }), Block) : Block).use();
          this.blockUsing[this.currentBlock.getComponent(_crd && Block === void 0 ? (_reportPossibleCrUseOfBlock({
            error: Error()
          }), Block) : Block).Index] = 1;
          console.log(this.currentBlock.getComponent(_crd && Block === void 0 ? (_reportPossibleCrUseOfBlock({
            error: Error()
          }), Block) : Block));
          let allUsed = true;
          console.log("123");

          for (let i = 0; i < this.blockUsing.length; i++) {
            console.log(this.blockUsing[i]);

            if (this.blockUsing[i] == 0) {
              allUsed = false;
              break;
            }
          }

          console.log("结果" + allUsed);

          if (allUsed) {
            dispatchEvent(new Event("resetBlock"));
          }
        }

      });

      GameController.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d5ebade9a5aa1048bb37625b7439b2ee404d3697.js.map