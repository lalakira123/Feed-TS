import { useState } from 'react'

import { ThumbsUp, Trash } from "phosphor-react"

import { Avatar } from './../Avatar/Avatar'

import style from './Comment.module.css'

interface CommentProps {
	comment: string,
	onDeleteComment: (comment: string) => void
}

export function Comment({ comment, onDeleteComment }: CommentProps){
	const [ like, setLike ] = useState(0);

	function handleDeleteComment() {
		onDeleteComment(comment);
	}

	function handleLikeComment() {
		setLike(like + 1);
	}

	return(
		<div className={style.comment}>
			<Avatar 
			  src='https://github.com/lalakira123.png'
				alt='Foto Perfil'
			/>
			
			<div className={style.commentInfo}>
				<div className={style.commentBox}>
					<div className={style.commentProfile}>
						<strong>Laerte Akira<span>(você)</span></strong>
						<button className={style.trash} onClick={handleDeleteComment}>
							<Trash/>
						</button>
					</div>
					<time title='12 de Dezembro às 20:35h' dateTime="2022-12-12 20:35:10">Cerca de 2h</time>
					<p>{comment}</p>
				</div>
				<button onClick={handleLikeComment}>
					<ThumbsUp/> 
					Aplaudir <span>{like}</span>
				</button>
			</div>
		</div>
	);
}