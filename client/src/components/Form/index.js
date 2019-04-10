import React from "react";

// This file exports the Input, TextArea, and FormBtn components

function Input({ q, onChange, onSubmit }) {
    return (
      <div className="container input">
        <form>
          <div className="form-group">
            <label htmlFor="q">Book Search</label>
            <input
              type="text"
              className="form-control"
              id="Title"
              name="q"
              value={q}
              onChange={onChange}
              placeholder="Book Title"
              required>
            </input>
          </div>
          <div>
            <button 
              type="submit"
              className="btn btn-primary"
              onClick={onSubmit}>
              Search</button>
          </div>
        </form>
      </div>
    );
  }


export default Input;
// export function TextArea(props) {
//   return (
//     <div className="form-group">
//       <textarea className="form-control" rows="20" {...props} />
//     </div>
//   );
// }

// export function FormBtn(props) {
//   return (
//     <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
//       {props.children}
//     </button>
//   );
// }
