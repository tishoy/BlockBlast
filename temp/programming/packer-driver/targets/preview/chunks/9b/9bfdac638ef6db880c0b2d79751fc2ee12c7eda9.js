System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Prefab, Vec3, Grid, GameController, BlockEnum, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, GameArea;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGrid(extras) {
    _reporterNs.report("Grid", "./Grid", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlockEnum(extras) {
    _reporterNs.report("BlockEnum", "./BlockEnum", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Grid = _unresolved_2.Grid;
    }, function (_unresolved_3) {
      GameController = _unresolved_3.GameController;
    }, function (_unresolved_4) {
      BlockEnum = _unresolved_4.BlockEnum;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "068d6y8h4lN+p/abm2QPqxi", "GameArea", undefined);

      __checkObsolete__(['_decorator', 'Component', 'DistanceJoint2D', 'instantiate', 'NodeEventType', 'Prefab', 'UIOpacity', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameArea", GameArea = (_dec = ccclass('GameArea'), _dec2 = property({
        type: Prefab
      }), _dec(_class = (_class2 = class GameArea extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "GridPrefab", _descriptor, this);

          this.grids = [];
        }

        start() {
          this.createBlock();
        }

        createBlock() {
          for (var i = 0; i < 64; i++) {
            var node = instantiate(this.GridPrefab);
            var x = i % 8 * 80 - 320 + 40;
            var y = Math.floor(i / 8) * 80 - 320 + 40;
            node.setPosition(new Vec3(x, y, 0));
            this.node.getChildByName("Container").addChild(node);
            this.grids.push(node);
            node.getComponent(_crd && Grid === void 0 ? (_reportPossibleCrUseOfGrid({
              error: Error()
            }), Grid) : Grid).hide();
          }
        }

        getGridByPosition(pos) {
          var nearest;
          var temp;
          var index;

          for (var i = 0; i < 64; i++) {
            var distance = Math.sqrt(Math.pow(pos.x - this.node.getPosition().x - this.grids[i].getPosition().x + 40, 2) + Math.pow(pos.y - this.node.getPosition().y - this.grids[i].getPosition().y - 160 + 40, 2));

            if (nearest == undefined) {
              nearest = distance;
              temp = this.grids[i];
              index = i;
            }

            if (distance < nearest) {
              nearest = distance;
              temp = this.grids[i];
              index = i;
            }
          }

          if (nearest > 80) {
            this.resetBlock();
          } else {} // temp.getComponent(Grid).show();


          return index;
        }

        resetBlock() {
          (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).Instance.resetBlock();
        }

        testBlock(pos, block) {
          var index = this.getGridByPosition(pos);
          var list = (_crd && BlockEnum === void 0 ? (_reportPossibleCrUseOfBlockEnum({
            error: Error()
          }), BlockEnum) : BlockEnum).getRotation(block.type, block.rotation).rotation;
          var canAdd = true;

          for (var i = 0; i < list.length; i++) {
            console.log("格子" + (index + list[i]) + this.grids[index + list[i]].getComponent(_crd && Grid === void 0 ? (_reportPossibleCrUseOfGrid({
              error: Error()
            }), Grid) : Grid).Filled);

            if (this.grids[index + list[i]].getComponent(_crd && Grid === void 0 ? (_reportPossibleCrUseOfGrid({
              error: Error()
            }), Grid) : Grid).Filled) {
              canAdd = false;
              break;
            }
          }

          return {
            canAdd: canAdd,
            index: index
          };
        }

        addBlock(index, block) {
          var list = (_crd && BlockEnum === void 0 ? (_reportPossibleCrUseOfBlockEnum({
            error: Error()
          }), BlockEnum) : BlockEnum).getRotation(block.type, block.rotation).rotation;

          for (var i = 0; i < list.length; i++) {
            this.grids[index + list[i]].getComponent(_crd && Grid === void 0 ? (_reportPossibleCrUseOfGrid({
              error: Error()
            }), Grid) : Grid).show();
          }
        }

        checkRow() {
          var rowList = [];

          for (var i = 0; i < 8; i++) {
            var allFilled = true;

            for (var j = 0; j < 8; j++) {
              if (!this.grids[i * 8 + j].getComponent(_crd && Grid === void 0 ? (_reportPossibleCrUseOfGrid({
                error: Error()
              }), Grid) : Grid).Filled) {
                allFilled = false;
                break;
              }
            }

            console.log(allFilled);

            if (allFilled) {
              rowList.push(i);
            }
          }

          return rowList;
        }

        checkCol() {
          var colList = [];

          for (var i = 0; i < 8; i++) {
            var allFilled = true;

            for (var j = 0; j < 8; j++) {
              console.log(this.grids[i + j * 8].getComponent(_crd && Grid === void 0 ? (_reportPossibleCrUseOfGrid({
                error: Error()
              }), Grid) : Grid).Filled);

              if (!this.grids[i + j * 8].getComponent(_crd && Grid === void 0 ? (_reportPossibleCrUseOfGrid({
                error: Error()
              }), Grid) : Grid).Filled) {
                allFilled = false;
                break;
              }
            }

            console.log(allFilled);

            if (allFilled) {
              colList.push(i);
            }
          }

          return colList;
        }

        blast(index) {
          this.grids[index].getComponent(_crd && Grid === void 0 ? (_reportPossibleCrUseOfGrid({
            error: Error()
          }), Grid) : Grid).hide();
        }

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
//# sourceMappingURL=9bfdac638ef6db880c0b2d79751fc2ee12c7eda9.js.map