import { useState } from 'react';
import styles from './Comment.module.css';
import avatar from '../../Assets/avatar.gif';
import { ThumbsUp, Trash } from 'phosphor-react';
import Avatar from '../Avatar/Avatar';

interface CommentProps{
  content:string;
  onDeleteComment:(comment: string)=> void;
}

const Comment = ({content, onDeleteComment}: CommentProps) => {
  const [likeCount, setLikeCount] = useState(0); 


  function handleDeleteComment(){
      onDeleteComment(content); 
  }

  function handleLikeComment(){
    setLikeCount(likeCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={avatar}/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Giovani Marchezini</strong>
              <time title="09 de Agosto às 22:00hr" dateTime='2023-09-10 22:00:00'>
                1hr atrás
              </time>
            </div>
            <button title='Deletar Comentário' onClick={handleDeleteComment}>
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20}/>
            Aplaudir<span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Comment
