import React from 'react'
import styles from './NavBar.module.css'
function NavBar() {
    return (

        <header>

            <div className={styles.div2}>
                <div className={styles.Logo}>EDYODA</div>
                <p className={styles.LogoStoriestext}>Stories</p>
            </div>

            <div className={styles.div}>
                <label htmlFor='explore' className={styles.Dropdowntext}>Explore Categories</label>
                <div className={styles.rigntmenu}>
                    <button className={styles.dropbtn}>
                        <img src="https://static.vecteezy.com/system/resources/previews/006/827/566/non_2x/down-arrow-icon-sign-symbol-logo-vector.jpg" alt="search" />
                    </button>
                    <div className={styles.dropdown}>
                        <p> Artificial intelligence</p>
                        <p>Cloud Computing</p>
                        <p> DevOps</p>
                        <p>Programing Languages</p>
                        <p>Mobile Aplication Development</p>
                        <p>Technology and Tools</p>
                        <p>Get Job ina Tech Company</p>
                        <p>Others</p>
                    </div>

                </div>
            </div>

            <button className={styles.div3}>Go To Main Website</button>
        </header>

    )
}

export default NavBar