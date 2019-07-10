Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>"
  //   template: "<li>This is a todo</li>"
});

var app = new Vue({
  el: "#app",
  data: {
    seen: true,

    todos: [
      { text: "Learn JavaScript" },
      { text: "Learn Vue" },
      { text: "Build something awesome" }
    ],

    message: "Hello Vue.js!",

    groceryList: [
      { id: 0, text: "Vegetables" },
      { id: 1, text: "Cheese" },
      { id: 2, text: "Whatever else humans are supposed to eat" }
    ]
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  }
});

app.todos.push({ text: "New item" });
app.seen = false;
