import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import type { UUIDTypes } from "uuid";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface Content {
  id: UUIDTypes;
  text: string;
}

interface CommentProps {
  content: Content;
  onDeleteComment: (commentId: UUIDTypes) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content.id);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/reifhel.png" hasBorder={false} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rafael Schmitz</strong>
              <time
                title="26 de julho 2025 às 14:40"
                dateTime="2025-07-26 14:40:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content.text}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp /> Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
