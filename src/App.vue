<template>
<div id="app">
<h1>Welcome to Hedgehogs!</h1>
<center>
<h6>Please enter a Ticket to Query</h6>
</center>
<TodoList/>
</div>
</template>

<script>
import TodoList from './components/list.vue';

Vue.component('TodoList', list);

export default {
  components: {
    TodoList,
  },
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

#app {
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.4;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #32485f;
}

h1 {
  text-align: center;
}
</style>
