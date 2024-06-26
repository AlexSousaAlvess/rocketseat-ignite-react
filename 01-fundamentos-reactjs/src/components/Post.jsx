import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
export function Post({author, publishedAt, content}) {
    // const publishedDateFormated = new Intl.DateTimeFormat('pt-BR', {
    //     day: '2-digit',
    //     month: 'long',
    //     hour: '2-digit',
    //     minute: '2-digit'
    // }).format(publishedAt)
    
    const publishedDateFormated = format(publishedAt, "d 'de' LLL 'às' HH:mm'h'",{
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    return (
        <article className={styles.post}>
            <header className={styles.header}>
                <div className={styles.author}>
                    <Avatar
                        src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p>{line.content}</p>
                    }else if(line.type === 'link'){
                        return <p><a href=''>{line.content}</a></p>
                    }
                })}
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>
                <textarea
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}