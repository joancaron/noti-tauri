import { useState } from "react"
import { invoke } from "@tauri-apps/api/primitives"

import reactLogo from "./assets/react.svg"

import "./App.css"

import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"

function App() {
  const [greetMsg, setGreetMsg] = useState("")
  const [name, setName] = useState("")

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }))
  }

  return (
    <div className="container">
      <h1 className="text-3xl font-bold underline">Welcome to Tauri!</h1>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault()
          greet()
        }}
      >
        <Input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <Button type="submit">Greet</Button>
      </form>

      <p>{greetMsg}</p>
    </div>
  )
}

export default App
