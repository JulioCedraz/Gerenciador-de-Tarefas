import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import { useIntl } from "react-intl";
import Title from "../components/Title";
import Footer from "../components/Footer";
import EditModal from "../components/EditModal";
import LanguageToggle from "../components/LanguageToggle";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const intl = useIntl();

  const [title, setTitle] = useState(searchParams.get("title") || "");
  const [description, setDescription] = useState(searchParams.get("description") || "");
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  // Carregar tarefas do localStorage
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  // Encontrar a tarefa atual
  const currentTask = tasks.find(
    (task) => task.title === title && task.description === description
  );

  // Formatar data de conclusão
  const formatCompletedDate = (isoString) => {
    if (!isoString) return null;
    const date = new Date(isoString);
    return date.toLocaleString(intl.locale, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  function onBackClick() {
    navigate(-1);
  }

  // Atualizar o título e descrição locais após salvar
  function confirmSave(newTitle, newDescription) {
    setTitle(newTitle);
    setDescription(newDescription);

    // Atualizar as tarefas no localStorage
    const updatedTasks = tasks.map((task) =>
      task.title === title && task.description === description
        ? { ...task, title: newTitle, description: newDescription }
        : task
    );

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    setEditModalOpen(false);
  }

  return (
    <div className="w-screen h-screen bg-slate-600 flex justify-center p-6">
      <LanguageToggle />
      <div className="min-w-[340px] sm:min-w-[70%] mx-auto space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={onBackClick}
            className="absolute left-0 top-1 bottom-0 text-slate-50"
          >
            <ChevronLeftIcon />
          </button>

          <Title>{intl.formatMessage({ id: "taskPage.title" })}</Title>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setEditModalOpen(true)}
            className="bg-slate-400 text-white px-4 py-2 rounded"
          >
            {intl.formatMessage({ id: "taskPage.editButton" })}
          </button>
        </div>

        <div className="bg-slate-400 p-4 rounded-md text-slate-50">
          <h2 className="text-2xl font-bold pb-4 text-center whitespace-normal break-words">
            {title}
          </h2>
          <p className="text-xl whitespace-normal break-words">{description}</p>

          <br />

          {/* Registrar a data e horário de conclusão da tarefa */}
          <p className="text-sm text-center opacity-70 italic">
            {/* Verificar se a tarefa está concluída */}
            {currentTask?.isCompleted
              ? `${intl.formatMessage({ id: "taskPage.completedAt" })} ${formatCompletedDate(currentTask.completedAt)}`
              : `${intl.formatMessage({ id: "taskPage.pending" })}`}
          </p>
        </div>
      </div>

      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        title={title}
        description={description}
        onSave={confirmSave}
      />

      <Footer />
    </div>
  );
}

export default TaskPage;
