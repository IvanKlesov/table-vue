<template>  
    <table>
      <thead>
        <tr>
          <th>Ф.И.О. сотрудника</th>
          <th>Зарплата</th>
          <th>Возраст</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee.id" @dblclick="$emit('get', employee)">
          <td>{{employee.employee_name}}</td>
          <td>{{employee.employee_salary}}</td>
          <td>{{employee.employee_age}}</td>
          <td>
            <myButton @click="$emit('remove', employee)">
              Удалить сотрудника
            </myButton>
          </td>
        </tr>
      </tbody>
    </table> 
</template>

<script>
  export default {
    props: {
      employees: {
        type: Array,
        required: true
      }
    }
  }
</script>
<style scoped>
table {
  margin: 20px;

  table-layout: fixed;
  width: 98%;
  border-collapse: collapse;
  border: 2px solid #0880AE;

  color:#0880AE;

  font-weight: 500;
  font-size: 20px;
  line-height: 21px;
}

thead th:nth-child(1) {
  width: 25%;
}

thead th:nth-child(2) {
  width: 25%;
}

thead th:nth-child(3) {
  width: 25%;
}

thead th:nth-child(4) {
  width: 25%;
}

th, td {
  padding: 20px;

  border: 2px solid #0880AE;
}

tr:hover {
  background: #0880AE;
  
  color: white;
}
</style>
