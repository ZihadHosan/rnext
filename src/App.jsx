import NewForm from "./components/NewForm";
import "./styles.css";

function App() {
  const statuses = ["empty", "typing", "submitting", "success", "error"];
  //console.log(statuses);
  return (
    <>
      {statuses.map((status) => (
        <NewForm key={status} status={status} />
      ))}
    </>
  );
}

export default App;
