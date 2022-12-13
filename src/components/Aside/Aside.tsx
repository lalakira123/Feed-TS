import { PencilLine } from 'phosphor-react'

import { Avatar } from './../Avatar/Avatar'

import style from './Aside.module.css'

export function Aside() {
  return(
    <aside className={style.aside}>
			<img 
				className={style.cover}
				src='https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'
				alt='Capa'
			/>

			<div className={style.profile}>
				<Avatar
				  alt='Foto de Perfil'
				  src='https://github.com/lalakira123.png' 
				  hasBorder 
				/>
				<strong>Laerte Akira</strong>
				<span>Developer Full Stack</span>
			</div>

			<footer>
				<a href='#'>
					<PencilLine/>
					Editar seu perfil
				</a>
			</footer>
    </aside>
  );
}