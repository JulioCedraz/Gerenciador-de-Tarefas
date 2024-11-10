import {
  ChevronRightIcon,
  Square,
  CheckSquare,
  Trash2Icon,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

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
        title="Sua lista de tarefas"
        className="space-y-4 p-6 bg-slate-200 rounded-md"
      >
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              title="Marque ou desmarque a tarefa como concluída"
              onClick={() => onTaskClick(task.id)}
              className={`bg-slate-400 w-full flex gap-2 text-left text-white p-2 rounded-md ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.isCompleted ? <CheckSquare /> : <Square />}
              {task.title}
            </button>

            <Button title="Ver detalhes" onClick={() => navigateToTask(task)}>
              <ChevronRightIcon />
            </Button>

            <Button
              title="Apagar tarefa"
              onClick={() => openDeleteModal(task.id)}
            >
              <Trash2Icon />
            </Button>
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-lg font-semibold">Confirmação de Exclusão</h2>
            <p>Tem certeza que deseja excluir esta tarefa?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={cancelDelete}
                className="mr-4 bg-slate-300 p-2 rounded-md"
              >
                Cancelar
              </button>
              <button
                onClick={confirmDelete}
                className="bg-red-500 text-white p-2 rounded-md"
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tasks;
