/* eslint-disable react/prop-types */
import { useState } from "react";

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === "barishal") {
        resolve();
      } else {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      }
    }, 3000);
  });
}

export default function NewForm() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");
  //console.log(status);

  //   Handles

  const handelTextChange = (e) => {
    setAnswer(e.target.value);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err.message);
    }
  };

  if (status === "success") return <h1>Thats right!</h1>;
  return (
    <>
      <h2>City quiz</h2>
      <p>What city is located on two continents?</p>

      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handelTextChange}
          disabled={status === "submitting"}
        ></textarea>
        <br />
        <button disabled={status === "submitting" || answer === ""}>
          Submit
        </button>
        {status === "submitting" && <p>Loading...</p>}
        {error && <p className="Error">{error}</p>}
      </form>
    </>
  );
}
