import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import SearchBox from "./SearchBox";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID,
    title: "Learn React",
    description:
      "Integrate a web API with a third-party database using secure methods focusing on seamless data exchange and data integrity 1.",
    tags: ["web", "app", "dev", "react"],
    priroity: "Low",
    isFavorite: false,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
    setShowAddModal(false);
  }

  return (
    <>
      <section className="mb-20" id="tasks">
        {/* Add task modal */}
        {showAddModal && <AddTaskModal onSave={handleAddTask} />}

        <div className="container lg:px-20">
          {/* Search Box */}
          <div className="p-2 flex justify-end">
            <SearchBox />
          </div>
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            {/* Task Actions */}
            <TaskActions onClickAdd={() => setShowAddModal(true)} />
            {/* Task List */}
            <TaskList tasksProp={tasks} />
          </div>
        </div>
      </section>
    </>
  );
}
