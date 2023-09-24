import { useLanyard } from "react-use-lanyard";

function App() {
  const lanyard = useLanyard({
    userId: "514455600508436491",
  });

  return <pre>{!lanyard.isValidating && JSON.stringify(lanyard, null, 4)}</pre>;
}

export default App;
