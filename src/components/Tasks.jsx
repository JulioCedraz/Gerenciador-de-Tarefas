import {
  ChevronRightIcon,
  Square,
  CheckSquare,
  Trash2Icon,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";
import Button from "./Button";
import DeleteModal from "./DeleteModal";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const intl = useIntl();

  function navigateToTask(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?title=${task.title}&description=${task.description}`);
  }

  function openDeleteModal(taskId) {
    setTaskToDelete(taskId);
    setIsModalOpen(true);
  }

  function confirmDelete() {
    onDeleteTaskClick(taskToDelete);
    setIsModalOpen(false);
    setTaskToDelete(null);
  }

  function cancelDelete() {
    setIsModalOpen(false);
    setTaskToDelete(null);
  }

  return (
    <div>
      <ul
        title={intl.formatMessage({ id: "app.taskListTooltip" })}
        className="space-y-4 p-6 bg-slate-200 rounded-md"
      >
        {tasks.length === 0 ? (
          <li className="text-center text-gray-500">
            {intl.formatMessage({ id: "app.emptyTaskList" })}
          </li>
        ) : (
          tasks.map((task) => (
            <li key={task.id} className="flex gap-2">
              <button
                title={intl.formatMessage({ id: "app.markTaskTooltip" })}
                onClick={() => onTaskClick(task.id)}
                className={`bg-slate-400 w-full flex gap-2 text-left text-white p-2 rounded-md ${
                  task.isCompleted && "line-through"
                }`}
              >
                {task.isCompleted ? <CheckSquare /> : <Square />}
                {task.title}
              </button>

              <Button
                title={intl.formatMessage({ id: "app.viewDetailsTooltip" })}
                onClick={() => navigateToTask(task)}
              >
                <ChevronRightIcon />
              </Button>

              <Button
                title={intl.formatMessage({ id: "app.deleteTaskTooltip" })}
                onClick={() => openDeleteModal(task.id)}
              >
                <Trash2Icon />
              </Button>
            </li>
          ))
        )}
      </ul>

      <DeleteModal
        isOpen={isModalOpen}
        onCancel={cancelDelete}
        onConfirm={confirmDelete}
      />
    </div>
  );
}

export default Tasks;
