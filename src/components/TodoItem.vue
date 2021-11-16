<template>
    <div class="todo-item">
        <div class="todo-title">{{ todo.title }}</div>
        <div class="menu">
            <input type="checkbox" class="todo-checked" v-model="todo.checked" />
            <button class="todo-delete" @click="$emit('delete', todo.id)">X</button>
        </div>
        
    </div>
</template>

<script>
    export default {
        props: { 
            todo: { 
                type: Object,
                required: true
            },
        }
    }
</script>

<style scoped>
    .todo-item {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        padding: 0 20px;
    }

    .todo-item:nth-child(even) {
        background-color: #f3f3f3;
    }

    .menu {
        display: flex;
        align-items: center;
    }

    .menu button {
        margin-left: 15px;
        border: none;
        background: none;
        outline: none;
        cursor: pointer;
    }
</style>