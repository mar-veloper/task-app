import React, { useContext } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import ColumnContext from "../../context/columnContext";

const NewTask = () => {
  const { newTaskValue, onSubmit, onChange } = useContext(ColumnContext);

  return (
    <>
      <form autoComplete="off" onSubmit={onSubmit}>
        <Input
          name={"addTask"}
          label="Add a task"
          type="text"
          placeholder="What's needed to be done ?"
          onChange={onChange}
          value={newTaskValue}
        />
        <Button disabled={!newTaskValue}>Add Task</Button>
      </form>
    </>
  );
};

export default NewTask;
