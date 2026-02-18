import { OngoingFlashcard, StartingFlashcard } from "../components";
import { useFlashcardContext } from "../contexts/flashcard";

function FlashcardDetail() {
  const { flashcard, status, question } = useFlashcardContext();
  if (!flashcard) return "Flashcard not avaible";

  return (
    <section className="space-y-2 pb-2 text-center">
      {status === "starting" ? (
        <StartingFlashcard
          name={flashcard.name}
          description={flashcard.description}
        />
      ) : status === "ongoing" ? (
        <OngoingFlashcard question={question.name} answer={question.answer} />
      ) : (
        <></>
      )}
    </section>
  );
}

export default FlashcardDetail;
