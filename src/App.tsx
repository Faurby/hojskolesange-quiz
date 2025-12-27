import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center text-amber-400">
        <h1 className="text-4xl font-bold mb-6">Højskolesange Quiz</h1>

        <div className="flex justify-center gap-4">
          <button
            className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            onClick={() => navigate("/quiz/all")}
          >
            Alle Sange Quiz
          </button>

          <button
            className="px-6 py-3 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
            onClick={() => navigate("/quiz/bangers")}
          >
            Bangers Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
