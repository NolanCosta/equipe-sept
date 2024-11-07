import React from "react";

function ProgressBar() {
  const storyCount = 10;
  const advanceStory = 1;

  const renderProgressBar = () => {
    const progressBar = [];
    for (let i = 0; i < storyCount; i++) {
      progressBar.push(
        <div
          key={i}
          className={`w-10 h-10 flex justify-center items-center border-2 rounded-full ${
            i <= advanceStory ? "border-green-700" : "border-black"
          } ${
            i < advanceStory ? "bg-green-700 text-white" : "bg-white text-black"
          }`}
        >
          {i + 1}
        </div>
      );

      if (i !== storyCount - 1) {
        progressBar.push(
          <div
            key={`line-${i}`}
            className={`flex-grow h-1 ${
              i < advanceStory ? "bg-green-700" : "bg-black"
            }`}
          />
        );
      }
    }
    return progressBar;
  };

  return (
    <div className="w-full flex flex-row justify-center">
      <div className="w-[80%] flex flex-row items-center">
        {renderProgressBar()}
      </div>
    </div>
  );
}

export default ProgressBar;
