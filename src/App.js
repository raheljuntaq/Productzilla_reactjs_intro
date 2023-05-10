import React, { Component } from "react";

class TodoList extends Component {
  state = {
    tasks: [
      { id: 1, name: "Mengerjakan Post Test", completed: false },
      { id: 2, name: "Mengerjakan Pre Test", completed: true },
      { id: 3, name: "Menghadiri Bootcamp PX", completed: false },
    ],
  };

  handleTaskClick = (id) => {
    this.setState((prevState) => {
      const updatedTasks = prevState.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      return { tasks: updatedTasks };
    });
  };

  render() {
    const tasks = this.state.tasks.map((task) => (
      <li key={task.id} className={task.completed ? "completed" : ""}>
        <input type="checkbox" checked={task.completed} onChange={() => this.handleTaskClick(task.id)} />
        {task.name}
      </li>
    ));

    return (
      <div>
        <ul>{tasks}</ul>
      </div>
    );
  }
}

export default TodoList;
