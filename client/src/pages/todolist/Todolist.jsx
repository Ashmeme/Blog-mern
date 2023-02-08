import "./todolist.css"

export default function Todolist() {
  return (
    <div className="todolist">
      <img 
      className="writeImg"
      src="https://images.unsplash.com/photo-1517315003714-a071486bd9ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
      alt="" />
      <form  className="todolistForm">
        <div className="todolistFormGroup">
          <label htmlFor="fileInput">
          <i className="writeIcon fa-solid fa-plus"></i>
          </label>
            <input type="file" id="fileInput" style={{display:"none"} } />
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
        </div>

        <div className="todolistFormGroup">
          <textarea placeholder="What are your tasks to do?" type="text" className="writeInput writeText"></textarea>
        </div>

        <button className="writeSubmit">Publish</button>
      </form> 
    </div>
  )
}
