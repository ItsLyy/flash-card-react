/**
 * Custom Modules
 */
import { Flashcard } from "../components";

function HomePage() {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col">
        <h1 className="text-xl text-zinc-500">Flashcard</h1>
        <p className="text-sm text-zinc-400">Select your topic</p>
      </div>
      <Flashcard />
    </section>
  );
}

export default HomePage;
