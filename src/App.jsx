import { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import AddTask from "./components/AddTask.jsx";
import Tasks from "./components/Tasks.jsx";
import Title from "./components/Title";
import Footer from "./components/Footer.jsx";
import LanguageToggle from "./components/LanguageToggle.jsx";

function App() {
  // Biblioteca de internacionalização:
  const intl = useIntl();

  // Salvando tarefas no localStorage:
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Atualizando tarefas no localStorage:
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // Marcar tarefa como concluída
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
          // Adiciona data e hora do clique
          completedAt: !task.isCompleted ? new Date().toISOString() : null,
        };
      }
      // Sem alteração
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
      completedAt: null,
      createdAt: new Date().toISOString(),
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-600 flex justify-center p-6">
      <LanguageToggle />
      <div className="w-[500px] space-y-6 mb-8">
        <Title>{intl.formatMessage({ id: "app.title" })}</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTask}
        />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
