<template>
<div>
    <div class="form-check" v-for="(item, index) in itemsLocal" :key="index">
      <div class="row align-items-center">
        <div class="col-4">
          <input class="form-check-input"
                 type="checkbox"
                 :id="'item-'+ $.uid + '-' + index"
                 :value="item.name"
                 v-model="selectedItems">
          <label class="form-check-label ml-2" :for="'item-'+ $.uid+ '-' + index">{{ item.name }}</label>
        </div>
        <div class="col-8">
          <div class="input-group input-group-sm">
            <input class="form-control"
                   type="number"
                   v-model.number="item.p"
                   @input="outputResult"
                   :id="'value-'+ $.uid+ '-' + index"
                   :disabled="!selectedItems.includes(item.name)">
            <span class="input-group-text">%</span>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-3">
      <h3>Result:</h3>
      <pre>{{ result }}</pre>
    </div>
</div>
</template>

<script>
export default {
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
      result:""
    }
  },
  watch: {
    selectedItems() {
      this.outputResult()
    }
  },
  methods: {
    outputResult() {
      let me = this;
      const selectedItemsList = me.itemsLocal.filter(item => me.selectedItems.includes(item.name));
      const result = selectedItemsList.map(item => {
        let p = item.p ? parseFloat(item.p) : 0;
        p = p > 1 ? (p / 100) : p;
        if (p > 0) {
          return {name: item.name, p: p};
        }
        return {name: item.name};
      });
      me.result = JSON.stringify(result||[], null, 0)
          .replace(/\},/g, "},\n")
          .replace(/\]/g, "\n\]")
          .replace(/\[/g, "\[\n");
      this.$emit('update',me.result)
    }
  }
}
</script>
