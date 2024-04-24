System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, BlockEnum, _crd;

  _export("BlockEnum", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5b415IosXJO/pllx+iDBB0S", "BlockEnum", undefined);

      _export("BlockEnum", BlockEnum = class BlockEnum {
        // BlockEnum.ROTATION[BlockEnum.I1X2] = [0];
        static randomRotation(type) {
          return Math.floor(this.ROTATION[type].length * Math.random());
        }

        static getRotation(type, rotation) {
          return {
            rotation: this.ROTATION[type][rotation],
            row: this.ROW[type][rotation]
          };
        }

        static getDataByType(type) {
          switch (type) {
            case BlockEnum.I1X2:
              return;
          }
        }

      });

      /**
       * 000
       * 010
       * 000
       */
      BlockEnum.P1X1 = 0;

      /**
       * 000
       * 010
       * 010
       * 000
       */
      BlockEnum.I1X2 = 1;

      /**
       * 0000
       * 0100
       * 0010
       * 0000
       */
      BlockEnum.Q2X2 = 2;

      /**
      * 000
      * 010
      * 010
      * 010
      * 000
      */
      BlockEnum.I1X3 = 3;

      /**
      * 0000
      * 0100
      * 0110
      * 0000
      */
      BlockEnum.L2X2 = 4;

      /**
      * 0000
      * 0110
      * 0110
      * 0000
      */
      BlockEnum.O2X2 = 5;

      /**
       * 00000
       * 01110
       * 00100
       * 00000
       */
      BlockEnum.T3X2 = 6;

      /**
       * 000
       * 010
       * 010
       * 010
       * 010
       * 000
       */
      BlockEnum.I1X4 = 7;

      /**
       * 0000
       * 0100
       * 0100
       * 0110
       * 0000
       */
      BlockEnum.L2X3 = 8;

      /**
       * 0000
       * 0010
       * 0010
       * 0110
       * 0000
       */
      BlockEnum.J2X3 = 9;

      /**
       * 00000
       * 00110
       * 01100
       * 00000
       */
      BlockEnum.S3X2 = 10;

      /**
       * 00000
       * 01100
       * 00110
       * 00000
       */
      BlockEnum.Z3X2 = 11;

      /**
       * 000
       * 010
       * 010
       * 010
       * 010
       * 010
       * 000
       */
      BlockEnum.I1X5 = 12;

      /**
      * 00000
      * 01000
      * 01000
      * 01110
      * 00000
      */
      BlockEnum.L3X3 = 13;

      /**
       * 00000
       * 01110
       * 01110
       * 00000
       */
      BlockEnum.M3X2 = 14;

      /**
       * 00000
       * 01110
       * 01110
       * 01110
       * 00000
       */
      BlockEnum.G3X3 = 15;
      // BlockEnum.ROTATION
      BlockEnum.ROTATION = [[[0]], [[0, 8], [0, 1]], [[0, 9], [0, 7]], [[0, 8, 16], [0, 1, 2]], [[0, 8, 9], [0, 7, 8]], [[0, 1, 8, 9]], [[0, 7, 8, 9], [0, 8, 9, 16], [0, 1, 2, 9], [1, 2, 3, 9]], [[0, 8, 16, 24], [0, 1, 2, 3]], [[0, 1, 9, 17], [0, 6, 7, 8], [0, 8, 16, 17], [0, 1, 2, 8]], [[0, 1, 8, 16], [0, 1, 2, 10], [0, 8, 15, 16], [0, 8, 9, 10]], [[0, 1, 7, 8], [0, 8, 9, 17]], [[0, 1, 9, 10], [0, 7, 8, 15]], [[0, 8, 16, 24, 32], [0, 1, 2, 3, 4]], [[0, 8, 16, 17, 18], [0, 1, 2, 8, 16], [0, 1, 2, 10, 18], [0, 8, 14, 15, 16]], [[0, 1, 2, 8, 9, 10], [0, 1, 8, 9, 16, 17]], [[0, 1, 2, 8, 9, 10, 16, 17, 18]]];
      BlockEnum.ROW = [[[0]], [[0, 1], [0, 0]], [[0, 1], [0, 1]], [[0, 1, 2], [0, 0, 0]], [[0, 1, 1], [0, 1, 1]], [[0, 0, 1, 1]], [[0, 1, 1, 1], [0, 1, 1, 2], [0, 0, 0, 1], [0, 0, 0, 1]], [[0, 1, 2, 3], [0, 0, 0, 0]], [[0, 0, 1, 2], [0, 1, 1, 1], [0, 1, 2, 2], [0, 0, 0, 1]], [[0, 0, 1, 2], [0, 0, 0, 1], [0, 1, 2, 2], [0, 1, 1, 1]], [[0, 0, 1, 1], [0, 1, 1, 2]], [[0, 0, 1, 1], [0, 1, 1, 2]], [[0, 1, 2, 3, 4], [0, 0, 0, 0, 0]], [[0, 1, 2, 2, 2], [0, 0, 0, 1, 2], [0, 0, 0, 1, 2], [0, 1, 2, 2, 2]], [[0, 0, 0, 1, 1, 1], [0, 0, 1, 1, 2, 2]], [[0, 0, 0, 1, 1, 1, 2, 2, 2]]];

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d85ce44301351dfb6a3b20aa44e90c0fd72f077d.js.map