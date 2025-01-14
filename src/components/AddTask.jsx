import { useState } from "react";
import { useIntl } from "react-intl";
import Input from "./Input.jsx";

function AddTask({ onAddTaskSubmit }) {
  const intl = useIntl();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const isFormComplete = title.trim() !== "" && description.trim() !== "";

  return (
    <div
      className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex"
      title={intl.formatMessage({ id: "app.formTooltip" })}
    >
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <Input
          type="text"
          placeholder={intl.formatMessage({ id: "app.taskTitle" })}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <Input
          type="text"
          placeholder={intl.formatMessage({ id: "app.taskDescription" })}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={!isFormComplete}
          title={intl.formatMessage({ id: "app.buttonTooltip" })}
          className={`text-white p-2 rounded-md font-medium w-full
          ${
            isFormComplete
              ? "bg-slate-600 cursor-pointer"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          onClick={() => {
            onAddTaskSubmit(title, description);
            setTitle("");
            setDescription("");
          }}
        >
          {intl.formatMessage({ id: "app.addTask" })}
        </button>
      </form>
    </div>
  );
}

export default AddTask;
