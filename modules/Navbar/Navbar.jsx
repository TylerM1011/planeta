import styles from "./Navbar.module.css"; 

export default function Navbar() {
  return (
      <div className={styles.topNav}>
        <a className="active" href="#Home">Home</a>
        <a href="/news">News</a>
        <a href="/friends">Friends</a>
        <a href="/games">Games</a>
        <a href="/profile">Profile</a>
      </div>

  )
}