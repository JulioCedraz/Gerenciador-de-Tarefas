import React, { useState } from 'react';
import { useIntl } from "react-intl";

function EditModal({ isOpen, onClose, title, description, onSave }) {
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const intl = useIntl();

  if (!isOpen) return null;

  const confirmSave = () => {
    onSave(editedTitle, editedDescription);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">{intl.formatMessage({ id: "modal.editTitle" })}</h2>
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          className="border p-2 mb-4 w-full"
          placeholder="Título"
        />
        <textarea
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
          className="border p-2 mb-4 w-full"
          placeholder="Descrição"
        />
        <div className="flex justify-end">
          <button onClick={onClose} className="mr-4 text-gray-500">{intl.formatMessage({ id: "modal.cancel" })}</button>
          <button onClick={confirmSave} className="bg-blue-500 text-white px-4 py-2 rounded">{intl.formatMessage({ id: "modal.save" })}</button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;