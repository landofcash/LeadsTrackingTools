(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // sfc-script:D:\NAS-Cloud\projects\SamGrant\LeadsTrackingTools\js\src\SelectWithPercent.vue?type=script
  var SelectWithPercent_default;
  var init_SelectWithPercent = __esm({
    "sfc-script:D:\\NAS-Cloud\\projects\\SamGrant\\LeadsTrackingTools\\js\\src\\SelectWithPercent.vue?type=script"() {
      SelectWithPercent_default = {
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
            result: ""
          };
        },
        watch: {
          selectedItems() {
            this.outputResult();
          }
        },
        methods: {
          outputResult() {
            let me = this;
            const selectedItemsList = me.itemsLocal.filter((item) => me.selectedItems.includes(item.name));
            const result = selectedItemsList.map((item) => {
              let p = item.p ? parseFloat(item.p) : 0;
              p = p > 1 ? p / 100 : p;
              if (p > 0) {
                return { name: item.name, p };
              }
              return { name: item.name };
            });
            me.result = JSON.stringify(result, null, 0).replace(/\},/g, "},\n").replace(/\]/g, "\n]").replace(/\[/g, "[\n");
            this.$emit("update", me.result);
          }
        }
      };
    }
  });

  // sfc-template:D:\NAS-Cloud\projects\SamGrant\LeadsTrackingTools\js\src\SelectWithPercent.vue?type=template
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", null, [
      ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
        import_vue.Fragment,
        null,
        (0, import_vue.renderList)($data.itemsLocal, (item, index) => {
          return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", {
            class: "form-check",
            key: index
          }, [
            (0, import_vue.createElementVNode)("div", _hoisted_1, [
              (0, import_vue.createElementVNode)("div", _hoisted_2, [
                (0, import_vue.withDirectives)((0, import_vue.createElementVNode)("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  id: "item-" + _ctx.$.uid + "-" + index,
                  value: item.name,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.selectedItems = $event)
                }, null, 8, _hoisted_3), [
                  [import_vue.vModelCheckbox, $data.selectedItems]
                ]),
                (0, import_vue.createElementVNode)("label", {
                  class: "form-check-label ml-2",
                  for: "item-" + _ctx.$.uid + "-" + index
                }, (0, import_vue.toDisplayString)(item.name), 9, _hoisted_4)
              ]),
              (0, import_vue.createElementVNode)("div", _hoisted_5, [
                (0, import_vue.createElementVNode)("div", _hoisted_6, [
                  (0, import_vue.withDirectives)((0, import_vue.createElementVNode)("input", {
                    class: "form-control",
                    type: "number",
                    "onUpdate:modelValue": ($event) => item.p = $event,
                    onInput: _cache[1] || (_cache[1] = (...args) => $options.outputResult && $options.outputResult(...args)),
                    id: "value-" + _ctx.$.uid + "-" + index,
                    disabled: !$data.selectedItems.includes(item.name)
                  }, null, 40, _hoisted_7), [
                    [
                      import_vue.vModelText,
                      item.p,
                      void 0,
                      { number: true }
                    ]
                  ]),
                  _hoisted_8
                ])
              ])
            ])
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      )),
      (0, import_vue.createElementVNode)("div", _hoisted_9, [
        _hoisted_10,
        (0, import_vue.createElementVNode)(
          "pre",
          null,
          (0, import_vue.toDisplayString)($data.result),
          1
          /* TEXT */
        )
      ])
    ]);
  }
  var import_vue, _hoisted_1, _hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6, _hoisted_7, _hoisted_8, _hoisted_9, _hoisted_10;
  var init_SelectWithPercent2 = __esm({
    "sfc-template:D:\\NAS-Cloud\\projects\\SamGrant\\LeadsTrackingTools\\js\\src\\SelectWithPercent.vue?type=template"() {
      import_vue = __require("vue");
      _hoisted_1 = { class: "row align-items-center" };
      _hoisted_2 = { class: "col-4" };
      _hoisted_3 = ["id", "value"];
      _hoisted_4 = ["for"];
      _hoisted_5 = { class: "col-8" };
      _hoisted_6 = { class: "input-group input-group-sm" };
      _hoisted_7 = ["onUpdate:modelValue", "id", "disabled"];
      _hoisted_8 = /* @__PURE__ */ (0, import_vue.createElementVNode)(
        "span",
        { class: "input-group-text" },
        "%",
        -1
        /* HOISTED */
      );
      _hoisted_9 = { class: "mt-3" };
      _hoisted_10 = /* @__PURE__ */ (0, import_vue.createElementVNode)(
        "h3",
        null,
        "Result:",
        -1
        /* HOISTED */
      );
    }
  });

  // js/src/SelectWithPercent.vue
  var SelectWithPercent_exports = {};
  __export(SelectWithPercent_exports, {
    default: () => SelectWithPercent_default2
  });
  var SelectWithPercent_default2;
  var init_SelectWithPercent3 = __esm({
    "js/src/SelectWithPercent.vue"() {
      init_SelectWithPercent();
      init_SelectWithPercent2();
      SelectWithPercent_default.render = render;
      SelectWithPercent_default.__file = "js\\src\\SelectWithPercent.vue";
      SelectWithPercent_default2 = SelectWithPercent_default;
    }
  });

  // js/src/app.jsx
  var GlobalVueComponents = {};
  var selectWithPercent = (init_SelectWithPercent3(), __toCommonJS(SelectWithPercent_exports));
  GlobalVueComponents.selectWithPercent = selectWithPercent.default;
  window.GlobalVueComponents = GlobalVueComponents;
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsianNcXHNyY1xcU2VsZWN0V2l0aFBlcmNlbnQudnVlIiwgInNmYy10ZW1wbGF0ZTpEOlxcTkFTLUNsb3VkXFxwcm9qZWN0c1xcU2FtR3JhbnRcXExlYWRzVHJhY2tpbmdUb29sc1xcanNcXHNyY1xcU2VsZWN0V2l0aFBlcmNlbnQudnVlP3R5cGU9dGVtcGxhdGUiLCAiLi4vc3JjL1NlbGVjdFdpdGhQZXJjZW50LnZ1ZSIsICIuLi9zcmMvYXBwLmpzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiPHRlbXBsYXRlPlxyXG48ZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gaXRlbXNMb2NhbFwiIDprZXk9XCJpbmRleFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxyXG4gICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICA6aWQ9XCInaXRlbS0nKyAkLnVpZCArICctJyArIGluZGV4XCJcclxuICAgICAgICAgICAgICAgICA6dmFsdWU9XCJpdGVtLm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWxlY3RlZEl0ZW1zXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsIG1sLTJcIiA6Zm9yPVwiJ2l0ZW0tJysgJC51aWQrICctJyArIGluZGV4XCI+e3sgaXRlbS5uYW1lIH19PC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbVwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICB2LW1vZGVsLm51bWJlcj1cIml0ZW0ucFwiXHJcbiAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJvdXRwdXRSZXN1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgOmlkPVwiJ3ZhbHVlLScrICQudWlkKyAnLScgKyBpbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhc2VsZWN0ZWRJdGVtcy5pbmNsdWRlcyhpdGVtLm5hbWUpXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPiU8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtdC0zXCI+XHJcbiAgICAgIDxoMz5SZXN1bHQ6PC9oMz5cclxuICAgICAgPHByZT57eyByZXN1bHQgfX08L3ByZT5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczoge1xyXG4gICAgaXRlbXM6IHtcclxuICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9XHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXRlbXNMb2NhbDogXy5jbG9uZURlZXAodGhpcy5pdGVtcyksXHJcbiAgICAgIHNlbGVjdGVkSXRlbXM6IFtdLFxyXG4gICAgICByZXN1bHQ6XCJcIlxyXG4gICAgfVxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIHNlbGVjdGVkSXRlbXMoKSB7XHJcbiAgICAgIHRoaXMub3V0cHV0UmVzdWx0KClcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG91dHB1dFJlc3VsdCgpIHtcclxuICAgICAgbGV0IG1lID0gdGhpcztcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtc0xpc3QgPSBtZS5pdGVtc0xvY2FsLmZpbHRlcihpdGVtID0+IG1lLnNlbGVjdGVkSXRlbXMuaW5jbHVkZXMoaXRlbS5uYW1lKSk7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHNlbGVjdGVkSXRlbXNMaXN0Lm1hcChpdGVtID0+IHtcclxuICAgICAgICBsZXQgcCA9IGl0ZW0ucCA/IHBhcnNlRmxvYXQoaXRlbS5wKSA6IDA7XHJcbiAgICAgICAgcCA9IHAgPiAxID8gKHAgLyAxMDApIDogcDtcclxuICAgICAgICBpZiAocCA+IDApIHtcclxuICAgICAgICAgIHJldHVybiB7bmFtZTogaXRlbS5uYW1lLCBwOiBwfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtuYW1lOiBpdGVtLm5hbWV9O1xyXG4gICAgICB9KTtcclxuICAgICAgbWUucmVzdWx0ID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCAwKVxyXG4gICAgICAgICAgLnJlcGxhY2UoL1xcfSwvZywgXCJ9LFxcblwiKVxyXG4gICAgICAgICAgLnJlcGxhY2UoL1xcXS9nLCBcIlxcblxcXVwiKVxyXG4gICAgICAgICAgLnJlcGxhY2UoL1xcWy9nLCBcIlxcW1xcblwiKTtcclxuICAgICAgdGhpcy4kZW1pdCgndXBkYXRlJyxtZS5yZXN1bHQpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCAiaW1wb3J0IHsgcmVuZGVyTGlzdCBhcyBfcmVuZGVyTGlzdCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIHZNb2RlbENoZWNrYm94IGFzIF92TW9kZWxDaGVja2JveCwgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIHdpdGhEaXJlY3RpdmVzIGFzIF93aXRoRGlyZWN0aXZlcywgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIHZNb2RlbFRleHQgYXMgX3ZNb2RlbFRleHQgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiIH1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGNsYXNzOiBcImNvbC00XCIgfVxuY29uc3QgX2hvaXN0ZWRfMyA9IFtcImlkXCIsIFwidmFsdWVcIl1cbmNvbnN0IF9ob2lzdGVkXzQgPSBbXCJmb3JcIl1cbmNvbnN0IF9ob2lzdGVkXzUgPSB7IGNsYXNzOiBcImNvbC04XCIgfVxuY29uc3QgX2hvaXN0ZWRfNiA9IHsgY2xhc3M6IFwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc21cIiB9XG5jb25zdCBfaG9pc3RlZF83ID0gW1wib25VcGRhdGU6bW9kZWxWYWx1ZVwiLCBcImlkXCIsIFwiZGlzYWJsZWRcIl1cbmNvbnN0IF9ob2lzdGVkXzggPSAvKiNfX1BVUkVfXyovX2NyZWF0ZUVsZW1lbnRWTm9kZShcInNwYW5cIiwgeyBjbGFzczogXCJpbnB1dC1ncm91cC10ZXh0XCIgfSwgXCIlXCIsIC0xIC8qIEhPSVNURUQgKi8pXG5jb25zdCBfaG9pc3RlZF85ID0geyBjbGFzczogXCJtdC0zXCIgfVxuY29uc3QgX2hvaXN0ZWRfMTAgPSAvKiNfX1BVUkVfXyovX2NyZWF0ZUVsZW1lbnRWTm9kZShcImgzXCIsIG51bGwsIFwiUmVzdWx0OlwiLCAtMSAvKiBIT0lTVEVEICovKVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBudWxsLCBbXG4gICAgKF9vcGVuQmxvY2sodHJ1ZSksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCBudWxsLCBfcmVuZGVyTGlzdCgkZGF0YS5pdGVtc0xvY2FsLCAoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3M6IFwiZm9ybS1jaGVja1wiLFxuICAgICAgICBrZXk6IGluZGV4XG4gICAgICB9LCBbXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMiwgW1xuICAgICAgICAgICAgX3dpdGhEaXJlY3RpdmVzKF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiBcImZvcm0tY2hlY2staW5wdXRcIixcbiAgICAgICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICAgICAgICBpZDogJ2l0ZW0tJysgX2N0eC4kLnVpZCArICctJyArIGluZGV4LFxuICAgICAgICAgICAgICB2YWx1ZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCgkZGF0YS5zZWxlY3RlZEl0ZW1zKSA9ICRldmVudCkpXG4gICAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBfaG9pc3RlZF8zKSwgW1xuICAgICAgICAgICAgICBbX3ZNb2RlbENoZWNrYm94LCAkZGF0YS5zZWxlY3RlZEl0ZW1zXVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwibGFiZWxcIiwge1xuICAgICAgICAgICAgICBjbGFzczogXCJmb3JtLWNoZWNrLWxhYmVsIG1sLTJcIixcbiAgICAgICAgICAgICAgZm9yOiAnaXRlbS0nKyBfY3R4LiQudWlkKyAnLScgKyBpbmRleFxuICAgICAgICAgICAgfSwgX3RvRGlzcGxheVN0cmluZyhpdGVtLm5hbWUpLCA5IC8qIFRFWFQsIFBST1BTICovLCBfaG9pc3RlZF80KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfNSwgW1xuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF82LCBbXG4gICAgICAgICAgICAgIF93aXRoRGlyZWN0aXZlcyhfY3JlYXRlRWxlbWVudFZOb2RlKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6ICRldmVudCA9PiAoKGl0ZW0ucCkgPSAkZXZlbnQpLFxuICAgICAgICAgICAgICAgIG9uSW5wdXQ6IF9jYWNoZVsxXSB8fCAoX2NhY2hlWzFdID0gKC4uLmFyZ3MpID0+ICgkb3B0aW9ucy5vdXRwdXRSZXN1bHQgJiYgJG9wdGlvbnMub3V0cHV0UmVzdWx0KC4uLmFyZ3MpKSksXG4gICAgICAgICAgICAgICAgaWQ6ICd2YWx1ZS0nKyBfY3R4LiQudWlkKyAnLScgKyBpbmRleCxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogISRkYXRhLnNlbGVjdGVkSXRlbXMuaW5jbHVkZXMoaXRlbS5uYW1lKVxuICAgICAgICAgICAgICB9LCBudWxsLCA0MCAvKiBQUk9QUywgSFlEUkFURV9FVkVOVFMgKi8sIF9ob2lzdGVkXzcpLCBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZNb2RlbFRleHQsXG4gICAgICAgICAgICAgICAgICBpdGVtLnAsXG4gICAgICAgICAgICAgICAgICB2b2lkIDAsXG4gICAgICAgICAgICAgICAgICB7IG51bWJlcjogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2hvaXN0ZWRfOFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSkpXG4gICAgfSksIDEyOCAvKiBLRVlFRF9GUkFHTUVOVCAqLykpLFxuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfOSwgW1xuICAgICAgX2hvaXN0ZWRfMTAsXG4gICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicHJlXCIsIG51bGwsIF90b0Rpc3BsYXlTdHJpbmcoJGRhdGEucmVzdWx0KSwgMSAvKiBURVhUICovKVxuICAgIF0pXG4gIF0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxOQVMtQ2xvdWRcXFxccHJvamVjdHNcXFxcU2FtR3JhbnRcXFxcTGVhZHNUcmFja2luZ1Rvb2xzXFxcXGpzXFxcXHNyY1xcXFxTZWxlY3RXaXRoUGVyY2VudC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcTkFTLUNsb3VkXFxcXHByb2plY3RzXFxcXFNhbUdyYW50XFxcXExlYWRzVHJhY2tpbmdUb29sc1xcXFxqc1xcXFxzcmNcXFxcU2VsZWN0V2l0aFBlcmNlbnQudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJqc1xcXFxzcmNcXFxcU2VsZWN0V2l0aFBlcmNlbnQudnVlXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJsZXQgR2xvYmFsVnVlQ29tcG9uZW50cyA9IHt9O1xyXG5cclxubGV0IHNlbGVjdFdpdGhQZXJjZW50ID0gcmVxdWlyZSgnLi9TZWxlY3RXaXRoUGVyY2VudC52dWUnKTtcclxuXHJcbkdsb2JhbFZ1ZUNvbXBvbmVudHMuc2VsZWN0V2l0aFBlcmNlbnQgPSBzZWxlY3RXaXRoUGVyY2VudC5kZWZhdWx0O1xyXG5cclxuXHJcbndpbmRvdy5H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QUMsdUJBQXVCLE1BQU0sVUFBVTtBQUMzRCxNQUFNLGFBQTBCLCtCQUFBTDtBQUFBLFFBQW9CO0FBQUEsUUFBUSxFQUFFLE9BQU8sbUJBQW1CO0FBQUEsUUFBRztBQUFBLFFBQUs7QUFBQTtBQUFBLE1BQWdCO0FBQ2hILE1BQU0sYUFBYSxFQUFFLE9BQU8sT0FBTztBQUNuQyxNQUFNLGNBQTJCLCtCQUFBQTtBQUFBLFFBQW9CO0FBQUEsUUFBTTtBQUFBLFFBQU07QUFBQSxRQUFXO0FBQUE7QUFBQSxNQUFnQjtBQUFBO0FBQUE7OztBQ1g1RjtBQUFBO0FBQUEsbUJBQUFNO0FBQUE7QUFBQSxNQUFvVUE7QUFBcFUsTUFBQUMsMEJBQUE7QUFBQTtBQUFBO0FBQXVILE1BQUFBO0FBQThILGdDQUFPLFNBQVM7QUFBTyxnQ0FBTyxTQUFTO0FBQWlDLE1BQU9ELDZCQUFRO0FBQUE7QUFBQTs7O0FDQTVVLE1BQUksc0JBQXNCLENBQUM7QUFFM0IsTUFBSSxvQkFBb0I7QUFFeEIsc0JBQW9CLG9CQUFvQixrQkFBa0I7QUFHMUQsU0FBTyxzQkFBc0I7IiwKICAibmFtZXMiOiBbIl9vcGVuQmxvY2siLCAiX2NyZWF0ZUVsZW1lbnRCbG9jayIsICJfRnJhZ21lbnQiLCAiX3JlbmRlckxpc3QiLCAiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsICJfd2l0aERpcmVjdGl2ZXMiLCAiX3ZNb2RlbENoZWNrYm94IiwgIl90b0Rpc3BsYXlTdHJpbmciLCAiX3ZNb2RlbFRleHQiLCAiaW5pdF9TZWxlY3RXaXRoUGVyY2VudCIsICJTZWxlY3RXaXRoUGVyY2VudF9kZWZhdWx0IiwgImluaXRfU2VsZWN0V2l0aFBlcmNlbnQiXQp9Cg==
