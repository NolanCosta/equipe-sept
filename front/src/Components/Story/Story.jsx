import React, { useEffect, useState } from "react";

function Story({ theme }) {
  const [story, setStory] = useState(null);
  const [advencement, setAdvencement] = useState(1);
  console.log(story);

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
    console.log(answer);
    console.log(story[advencement - 1].answer);
    if (answer === story[advencement - 1].answer) {
      console.log("good answer");

      setAdvencement(advencement + 1);
    }
  };

  const renderQuestion = () => {
    return story.map((question) => {
      if (question.id === advencement) {
        return (
          <div key={question.id}>
            <h1>{question.text}</h1>
            <img src={question.image} alt="question image" />
            {question.question ? (
              <div>
                <p className="text-black">{question.question}</p>
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
            ) : (
              <div>
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

  return <div>{story && renderQuestion()}</div>;
}

export default Story;
