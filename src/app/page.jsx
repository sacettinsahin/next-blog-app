import Image from 'next/image'
import styles from './page.module.css'
import hero from 'public/hero.png'
import Button from '@/components/button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
        <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.</p>
        <Button url="/portfolio" text="Portfolio"></Button>
      </div>
      <div className={styles.item}>  
         <Image src={hero} className={styles.img} />
      </div>
    
    </div>
  )
}
