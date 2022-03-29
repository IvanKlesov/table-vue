<template>  
  <div class="modal-wrapper">
    <myHtag :size="'3'">Вы точно хотите удалить данные?</myHtag>    
    <myButton @click="deleteEmployee">Да</myButton>
    <myButton @click="cancelEmployee">Нет</myButton>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        confirmDeleteEmployee: false
      }
    },
    methods: {
      async deleteEmployee() {
        this.confirmDeleteEmployee = true;
        this.$emit('delete', this.confirmDeleteEmployee);
      },
      async cancelEmployee() {
        this.confirmDeleteEmployee = false;
        this.$emit('cancel', this.confirmDeleteEmployee);
      }    
    }
}
</script>

<style scoped>
.modal-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
