<template>
<div>
    <modal ref="propertiesModal" :title="editItem.name+' Properties'" @save="propertiesModalSave()" @hidden="propertiesModalClose()">
      <template v-slot:body>
        <item-data-settings ref="propertiesDataSettings" :item="editItem" @save="propertiesDataSettingsSave"></item-data-settings>
      </template>
    </modal>
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
        <div class="col-6">
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
        <div class="col-2">
          <button :disabled="!selectedItems.includes(item.name)"
                  type="button" class="btn btn-sm btn-default" @click="openProperties(item)">Properties</button>
        </div>
      </div>
    </div>
    <div class="mt-3">
      <h3>Result:</h3>
      <pre style="font-size:10px; font-family: Arial,serif;">{{ result }}</pre>
    </div>
</div>
</template>

<script>
import modal from './Modal.vue'
import itemDataSettings from './ItemDataSettings.vue'
import stringify  from '@aitodotai/json-stringify-pretty-compact'
export default {
  components: {
    modal,
    itemDataSettings
  },
  props: {
    items: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      itemsLocal: _.cloneDeep(this.items),
      selectedItems: [],
      result:"",
      editItem:{}
    }
  },
  watch: {
    selectedItems() {
      this.outputResult()
    }
  },
  methods: {
    propertiesModalClose(){
      this.$refs.propertiesDataSettings.cancel();
    },
    propertiesModalSave(){
      this.$refs.propertiesDataSettings.save();
      this.outputResult();
    },
    propertiesDataSettingsSave(itemToSave){
      _.assign(this.editItem,itemToSave);
      this.$refs.propertiesModal.hide();
    },
    openProperties(item){
      this.editItem=item;
      this.$refs.propertiesModal.show();
    },
    outputResult() {
      let me = this;
      const selectedItemsList = me.itemsLocal.filter(item => me.selectedItems.includes(item.name));
      const result = selectedItemsList.map(item => {
        let p = item.p ? parseFloat(item.p) : 0;
        p = p > 1 ? (p / 100) : p;
        if (p > 0) {
          return {name: item.name, p: p, data:item.data};
        }
        return {name: item.name, data:item.data};
      });
      me.result = stringify(result||[],{maxLength:150});
      this.$emit('update',me.result)
    }
  }
}
</script>
