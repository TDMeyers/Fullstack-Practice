import React from "react";

export default function Edit({log}) {
  console.log(log.title)
  return (
    <div>
      <form action={`/logs/${log._id}?_method=PUT`} method="POST">
        <label htmlFor="title">Title</label><br/>
        <input type="text" id="title" name="title"  value={log.title} />
        <br />
        <label htmlFor="entry">Body:</label>
        <br />
        <input type="text" id="entry" name="entry" value={log.entry} />
        <br />
        <label htmlFor="shipIsBroken">Is the Ship Broken:</label>
        <input type="checkbox" id="shipIsBroken" name="shipIsBroken"></input>
        <br />
        <button type='submit'>Submit</button>
      </form>
      <a href="./">Back</a>
    </div>
  );
}
