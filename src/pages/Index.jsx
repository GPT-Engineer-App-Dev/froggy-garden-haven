import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showFact, setShowFact] = useState(false);

  const frogFacts = [
    "Frogs are amphibians and can live both on land and in water.",
    "There are over 5,000 known species of frogs.",
    "Some frogs can jump up to 20 times their own body length.",
    "The smallest frog in the world is less than 1cm long.",
    "Frogs don't need to drink water; they absorb it through their skin.",
  ];

  const randomFact = () => frogFacts[Math.floor(Math.random() * frogFacts.length)];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-300">
      <header className="py-6 bg-green-500 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Frog World</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#facts" className="hover:underline">Frog Facts</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto mt-8 px-4">
        <section id="hero" className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Discover the Fascinating World of Frogs</h2>
          <p className="text-xl mb-8">Leap into a world of wonder and learn about these amazing amphibians!</p>
          <img src="/placeholder.svg" alt="Colorful tree frog" className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg" />
        </section>

        <section id="about" className="mb-16">
          <h3 className="text-3xl font-semibold mb-4">About Frogs</h3>
          <p className="text-lg mb-4">
            Frogs are fascinating creatures that have been around for over 200 million years. They are found on every continent except Antarctica and play crucial roles in many ecosystems. From their unique life cycle to their diverse adaptations, frogs continue to captivate scientists and nature enthusiasts alike.
          </p>
        </section>

        <section id="facts" className="mb-16">
          <h3 className="text-3xl font-semibold mb-4">Frog Facts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {frogFacts.map((fact, index) => (
              <Alert key={index}>
                <AlertTitle>Did you know?</AlertTitle>
                <AlertDescription>{fact}</AlertDescription>
              </Alert>
            ))}
          </div>
        </section>

        <section className="text-center mb-16">
          <h3 className="text-3xl font-semibold mb-4">Learn More</h3>
          <Button onClick={() => setShowFact(!showFact)}>
            {showFact ? "Hide Fact" : "Show Random Frog Fact"}
          </Button>
          {showFact && (
            <p className="mt-4 text-lg font-medium">{randomFact()}</p>
          )}
        </section>
      </main>

      <footer className="bg-green-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Frog World. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
