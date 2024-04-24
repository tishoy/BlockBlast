System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ColorEnum, _crd;

  _export("ColorEnum", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "caae02TW1VI9rPVUb4fkzOr", "ColorEnum", undefined);

      _export("ColorEnum", ColorEnum = class ColorEnum {});

      ColorEnum.auto = 0;
      ColorEnum.RED = ColorEnum.auto++;
      ColorEnum.ORANGE = ColorEnum.auto++;
      ColorEnum.YELLOW = ColorEnum.auto++;
      ColorEnum.GREEN = ColorEnum.auto++;
      ColorEnum.CYAN = ColorEnum.auto++;
      ColorEnum.BLUE = ColorEnum.auto++;
      ColorEnum.PURPLE = ColorEnum.auto++;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7a88c74a893484bc78ec61e61067a12144b83816.js.map