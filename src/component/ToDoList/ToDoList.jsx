import { useState } from "react";

const fakeTasks = [
    {
        taskNo: 1,
        taskName: "Task 1",
    },
    {
        taskNo: 2,
        taskName: "Task 2",
    },
    {
        taskNo: 3,
        taskName: "Task 3",
    },
];

const ToDoList = () => {
    const [tasks, setTasks] = useState(fakeTasks);
    const [newTask, setNewTask] = useState("");

    const handleAddTask = () => {



        if (newTask.trim() !== "") {
            const newValue = {
                taskName: newTask,
                taskNo: tasks[tasks.length - 1].taskNo + 1
            }
            setTasks([...tasks, newValue])
        }
    };

    const deleteTasks = (taskNo) => {
        console.log("deleted Task");
        const updatedTasks = tasks.filter(x => x.taskNo !== taskNo)
        setTasks(updatedTasks)
    };




    return (
        <div className="container">
            <h1>ToDoList</h1>

            <div className="">
                <input
                    className="task-input"
                    type="text"
                    placeholder="enter task"
                    value={newTask}
                    onChange={(event) => setNewTask(event.target.value)}
                />
                <button className="add-button" onClick={handleAddTask}>
                    Add{" "}
                </button>
            </div>

            <ol>
                {tasks.map((item) => (
                    <li
                        className="task-item"
                        key={item.index}
                        style={{
                            display: "flex",
                            padding: "10px",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <h3>{item.taskName}</h3>
                        <button style={{ height: "30px" }} onClick={() => deleteTasks(item.taskNo)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default ToDoList;
