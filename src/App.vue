<template>
  <div class="app">
    <my-header></my-header>
    <div class="app-content">
      <todo-form
        @create="createTodo"
      />
      <todo-list 
        v-if="todoList.length > 0"
        :todoList="todoList" 
        @delete="deleteTodo"
      />
      <div class="app-is_empty" v-else>
        Todo list is empty
      </div>
    </div>
  </div>
</template>

<script>
  import MyHeader from '@/components/MyHeader.vue';
  import TodoForm from '@/components/TodoForm.vue';
  import TodoList from './components/TodoList.vue';
  import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';

  export default {
    components: { MyHeader, TodoForm, TodoList },

    methods: {
      ...mapMutations({
        setTodoList: 'todo/setTodoList',
        addToTodolist: 'todo/addToTodolist',
      }),
      ...mapActions({
        deleteTodo: 'todo/deleteTodo',
        createTodo: 'todo/createTodo',
        initTodo: 'todo/initTodo'
      }),
    },
    mounted() {
      let value = [
          { id: 1, title: "todo 1", checked: true },
          { id: 2, title: "todo 2", checked: false },
          { id: 3, title: "todo 3", checked: true },
      ]

      if(localStorage.todoList) {
        value = JSON.parse(localStorage.todoList);
      }
      
      this.initTodo(value)
    },
    watch: {
      todoList: {
        handler: function(newTodoList) {
          localStorage.todoList = JSON.stringify(newTodoList);
        },
        deep: true,
      }
    },
    computed: { 
      ...mapState({
        todoList: state => state.todo.todoList
      })
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

  .app-is_empty {
    text-align: center;
    margin: 50px 0 30px;
  }

</style>