<template>
  <div class="app">
    <my-header></my-header>
    <div class="app-content">
      <todo-form
        @create="createTodo"
      />
      <todo-list 
        :todoList="todoList" 
      />
    </div>
  </div>
</template>

<script>
  import MyHeader from '@/components/MyHeader.vue';
  import TodoForm from '@/components/TodoForm.vue';
  import TodoList from './components/TodoList.vue';

  export default {
    components: { MyHeader, TodoForm, TodoList },
    data() { 
      return {
        todoList: [
          { id: 1, title: "todo 1", checked: true },
          { id: 2, title: "todo 2", checked: false },
          { id: 3, title: "todo 3", checked: true },
        ],
      }
    },
    methods: {
      createTodo(todo) {
        console.log(todo);
        this.todoList.push(todo);
      }
    }
    
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #f3f3f3;
}

.app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.app-content {
  margin-top: 50px;
  max-width: 400px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  overflow: hidden;
  padding: 30px;
}

  @media (max-width: 570px) {
    .app-content {
      max-width: 100%;
      padding: 30px 10px;
    }
  }

</style>