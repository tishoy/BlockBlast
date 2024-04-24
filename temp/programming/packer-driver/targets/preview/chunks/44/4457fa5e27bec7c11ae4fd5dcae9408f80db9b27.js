System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UIOpacity, _dec, _class, _crd, ccclass, property, Grid;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      UIOpacity = _cc.UIOpacity;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "77bb7rncRJMbq2DMTqkS46o", "Grid", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Grid", Grid = (_dec = ccclass('Grid'), _dec(_class = class Grid extends Component {
        constructor() {
          super(...arguments);
          this.color = void 0;
        }

        start() {
          this.node.getComponent(UIOpacity).opacity = 0;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4457fa5e27bec7c11ae4fd5dcae9408f80db9b27.js.map