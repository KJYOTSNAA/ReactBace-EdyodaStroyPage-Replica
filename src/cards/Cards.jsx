import React from 'react'
import styles from './Cards.module.css'
function Cards(props) {
    const { blog} = props
    return (
        <div class={styles.Item}>
            <div class={styles.ImageSection}>
                <img
                    src={blog.images}
                    alt={blog.name} class={styles.Image} /></div>
            <div class={styles.Title}> {blog.name}</div>
            <div class={styles.AuthorContainer}><span class={styles.Author}>{blog.author}</span>|<span class={styles.Date}>{blog.date}</span></div>
            <p class={styles.TextSection}>{blog.info}</p>

        </div>
    );
}

export default Cards