import React from "react";

import { Droppable } from "react-beautiful-dnd";
import TaskList from "./TaskList";

const Column = ({ columnId, tasks }) => {
  return (
    <>
      <Droppable droppableId={columnId}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            columnid={columnId}
          >
            {tasks.map((task, index) => (
              <TaskList
                task={task}
                columnId={columnId}
                index={index}
                key={task._id}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </>
  );
};

export default Column;
