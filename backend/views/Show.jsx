import React from 'react'

export default function Show({ log }) {
    
  return (
    <div>
        <h1>{log.title}</h1>
        <p>{log.entry}</p>
        <a href={`/`}>Back</a>
        <a href={`/logs/${log._id}/edit`}>Edit</a>
        <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
        <button>Delete</button>
        </form>
    </div>
  )
}
