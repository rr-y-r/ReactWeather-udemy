import React from 'react';

var About = (props) => {
  return(
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application build on React.
        I have built this for The Complete React Web App Developer Course.
      </p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react"> - This was the JavaScript framework used.</a>
        </li>
        <li>
          <a href="https://openweathermap.org"> - something</a>
        </li>
      </ul>
    </div>
  );
};

export default About;
