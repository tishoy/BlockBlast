System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, NodeEventType, Prefab, Vec3, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Block;

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
      NodeEventType = _cc.NodeEventType;
      Prefab = _cc.Prefab;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "734638CxG1OHLyXf25o1nKD", "Block", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'NodeEventType', 'Prefab', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Block", Block = (_dec = ccclass('Block'), _dec2 = property({
        type: Prefab
      }), _dec(_class = (_class2 = class Block extends Component {
        constructor(...args) {
          super(...args);
          this.type = 1;

          _initializerDefineProperty(this, "GridPrefab", _descriptor, this);
        }

        start() {
          this.node.on(NodeEventType.TOUCH_START, this.touchStart, this);
          BlockEnum.getDataByType();
        }

        touchStart(event) {
          this.node.off(NodeEventType.TOUCH_START, this.touchStart, this);
          this.node.on(NodeEventType.TOUCH_CANCEL, this.touchStart, this);
          this.node.on(NodeEventType.TOUCH_MOVE, this.touchStart, this);
          this.node.on(NodeEventType.TOUCH_END, this.touchStart, this);
        }

        touchMove(event) {
          console.log(event);
          this.node.setPosition(new Vec3());
        }

        touchEnd(event) {
          this.node.on(NodeEventType.TOUCH_START, this.touchStart, this);
          this.node.off(NodeEventType.TOUCH_CANCEL, this.touchStart, this);
          this.node.off(NodeEventType.TOUCH_MOVE, this.touchStart, this);
          this.node.off(NodeEventType.TOUCH_END, this.touchStart, this);
        }

        touchCancel(event) {
          this.node.on(NodeEventType.TOUCH_START, this.touchStart, this);
          this.node.off(NodeEventType.TOUCH_CANCEL, this.touchStart, this);
          this.node.off(NodeEventType.TOUCH_MOVE, this.touchStart, this);
          this.node.off(NodeEventType.TOUCH_END, this.touchStart, this);
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "GridPrefab", [_dec2], {
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
//# sourceMappingURL=f079829b29960c176b66b797780fd7970400fcd2.js.map