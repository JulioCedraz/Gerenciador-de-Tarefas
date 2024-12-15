import { useState } from "react";
import Input from "./Input.jsx";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const isFormComplete = title.trim() !== "" && description.trim() !== "";

  return (
    <div
      className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex"
      title="Preencha o título e a descrição para criar uma nova tarefa"
    >
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <Input
          type="text"
          placeholder="Digite o título da tarefa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <Input
          type="text"
          placeholder="Descreva a tarefa"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={!isFormComplete}
          title="Clique para criar a tarefa"
          className={`bg-slate-500 text-white p-2 rounded-md font-medium w-full
          ${
            isFormComplete ? "cursor-pointer" : "bg-gray-400 cursor-not-allowed"
          }`}
          onClick={() => {
            onAddTaskSubmit(title, description);
            setTitle("");
            setDescription("");
            new Date().toISOString();
          }}
        >
          Adicionar
        </button>
      </form>
    </div>
  );
}

export default AddTask;
