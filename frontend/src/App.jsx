import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom"
import New from "./New"

function App() {
  let [logs, setLogs] = useState([]);

  useEffect(() => {
    async function getLogs() {

      try {
        const response = await axios.get('http://localhost:3000/logs')
        console.log(response.data)

        setLogs(response.data)
      } catch (error) {
        console.log(error)
      }

    }
    getLogs()
  }, [])



  return (
    <div>
      <h1>Logs</h1>
      {logs.map((entry) => {
        // console.log(entry.createdAt.toLocaleString())
        return (
          <div>
            <p><a href={`/logs/${entry._id}`}>{entry.createdAt} {entry.title} {entry.createdAt}</a></p>
            {/* <h1>{entry.createdAt.toLocaleDateString()}</h1>
                    <h1><a href={`/logs/${entry._id}`}>{entry.title}</a></h1>
                    <h1>{entry.createdAt.toLocaleTimeString()}</h1> */}
          </div>
        )
      })}
      <Routes><button><Route path="/New" element={<New />} /> </button></Routes>
    </div>
  )
}

export default App