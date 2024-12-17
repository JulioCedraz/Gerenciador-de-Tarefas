import React from 'react';

function DeleteModal({ isOpen, onCancel, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-lg">
        <h2 className="text-lg font-semibold">Confirmação de Exclusão</h2>
        <p>Tem certeza que deseja excluir esta tarefa?</p>
        <div className="flex justify-end mt-4">
          <button
            onClick={onCancel}
            className="mr-4 bg-slate-300 p-2 rounded-md"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white p-2 rounded-md"
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;