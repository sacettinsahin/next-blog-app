import React from 'react'
import styles from "./blogItem.module.css"
import Image from 'next/image'

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>
            test
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/3098683/pexels-photo-3098683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>test</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3098683/pexels-photo-3098683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         test
        </p>
      </div>
    </div>
  )
}

export default BlogPost
