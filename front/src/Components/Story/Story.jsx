import React, { useEffect, useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";

function Story({ theme }) {
  const [story, setStory] = useState(null);
  const [advencement, setAdvencement] = useState(1);

  const getStory = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/inondation`);
      const data = await response.json();
      setStory(data);
    } catch (error) {
      console.error(error);
    }
  };

  const checkAnswer = (answer) => {
    if (answer === story[advencement - 1].answer) {
      setAdvencement(advencement + 1);
    }
  };

  const renderQuestion = () => {
    return story.map((question) => {
      if (question.id === advencement) {
        return (
          <div
            key={question.id}
            className="h-[calc(100vh-78px-4rem)] flex flex-col justify-between items-center"
          >
            <ProgressBar size={story.length} advencement={advencement} />
            <h1 className="h-1/6 flex items-center text-black">
              {question.text}
            </h1>
            <img
              className="w-1/2 h-3/6"
              src={question.image}
              alt="question image"
            />
            {question.question ? (
              <div className="h-1/6 flex flex-col justify-around items-center">
                <h2 className="text-3xl text-black">{question.question}</h2>
                <div className="flex flex-row items-center gap-10">
                  {question.choices.map((choice) => {
                    return (
                      <button
                        className="bg-white text-black"
                        onClick={() => {
                          checkAnswer(choice);
                        }}
                      >
                        {choice}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="h-1/6 flex items-center">
                <button
                  onClick={() => {
                    setAdvencement(advencement + 1);
                  }}
                >
                  Suivant
                </button>
              </div>
            )}
          </div>
        );
      }
    });
  };

  useEffect(() => {
    getStory();
  }, [theme]);

  return <>{story && renderQuestion()}</>;
}

export default Story;
