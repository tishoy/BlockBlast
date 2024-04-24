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
        static getRotation() {}

        static getDataByType(type) {
          switch (type) {
            case BlockEnum.I1X2:
              return;
          }
        }

      });

      BlockEnum.ROTATION = [];

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

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8868fba2b0165a38122102369affe603e84b5662.js.map