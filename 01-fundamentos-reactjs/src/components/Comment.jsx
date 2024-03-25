import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(){
    return (
        <div className={styles.comment}>
            <img
                src='https://avatars.githubusercontent.com/u/8229999?v=4.png'
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Alex Sousa</strong>
                            <time title="11 de maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'><Trash size={24}/></button>
                    </header>
                    <p>Muito bom Alex, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}