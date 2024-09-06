import { ref } from 'vue'
export const useTodos = () =>{
    let title = ref('')
    let todos = ref([
        {title  :'学习vue', done:false}
    ])

    function addTodo(){
        todos.push({
            title:title.value,
            done:false
        })
        title.value = ''
    }


    function clear(){
        todos.value = todos.value.filter(v=>!v.done)
    }


    let active = computed(()=>{
        return todos.value.filter(v => !v.done).length
    } )


    let done = computed(()=> todos.value.length)
    // computed 高级特性
    let allDone = computed({
        get: function(){
            return active.value === 0
        },
        set: function(value){
            todos.value.forEach(todo => {
                todo.done = value                                                                                                                                                                                                                     
            })
        }
    })
    return {

    }
}