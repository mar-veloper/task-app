import React, { useContext } from "react";

import styled from "styled-components";

import "../../styles/column.css";

import ColumnContext from "../../context/columnContext";
import Title from "./Title";
import Column from "./Column";

const ColumnContainer = () => {
  const { columns, taskList, columnOrder } = useContext(ColumnContext);

  return (
    <>
      {columnOrder.map((columnId) => {
        const column = columns[columnId];
        const tasks =
          column.taskIds && column.taskIds.map((taskId) => taskList[taskId]);

        return (
          <Container key={columnId}>
            <Title title={column.title} />
            <Column columnId={columnId} tasks={tasks} />
          </Container>
        );
      })}
    </>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  margin: 2rem 0;
  border: 1pt solid black;
  box-sizing: border-box;
`;

export const StyledTitle = styled.h3`
  margin-bottom: 1rem;
`;

export const TaskContainer = styled.div`
  padding: 0.5rem 1rem;
  border: 1pt solid black;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 5fr 1fr;
  gap: 0.5rem;
  font-size: 1.2rem;
  background-color: ${(props) => (props.isDragging ? "lightgreen" : "white")};
`;

export const Content = styled.p`
  max-width: 100%;
  display: inline-block;
  overflow-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
`;

export const ButtonsContainer = styled.span`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  cursor: pointer;
`;

export default ColumnContainer;
