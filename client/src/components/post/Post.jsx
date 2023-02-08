import "./post.css"

export default function Post() {
  return (
    <div  className="post">
      <img className="postImg"
      src="https://images.unsplash.com/photo-1603207731706-27c89b8a3c0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2VhJTIwYWVzdGhldGljfGVufDB8fDB8fA%3D%3D&w=1000&q=80" 
      alt="" 
      />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet 
        </span>
        <hr />
        <span className="postDate">1 hour ago </span>
      </div>
        <p className="postDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure itaque et debitis magni quis? 
            Tempora numquam deserunt vel odio, dolorum, dolorem perspiciatis iste corrupti in laboriosam 
            quae voluptatibus! Repudiandae, neque.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure itaque et debitis magni quis? 
            Tempora numquam deserunt vel odio, dolorum, dolorem perspiciatis iste corrupti in laboriosam 
            quae voluptatibus! Repudiandae, neque.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure itaque et debitis magni quis? 
            Tempora numquam deserunt vel odio, dolorum, dolorem perspiciatis iste corrupti in laboriosam 
            quae voluptatibus! Repudiandae, neque.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure itaque et debitis magni quis? 
            Tempora numquam deserunt vel odio, dolorum, dolorem perspiciatis iste corrupti in laboriosam 
            quae voluptatibus! Repudiandae, neque.</p>
    </div>
  )
}
