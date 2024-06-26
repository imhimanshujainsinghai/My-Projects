import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/post-list-store";

const Post = ({ post }) => {
  let { deletePost } = useContext(PostListContext);
  return (
    <div className="card ">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}
        >
          <MdDelete />
        </span>
        <p className="card-text">{post.body}</p>
        <div className="alert alert-info" role="alert">
          This post has been reacted by {post.reactions} people
        </div>

        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Post;
