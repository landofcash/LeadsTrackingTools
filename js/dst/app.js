(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/@aitodotai/json-stringify-pretty-compact/index.js
  var require_json_stringify_pretty_compact = __commonJS({
    "node_modules/@aitodotai/json-stringify-pretty-compact/index.js"(exports, module) {
      function isObject(obj) {
        return typeof obj === "object" && obj !== null;
      }
      function forEach(obj, cb) {
        if (Array.isArray(obj)) {
          obj.forEach(cb);
        } else if (isObject(obj)) {
          Object.keys(obj).forEach(function(key) {
            var val = obj[key];
            cb(val, key);
          });
        }
      }
      function getTreeDepth(obj) {
        var depth = 0;
        if (Array.isArray(obj) || isObject(obj)) {
          forEach(obj, function(val) {
            if (Array.isArray(val) || isObject(val)) {
              var tmpDepth = getTreeDepth(val);
              if (tmpDepth > depth) {
                depth = tmpDepth;
              }
            }
          });
          return depth + 1;
        }
        return depth;
      }
      function stringify2(obj, options) {
        options = options || {};
        var indent = JSON.stringify([1], null, get(options, "indent", 2)).slice(2, -3);
        var addMargin = get(options, "margins", false);
        var addArrayMargin = get(options, "arrayMargins", false);
        var addObjectMargin = get(options, "objectMargins", false);
        var maxLength = indent === "" ? Infinity : get(options, "maxLength", 80);
        var maxNesting = get(options, "maxNesting", Infinity);
        return function _stringify(obj2, currentIndent, reserved) {
          if (obj2 && typeof obj2.toJSON === "function") {
            obj2 = obj2.toJSON();
          }
          var string = JSON.stringify(obj2);
          if (string === void 0) {
            return string;
          }
          var length = maxLength - currentIndent.length - reserved;
          var treeDepth = getTreeDepth(obj2);
          if (treeDepth <= maxNesting && string.length <= length) {
            var prettified = prettify(string, {
              addMargin,
              addArrayMargin,
              addObjectMargin
            });
            if (prettified.length <= length) {
              return prettified;
            }
          }
          if (isObject(obj2)) {
            var nextIndent = currentIndent + indent;
            var items = [];
            var delimiters;
            var comma = function(array, index2) {
              return index2 === array.length - 1 ? 0 : 1;
            };
            if (Array.isArray(obj2)) {
              for (var index = 0; index < obj2.length; index++) {
                items.push(
                  _stringify(obj2[index], nextIndent, comma(obj2, index)) || "null"
                );
              }
              delimiters = "[]";
            } else {
              Object.keys(obj2).forEach(function(key, index2, array) {
                var keyPart = JSON.stringify(key) + ": ";
                var value = _stringify(
                  obj2[key],
                  nextIndent,
                  keyPart.length + comma(array, index2)
                );
                if (value !== void 0) {
                  items.push(keyPart + value);
                }
              });
              delimiters = "{}";
            }
            if (items.length > 0) {
              return [
                delimiters[0],
                indent + items.join(",\n" + nextIndent),
                delimiters[1]
              ].join("\n" + currentIndent);
            }
          }
          return string;
        }(obj, "", 0);
      }
      var stringOrChar = /("(?:[^\\"]|\\.)*")|[:,\][}{]/g;
      function prettify(string, options) {
        options = options || {};
        var tokens = {
          "{": "{",
          "}": "}",
          "[": "[",
          "]": "]",
          ",": ", ",
          ":": ": "
        };
        if (options.addMargin || options.addObjectMargin) {
          tokens["{"] = "{ ";
          tokens["}"] = " }";
        }
        if (options.addMargin || options.addArrayMargin) {
          tokens["["] = "[ ";
          tokens["]"] = " ]";
        }
        return string.replace(stringOrChar, function(match, string2) {
          return string2 ? match : tokens[match];
        });
      }
      function get(options, name, defaultValue) {
        return name in options ? options[name] : defaultValue;
      }
      module.exports = stringify2;
    }
  });

  // sfc-script:D:\NAS-Cloud\projects\SamGrant\LeadsTrackingTools\js\src\Modal.vue?type=script
  var Modal_default = {
    name: "Modal",
    emits: ["save"],
    components: {},
    mounted() {
      let me = this;
      let modal = this.$refs.modal;
      if (!bootstrap) {
        console.error("Bootstrap js is not loaded.");
      }
      me.modalInstance = new bootstrap.Modal(modal, { keyboard: false });
      me.modalInstance._element.addEventListener("hidden.bs.modal", () => {
        me.$emit("hidden");
      });
      me.modalInstance._element.addEventListener("shown.bs.modal", () => {
        me.$emit("shown");
      });
    },
    props: {
      title: {
        type: String,
        required: true
      }
    },
    watch: {},
    methods: {
      show() {
        this.modalInstance.show();
      },
      hide() {
        this.modalInstance.hide();
      }
    }
  };

  // sfc-template:D:\NAS-Cloud\projects\SamGrant\LeadsTrackingTools\js\src\Modal.vue?type=template
  var import_vue = __require("vue");
  var _hoisted_1 = {
    ref: "modal",
    class: "modal fade",
    tabindex: "-1",
    "aria-hidden": "true"
  };
  var _hoisted_2 = { class: "modal-dialog modal-lg" };
  var _hoisted_3 = { class: "modal-content" };
  var _hoisted_4 = { class: "modal-header" };
  var _hoisted_5 = { class: "modal-title fs-5" };
  var _hoisted_6 = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "button",
    {
      type: "button",
      class: "btn-close",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    },
    null,
    -1
    /* HOISTED */
  );
  var _hoisted_7 = { class: "modal-body" };
  var _hoisted_8 = { class: "modal-footer" };
  var _hoisted_9 = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "button",
    {
      type: "button",
      class: "btn btn-secondary",
      "data-bs-dismiss": "modal"
    },
    "Close",
    -1
    /* HOISTED */
  );
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "div",
      _hoisted_1,
      [
        (0, import_vue.createElementVNode)("div", _hoisted_2, [
          (0, import_vue.createElementVNode)("div", _hoisted_3, [
            (0, import_vue.createElementVNode)("div", _hoisted_4, [
              (0, import_vue.createElementVNode)(
                "h1",
                _hoisted_5,
                (0, import_vue.toDisplayString)($props.title),
                1
                /* TEXT */
              ),
              _hoisted_6
            ]),
            (0, import_vue.createElementVNode)("div", _hoisted_7, [
              (0, import_vue.renderSlot)(_ctx.$slots, "body")
            ]),
            (0, import_vue.createElementVNode)("div", _hoisted_8, [
              _hoisted_9,
              (0, import_vue.createElementVNode)("button", {
                type: "button",
                class: "btn btn-primary",
                onClick: _cache[0] || (_cache[0] = ($event) => {
                  _ctx.$emit("save");
                })
              }, "Save changes")
            ])
          ])
        ])
      ],
      512
      /* NEED_PATCH */
    );
  }

  // js/src/Modal.vue
  Modal_default.render = render;
  Modal_default.__file = "js\\src\\Modal.vue";
  var Modal_default2 = Modal_default;

  // sfc-script:D:\NAS-Cloud\projects\SamGrant\LeadsTrackingTools\js\src\ItemDataSettings.vue?type=script
  var ItemDataSettings_default = {
    name: "ItemDataSettings",
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    data() {
      let me = this;
      return {
        _itemOriginal: this.item,
        _itemClone: _.cloneDeep(this.item),
        get itemLocal() {
          if (this._itemOriginal !== me.item) {
            this._itemOriginal = me.item;
            this._itemClone = _.cloneDeep(this._itemOriginal);
          }
          return this._itemClone;
        }
      };
    },
    methods: {
      save() {
        this.$emit("save", this.itemLocal);
      },
      cancel() {
        this._itemClone = _.cloneDeep(this._itemOriginal);
      }
    }
  };

  // sfc-template:D:\NAS-Cloud\projects\SamGrant\LeadsTrackingTools\js\src\ItemDataSettings.vue?type=template
  var import_vue2 = __require("vue");
  var _hoisted_12 = { class: "mb-3 row" };
  var _hoisted_22 = { class: "col" };
  var _hoisted_32 = { class: "col" };
  var _hoisted_42 = ["onUpdate:modelValue"];
  var _hoisted_52 = /* @__PURE__ */ (0, import_vue2.createElementVNode)(
    "option",
    { value: "1" },
    "Static Text",
    -1
    /* HOISTED */
  );
  var _hoisted_62 = /* @__PURE__ */ (0, import_vue2.createElementVNode)(
    "option",
    { value: "2" },
    "URL Parameter",
    -1
    /* HOISTED */
  );
  var _hoisted_72 = /* @__PURE__ */ (0, import_vue2.createElementVNode)(
    "option",
    { value: "3" },
    "Custom JS",
    -1
    /* HOISTED */
  );
  var _hoisted_82 = [
    _hoisted_52,
    _hoisted_62,
    _hoisted_72
  ];
  var _hoisted_92 = { class: "col" };
  var _hoisted_10 = ["onUpdate:modelValue"];
  function render2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("div", null, [
      ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
        import_vue2.Fragment,
        null,
        (0, import_vue2.renderList)($data.itemLocal.data, (property) => {
          return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("div", _hoisted_12, [
            (0, import_vue2.createElementVNode)(
              "div",
              _hoisted_22,
              (0, import_vue2.toDisplayString)(property.name),
              1
              /* TEXT */
            ),
            (0, import_vue2.createElementVNode)("div", _hoisted_32, [
              (0, import_vue2.withDirectives)((0, import_vue2.createElementVNode)("select", {
                class: "form-select form-select-sm",
                "onUpdate:modelValue": ($event) => property.propType = $event
              }, _hoisted_82, 8, _hoisted_42), [
                [import_vue2.vModelSelect, property.propType]
              ])
            ]),
            (0, import_vue2.createElementVNode)("div", _hoisted_92, [
              (0, import_vue2.withDirectives)((0, import_vue2.createElementVNode)("input", {
                type: "text",
                class: "form-control form-select-sm",
                "onUpdate:modelValue": ($event) => property.propValue = $event
              }, null, 8, _hoisted_10), [
                [import_vue2.vModelText, property.propValue]
              ])
            ])
          ]);
        }),
        256
        /* UNKEYED_FRAGMENT */
      ))
    ]);
  }

  // js/src/ItemDataSettings.vue
  ItemDataSettings_default.render = render2;
  ItemDataSettings_default.__file = "js\\src\\ItemDataSettings.vue";
  var ItemDataSettings_default2 = ItemDataSettings_default;

  // sfc-script:D:\NAS-Cloud\projects\SamGrant\LeadsTrackingTools\js\src\SelectWithPercent.vue?type=script
  var import_json_stringify_pretty_compact = __toESM(require_json_stringify_pretty_compact());
  var SelectWithPercent_default = {
    components: {
      modal: Modal_default2,
      itemDataSettings: ItemDataSettings_default2
    },
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        itemsLocal: _.cloneDeep(this.items),
        selectedItems: [],
        result: "",
        editItem: {}
      };
    },
    watch: {
      selectedItems() {
        this.outputResult();
      }
    },
    methods: {
      propertiesModalClose() {
        this.$refs.propertiesDataSettings.cancel();
      },
      propertiesModalSave() {
        this.$refs.propertiesDataSettings.save();
        this.outputResult();
      },
      propertiesDataSettingsSave(itemToSave) {
        _.assign(this.editItem, itemToSave);
        this.$refs.propertiesModal.hide();
      },
      openProperties(item) {
        this.editItem = item;
        this.$refs.propertiesModal.show();
      },
      outputResult() {
        let me = this;
        const selectedItemsList = me.itemsLocal.filter((item) => me.selectedItems.includes(item.name));
        const result = selectedItemsList.map((item) => {
          let p = item.p ? parseFloat(item.p) : 0;
          p = p > 1 ? p / 100 : p;
          if (p > 0) {
            return { name: item.name, p, data: item.data };
          }
          return { name: item.name, data: item.data };
        });
        me.result = (0, import_json_stringify_pretty_compact.default)(result || [], { maxLength: 150 });
        this.$emit("update", me.result);
      }
    }
  };

  // sfc-template:D:\NAS-Cloud\projects\SamGrant\LeadsTrackingTools\js\src\SelectWithPercent.vue?type=template
  var import_vue3 = __require("vue");
  var _hoisted_13 = { class: "row align-items-center" };
  var _hoisted_23 = { class: "col-4" };
  var _hoisted_33 = ["id", "value"];
  var _hoisted_43 = ["for"];
  var _hoisted_53 = { class: "col-6" };
  var _hoisted_63 = { class: "input-group input-group-sm" };
  var _hoisted_73 = ["onUpdate:modelValue", "id", "disabled"];
  var _hoisted_83 = /* @__PURE__ */ (0, import_vue3.createElementVNode)(
    "span",
    { class: "input-group-text" },
    "%",
    -1
    /* HOISTED */
  );
  var _hoisted_93 = { class: "col-2" };
  var _hoisted_102 = ["disabled", "onClick"];
  var _hoisted_11 = { class: "mt-3" };
  var _hoisted_122 = /* @__PURE__ */ (0, import_vue3.createElementVNode)(
    "h3",
    null,
    "Result:",
    -1
    /* HOISTED */
  );
  var _hoisted_132 = { style: { "font-size": "10px", "font-family": "Arial,serif" } };
  function render3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_item_data_settings = (0, import_vue3.resolveComponent)("item-data-settings");
    const _component_modal = (0, import_vue3.resolveComponent)("modal");
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("div", null, [
      (0, import_vue3.createVNode)(_component_modal, {
        ref: "propertiesModal",
        title: $data.editItem.name + " Properties",
        onSave: _cache[0] || (_cache[0] = ($event) => $options.propertiesModalSave()),
        onHidden: _cache[1] || (_cache[1] = ($event) => $options.propertiesModalClose())
      }, {
        body: (0, import_vue3.withCtx)(() => [
          (0, import_vue3.createVNode)(_component_item_data_settings, {
            ref: "propertiesDataSettings",
            item: $data.editItem,
            onSave: $options.propertiesDataSettingsSave
          }, null, 8, ["item", "onSave"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["title"]),
      ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
        import_vue3.Fragment,
        null,
        (0, import_vue3.renderList)($data.itemsLocal, (item, index) => {
          return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("div", {
            class: "form-check",
            key: index
          }, [
            (0, import_vue3.createElementVNode)("div", _hoisted_13, [
              (0, import_vue3.createElementVNode)("div", _hoisted_23, [
                (0, import_vue3.withDirectives)((0, import_vue3.createElementVNode)("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  id: "item-" + _ctx.$.uid + "-" + index,
                  value: item.name,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.selectedItems = $event)
                }, null, 8, _hoisted_33), [
                  [import_vue3.vModelCheckbox, $data.selectedItems]
                ]),
                (0, import_vue3.createElementVNode)("label", {
                  class: "form-check-label ml-2",
                  for: "item-" + _ctx.$.uid + "-" + index
                }, (0, import_vue3.toDisplayString)(item.name), 9, _hoisted_43)
              ]),
              (0, import_vue3.createElementVNode)("div", _hoisted_53, [
                (0, import_vue3.createElementVNode)("div", _hoisted_63, [
                  (0, import_vue3.withDirectives)((0, import_vue3.createElementVNode)("input", {
                    class: "form-control",
                    type: "number",
                    "onUpdate:modelValue": ($event) => item.p = $event,
                    onInput: _cache[3] || (_cache[3] = (...args) => $options.outputResult && $options.outputResult(...args)),
                    id: "value-" + _ctx.$.uid + "-" + index,
                    disabled: !$data.selectedItems.includes(item.name)
                  }, null, 40, _hoisted_73), [
                    [
                      import_vue3.vModelText,
                      item.p,
                      void 0,
                      { number: true }
                    ]
                  ]),
                  _hoisted_83
                ])
              ]),
              (0, import_vue3.createElementVNode)("div", _hoisted_93, [
                (0, import_vue3.createElementVNode)("button", {
                  disabled: !$data.selectedItems.includes(item.name),
                  type: "button",
                  class: "btn btn-sm btn-default",
                  onClick: ($event) => $options.openProperties(item)
                }, "Properties", 8, _hoisted_102)
              ])
            ])
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      )),
      (0, import_vue3.createElementVNode)("div", _hoisted_11, [
        _hoisted_122,
        (0, import_vue3.createElementVNode)(
          "pre",
          _hoisted_132,
          (0, import_vue3.toDisplayString)($data.result),
          1
          /* TEXT */
        )
      ])
    ]);
  }

  // js/src/SelectWithPercent.vue
  SelectWithPercent_default.render = render3;
  SelectWithPercent_default.__file = "js\\src\\SelectWithPercent.vue";
  var SelectWithPercent_default2 = SelectWithPercent_default;

  // js/src/app.jsx
  var GlobalVueComponents = {};
  GlobalVueComponents.selectWithPercent = SelectWithPercent_default2;
  GlobalVueComponents.itemDataSettings = ItemDataSettings_default2;
  GlobalVueComponents.modal = Modal_default2;
  window.GlobalVueComponents = GlobalVueComponents;
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0BhaXRvZG90YWkvanNvbi1zdHJpbmdpZnktcHJldHR5LWNvbXBhY3QvaW5kZXguanMiLCAianNcXHNyY1xcTW9kYWwudnVlIiwgInNmYy10ZW1wbGF0ZTpEOlxcTkFTLUNsb3VkXFxwcm9qZWN0c1xcU2FtR3JhbnRcXExlYWRzVHJhY2tpbmdUb29sc1xcanNcXHNyY1xcTW9kYWwudnVlP3R5cGU9dGVtcGxhdGUiLCAiLi4vc3JjL01vZGFsLnZ1ZSIsICJqc1xcc3JjXFxJdGVtRGF0YVNldHRpbmdzLnZ1ZSIsICJzZmMtdGVtcGxhdGU6RDpcXE5BUy1DbG91ZFxccHJvamVjdHNcXFNhbUdyYW50XFxMZWFkc1RyYWNraW5nVG9vbHNcXGpzXFxzcmNcXEl0ZW1EYXRhU2V0dGluZ3MudnVlP3R5cGU9dGVtcGxhdGUiLCAiLi4vc3JjL0l0ZW1EYXRhU2V0dGluZ3MudnVlIiwgImpzXFxzcmNcXFNlbGVjdFdpdGhQZXJjZW50LnZ1ZSIsICJzZmMtdGVtcGxhdGU6RDpcXE5BUy1DbG91ZFxccHJvamVjdHNcXFNhbUdyYW50XFxMZWFkc1RyYWNraW5nVG9vbHNcXGpzXFxzcmNcXFNlbGVjdFdpdGhQZXJjZW50LnZ1ZT90eXBlPXRlbXBsYXRlIiwgIi4uL3NyYy9TZWxlY3RXaXRoUGVyY2VudC52dWUiLCAiLi4vc3JjL2FwcC5qc3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImZ1bmN0aW9uIGlzT2JqZWN0IChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbFxufVxuXG5mdW5jdGlvbiBmb3JFYWNoIChvYmosIGNiKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICBvYmouZm9yRWFjaChjYilcbiAgfSBlbHNlIGlmIChpc09iamVjdChvYmopKSB7XG4gICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciB2YWwgPSBvYmpba2V5XVxuICAgICAgY2IodmFsLCBrZXkpXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUcmVlRGVwdGggKG9iaikge1xuICB2YXIgZGVwdGggPSAwXG5cbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSB8fCBpc09iamVjdChvYmopKSB7XG4gICAgZm9yRWFjaChvYmosIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkgfHwgaXNPYmplY3QodmFsKSkge1xuICAgICAgICB2YXIgdG1wRGVwdGggPSBnZXRUcmVlRGVwdGgodmFsKVxuICAgICAgICBpZiAodG1wRGVwdGggPiBkZXB0aCkge1xuICAgICAgICAgIGRlcHRoID0gdG1wRGVwdGhcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gZGVwdGggKyAxXG4gIH1cblxuICByZXR1cm4gZGVwdGhcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5IChvYmosIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgdmFyIGluZGVudCA9IEpTT04uc3RyaW5naWZ5KFsxXSwgbnVsbCwgZ2V0KG9wdGlvbnMsICdpbmRlbnQnLCAyKSkuc2xpY2UoMiwgLTMpXG4gIHZhciBhZGRNYXJnaW4gPSBnZXQob3B0aW9ucywgJ21hcmdpbnMnLCBmYWxzZSlcbiAgdmFyIGFkZEFycmF5TWFyZ2luID0gZ2V0KG9wdGlvbnMsICdhcnJheU1hcmdpbnMnLCBmYWxzZSlcbiAgdmFyIGFkZE9iamVjdE1hcmdpbiA9IGdldChvcHRpb25zLCAnb2JqZWN0TWFyZ2lucycsIGZhbHNlKVxuICB2YXIgbWF4TGVuZ3RoID0gKGluZGVudCA9PT0gJycgPyBJbmZpbml0eSA6IGdldChvcHRpb25zLCAnbWF4TGVuZ3RoJywgODApKVxuICB2YXIgbWF4TmVzdGluZyA9IGdldChvcHRpb25zLCAnbWF4TmVzdGluZycsIEluZmluaXR5KVxuXG4gIHJldHVybiAoZnVuY3Rpb24gX3N0cmluZ2lmeSAob2JqLCBjdXJyZW50SW5kZW50LCByZXNlcnZlZCkge1xuICAgIGlmIChvYmogJiYgdHlwZW9mIG9iai50b0pTT04gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9iaiA9IG9iai50b0pTT04oKVxuICAgIH1cblxuICAgIHZhciBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeShvYmopXG5cbiAgICBpZiAoc3RyaW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBzdHJpbmdcbiAgICB9XG5cbiAgICB2YXIgbGVuZ3RoID0gbWF4TGVuZ3RoIC0gY3VycmVudEluZGVudC5sZW5ndGggLSByZXNlcnZlZFxuXG4gICAgdmFyIHRyZWVEZXB0aCA9IGdldFRyZWVEZXB0aChvYmopXG4gICAgaWYgKHRyZWVEZXB0aCA8PSBtYXhOZXN0aW5nICYmIHN0cmluZy5sZW5ndGggPD0gbGVuZ3RoKSB7XG4gICAgICB2YXIgcHJldHRpZmllZCA9IHByZXR0aWZ5KHN0cmluZywge1xuICAgICAgICBhZGRNYXJnaW46IGFkZE1hcmdpbixcbiAgICAgICAgYWRkQXJyYXlNYXJnaW46IGFkZEFycmF5TWFyZ2luLFxuICAgICAgICBhZGRPYmplY3RNYXJnaW46IGFkZE9iamVjdE1hcmdpblxuICAgICAgfSlcbiAgICAgIGlmIChwcmV0dGlmaWVkLmxlbmd0aCA8PSBsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHByZXR0aWZpZWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3Qob2JqKSkge1xuICAgICAgdmFyIG5leHRJbmRlbnQgPSBjdXJyZW50SW5kZW50ICsgaW5kZW50XG4gICAgICB2YXIgaXRlbXMgPSBbXVxuICAgICAgdmFyIGRlbGltaXRlcnNcbiAgICAgIHZhciBjb21tYSA9IGZ1bmN0aW9uIChhcnJheSwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIChpbmRleCA9PT0gYXJyYXkubGVuZ3RoIC0gMSA/IDAgOiAxKVxuICAgICAgfVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBvYmoubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgaXRlbXMucHVzaChcbiAgICAgICAgICAgIF9zdHJpbmdpZnkob2JqW2luZGV4XSwgbmV4dEluZGVudCwgY29tbWEob2JqLCBpbmRleCkpIHx8ICdudWxsJ1xuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBkZWxpbWl0ZXJzID0gJ1tdJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXksIGluZGV4LCBhcnJheSkge1xuICAgICAgICAgIHZhciBrZXlQYXJ0ID0gSlNPTi5zdHJpbmdpZnkoa2V5KSArICc6ICdcbiAgICAgICAgICB2YXIgdmFsdWUgPSBfc3RyaW5naWZ5KG9ialtrZXldLCBuZXh0SW5kZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5UGFydC5sZW5ndGggKyBjb21tYShhcnJheSwgaW5kZXgpKVxuICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpdGVtcy5wdXNoKGtleVBhcnQgKyB2YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGRlbGltaXRlcnMgPSAne30nXG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgZGVsaW1pdGVyc1swXSxcbiAgICAgICAgICBpbmRlbnQgKyBpdGVtcy5qb2luKCcsXFxuJyArIG5leHRJbmRlbnQpLFxuICAgICAgICAgIGRlbGltaXRlcnNbMV1cbiAgICAgICAgXS5qb2luKCdcXG4nICsgY3VycmVudEluZGVudClcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nXG4gIH0ob2JqLCAnJywgMCkpXG59XG5cbi8vIE5vdGU6IFRoaXMgcmVnZXggbWF0Y2hlcyBldmVuIGludmFsaWQgSlNPTiBzdHJpbmdzLCBidXQgc2luY2Ugd2VcdTIwMTlyZVxuLy8gd29ya2luZyBvbiB0aGUgb3V0cHV0IG9mIGBKU09OLnN0cmluZ2lmeWAgd2Uga25vdyB0aGF0IG9ubHkgdmFsaWQgc3RyaW5nc1xuLy8gYXJlIHByZXNlbnQgKHVubGVzcyB0aGUgdXNlciBzdXBwbGllZCBhIHdlaXJkIGBvcHRpb25zLmluZGVudGAgYnV0IGluXG4vLyB0aGF0IGNhc2Ugd2UgZG9uXHUyMDE5dCBjYXJlIHNpbmNlIHRoZSBvdXRwdXQgd291bGQgYmUgaW52YWxpZCBhbnl3YXkpLlxudmFyIHN0cmluZ09yQ2hhciA9IC8oXCIoPzpbXlxcXFxcIl18XFxcXC4pKlwiKXxbOixcXF1bfXtdL2dcblxuZnVuY3Rpb24gcHJldHRpZnkgKHN0cmluZywgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIHZhciB0b2tlbnMgPSB7XG4gICAgJ3snOiAneycsXG4gICAgJ30nOiAnfScsXG4gICAgJ1snOiAnWycsXG4gICAgJ10nOiAnXScsXG4gICAgJywnOiAnLCAnLFxuICAgICc6JzogJzogJ1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuYWRkTWFyZ2luIHx8IG9wdGlvbnMuYWRkT2JqZWN0TWFyZ2luKSB7XG4gICAgdG9rZW5zWyd7J10gPSAneyAnXG4gICAgdG9rZW5zWyd9J10gPSAnIH0nXG4gIH1cblxuICBpZiAob3B0aW9ucy5hZGRNYXJnaW4gfHwgb3B0aW9ucy5hZGRBcnJheU1hcmdpbikge1xuICAgIHRva2Vuc1snWyddID0gJ1sgJ1xuICAgIHRva2Vuc1snXSddID0gJyBdJ1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKHN0cmluZ09yQ2hhciwgZnVuY3Rpb24gKG1hdGNoLCBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nID8gbWF0Y2ggOiB0b2tlbnNbbWF0Y2hdXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdldCAob3B0aW9ucywgbmFtZSwgZGVmYXVsdFZhbHVlKSB7XG4gIHJldHVybiAobmFtZSBpbiBvcHRpb25zID8gb3B0aW9uc1tuYW1lXSA6IGRlZmF1bHRWYWx1ZSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdpZnlcbiIsICI8dGVtcGxhdGU+XHJcbiAgPGRpdiByZWY9XCJtb2RhbFwiIGNsYXNzPVwibW9kYWwgZmFkZVwiIHRhYmluZGV4PVwiLTFcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3M9XCJtb2RhbC10aXRsZSBmcy01XCI+e3t0aXRsZX19PC9oMT5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLWNsb3NlXCIgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj48L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgPHNsb3QgbmFtZT1cImJvZHlcIj48L3Nsb3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgQGNsaWNrPVwiJGVtaXQoJ3NhdmUnKTtcIj5TYXZlIGNoYW5nZXM8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcIk1vZGFsXCIsXHJcbiAgZW1pdHM6IFsnc2F2ZSddLFxyXG4gIGNvbXBvbmVudHM6IHtcclxuXHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgbGV0IG1lID0gdGhpcztcclxuICAgIGxldCBtb2RhbCA9IHRoaXMuJHJlZnMubW9kYWw7XHJcbiAgICBpZighYm9vdHN0cmFwKXtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkJvb3RzdHJhcCBqcyBpcyBub3QgbG9hZGVkLlwiKVxyXG4gICAgfVxyXG4gICAgbWUubW9kYWxJbnN0YW5jZSA9IG5ldyBib290c3RyYXAuTW9kYWwobW9kYWwsIHtrZXlib2FyZDogZmFsc2V9KTtcclxuICAgIG1lLm1vZGFsSW5zdGFuY2UuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaGlkZGVuLmJzLm1vZGFsJywgKCkgPT4ge1xyXG4gICAgICBtZS4kZW1pdCgnaGlkZGVuJyk7XHJcbiAgICB9KTtcclxuICAgIG1lLm1vZGFsSW5zdGFuY2UuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2hvd24uYnMubW9kYWwnLCAoKSA9PiB7XHJcbiAgICAgIG1lLiRlbWl0KCdzaG93bicpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBwcm9wczoge1xyXG4gICAgdGl0bGU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuXHJcbiAgfSxcclxuICBtZXRob2RzOntcclxuICAgIHNob3coKSB7XHJcbiAgICAgIHRoaXMubW9kYWxJbnN0YW5jZS5zaG93KCk7XHJcbiAgICB9LFxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgdGhpcy5tb2RhbEluc3RhbmNlLmhpZGUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT5cclxuIiwgImltcG9ydCB7IHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgcmVuZGVyU2xvdCBhcyBfcmVuZGVyU2xvdCwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSB7XG4gIHJlZjogXCJtb2RhbFwiLFxuICBjbGFzczogXCJtb2RhbCBmYWRlXCIsXG4gIHRhYmluZGV4OiBcIi0xXCIsXG4gIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbn1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGNsYXNzOiBcIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1wiIH1cbmNvbnN0IF9ob2lzdGVkXzMgPSB7IGNsYXNzOiBcIm1vZGFsLWNvbnRlbnRcIiB9XG5jb25zdCBfaG9pc3RlZF80ID0geyBjbGFzczogXCJtb2RhbC1oZWFkZXJcIiB9XG5jb25zdCBfaG9pc3RlZF81ID0geyBjbGFzczogXCJtb2RhbC10aXRsZSBmcy01XCIgfVxuY29uc3QgX2hvaXN0ZWRfNiA9IC8qI19fUFVSRV9fKi9fY3JlYXRlRWxlbWVudFZOb2RlKFwiYnV0dG9uXCIsIHtcbiAgdHlwZTogXCJidXR0b25cIixcbiAgY2xhc3M6IFwiYnRuLWNsb3NlXCIsXG4gIFwiZGF0YS1icy1kaXNtaXNzXCI6IFwibW9kYWxcIixcbiAgXCJhcmlhLWxhYmVsXCI6IFwiQ2xvc2VcIlxufSwgbnVsbCwgLTEgLyogSE9JU1RFRCAqLylcbmNvbnN0IF9ob2lzdGVkXzcgPSB7IGNsYXNzOiBcIm1vZGFsLWJvZHlcIiB9XG5jb25zdCBfaG9pc3RlZF84ID0geyBjbGFzczogXCJtb2RhbC1mb290ZXJcIiB9XG5jb25zdCBfaG9pc3RlZF85ID0gLyojX19QVVJFX18qL19jcmVhdGVFbGVtZW50Vk5vZGUoXCJidXR0b25cIiwge1xuICB0eXBlOiBcImJ1dHRvblwiLFxuICBjbGFzczogXCJidG4gYnRuLXNlY29uZGFyeVwiLFxuICBcImRhdGEtYnMtZGlzbWlzc1wiOiBcIm1vZGFsXCJcbn0sIFwiQ2xvc2VcIiwgLTEgLyogSE9JU1RFRCAqLylcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMiwgW1xuICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8zLCBbXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfNCwgW1xuICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJoMVwiLCBfaG9pc3RlZF81LCBfdG9EaXNwbGF5U3RyaW5nKCRwcm9wcy50aXRsZSksIDEgLyogVEVYVCAqLyksXG4gICAgICAgICAgX2hvaXN0ZWRfNlxuICAgICAgICBdKSxcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF83LCBbXG4gICAgICAgICAgX3JlbmRlclNsb3QoX2N0eC4kc2xvdHMsIFwiYm9keVwiKVxuICAgICAgICBdKSxcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF84LCBbXG4gICAgICAgICAgX2hvaXN0ZWRfOSxcbiAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBjbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgIG9uQ2xpY2s6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+IHtfY3R4LiRlbWl0KCdzYXZlJyk7fSlcbiAgICAgICAgICB9LCBcIlNhdmUgY2hhbmdlc1wiKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICBdLCA1MTIgLyogTkVFRF9QQVRDSCAqLykpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkQ6XFxcXE5BUy1DbG91ZFxcXFxwcm9qZWN0c1xcXFxTYW1HcmFudFxcXFxMZWFkc1RyYWNraW5nVG9vbHNcXFxcanNcXFxcc3JjXFxcXE1vZGFsLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxOQVMtQ2xvdWRcXFxccHJvamVjdHNcXFxcU2FtR3JhbnRcXFxcTGVhZHNUcmFja2luZ1Rvb2xzXFxcXGpzXFxcXHNyY1xcXFxNb2RhbC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcImpzXFxcXHNyY1xcXFxNb2RhbC52dWVcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm1iLTMgcm93XCIgdi1mb3I9XCJwcm9wZXJ0eSBpbiBpdGVtTG9jYWwuZGF0YVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAge3twcm9wZXJ0eS5uYW1lfX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1zZWxlY3QgZm9ybS1zZWxlY3Qtc21cIiB2LW1vZGVsPVwicHJvcGVydHkucHJvcFR5cGVcIj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+U3RhdGljIFRleHQ8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+VVJMIFBhcmFtZXRlcjwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5DdXN0b20gSlM8L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLXNlbGVjdC1zbVwiIHYtbW9kZWw9XCJwcm9wZXJ0eS5wcm9wVmFsdWVcIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcIkl0ZW1EYXRhU2V0dGluZ3NcIixcclxuICBwcm9wczoge1xyXG4gICAgaXRlbToge1xyXG4gICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9XHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgbGV0IG1lID0gdGhpcztcclxuICAgIHJldHVybiB7XHJcbiAgICAgIF9pdGVtT3JpZ2luYWw6ICB0aGlzLml0ZW0sXHJcbiAgICAgIF9pdGVtQ2xvbmU6IF8uY2xvbmVEZWVwKHRoaXMuaXRlbSksXHJcbiAgICAgIGdldCBpdGVtTG9jYWwoKSB7XHJcbiAgICAgICAgaWYodGhpcy5faXRlbU9yaWdpbmFsIT09bWUuaXRlbSl7XHJcbiAgICAgICAgICB0aGlzLl9pdGVtT3JpZ2luYWw9bWUuaXRlbTtcclxuICAgICAgICAgIHRoaXMuX2l0ZW1DbG9uZT1fLmNsb25lRGVlcCh0aGlzLl9pdGVtT3JpZ2luYWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbUNsb25lO1xyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgc2F2ZSgpe1xyXG4gICAgICB0aGlzLiRlbWl0KCdzYXZlJyx0aGlzLml0ZW1Mb2NhbCk7XHJcbiAgICB9LFxyXG4gICAgY2FuY2VsKCl7XHJcbiAgICAgIHRoaXMuX2l0ZW1DbG9uZT1fLmNsb25lRGVlcCh0aGlzLl9pdGVtT3JpZ2luYWwpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG48L3N0eWxlPlxyXG4iLCAiaW1wb3J0IHsgcmVuZGVyTGlzdCBhcyBfcmVuZGVyTGlzdCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgdk1vZGVsU2VsZWN0IGFzIF92TW9kZWxTZWxlY3QsIHdpdGhEaXJlY3RpdmVzIGFzIF93aXRoRGlyZWN0aXZlcywgdk1vZGVsVGV4dCBhcyBfdk1vZGVsVGV4dCB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJtYi0zIHJvd1wiIH1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGNsYXNzOiBcImNvbFwiIH1cbmNvbnN0IF9ob2lzdGVkXzMgPSB7IGNsYXNzOiBcImNvbFwiIH1cbmNvbnN0IF9ob2lzdGVkXzQgPSBbXCJvblVwZGF0ZTptb2RlbFZhbHVlXCJdXG5jb25zdCBfaG9pc3RlZF81ID0gLyojX19QVVJFX18qL19jcmVhdGVFbGVtZW50Vk5vZGUoXCJvcHRpb25cIiwgeyB2YWx1ZTogXCIxXCIgfSwgXCJTdGF0aWMgVGV4dFwiLCAtMSAvKiBIT0lTVEVEICovKVxuY29uc3QgX2hvaXN0ZWRfNiA9IC8qI19fUFVSRV9fKi9fY3JlYXRlRWxlbWVudFZOb2RlKFwib3B0aW9uXCIsIHsgdmFsdWU6IFwiMlwiIH0sIFwiVVJMIFBhcmFtZXRlclwiLCAtMSAvKiBIT0lTVEVEICovKVxuY29uc3QgX2hvaXN0ZWRfNyA9IC8qI19fUFVSRV9fKi9fY3JlYXRlRWxlbWVudFZOb2RlKFwib3B0aW9uXCIsIHsgdmFsdWU6IFwiM1wiIH0sIFwiQ3VzdG9tIEpTXCIsIC0xIC8qIEhPSVNURUQgKi8pXG5jb25zdCBfaG9pc3RlZF84ID0gW1xuICBfaG9pc3RlZF81LFxuICBfaG9pc3RlZF82LFxuICBfaG9pc3RlZF83XG5dXG5jb25zdCBfaG9pc3RlZF85ID0geyBjbGFzczogXCJjb2xcIiB9XG5jb25zdCBfaG9pc3RlZF8xMCA9IFtcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIl1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgbnVsbCwgW1xuICAgIChfb3BlbkJsb2NrKHRydWUpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgX3JlbmRlckxpc3QoJGRhdGEuaXRlbUxvY2FsLmRhdGEsIChwcm9wZXJ0eSkgPT4ge1xuICAgICAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzIsIF90b0Rpc3BsYXlTdHJpbmcocHJvcGVydHkubmFtZSksIDEgLyogVEVYVCAqLyksXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMywgW1xuICAgICAgICAgIF93aXRoRGlyZWN0aXZlcyhfY3JlYXRlRWxlbWVudFZOb2RlKFwic2VsZWN0XCIsIHtcbiAgICAgICAgICAgIGNsYXNzOiBcImZvcm0tc2VsZWN0IGZvcm0tc2VsZWN0LXNtXCIsXG4gICAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogJGV2ZW50ID0+ICgocHJvcGVydHkucHJvcFR5cGUpID0gJGV2ZW50KVxuICAgICAgICAgIH0sIF9ob2lzdGVkXzgsIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzQpLCBbXG4gICAgICAgICAgICBbX3ZNb2RlbFNlbGVjdCwgcHJvcGVydHkucHJvcFR5cGVdXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfOSwgW1xuICAgICAgICAgIF93aXRoRGlyZWN0aXZlcyhfY3JlYXRlRWxlbWVudFZOb2RlKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICBjbGFzczogXCJmb3JtLWNvbnRyb2wgZm9ybS1zZWxlY3Qtc21cIixcbiAgICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiAkZXZlbnQgPT4gKChwcm9wZXJ0eS5wcm9wVmFsdWUpID0gJGV2ZW50KVxuICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzEwKSwgW1xuICAgICAgICAgICAgW192TW9kZWxUZXh0LCBwcm9wZXJ0eS5wcm9wVmFsdWVdXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pKVxuICAgIH0pLCAyNTYgLyogVU5LRVlFRF9GUkFHTUVOVCAqLykpXG4gIF0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxOQVMtQ2xvdWRcXFxccHJvamVjdHNcXFxcU2FtR3JhbnRcXFxcTGVhZHNUcmFja2luZ1Rvb2xzXFxcXGpzXFxcXHNyY1xcXFxJdGVtRGF0YVNldHRpbmdzLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxOQVMtQ2xvdWRcXFxccHJvamVjdHNcXFxcU2FtR3JhbnRcXFxcTGVhZHNUcmFja2luZ1Rvb2xzXFxcXGpzXFxcXHNyY1xcXFxJdGVtRGF0YVNldHRpbmdzLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwianNcXFxcc3JjXFxcXEl0ZW1EYXRhU2V0dGluZ3MudnVlXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICI8dGVtcGxhdGU+XHJcbjxkaXY+XHJcbiAgICA8bW9kYWwgcmVmPVwicHJvcGVydGllc01vZGFsXCIgOnRpdGxlPVwiZWRpdEl0ZW0ubmFtZSsnIFByb3BlcnRpZXMnXCIgQHNhdmU9XCJwcm9wZXJ0aWVzTW9kYWxTYXZlKClcIiBAaGlkZGVuPVwicHJvcGVydGllc01vZGFsQ2xvc2UoKVwiPlxyXG4gICAgICA8dGVtcGxhdGUgdi1zbG90OmJvZHk+XHJcbiAgICAgICAgPGl0ZW0tZGF0YS1zZXR0aW5ncyByZWY9XCJwcm9wZXJ0aWVzRGF0YVNldHRpbmdzXCIgOml0ZW09XCJlZGl0SXRlbVwiIEBzYXZlPVwicHJvcGVydGllc0RhdGFTZXR0aW5nc1NhdmVcIj48L2l0ZW0tZGF0YS1zZXR0aW5ncz5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvbW9kYWw+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBpdGVtc0xvY2FsXCIgOmtleT1cImluZGV4XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgIDppZD1cIidpdGVtLScrICQudWlkICsgJy0nICsgaW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgIDp2YWx1ZT1cIml0ZW0ubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkSXRlbXNcIj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWwgbWwtMlwiIDpmb3I9XCInaXRlbS0nKyAkLnVpZCsgJy0nICsgaW5kZXhcIj57eyBpdGVtLm5hbWUgfX08L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgIHYtbW9kZWwubnVtYmVyPVwiaXRlbS5wXCJcclxuICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cIm91dHB1dFJlc3VsdFwiXHJcbiAgICAgICAgICAgICAgICAgICA6aWQ9XCIndmFsdWUtJysgJC51aWQrICctJyArIGluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiFzZWxlY3RlZEl0ZW1zLmluY2x1ZGVzKGl0ZW0ubmFtZSlcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+JTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMlwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiA6ZGlzYWJsZWQ9XCIhc2VsZWN0ZWRJdGVtcy5pbmNsdWRlcyhpdGVtLm5hbWUpXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZGVmYXVsdFwiIEBjbGljaz1cIm9wZW5Qcm9wZXJ0aWVzKGl0ZW0pXCI+UHJvcGVydGllczwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm10LTNcIj5cclxuICAgICAgPGgzPlJlc3VsdDo8L2gzPlxyXG4gICAgICA8cHJlIHN0eWxlPVwiZm9udC1zaXplOjEwcHg7IGZvbnQtZmFtaWx5OiBBcmlhbCxzZXJpZjtcIj57eyByZXN1bHQgfX08L3ByZT5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBtb2RhbCBmcm9tICcuL01vZGFsLnZ1ZSdcclxuaW1wb3J0IGl0ZW1EYXRhU2V0dGluZ3MgZnJvbSAnLi9JdGVtRGF0YVNldHRpbmdzLnZ1ZSdcclxuaW1wb3J0IHN0cmluZ2lmeSAgZnJvbSAnQGFpdG9kb3RhaS9qc29uLXN0cmluZ2lmeS1wcmV0dHktY29tcGFjdCdcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIG1vZGFsLFxyXG4gICAgaXRlbURhdGFTZXR0aW5nc1xyXG4gIH0sXHJcbiAgcHJvcHM6IHtcclxuICAgIGl0ZW1zOiB7XHJcbiAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpdGVtc0xvY2FsOiBfLmNsb25lRGVlcCh0aGlzLml0ZW1zKSxcclxuICAgICAgc2VsZWN0ZWRJdGVtczogW10sXHJcbiAgICAgIHJlc3VsdDpcIlwiLFxyXG4gICAgICBlZGl0SXRlbTp7fVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIHNlbGVjdGVkSXRlbXMoKSB7XHJcbiAgICAgIHRoaXMub3V0cHV0UmVzdWx0KClcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHByb3BlcnRpZXNNb2RhbENsb3NlKCl7XHJcbiAgICAgIHRoaXMuJHJlZnMucHJvcGVydGllc0RhdGFTZXR0aW5ncy5jYW5jZWwoKTtcclxuICAgIH0sXHJcbiAgICBwcm9wZXJ0aWVzTW9kYWxTYXZlKCl7XHJcbiAgICAgIHRoaXMuJHJlZnMucHJvcGVydGllc0RhdGFTZXR0aW5ncy5zYXZlKCk7XHJcbiAgICAgIHRoaXMub3V0cHV0UmVzdWx0KCk7XHJcbiAgICB9LFxyXG4gICAgcHJvcGVydGllc0RhdGFTZXR0aW5nc1NhdmUoaXRlbVRvU2F2ZSl7XHJcbiAgICAgIF8uYXNzaWduKHRoaXMuZWRpdEl0ZW0saXRlbVRvU2F2ZSk7XHJcbiAgICAgIHRoaXMuJHJlZnMucHJvcGVydGllc01vZGFsLmhpZGUoKTtcclxuICAgIH0sXHJcbiAgICBvcGVuUHJvcGVydGllcyhpdGVtKXtcclxuICAgICAgdGhpcy5lZGl0SXRlbT1pdGVtO1xyXG4gICAgICB0aGlzLiRyZWZzLnByb3BlcnRpZXNNb2RhbC5zaG93KCk7XHJcbiAgICB9LFxyXG4gICAgb3V0cHV0UmVzdWx0KCkge1xyXG4gICAgICBsZXQgbWUgPSB0aGlzO1xyXG4gICAgICBjb25zdCBzZWxlY3RlZEl0ZW1zTGlzdCA9IG1lLml0ZW1zTG9jYWwuZmlsdGVyKGl0ZW0gPT4gbWUuc2VsZWN0ZWRJdGVtcy5pbmNsdWRlcyhpdGVtLm5hbWUpKTtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gc2VsZWN0ZWRJdGVtc0xpc3QubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgIGxldCBwID0gaXRlbS5wID8gcGFyc2VGbG9hdChpdGVtLnApIDogMDtcclxuICAgICAgICBwID0gcCA+IDEgPyAocCAvIDEwMCkgOiBwO1xyXG4gICAgICAgIGlmIChwID4gMCkge1xyXG4gICAgICAgICAgcmV0dXJuIHtuYW1lOiBpdGVtLm5hbWUsIHA6IHAsIGRhdGE6aXRlbS5kYXRhfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtuYW1lOiBpdGVtLm5hbWUsIGRhdGE6aXRlbS5kYXRhfTtcclxuICAgICAgfSk7XHJcbiAgICAgIG1lLnJlc3VsdCA9IHN0cmluZ2lmeShyZXN1bHR8fFtdLHttYXhMZW5ndGg6MTUwfSk7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZScsbWUucmVzdWx0KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuIiwgImltcG9ydCB7IHJlc29sdmVDb21wb25lbnQgYXMgX3Jlc29sdmVDb21wb25lbnQsIGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgd2l0aEN0eCBhcyBfd2l0aEN0eCwgcmVuZGVyTGlzdCBhcyBfcmVuZGVyTGlzdCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIHZNb2RlbENoZWNrYm94IGFzIF92TW9kZWxDaGVja2JveCwgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIHdpdGhEaXJlY3RpdmVzIGFzIF93aXRoRGlyZWN0aXZlcywgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIHZNb2RlbFRleHQgYXMgX3ZNb2RlbFRleHQgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiIH1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGNsYXNzOiBcImNvbC00XCIgfVxuY29uc3QgX2hvaXN0ZWRfMyA9IFtcImlkXCIsIFwidmFsdWVcIl1cbmNvbnN0IF9ob2lzdGVkXzQgPSBbXCJmb3JcIl1cbmNvbnN0IF9ob2lzdGVkXzUgPSB7IGNsYXNzOiBcImNvbC02XCIgfVxuY29uc3QgX2hvaXN0ZWRfNiA9IHsgY2xhc3M6IFwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc21cIiB9XG5jb25zdCBfaG9pc3RlZF83ID0gW1wib25VcGRhdGU6bW9kZWxWYWx1ZVwiLCBcImlkXCIsIFwiZGlzYWJsZWRcIl1cbmNvbnN0IF9ob2lzdGVkXzggPSAvKiNfX1BVUkVfXyovX2NyZWF0ZUVsZW1lbnRWTm9kZShcInNwYW5cIiwgeyBjbGFzczogXCJpbnB1dC1ncm91cC10ZXh0XCIgfSwgXCIlXCIsIC0xIC8qIEhPSVNURUQgKi8pXG5jb25zdCBfaG9pc3RlZF85ID0geyBjbGFzczogXCJjb2wtMlwiIH1cbmNvbnN0IF9ob2lzdGVkXzEwID0gW1wiZGlzYWJsZWRcIiwgXCJvbkNsaWNrXCJdXG5jb25zdCBfaG9pc3RlZF8xMSA9IHsgY2xhc3M6IFwibXQtM1wiIH1cbmNvbnN0IF9ob2lzdGVkXzEyID0gLyojX19QVVJFX18qL19jcmVhdGVFbGVtZW50Vk5vZGUoXCJoM1wiLCBudWxsLCBcIlJlc3VsdDpcIiwgLTEgLyogSE9JU1RFRCAqLylcbmNvbnN0IF9ob2lzdGVkXzEzID0geyBzdHlsZToge1wiZm9udC1zaXplXCI6XCIxMHB4XCIsXCJmb250LWZhbWlseVwiOlwiQXJpYWwsc2VyaWZcIn0gfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICBjb25zdCBfY29tcG9uZW50X2l0ZW1fZGF0YV9zZXR0aW5ncyA9IF9yZXNvbHZlQ29tcG9uZW50KFwiaXRlbS1kYXRhLXNldHRpbmdzXCIpXG4gIGNvbnN0IF9jb21wb25lbnRfbW9kYWwgPSBfcmVzb2x2ZUNvbXBvbmVudChcIm1vZGFsXCIpXG5cbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgbnVsbCwgW1xuICAgIF9jcmVhdGVWTm9kZShfY29tcG9uZW50X21vZGFsLCB7XG4gICAgICByZWY6IFwicHJvcGVydGllc01vZGFsXCIsXG4gICAgICB0aXRsZTogJGRhdGEuZWRpdEl0ZW0ubmFtZSsnIFByb3BlcnRpZXMnLFxuICAgICAgb25TYXZlOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoJG9wdGlvbnMucHJvcGVydGllc01vZGFsU2F2ZSgpKSksXG4gICAgICBvbkhpZGRlbjogX2NhY2hlWzFdIHx8IChfY2FjaGVbMV0gPSAkZXZlbnQgPT4gKCRvcHRpb25zLnByb3BlcnRpZXNNb2RhbENsb3NlKCkpKVxuICAgIH0sIHtcbiAgICAgIGJvZHk6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgX2NyZWF0ZVZOb2RlKF9jb21wb25lbnRfaXRlbV9kYXRhX3NldHRpbmdzLCB7XG4gICAgICAgICAgcmVmOiBcInByb3BlcnRpZXNEYXRhU2V0dGluZ3NcIixcbiAgICAgICAgICBpdGVtOiAkZGF0YS5lZGl0SXRlbSxcbiAgICAgICAgICBvblNhdmU6ICRvcHRpb25zLnByb3BlcnRpZXNEYXRhU2V0dGluZ3NTYXZlXG4gICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcIml0ZW1cIiwgXCJvblNhdmVcIl0pXG4gICAgICBdKSxcbiAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgfSwgOCAvKiBQUk9QUyAqLywgW1widGl0bGVcIl0pLFxuICAgIChfb3BlbkJsb2NrKHRydWUpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgX3JlbmRlckxpc3QoJGRhdGEuaXRlbXNMb2NhbCwgKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzOiBcImZvcm0tY2hlY2tcIixcbiAgICAgICAga2V5OiBpbmRleFxuICAgICAgfSwgW1xuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzIsIFtcbiAgICAgICAgICAgIF93aXRoRGlyZWN0aXZlcyhfY3JlYXRlRWxlbWVudFZOb2RlKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBjbGFzczogXCJmb3JtLWNoZWNrLWlucHV0XCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgaWQ6ICdpdGVtLScrIF9jdHguJC51aWQgKyAnLScgKyBpbmRleCxcbiAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IF9jYWNoZVsyXSB8fCAoX2NhY2hlWzJdID0gJGV2ZW50ID0+ICgoJGRhdGEuc2VsZWN0ZWRJdGVtcykgPSAkZXZlbnQpKVxuICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfMyksIFtcbiAgICAgICAgICAgICAgW192TW9kZWxDaGVja2JveCwgJGRhdGEuc2VsZWN0ZWRJdGVtc11cbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgY2xhc3M6IFwiZm9ybS1jaGVjay1sYWJlbCBtbC0yXCIsXG4gICAgICAgICAgICAgIGZvcjogJ2l0ZW0tJysgX2N0eC4kLnVpZCsgJy0nICsgaW5kZXhcbiAgICAgICAgICAgIH0sIF90b0Rpc3BsYXlTdHJpbmcoaXRlbS5uYW1lKSwgOSAvKiBURVhULCBQUk9QUyAqLywgX2hvaXN0ZWRfNClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzUsIFtcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfNiwgW1xuICAgICAgICAgICAgICBfd2l0aERpcmVjdGl2ZXMoX2NyZWF0ZUVsZW1lbnRWTm9kZShcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBjbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiAkZXZlbnQgPT4gKChpdGVtLnApID0gJGV2ZW50KSxcbiAgICAgICAgICAgICAgICBvbklucHV0OiBfY2FjaGVbM10gfHwgKF9jYWNoZVszXSA9ICguLi5hcmdzKSA9PiAoJG9wdGlvbnMub3V0cHV0UmVzdWx0ICYmICRvcHRpb25zLm91dHB1dFJlc3VsdCguLi5hcmdzKSkpLFxuICAgICAgICAgICAgICAgIGlkOiAndmFsdWUtJysgX2N0eC4kLnVpZCsgJy0nICsgaW5kZXgsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICEkZGF0YS5zZWxlY3RlZEl0ZW1zLmluY2x1ZGVzKGl0ZW0ubmFtZSlcbiAgICAgICAgICAgICAgfSwgbnVsbCwgNDAgLyogUFJPUFMsIEhZRFJBVEVfRVZFTlRTICovLCBfaG9pc3RlZF83KSwgW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92TW9kZWxUZXh0LFxuICAgICAgICAgICAgICAgICAgaXRlbS5wLFxuICAgICAgICAgICAgICAgICAgdm9pZCAwLFxuICAgICAgICAgICAgICAgICAgeyBudW1iZXI6IHRydWUgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9ob2lzdGVkXzhcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF85LCBbXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6ICEkZGF0YS5zZWxlY3RlZEl0ZW1zLmluY2x1ZGVzKGl0ZW0ubmFtZSksXG4gICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIGNsYXNzOiBcImJ0biBidG4tc20gYnRuLWRlZmF1bHRcIixcbiAgICAgICAgICAgICAgb25DbGljazogJGV2ZW50ID0+ICgkb3B0aW9ucy5vcGVuUHJvcGVydGllcyhpdGVtKSlcbiAgICAgICAgICAgIH0sIFwiUHJvcGVydGllc1wiLCA4IC8qIFBST1BTICovLCBfaG9pc3RlZF8xMClcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSkpXG4gICAgfSksIDEyOCAvKiBLRVlFRF9GUkFHTUVOVCAqLykpLFxuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMTEsIFtcbiAgICAgIF9ob2lzdGVkXzEyLFxuICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInByZVwiLCBfaG9pc3RlZF8xMywgX3RvRGlzcGxheVN0cmluZygkZGF0YS5yZXN1bHQpLCAxIC8qIFRFWFQgKi8pXG4gICAgXSlcbiAgXSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkQ6XFxcXE5BUy1DbG91ZFxcXFxwcm9qZWN0c1xcXFxTYW1HcmFudFxcXFxMZWFkc1RyYWNraW5nVG9vbHNcXFxcanNcXFxcc3JjXFxcXFNlbGVjdFdpdGhQZXJjZW50LnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxOQVMtQ2xvdWRcXFxccHJvamVjdHNcXFxcU2FtR3JhbnRcXFxcTGVhZHNUcmFja2luZ1Rvb2xzXFxcXGpzXFxcXHNyY1xcXFxTZWxlY3RXaXRoUGVyY2VudC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcImpzXFxcXHNyY1xcXFxTZWxlY3RXaXRoUGVyY2VudC52dWVcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCBzZWxlY3RXaXRoUGVyY2VudCBmcm9tICcuL1NlbGVjdFdpdGhQZXJjZW50LnZ1ZSdcclxuaW1wb3J0IGl0ZW1EYXRhU2V0dGluZ3MgZnJvbSAnLi9JdGVtRGF0YVNldHRpbmdzLnZ1ZSdcclxuaW1wb3J0IG1vZGFsIGZyb20gJy4vTW9kYWwudnVlJ1xyXG5cclxubGV0IEdsb2JhbFZ1ZUNvbXBvbmVudHMgPSB7fTtcclxuR2xvYmFsVnVlQ29tcG9uZW50cy5zZWxlY3RXaXRoUGVyY2VudCA9IHNlbGVjdFdpdGhQZXJjZW50O1xyXG5HbG9iYWxWdWVDb21wb25lbnRzLml0ZW1EYXRhU2V0dGluZ3MgPSBpdGVtRGF0YVNldHRpbmdzO1xyXG5HbG9iYWxWdWVDb21wb25lbnRzLm1vZGFsID0gbW9kYWw7XHJcbndpbmRvdy5HbG9iYWxWdWVDb21wb25lbnRzID0gR2xvYmFsVnVlQ29tcG9uZW50cztcclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsZUFBUyxTQUFVLEtBQUs7QUFDdEIsZUFBTyxPQUFPLFFBQVEsWUFBWSxRQUFRO0FBQUEsTUFDNUM7QUFFQSxlQUFTLFFBQVMsS0FBSyxJQUFJO0FBQ3pCLFlBQUksTUFBTSxRQUFRLEdBQUcsR0FBRztBQUN0QixjQUFJLFFBQVEsRUFBRTtBQUFBLFFBQ2hCLFdBQVcsU0FBUyxHQUFHLEdBQUc7QUFDeEIsaUJBQU8sS0FBSyxHQUFHLEVBQUUsUUFBUSxTQUFVLEtBQUs7QUFDdEMsZ0JBQUksTUFBTSxJQUFJLEdBQUc7QUFDakIsZUFBRyxLQUFLLEdBQUc7QUFBQSxVQUNiLENBQUM7QUFBQSxRQUNIO0FBQUEsTUFDRjtBQUVBLGVBQVMsYUFBYyxLQUFLO0FBQzFCLFlBQUksUUFBUTtBQUVaLFlBQUksTUFBTSxRQUFRLEdBQUcsS0FBSyxTQUFTLEdBQUcsR0FBRztBQUN2QyxrQkFBUSxLQUFLLFNBQVUsS0FBSztBQUMxQixnQkFBSSxNQUFNLFFBQVEsR0FBRyxLQUFLLFNBQVMsR0FBRyxHQUFHO0FBQ3ZDLGtCQUFJLFdBQVcsYUFBYSxHQUFHO0FBQy9CLGtCQUFJLFdBQVcsT0FBTztBQUNwQix3QkFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsVUFDRixDQUFDO0FBRUQsaUJBQU8sUUFBUTtBQUFBLFFBQ2pCO0FBRUEsZUFBTztBQUFBLE1BQ1Q7QUFFQSxlQUFTQSxXQUFXLEtBQUssU0FBUztBQUNoQyxrQkFBVSxXQUFXLENBQUM7QUFDdEIsWUFBSSxTQUFTLEtBQUssVUFBVSxDQUFDLENBQUMsR0FBRyxNQUFNLElBQUksU0FBUyxVQUFVLENBQUMsQ0FBQyxFQUFFLE1BQU0sR0FBRyxFQUFF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QyxNQUFPQyw2QkFBUTs7O0FDSTVVLE1BQUksc0JBQXNCLENBQUM7QUFDM0Isc0JBQW9CLG9CQUFvQkM7QUFDeEMsc0JBQW9CLG1CQUFtQkM7QUFDdkMsc0JBQW9CLFFBQVFDO0FBQzVCLFNBQU8sc0JBQXNCOyIsCiAgIm5hbWVzIjogWyJzdHJpbmdpZnkiLCAib2JqIiwgImluZGV4IiwgInN0cmluZyIsICJfY3JlYXRlRWxlbWVudFZOb2RlIiwgIl9vcGVuQmxvY2siLCAiX2NyZWF0ZUVsZW1lbnRCbG9jayIsICJfdG9EaXNwbGF5U3RyaW5nIiwgIl9yZW5kZXJTbG90IiwgIk1vZGFsX2RlZmF1bHQiLCAiaW1wb3J0X3Z1ZSIsICJfaG9pc3RlZF8xIiwgIl9ob2lzdGVkXzIiLCAiX2hvaXN0ZWRfMyIsICJfaG9pc3RlZF80IiwgIl9ob2lzdGVkXzUiLCAiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsICJfaG9pc3RlZF82IiwgIl9ob2lzdGVkXzciLCAiX2hvaXN0ZWRfOCIsICJfaG9pc3RlZF85IiwgInJlbmRlciIsICJfb3BlbkJsb2NrIiwgIl9jcmVhdGVFbGVtZW50QmxvY2siLCAiX0ZyYWdtZW50IiwgIl9yZW5kZXJMaXN0IiwgIl90b0Rpc3BsYXlTdHJpbmciLCAiX3dpdGhEaXJlY3RpdmVzIiwgIl92TW9kZWxTZWxlY3QiLCAiX3ZNb2RlbFRleHQiLCAicmVuZGVyIiwgIkl0ZW1EYXRhU2V0dGluZ3NfZGVmYXVsdCIsICJNb2RhbF9kZWZhdWx0IiwgIkl0ZW1EYXRhU2V0dGluZ3NfZGVmYXVsdCIsICJzdHJpbmdpZnkiLCAiaW1wb3J0X3Z1ZSIsICJfaG9pc3RlZF8xIiwgIl9ob2lzdGVkXzIiLCAiX2hvaXN0ZWRfMyIsICJfaG9pc3RlZF80IiwgIl9ob2lzdGVkXzUiLCAiX2hvaXN0ZWRfNiIsICJfaG9pc3RlZF83IiwgIl9ob2lzdGVkXzgiLCAiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsICJfaG9pc3RlZF85IiwgIl9ob2lzdGVkXzEwIiwgIl9ob2lzdGVkXzEyIiwgIl9ob2lzdGVkXzEzIiwgInJlbmRlciIsICJfcmVzb2x2ZUNvbXBvbmVudCIsICJfb3BlbkJsb2NrIiwgIl9jcmVhdGVFbGVtZW50QmxvY2siLCAiX2NyZWF0ZVZOb2RlIiwgIl93aXRoQ3R4IiwgIl9GcmFnbWVudCIsICJfcmVuZGVyTGlzdCIsICJfd2l0aERpcmVjdGl2ZXMiLCAiX3ZNb2RlbENoZWNrYm94IiwgIl90b0Rpc3BsYXlTdHJpbmciLCAiX3ZNb2RlbFRleHQiLCAicmVuZGVyIiwgIlNlbGVjdFdpdGhQZXJjZW50X2RlZmF1bHQiLCAiU2VsZWN0V2l0aFBlcmNlbnRfZGVmYXVsdCIsICJJdGVtRGF0YVNldHRpbmdzX2RlZmF1bHQiLCAiTW9kYWxfZGVmYXVsdCJdCn0K
