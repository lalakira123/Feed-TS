import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { Avatar } from './../Avatar/Avatar'
import { Comment } from './../Comment/Comment'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR'

import style from './Post.module.css'

interface Author {
  name: string,
  role: string,
  imageUrl: string
}

interface Content {
  type: 'paragraph' | 'link',
  content: string
}

interface PostProps {
  author: Author,
  publishedAt: Date,
  contents: Content[]
}

export function Post({ author, publishedAt, contents }: PostProps) {
  const publishedAtFormat = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });
  const publishedAtToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  const [ comments, setComments ] = useState<string[]>([]);
  const [ newComment, setNewComment ] = useState('');

  function handleComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newComment]);

    setNewComment('');
  }

  function handleNewCommentOnChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');

    setNewComment(event.target.value);
  }

  function handleEmptyInput(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function deleteComment(commentToDelete: String) {
    const commentWhitoutDeletedOne = comments.filter(comment => {
      return comment != commentToDelete;
    });

    setComments(commentWhitoutDeletedOne);
  }

  const isTextAreaEmpty = newComment.length === 0;

  return(
    <article className={style.post}>
      <header>
        <div className={style.profile}>
          <Avatar 
            hasBorder
            src={author.imageUrl}
            alt='Foto de Perfil'
          />
          
          <div className={style.info}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedAtFormat} dateTime={publishedAt.toISOString()}>
          {publishedAtToNow}
        </time>
      </header>

      <div className={style.content}>
        {contents.map(content => {
          if(content.type == 'paragraph') {
            return <p key={content.content}>{content.content}</p>
          } else if(content.type == 'link') {
            return <p key={content.content}><a href='#'>{content.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleComment}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          name='comment'
          placeholder='Escreva um comentário...'
          onChange={handleNewCommentOnChange}
          value={newComment}
          required
          onInvalid={handleEmptyInput}
        />
        <button type='submit' disabled={isTextAreaEmpty}>Publicar</button>
      </form>

      <div className={style.comment}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment}
              comment={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  );
}