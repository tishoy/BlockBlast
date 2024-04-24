System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Prefab, Vec3, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, GameArea;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "068d6y8h4lN+p/abm2QPqxi", "GameArea", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Prefab', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameArea", GameArea = (_dec = ccclass('GameArea'), _dec2 = property({
        type: Prefab
      }), _dec(_class = (_class2 = class GameArea extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "BlockPrefab", _descriptor, this);
        }

        start() {
          this.createBlock();
        }

        createBlock() {
          for (let i = 0; i < 64; i++) {
            let node = instantiate(this.BlockPrefab);
            let x = i % 8 * 80 - 320;
            console.log(x);
            let y = Math.floor(i / 8) * 80 - 320;
            node.setPosition(new Vec3(x, y, 0));
            this.node.getChildByName("Container").addChild(node);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "BlockPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9f5489b5af9dfe268f697ad19374615fee4d091b.js.map