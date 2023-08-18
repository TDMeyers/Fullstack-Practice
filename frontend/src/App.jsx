import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  let [logs, setLogs] = useState([]);

useEffect(() => {
  async function getLogs(){
    const response = await axios.get('/logs')
    console.log(response.data)

    setLogs(response.data)
  }
  getLogs()
}, [])



  return (
    <div>

    </div>
  )
}

export default App