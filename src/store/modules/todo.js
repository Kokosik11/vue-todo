
export const todo = {
    state: () => ({
        todoList: [],
    }),

    mutations: {
        setTodoList(state, todoList) {
            state.todoList = todoList;
        },
        addToTodolist(state, todo) {
            state.todoList.push(todo);
        }

    },

    actions: {
        deleteTodo({state, commit}, todoId) {
            commit('setTodoList', state.todoList.filter(todo => todo.id !== todoId));
        },
        createTodo({state, commit}, todo) {
            commit('addToTodolist', todo);
        },
        initTodo({state, commit}, todoList) {
            commit('setTodoList', todoList);
        }
    },

    namespaced: true
}