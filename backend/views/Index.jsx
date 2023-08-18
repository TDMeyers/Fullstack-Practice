import React from 'react'

export default function Index({ log }) {
    console.log(log)
  return (
    <div>
        {log.map((entry) => {
            // console.log(entry.createdAt.toLocaleString())
            return(
                <div>
                    <p><a href={`/logs/${entry._id}`}>{entry.createdAt.toLocaleDateString()} {entry.title} {entry.createdAt.toLocaleTimeString()}</a></p>
                    {/* <h1>{entry.createdAt.toLocaleDateString()}</h1>
                    <h1><a href={`/logs/${entry._id}`}>{entry.title}</a></h1>
                    <h1>{entry.createdAt.toLocaleTimeString()}</h1> */}
                </div>
            )
        })}
        <a href='/logs/new'>Create</a>
    </div>
  )
}
