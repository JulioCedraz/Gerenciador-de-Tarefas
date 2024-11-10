import { ChevronRightIcon, Square, CheckSquare, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function navigateToTask(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?title=${task.title}&description=${task.description}`);
  }

  return (
    <ul title="Sua lista de tarefas" className="space-y-4 p-6  bg-slate-200 rounded-md">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button title="Marque ou desmarque a tarefa como concluída"
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 w-full flex gap-2 text-left text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.isCompleted ? <CheckSquare /> : <Square /> }
            {task.title}
          </button>

          <Button title="Ver detalhes" onClick={() => navigateToTask(task)}>
            <ChevronRightIcon />
          </Button>

          <Button title="Apagar tarefa" onClick={() => onDeleteTaskClick(task.id)}>
            <Trash2Icon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
