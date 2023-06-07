import React from 'react'
import styles from "./blog.module.css"
import Link from 'next/link'
import Button from '@/components/button/Button'
import Image from 'next/image'

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>Test</h1>
            <p className={styles.description}>Description</p>
            <Button text="See More" url="/blog/testId"></Button>
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} width={300} height={300} src="https://images.pexels.com/photos/3098683/pexels-photo-3098683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ></Image>
          </div>
        </div>
      </Link>
    </div>
    
  )
}

export default Blog
