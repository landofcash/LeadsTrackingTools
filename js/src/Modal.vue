<template>
  <div ref="modal" class="modal fade" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">{{title}}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="$emit('save');">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  emits: ['save'],
  components: {

  },
  mounted() {
    let me = this;
    let modal = this.$refs.modal;
    if(!bootstrap){
      console.error("Bootstrap js is not loaded.")
    }
    me.modalInstance = new bootstrap.Modal(modal, {keyboard: false});
    me.modalInstance._element.addEventListener('hidden.bs.modal', () => {
      me.$emit('hidden');
    });
    me.modalInstance._element.addEventListener('shown.bs.modal', () => {
      me.$emit('shown');
    });
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  watch: {

  },
  methods:{
    show() {
      this.modalInstance.show();
    },
    hide() {
      this.modalInstance.hide();
    }
  }
}
</script>

<style scoped>

</style>
