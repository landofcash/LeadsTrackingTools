<template>
  <div>
    <div class="mb-3 row" v-for="property in itemLocal.data">
      <div class="col">
        {{property.name}}
      </div>
      <div class="col">
        <select class="form-select form-select-sm" v-model="property.propType">
          <option value="1">Static Text</option>
          <option value="2">URL Parameter</option>
          <option value="3">Custom JS</option>
        </select>
      </div>
      <div class="col">
        <input type="text" class="form-control form-select-sm" v-model="property.propValue">
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      _itemOriginal:  this.item,
      _itemClone: _.cloneDeep(this.item),
      get itemLocal() {
        if(this._itemOriginal!==me.item){
          this._itemOriginal=me.item;
          this._itemClone=_.cloneDeep(this._itemOriginal);
        }
        return this._itemClone;
      },
    }
  },
  methods: {
    save(){
      this.$emit('save',this.itemLocal);
    },
    cancel(){
      this._itemClone=_.cloneDeep(this._itemOriginal);
    }
  }
}
</script>

<style scoped>

</style>
