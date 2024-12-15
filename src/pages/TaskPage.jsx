import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import Title from "../components/Title";
import Footer from "../components/Footer";
import EditModal from "../components/EditModal";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [title, setTitle] = useState(searchParams.get("title"));
  const [description, setDescription] = useState(searchParams.get("description"));

  const [isEditModalOpen, setEditModalOpen] = useState(false);

  // Carregar tarefas do localStorage
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  function onBackClick() {
    navigate(-1);
  }

  function handleSave(newTitle, newDescription) {
    // Atualizar o título e descrição locais
    setTitle(newTitle);
    setDescription(newDescription);

    // Encontrar a tarefa atual nos tasks do localStorage
 const updatedTasks = tasks.map(task =>
        (task.title === searchParams.get("title") && task.description === searchParams.get("description"))
            ? { ...task, title: newTitle, description: newDescription }
            : task
    );

    // Atualizar tasks no localStorage
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    // Fechar o modal de edição
    setEditModalOpen(false);
  }

  return (
    <div className="w-screen h-screen bg-slate-600 flex justify-center p-6">
      <div className="min-w-[340px] sm:min-w-[70%] mx-auto space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={onBackClick}
            className="absolute left-0 top-1 bottom-0 text-slate-50"
          >
            <ChevronLeftIcon />
          </button>

          <Title>Detalhes da Tarefa</Title>
        </div>

        <div className="flex justify-center">
          <button 
            onClick={() => setEditModalOpen(true)} 
            className="bg-slate-400 text-white px-4 py-2 rounded"
          >
            Editar Tarefa
          </button>
        </div>

        <div className="bg-slate-400 p-4 rounded-md text-slate-50">
          <h2 className="text-2xl font-bold pb-4 text-center whitespace-normal break-words">
            {title}
          </h2>
          <p className="text-xl whitespace-normal break-words">
            {description}
          </p>
        </div>
      </div>

      <EditModal 
        isOpen={isEditModalOpen} 
        onClose={() => setEditModalOpen(false)} 
        title={title} 
        description={description} 
        onSave={handleSave} 
      />

      <Footer />
    </div>
  );
}

export default TaskPage;