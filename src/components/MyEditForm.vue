<template>  
  <form @submit.prevent>
    <myHtag :size="'3'">Редактирование данных сотрудника</myHtag>
    <input
      v-model.trim="newEmployee.employee_name"
      type="text"
      placeholder="Введите ФИО"
    />
    <input
     v-model.trim="newEmployee.employee_salary"
     type="text"
     placeholder="Введите зарплату"
    />
    <input
      v-model.trim="newEmployee.employee_age"
      type="text"
      placeholder="Введите возраст"
    />
    <myButton @click="updateEmployee">Сохранить</myButton>
  </form>  
</template>

<script>
  export default {
    data(){
      return {
        newEmployee: {
          id: this.employee.id,
          employee_name: this.employee.employee_name,
          employee_salary: this.employee.employee_salary,
          employee_age: this.employee.employee_age,
        }
      }
    },
    props: {
      employee: {
        type: Object,
        required: true
      }
    },
    methods: {
      async updateEmployee() {
        this.$emit('put', this.newEmployee);
        this.newEmployee = {
          id: '',
          employee_name: '',
          employee_salary: '',
          employee_age: '',
        }
      }
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
