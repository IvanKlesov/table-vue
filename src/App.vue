<template>
  <div v-show="employees.length > 0">
     <myHtag :size="'1'">Учет сотрудников</myHtag>
    <MyTable
      :employees="employees"
      @remove="deleteCurrentEmployee"
      @get="editCurrentEmployee"
    />
    <myButton @click="showModal">Добавить нового сотрудника</myButton>
    <myModal v-model:show="modalVisible">
      <MyForm @create="createEmployee" />
    </myModal>
    <myModal v-model:show="modalEditVisible">
      <MyEditForm :employee="currentEmployee" @put="updateEmployee" />
    </myModal>
    <myModal v-model:show="modalDeleteVisible">
      <MyDeleteForm
       @delete="deleteEmployee"
       @cancel="deleteEmployee"
      />
    </myModal>
  </div>
  <div v-show="employees.length === 0">
    <myHtag>Список сотрудников пуст</myHtag>
    <myHtag>Обновите страницу</myHtag>
  </div>
</template>

<script>
import MyTable from './components/MyTable.vue'
import MyForm from './components/MyForm.vue'
import MyEditForm from './components/MyEditForm.vue';
import MyDeleteForm from './components/MyDeleteForm.vue';
import MyModal from './components/UI/MyModal.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    MyTable,
    MyForm,
    MyModal,
    MyEditForm,
    MyDeleteForm
},
  data() {
      return {
        employees: [],
        modalVisible: false,
        modalEditVisible: false,
        modalDeleteVisible: false,
        currentEmployee: {
          id: '',
          employee_name: '',
          employee_salary: '',
          employee_age: ''
        }
      }
  },
  methods: {
    createEmployee(employee) {
      this.fetchPostEmployees(employee);
      this.fetchEmployees();
      this.modalVisible = false;
    },
    updateEmployee(employee){
      this.fetchPutEmployees(employee);
      this.fetchEmployees();
      this.modalEditVisible = false;
    },
    deleteEmployee(confirmDeleteEmployee) {
      if(confirmDeleteEmployee){
        this.fetchDeleteEmployees(this.currentEmployee);
        this.fetchEmployees();
        this.modalDeleteVisible = false;
      } else {
        this.modalDeleteVisible = false;
      }
    },
    editCurrentEmployee(employee){
      this.changeDataCurrentEmployee(employee)
      this.modalEditVisible = true;
    },
    deleteCurrentEmployee(employee){
      this.changeDataCurrentEmployee(employee)
      this.modalDeleteVisible = true;
    },
    showModal() {
      this.modalVisible = true;
    },
    changeDataCurrentEmployee(employee){
      this.currentEmployee.id = employee.id;
      this.currentEmployee.employee_name = employee.employee_name;
      this.currentEmployee.employee_salary = employee.employee_salary;
      this.currentEmployee.employee_age = employee.employee_age;
    },
    async fetchEmployees() {
      try {
        const response = await axios.get('api/v1/employees');
        this.employees = response.data.data;
      } catch (e) {
        console.log(e)
      }
    },
    async fetchPostEmployees(employee) {
       try {
        await axios.post('api/v1/create', {
         employee_name: employee.employee_name,
         employee_salary: employee.employee_salary,
         employee_age: employee.employee_age,
        });
      } catch (e) {
        console.log(e)
      }
    },
    async fetchPutEmployees(employee) {
      try {
        await axios.put('api/v1/update/'+ employee.id, {
         employee_name: employee.employee_name,
         employee_salary: employee.employee_salary,
         employee_age: employee.employee_age,
        });
      } catch (e) {
        console.log(e)
      }
    },
    async fetchDeleteEmployees(employee) {
      try {
        await axios.delete('api/v1/delete/'+ employee.id);
      } catch (e) {
        console.log(e)
      }
    }
  },
  mounted(){
    this.fetchEmployees();
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
