<template>  
    <h1 v-if="size === '1'">
      <slot>
        
      </slot>
    </h1>
    <h3 v-if="size === '3'">
      <slot>
        
      </slot>
    </h3>  
</template>

<script>
export default {
  name: 'myHtag',
  props: {
    size: {
      type: String,
      default: '1'
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 42px;
}

h3 {
  font-size: 22px;
}
</style>
