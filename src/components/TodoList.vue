<template>
    <div class="todo-list">
        <todo-item v-for="todo in todoList" :todo="todo" :key="todo.id" />
    </div>
</template>

<script>
    import TodoItem from './TodoItem.vue'
    export default {
    components: { TodoItem },
        props: { 
            todoList: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>
    .todo-list {
        margin-top: 50px;
    }
</style>