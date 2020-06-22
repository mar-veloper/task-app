import React, { useContext } from "react";

import { Draggable } from "react-beautiful-dnd";

import { TaskContainer, Content, ButtonsContainer } from "./Container";
import ColumnContext from "../../context/columnContext";

const TaskList = ({ task, columnId, index }) => {
  const { onDelete, onDone } = useContext(ColumnContext);
  const { _id: taskId, content } = task;

  return (
    <>
      <Draggable draggableId={taskId} index={index} key={taskId}>
        {(provided, snapshot) => (
          <TaskContainer
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
          >
            <Content>{content}</Content>
            <ButtonsContainer>
              <i
                className="fas fa-check-circle"
                onClick={() => onDone(taskId)}
              />
              <i
                className="fas fa-trash"
                onClick={() => onDelete(taskId, columnId)}
              />
            </ButtonsContainer>
          </TaskContainer>
        )}
      </Draggable>
    </>
  );
};

export default TaskList;
