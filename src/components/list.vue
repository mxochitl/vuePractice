<template>
<div>
  <BaseInputText v-model="newTodoText"
                 placeholder="Ticker"
                 @keydown.enter="addTodo" />
  <ul v-if="todos.length">
    <TodoListItem v-for="todo in todos"
                  :key="todo.id"
                  :todo="todo"
                  @remove="removeTodo" />
  </ul>
  <p v-else>
    No queries to do.
  </p>
</div>
</template>
<script>
import BaseInputText from './components/input.vue';
import TodoListItem from './components/append.vue';

let nextTodoId = 1;

export default
{
  components:
  {
    BaseInputText,
    TodoListItem,
  },
  data() {
    return {
      newTodoText: '',
      todos: [
        {
          id: nextTodoId=nextTodoId+1,
          text: 'FB',
        }]
    };
  },
  methods:
  {
    addTodo() {
      const trimmedText = this.newTodoText.trim();
      if (trimmedText) {
        this.todos.push(
        {
          id: nextTodoId=nextTodoId+1,
          text: trimmedText,
        });
        this.newTodoText = '';
      }
    },
    removeTodo(idToRemove) {
      this.todos = this.todos.filter(todo => { return todo.id !== idToRemove; });
    },
  },
};

</script>

</template>

<script>
import BaseInputText from './components/input.vue';
import TodoListItem from './components/append.vue';

let nextTodoId = 1

export default {
  components: {
    BaseInputText,
    TodoListItem
  },
  data() {
    return {
      newTodoText: '',
      todos: [
        {
          id: nextTodoId=nextTodoId+1,
          text: 'FB',
        }
      ]
    }
  },
  methods: {
    addTodo() {
      const trimmedText = this.newTodoText.trim()
      if (trimmedText) {
        this.todos.push({
          id: nextTodoId=nextTodoId+1,
          text: trimmedText,
        })
        this.newTodoText = ''
      }
    },
    removeTodo(idToRemove) {
      this.todos = this.todos.filter(todo => {return todo.id !== idToRemove; })
    },
  },
};

</script>
