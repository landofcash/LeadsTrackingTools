(() => {
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });

  // sfc-script:D:\NAS-Cloud\projects\SamGrant\LeadsTrackingTools\js\src\SelectWithPercent.vue?type=script
  var SelectWithPercent_default = {
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
        me.result = JSON.stringify(result || [], null, 0).replace(/\},/g, "},\n").replace(/\]/g, "\n]").replace(/\[/g, "[\n");
        this.$emit("update", me.result);
      }
    }
  };

  // sfc-template:D:\NAS-Cloud\projects\SamGrant\LeadsTrackingTools\js\src\SelectWithPercent.vue?type=template
  var import_vue = __require("vue");
  var _hoisted_1 = { class: "row align-items-center" };
  var _hoisted_2 = { class: "col-4" };
  var _hoisted_3 = ["id", "value"];
  var _hoisted_4 = ["for"];
  var _hoisted_5 = { class: "col-8" };
  var _hoisted_6 = { class: "input-group input-group-sm" };
  var _hoisted_7 = ["onUpdate:modelValue", "id", "disabled"];
  var _hoisted_8 = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "span",
    { class: "input-group-text" },
    "%",
    -1
    /* HOISTED */
  );
  var _hoisted_9 = { class: "mt-3" };
  var _hoisted_10 = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "h3",
    null,
    "Result:",
    -1
    /* HOISTED */
  );
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

  // js/src/SelectWithPercent.vue
  SelectWithPercent_default.render = render;
  SelectWithPercent_default.__file = "js\\src\\SelectWithPercent.vue";
  var SelectWithPercent_default2 = SelectWithPercent_default;

  // js/src/app.jsx
  var GlobalVueComponents = {};
  GlobalVueComponents.selectWithPercent = SelectWithPercent_default2;
  window.GlobalVueComponents = GlobalVueComponents;
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsianNcXHNyY1xcU2VsZWN0V2l0aFBlcmNlbnQudnVlIiwgInNmYy10ZW1wbGF0ZTpEOlxcTkFTLUNsb3VkXFxwcm9qZWN0c1xcU2FtR3JhbnRcXExlYWRzVHJhY2tpbmdUb29sc1xcanNcXHNyY1xcU2VsZWN0V2l0aFBlcmNlbnQudnVlP3R5cGU9dGVtcGxhdGUiLCAiLi4vc3JjL1NlbGVjdFdpdGhQZXJjZW50LnZ1ZSIsICIuLi9zcmMvYXBwLmpzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiPHRlbXBsYXRlPlxyXG48ZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gaXRlbXNMb2NhbFwiIDprZXk9XCJpbmRleFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxyXG4gICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICA6aWQ9XCInaXRlbS0nKyAkLnVpZCArICctJyArIGluZGV4XCJcclxuICAgICAgICAgICAgICAgICA6dmFsdWU9XCJpdGVtLm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWxlY3RlZEl0ZW1zXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsIG1sLTJcIiA6Zm9yPVwiJ2l0ZW0tJysgJC51aWQrICctJyArIGluZGV4XCI+e3sgaXRlbS5uYW1lIH19PC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbVwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICB2LW1vZGVsLm51bWJlcj1cIml0ZW0ucFwiXHJcbiAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJvdXRwdXRSZXN1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgOmlkPVwiJ3ZhbHVlLScrICQudWlkKyAnLScgKyBpbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhc2VsZWN0ZWRJdGVtcy5pbmNsdWRlcyhpdGVtLm5hbWUpXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPiU8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtdC0zXCI+XHJcbiAgICAgIDxoMz5SZXN1bHQ6PC9oMz5cclxuICAgICAgPHByZT57eyByZXN1bHQgfX08L3ByZT5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczoge1xyXG4gICAgaXRlbXM6IHtcclxuICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9XHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXRlbXNMb2NhbDogXy5jbG9uZURlZXAodGhpcy5pdGVtcyksXHJcbiAgICAgIHNlbGVjdGVkSXRlbXM6IFtdLFxyXG4gICAgICByZXN1bHQ6XCJcIlxyXG4gICAgfVxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIHNlbGVjdGVkSXRlbXMoKSB7XHJcbiAgICAgIHRoaXMub3V0cHV0UmVzdWx0KClcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG91dHB1dFJlc3VsdCgpIHtcclxuICAgICAgbGV0IG1lID0gdGhpcztcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtc0xpc3QgPSBtZS5pdGVtc0xvY2FsLmZpbHRlcihpdGVtID0+IG1lLnNlbGVjdGVkSXRlbXMuaW5jbHVkZXMoaXRlbS5uYW1lKSk7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHNlbGVjdGVkSXRlbXNMaXN0Lm1hcChpdGVtID0+IHtcclxuICAgICAgICBsZXQgcCA9IGl0ZW0ucCA/IHBhcnNlRmxvYXQoaXRlbS5wKSA6IDA7XHJcbiAgICAgICAgcCA9IHAgPiAxID8gKHAgLyAxMDApIDogcDtcclxuICAgICAgICBpZiAocCA+IDApIHtcclxuICAgICAgICAgIHJldHVybiB7bmFtZTogaXRlbS5uYW1lLCBwOiBwfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtuYW1lOiBpdGVtLm5hbWV9O1xyXG4gICAgICB9KTtcclxuICAgICAgbWUucmVzdWx0ID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0fHxbXSwgbnVsbCwgMClcclxuICAgICAgICAgIC5yZXBsYWNlKC9cXH0sL2csIFwifSxcXG5cIilcclxuICAgICAgICAgIC5yZXBsYWNlKC9cXF0vZywgXCJcXG5cXF1cIilcclxuICAgICAgICAgIC5yZXBsYWNlKC9cXFsvZywgXCJcXFtcXG5cIik7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZScsbWUucmVzdWx0KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuIiwgImltcG9ydCB7IHJlbmRlckxpc3QgYXMgX3JlbmRlckxpc3QsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCB2TW9kZWxDaGVja2JveCBhcyBfdk1vZGVsQ2hlY2tib3gsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCB3aXRoRGlyZWN0aXZlcyBhcyBfd2l0aERpcmVjdGl2ZXMsIHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCB2TW9kZWxUZXh0IGFzIF92TW9kZWxUZXh0IH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIiB9XG5jb25zdCBfaG9pc3RlZF8yID0geyBjbGFzczogXCJjb2wtNFwiIH1cbmNvbnN0IF9ob2lzdGVkXzMgPSBbXCJpZFwiLCBcInZhbHVlXCJdXG5jb25zdCBfaG9pc3RlZF80ID0gW1wiZm9yXCJdXG5jb25zdCBfaG9pc3RlZF81ID0geyBjbGFzczogXCJjb2wtOFwiIH1cbmNvbnN0IF9ob2lzdGVkXzYgPSB7IGNsYXNzOiBcImlucHV0LWdyb3VwIGlucHV0LWdyb3VwLXNtXCIgfVxuY29uc3QgX2hvaXN0ZWRfNyA9IFtcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIiwgXCJpZFwiLCBcImRpc2FibGVkXCJdXG5jb25zdCBfaG9pc3RlZF84ID0gLyojX19QVVJFX18qL19jcmVhdGVFbGVtZW50Vk5vZGUoXCJzcGFuXCIsIHsgY2xhc3M6IFwiaW5wdXQtZ3JvdXAtdGV4dFwiIH0sIFwiJVwiLCAtMSAvKiBIT0lTVEVEICovKVxuY29uc3QgX2hvaXN0ZWRfOSA9IHsgY2xhc3M6IFwibXQtM1wiIH1cbmNvbnN0IF9ob2lzdGVkXzEwID0gLyojX19QVVJFX18qL19jcmVhdGVFbGVtZW50Vk5vZGUoXCJoM1wiLCBudWxsLCBcIlJlc3VsdDpcIiwgLTEgLyogSE9JU1RFRCAqLylcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgbnVsbCwgW1xuICAgIChfb3BlbkJsb2NrKHRydWUpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgX3JlbmRlckxpc3QoJGRhdGEuaXRlbXNMb2NhbCwgKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzOiBcImZvcm0tY2hlY2tcIixcbiAgICAgICAga2V5OiBpbmRleFxuICAgICAgfSwgW1xuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzIsIFtcbiAgICAgICAgICAgIF93aXRoRGlyZWN0aXZlcyhfY3JlYXRlRWxlbWVudFZOb2RlKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBjbGFzczogXCJmb3JtLWNoZWNrLWlucHV0XCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgaWQ6ICdpdGVtLScrIF9jdHguJC51aWQgKyAnLScgKyBpbmRleCxcbiAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+ICgoJGRhdGEuc2VsZWN0ZWRJdGVtcykgPSAkZXZlbnQpKVxuICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfMyksIFtcbiAgICAgICAgICAgICAgW192TW9kZWxDaGVja2JveCwgJGRhdGEuc2VsZWN0ZWRJdGVtc11cbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgY2xhc3M6IFwiZm9ybS1jaGVjay1sYWJlbCBtbC0yXCIsXG4gICAgICAgICAgICAgIGZvcjogJ2l0ZW0tJysgX2N0eC4kLnVpZCsgJy0nICsgaW5kZXhcbiAgICAgICAgICAgIH0sIF90b0Rpc3BsYXlTdHJpbmcoaXRlbS5uYW1lKSwgOSAvKiBURVhULCBQUk9QUyAqLywgX2hvaXN0ZWRfNClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzUsIFtcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfNiwgW1xuICAgICAgICAgICAgICBfd2l0aERpcmVjdGl2ZXMoX2NyZWF0ZUVsZW1lbnRWTm9kZShcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBjbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiAkZXZlbnQgPT4gKChpdGVtLnApID0gJGV2ZW50KSxcbiAgICAgICAgICAgICAgICBvbklucHV0OiBfY2FjaGVbMV0gfHwgKF9jYWNoZVsxXSA9ICguLi5hcmdzKSA9PiAoJG9wdGlvbnMub3V0cHV0UmVzdWx0ICYmICRvcHRpb25zLm91dHB1dFJlc3VsdCguLi5hcmdzKSkpLFxuICAgICAgICAgICAgICAgIGlkOiAndmFsdWUtJysgX2N0eC4kLnVpZCsgJy0nICsgaW5kZXgsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICEkZGF0YS5zZWxlY3RlZEl0ZW1zLmluY2x1ZGVzKGl0ZW0ubmFtZSlcbiAgICAgICAgICAgICAgfSwgbnVsbCwgNDAgLyogUFJPUFMsIEhZRFJBVEVfRVZFTlRTICovLCBfaG9pc3RlZF83KSwgW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92TW9kZWxUZXh0LFxuICAgICAgICAgICAgICAgICAgaXRlbS5wLFxuICAgICAgICAgICAgICAgICAgdm9pZCAwLFxuICAgICAgICAgICAgICAgICAgeyBudW1iZXI6IHRydWUgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9ob2lzdGVkXzhcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pKVxuICAgIH0pLCAxMjggLyogS0VZRURfRlJBR01FTlQgKi8pKSxcbiAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzksIFtcbiAgICAgIF9ob2lzdGVkXzEwLFxuICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInByZVwiLCBudWxsLCBfdG9EaXNwbGF5U3RyaW5nKCRkYXRhLnJlc3VsdCksIDEgLyogVEVYVCAqLylcbiAgICBdKVxuICBdKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcTkFTLUNsb3VkXFxcXHByb2plY3RzXFxcXFNhbUdyYW50XFxcXExlYWRzVHJhY2tpbmdUb29sc1xcXFxqc1xcXFxzcmNcXFxcU2VsZWN0V2l0aFBlcmNlbnQudnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkQ6XFxcXE5BUy1DbG91ZFxcXFxwcm9qZWN0c1xcXFxTYW1HcmFudFxcXFxMZWFkc1RyYWNraW5nVG9vbHNcXFxcanNcXFxcc3JjXFxcXFNlbGVjdFdpdGhQZXJjZW50LnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwianNcXFxcc3JjXFxcXFNlbGVjdFdpdGhQZXJjZW50LnZ1ZVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0IHNlbGVjdFdpdGhQZXJjZW50IGZyb20gJy4vU2VsZWN0V2l0aFBlcmNlbnQudnVlJ1xyXG5cclxubGV0IEdsb2JhbFZ1ZUNvbXBvbmVudHMgPSB7fTtcclxuR2xvYmFsVnVlQ29tcG9uZW50cy5zZWxlY3RXaXRoUGVyY2VudCA9IHNlbGVjdFdpdGhQZXJjZW50O1xyXG53aW5kb3cuR2xvYmFsVnVlQ29tcG9uZW50cyA9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VUFBTztBQUFBLGNBQU0sV0FBQU8saUJBQWlCLE1BQU0sTUFBTTtBQUFBLFVBQUc7QUFBQTtBQUFBLFFBQVk7QUFBQSxNQUMvRSxDQUFDO0FBQUEsSUFDSCxDQUFDO0FBQUEsRUFDSDs7O0FDaEVxUCw0QkFBTyxTQUFTO0FBQU8sNEJBQU8sU0FBUztBQUFpQyxNQUFPRSw2QkFBUTs7O0FDRTVVLE1BQUksc0JBQXNCLENBQUM7QUFDM0Isc0JBQW9CLG9CQUFvQkM7QUFDeEMsU0FBTyxzQkFBc0I7IiwKICAibmFtZXMiOiBbIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCAiX29wZW5CbG9jayIsICJfY3JlYXRlRWxlbWVudEJsb2NrIiwgIl9GcmFnbWVudCIsICJfcmVuZGVyTGlzdCIsICJfd2l0aERpcmVjdGl2ZXMiLCAiX3ZNb2RlbENoZWNrYm94IiwgIl90b0Rpc3BsYXlTdHJpbmciLCAiX3ZNb2RlbFRleHQiLCAiU2VsZWN0V2l0aFBlcmNlbnRfZGVmYXVsdCIsICJTZWxlY3RXaXRoUGVyY2VudF9kZWZhdWx0Il0KfQo=
