// eslint-disable-next-line
new Vue({
  el: '#tasklist',  //id
  data:{
    title: 'to do list',
    tasks:[
      {name: 'Task 1: To-do-list'},
      {name: 'Task 2: Authentication Part'},
    ]
  },
  methods:{
    newItem: function(){
      if (!this.tasks.name){
        return
      }
      this.tasks.push({
        name: this.tasks.name,
        del:''
      });
      this.tasks.name = "";
    },
    delItem: function(task){
      this.tasks.splice(this.tasks.indexOf(task), 1)
    }
  }
})
