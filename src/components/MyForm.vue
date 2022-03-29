<template>  
  <form @submit.prevent>
    <myHtag :size="'3'">Добавление нового сотрудника</myHtag>
    <input
      v-model.trim="employee.employee_name"
      type="text"
      placeholder="Введите ФИО"
    />
    <input
     v-model.trim="employee.employee_salary"
     type="text"
     placeholder="Введите зарплату"
    />
    <input
      v-model.trim="employee.employee_age"
      type="text"
      placeholder="Введите возраст"
    />
    <myButton @click="createEmployee">Добавить</myButton>
  </form>  
</template>

<script>
  export default {
    data(){
      return {
        employee: {
          employee_name: '',
          employee_salary: '',
          employee_age: '',
        }
      }
    },
    methods: {
      async createEmployee() {
        this.$emit('create', this.employee);
        this.employee = {
          employee_name: '',
          employee_salary: '',
          employee_age: '',
        }
      },
    
    }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  margin: 0 10px;
  padding: 10px 15px;
  margin-top: 20px;

  width: 98%;

  border: 1px solid #0880AE;
  color: #0880AE;
}

input:focus {
  outline: 2px solid #0880AE;
}
</style>
