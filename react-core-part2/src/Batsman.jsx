import { useState } from 'react';

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);

  const handleSingle = () => {
    const updatedRuns = runs + 1;
    setRuns(updatedRuns);
  };

  const handleFours = () => {
    const updatedRuns = runs + 4;
    setRuns(updatedRuns);
  };

  const handleSixs = () => {
    const updatedRuns = runs + 6;
    const updatedSixes = sixs + 1;
    setSixes(updatedSixes);
    setRuns(updatedRuns);
  };
  return (
    <div>
      <h3>Player :Bangladesh batsman</h3>
      <p>
        <small>Six : {sixes}</small>
      </p>
      {runs > 100 && <p>congratulations you did century!!</p>}
      <h3>Score : {runs}</h3>
      <button onClick={handleSingle}>singles</button>
      <button onClick={handleFours}>fours</button>
      <button onClick={handleSixs}>sixs</button>
    </div>
  );
}
