const initialData = {
  columns: {
    "column-1": {
      _id: "column-1",
      title: "To Do",
      taskIds: ["task-1", "task-2", "task-3"],
    },
  },

  taskList: {
    "task-1": {
      _id: "task-1",
      content: "Task 1",
    },
    "task-2": {
      _id: "task-2",
      content: "Task 2",
    },
    "task-3": {
      _id: "task-3",
      content: "Task 3",
    },
  },

  columnOrder: ["column-1"],
};

export default initialData;
