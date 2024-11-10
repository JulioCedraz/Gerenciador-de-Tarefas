import { useState } from "react";
import Input from "./Input.jsx";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // LIMITADOR DE CARACTERES DESATIVADO
  // const maxTitleLength = 100;
  // const maxDescriptionLength = 200;

  // const handleTitleChange = (e) => {
  //   const value = e.target.value;
  //   if (value.length <= maxTitleLength) {
  //     setTitle(value);
  //   } else {
  //     alert(`O título não pode exceder ${maxTitleLength} caracteres.`);
  //   }
  // };
  // const handleDescriptionChange = (e) => {
  //   const value = e.target.value;
  //   if (value.length <= maxDescriptionLength) {
  //     setDescription(value);
  //   } else {
  //     alert(`A descrição não pode exceder ${maxDescriptionLength} caracteres.`);
  //   }
  // };

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Input
        type="text"
        placeholder="Descreva a tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button title="Clique para criar a tarefa"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha todos os campos.");
          }

          // LIMITADOR DE CARACTERES DESATIVADO
          //
          // if (title.length > maxTitleLength) {
          //   return alert(
          //     `O título não pode exceder ${maxTitleLength} caracteres.`
          //   );
          // }
          // if (description.length > maxDescriptionLength) {
          //   return alert(
          //     `A descrição não pode exceder ${maxDescriptionLength} caracteres.`
          //   );
          // }

          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
          // handleTitleChange("")
          // handleDescriptionChange("");
        }}
        className="bg-slate-500 text-white py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
