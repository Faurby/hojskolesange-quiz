import { useState, useEffect } from "react";

export type Song = {
  number: number;
  category: string;
  sub_category?: string;
  title: string;
};

type QuizPageProps = {
  songs: Song[];
};

export default function QuizPage({ songs }: QuizPageProps) {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [hasGuessed, setHasGuessed] = useState(false);

  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  // Pick a random song when component mounts or when songs change
  useEffect(() => {
    nextSong();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [songs]);

  const checkGuess = () => {
    if (!currentSong) return;

    const guessedNumber = parseInt(guess);
    if (!guessedNumber || guessedNumber < 1) {
      setFeedback("❌ Indsæt et positivt nummer!");
      return;
    }

    if (guessedNumber === currentSong.number) {
      setFeedback("✅ Korrekt!");
      setCorrectCount((prev) => prev + 1);
    } else {
      setFeedback(`❌ Forkert! Det rigtige nummer var ${currentSong.number}`);
      setWrongCount((prev) => prev + 1);
    }

    setHasGuessed(true);
  };

  const nextSong = () => {
    if (!songs || songs.length === 0) {
      setCurrentSong(null);
      return;
    }

    const randomIndex = Math.floor(Math.random() * songs.length);
    setCurrentSong(songs[randomIndex]);
    setGuess("");
    setFeedback("");
    setHasGuessed(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (hasGuessed) nextSong();
      else checkGuess();
    }
  };

  if (!currentSong) {
    return (
      <div className="min-h-screen flex items-center justify-center text-amber-400">
        <p>Ingen sange er tilgængelige. Fejl i setup.</p>
      </div>
    );
  }

  const totalAttempts = correctCount + wrongCount;
  const percentage =
    totalAttempts > 0 ? Math.round((correctCount / totalAttempts) * 100) : 0;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-amber-400">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold mb-4">Quiz tid!</h1>
        <p className="mb-2 text-xl">Gæt sang nummeret:</p>
        <h2 className="text-2xl font-semibold mb-4">{currentSong.title}</h2>

        {/* Input */}
        <input
          type="number"
          min={1}
          max={601}
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Indsæt sang nr."
          className="
            w-40
            px-4 py-2
            rounded
            bg-slate-700
            text-white
            placeholder-slate-400
            focus:outline-none
            focus:ring-2
            focus:ring-amber-400
            focus:border-amber-400
            appearance-none
          "
        />

        {/* Check / Next button */}
        <button
          className={`ml-2 px-4 py-2 rounded text-white ${
            hasGuessed
              ? "bg-green-500 hover:bg-green-600"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
          onClick={hasGuessed ? nextSong : checkGuess}
        >
          {hasGuessed ? "Next Song" : "Check"}
        </button>

        {/* Feedback */}
        {feedback && <p className="mt-4 text-lg">{feedback}</p>}
      </div>

      {/* Stats */}
      <div className="text-center">
        <p>✅ Korrekte: {correctCount}</p>
        <p>❌ Forkerte: {wrongCount}</p>
        <p>{percentage}%</p>
      </div>
    </div>
  );
}
