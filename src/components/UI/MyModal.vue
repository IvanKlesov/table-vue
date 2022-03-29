<template>
  <div class="modal" v-if="show" @click="hideModal">
    <div class="modal-content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myModal',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideModal() {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style>
.modal {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  display: flex;

  background: rgb(0, 0, 0, 0.5);  
}

.modal-content {
  margin: auto;
  padding: 20px;

  min-width: 360px;
  min-height: 100px;

  border-radius: 12px;

  background: white;
}
</style>