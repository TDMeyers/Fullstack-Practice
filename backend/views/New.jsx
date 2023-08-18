import React from "react";

export default function New() {
  return (
    <div>
      <form action="/logs" method="POST">
        <label htmlFor="title">Title</label><br/>
        <input type="text" id="title" name="title" />
        <br />
        <label htmlFor="entry">Body:</label>
        <br />
        <input type="text" id="entry" name="entry" />
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
