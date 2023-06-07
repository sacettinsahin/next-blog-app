import React from 'react'
import styles from "./about.module.css"
import Image from 'next/image'
import Button from '@/components/button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}> 
        <Image className={styles.img} fill={true} src="https://images.pexels.com/photos/8511930/pexels-photo-8511930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></Image>
        <div className={styles.textBox}>
          <h2 className={styles.textBoxTitle}>Lorem Ipsum</h2>
          <p className={styles.textBoxDesc}>Lorem ipsum consectetur adipiscing elit</p>
        </div>
      </div>
      <div className={styles.textContent}>
        <div className={styles.item}>
          <h3 className={styles.title}>Who We are?</h3>
          <p className={styles.description }>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet lectus proin nibh nisl condimentum id venenatis. Vel turpis nunc eget lorem dolor sed viverra ipsum nunc.
          <br></br>
          <br></br>
           Vulputate dignissim suspendisse in est ante. Eros in cursus turpis massa tincidunt dui ut. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Suscipit adipiscing bibendum est ultricies integer quis.
           <br></br>
          </p>
        </div>
        <div className={styles.item}>
          <p className={styles.description }>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet lectus proin nibh nisl condimentum id venenatis. Vel turpis nunc eget lorem dolor sed viverra ipsum nunc.
          <br></br>
          <br></br>
           Vulputate dignissim suspendisse in est ante. Eros in cursus turpis massa tincidunt dui ut. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Suscipit adipiscing bibendum est ultricies integer quis.
           <br></br>
           <br></br>
            Ut enim blandit volutpat maecenas volutpat blandit aliquam. Elit sed vulputate mi sit amet mauris commodo quis.</p>

            <Button url="/contact" text="Contact"></Button>
        </div>
      </div>
    </div>
    
  )
}

export default About
