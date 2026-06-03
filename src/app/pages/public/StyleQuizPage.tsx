import { StyleQuizHero } from "./StyleQuiz/StyleQuizHero";

const StyleQuizPage = () => {
  return (
    <>
      <title>Style Quiz | Discover Your Interior Design Style</title>
      <meta name="description" content="Take our free interior design style quiz to discover your unique decorating style. Get personalized design recommendations from top interior design experts." />

      <div className="flex flex-col w-full">
        {/* Hero is Eager Loaded to preserve LCP */}
        <StyleQuizHero />

        {/* Future sections: Quiz steps, results, etc. */}
      </div>
    </>
  );
}

export default StyleQuizPage;
