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

      __checkObsolete__(['Game', 'Node']);

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
          var rows = this.gameArea.getComponent(_crd && GameArea === void 0 ? (_reportPossibleCrUseOfGameArea({
            error: Error()
          }), GameArea) : GameArea).checkRow();
          var cols = this.gameArea.getComponent(_crd && GameArea === void 0 ? (_reportPossibleCrUseOfGameArea({
            error: Error()
          }), GameArea) : GameArea).checkCol();
          console.log(rows);
          console.log(cols);
          var blastGrids = [];

          for (var i = 0; i < rows.length; i++) {
            for (var j = 0; j < 8; j++) {
              this.listAdd(blastGrids, i * 8 + j);
            }
          }

          for (var _i = 0; _i < cols.length; _i++) {
            for (var _j = 0; _j < 8; _j++) {
              this.listAdd(blastGrids, _i + _j * 8);
            }
          }

          console.log(blastGrids);
          this.currentBlock.getComponent(_crd && Block === void 0 ? (_reportPossibleCrUseOfBlock({
            error: Error()
          }), Block) : Block).use();
          this.blockUsing[this.currentBlock.getComponent(_crd && Block === void 0 ? (_reportPossibleCrUseOfBlock({
            error: Error()
          }), Block) : Block).Index] = 1;
          console.log(this.currentBlock.getComponent(_crd && Block === void 0 ? (_reportPossibleCrUseOfBlock({
            error: Error()
          }), Block) : Block));
          var allUsed = true;
          console.log("123");

          for (var _i2 = 0; _i2 < this.blockUsing.length; _i2++) {
            console.log(this.blockUsing[_i2]);

            if (this.blockUsing[_i2] == 0) {
              allUsed = false;
              break;
            }
          }

          console.log("结果" + allUsed);

          if (allUsed) {
            for (var _i3 = 0; _i3 < this.blockUsing.length; _i3++) {
              this.blockUsing[_i3] = 0;
            }

            dispatchEvent(new Event("resetBlock"));
          }
        }

        listAdd(list, value) {
          if (list.indexOf(value) == -1) {
            list.push(value);
          }
        }

      });

      GameController.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5139a95c73bb47e377f464398d81c7e4755c417f.js.map