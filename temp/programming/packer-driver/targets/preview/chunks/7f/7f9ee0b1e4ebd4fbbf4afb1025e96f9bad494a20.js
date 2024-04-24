System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, GameController, _crd;

  _export("GameController", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2df4eee+mtHfbnU4Gdkxqbq", "GameController", undefined);

      _export("GameController", GameController = class GameController {
        constructor() {
          this.GameArea = void 0;

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

        test(pos) {
          this.GameArea.getGridByPosition(pos);
        }

        add(pos) {
          this.GameArea.getGridByPosition(pos);
        }

      });

      GameController.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7f9ee0b1e4ebd4fbbf4afb1025e96f9bad494a20.js.map