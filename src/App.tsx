import "./App.css";

import { Input } from "@/components/ui/input"
import { invoke } from "@tauri-apps/api/tauri";
import reactLogo from "./assets/react.svg";
import { useState } from "react";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>

      < Input type="file" />

      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
