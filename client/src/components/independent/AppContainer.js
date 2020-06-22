import React, { useState, useContext } from "react";

import uniqid from "uniqid";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import { Redirect } from "react-router-dom";

import initialData from "../../store/initialData";
import ColumnContext from "../../context/columnContext";
import ColumnContainer from "../Column/Container";
import NewTask from "../independent/NewTask";
import UserContext from "../../context/userContext";

const AppContainer = () => {
  const [columns, setColumns] = useState(initialData.columns);
  const [taskList, setTaskList] = useState(initialData.taskList);
  const [columnOrder] = useState(initialData.columnOrder);
  const [newTaskValue, setNewTaskValue] = useState("");

  const { user } = useContext(UserContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const newTaskId = uniqid();

    const newTask = {
      ...taskList,
      [newTaskId]: { _id: newTaskId, content: newTaskValue },
    };

    const column = columns["column-1"];
    const newTaskIds = column.taskIds;

    newTaskIds.unshift(newTaskId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    setColumns({ ...columns, [newColumn._id]: newColumn });
    setTaskList(newTask);
    setNewTaskValue("");

    console.log({ newTask, newColumn });
  };

  const handleOnChange = (e) => {
    e.currentTarget.placeholder = "";
    setNewTaskValue(e.currentTarget.value);
  };

  const handleDelete = (taskId, columnId) => {
    const newTaskList = taskList;
    delete newTaskList[taskId];

    const column = columns[columnId];
    const newTaskIds = column.taskIds.filter((id) => id !== taskId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    setTaskList(newTaskList);
    setColumns({ ...columns, [newColumn._id]: newColumn });
  };

  const handleComplete = (id) => console.log(`Task ${id} completed.`);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const column = columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);

    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    setColumns({ ...columns, [newColumn._id]: newColumn });
  };

  console.log(user.isUser);

  return (
    <>
      {user.isUser ? (
        <ColumnContext.Provider
          value={{
            columns,
            taskList,
            columnOrder,
            newTaskValue,
            onSubmit: handleOnSubmit,
            onChange: handleOnChange,
            onDelete: handleDelete,
            onDone: handleComplete,
          }}
        >
          <Container>
            <h1>Task App</h1>
            <NewTask />
            <DragDropContext onDragEnd={onDragEnd}>
              <ColumnContainer />
            </DragDropContext>
          </Container>
        </ColumnContext.Provider>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

const Container = styled.div`
  max-width: 30rem;
  padding: 1rem;
  margin: 0 auto;
  box-sizing: border-box;
`;

export default AppContainer;
