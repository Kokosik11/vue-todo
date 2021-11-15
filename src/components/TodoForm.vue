<template>
    <form class="todo-form">
        <input v-model="todo.title" type="text" class="todo-form_title" placeholder="Enter title">
        <div class="todo-form_checkblock">
            <input v-model="todo.checked" type="checkbox" id="todo-form_check" class="todo-check">
            <label for="todo-form_check">completed</label>
        </div>

        <button @click="createTodo" class="todo-form_add">Add</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                todo: {
                    title: '',
                    checked: false
                }
            }
            
        }, 
        methods: { 
            createTodo(event) {
                event.preventDefault();
                this.todo.id = Date.now();

                if(this.todo.title) {
                    this.$emit('create', this.todo);

                    this.todo = {
                        title: '',
                        checked: false
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .todo-form {
        display: flex;
        flex-direction: column;
        height: 150px;
        justify-content: space-between;
    }

    .todo-form_title {
        background-color: #f3f3f3;
        outline: none;
        border: none;
        width: 100%;
        height: 45px;
        padding: 0 20px;
        border-radius: 20px;
    }

    .todo-form_checkblock {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .todo-form_add {
        background: none;
        border: 2px solid #41B783;
        color: #34495E;
        font-size: 20;
        font-weight: 600;
        height: 45px;
        border-radius: 20px;
        outline: none;
    }
</style>