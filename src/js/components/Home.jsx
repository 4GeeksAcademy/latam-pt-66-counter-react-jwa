import React, { useEffect, useState } from "react";
import SimpleCounter from "./simpleCounter";

const Home = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const digitOne = counter % 10;
  const digitTwo = Math.floor(counter / 10) % 10;
  const digitThree = Math.floor(counter / 100) % 10;
  const digitFour = Math.floor(counter / 1000) % 10;

  return (
    <div>
      <SimpleCounter
        digitOne={digitOne}
        digitTwo={digitTwo}
        digitThree={digitThree}
        digitFour={digitFour}
      />
    </div>
  );
};

export default Home;
