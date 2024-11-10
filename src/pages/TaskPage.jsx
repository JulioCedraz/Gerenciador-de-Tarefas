import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import Title from "../components/Title";
import Footer from "../components/Footer";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  function onBackClick() {
    navigate(-1);
  }
  return (
    <div className="w-screen h-screen bg-slate-600 flex justify-center p-6">
      <div className="min-w-[360px] mx-auto space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={onBackClick}
            className="absolute left-0 top-1 bottom-0 text-slate-50"
          >
            <ChevronLeftIcon />
          </button>

          <Title>Detalhes da Tarefa</Title>
        </div>

        <div className="bg-slate-400 p-4 rounded-md text-slate-50">
          <h2 className="text-2xl font-bold pb-4 text-center whitespace-normal break-words">
            {title}
          </h2>
          <p className=" text-xl whitespace-normal break-words">
            {description}
          </p>
        </div>
      </div>
        <Footer></Footer>
    </div>
  );
}
export default TaskPage;
