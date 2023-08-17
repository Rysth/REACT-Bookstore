import React from 'react';

function Form() {
  return (
    <form action="#" className="form">
      <div className="form-group">
        <label htmlFor="title" className="form-label">
          <input type="text" name="title" id="title" className="form-input" placeholder="Title.." />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="author" className="form-label">
          <input
            type="text"
            name="author"
            id="author"
            className="form-input"
            placeholder="Author.."
          />
        </label>
      </div>
      <div className="form-group">
        <button type="submit" className="form-button submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
