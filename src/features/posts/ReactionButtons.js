import { useDispatch} from "react-redux";
import { reactionAdded } from "./postSlice";

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '🧡',
  rocket: '🚀',
  coffee: '☕'
}


 const ReactionButtons = ({post}) => {
  const dispatch = useDispatch()

  const ReactionButton = Object.entries(reactionEmoji).map(([ name, emoji]) => {

    return (
      <button
        key= {name}
        type="Button"
        className="ReactionButton"
        onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name}))}
      >
        {emoji} {post.reaction[name]}
      </button>
    )
  })
  return <div>{ReactionButtons}</div>
}

export default ReactionButtons