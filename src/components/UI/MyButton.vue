<template>  
    <button>
      <slot></slot>
    </button> 
</template>

<script>
export default {
  name: 'myButton'
}
</script>

<style scoped>
button {
  margin: 10px;
  padding: 5px 10px;

  width: 280px;
  height: 56px;

  border-radius: 20px;
  border: none;

  background: #0880AE;
  
  font-weight: 500;
  font-size: 20px;
  line-height: 21px;

  color: #EBF4F8;

  transition: 0.3s linear ;
}

button:hover {
    background-color: #EBF4F8;
    border: 2px solid #0880AE;

    color: #0880AE;
}

@media (max-width: 1480px) {
  button { 
      width: 180px;
      height: 48px;
      
      font-size: 14px;
      line-height: 21px;
  
  }
}

@media (max-width:960px) {
  button { 
      width: 120px;
      height: 38px;
      
      font-size: 12px;
      line-height: 14px;
  
  }
}

@media (max-width:680px) {
  button { 
      width: 80px;
      height: 44px;
      
      font-size: 10px;
      line-height: 10px;
  
  }
}
</style>
