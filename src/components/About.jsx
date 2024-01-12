import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p>Skills:-</p>
        <hr className="text-info"/>
        <p className="text-xl mt-5">
          Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model.<br/>
          Through understanding of React.js and its core principles.<br/>
          Experience with popular React.js workflows (such as Flux or Redux).<br/>
          Familiarity with newer specifications of EcmaScript.<br/>
          Experience with data structure libraries (e.g., Immutable.js).<br/>
          Knowledge of isomorphic React is a plus.<br/>
          Familiarity with RESTful APIs.<br/>
          Knowledge of modern authorization mechanisms, such as JSON Web Token.<br/>
          Familiarity with modern front-end build pipelines and tools.<br/>
          Experience with common front-end development tools such as Babel, Webpack, NPM, etc.<br/>
          Ability to understand business requirements and translate them into technical requirements.<br/>
          A knock for benchmarking and optimization.<br/>
          Familiarity with code versioning tools such as Git, SVN, and Mercurial — Prime React and Material UI.
        </p>
        <br />
        {/* <p className="text-xl">
        </p> */}
      </div>
    </div>
  );
};

export default About;
