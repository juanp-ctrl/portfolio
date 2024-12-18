import styles from './styles.module.css'

const socials = [
  {
    title: 'Linkedin',
    path: 'https://www.linkedin.com/in/juan-pablo-jimenez-h/',
  },
  {
    title: 'Github',
    path: 'https://github.com/juanp-ctrl',
  },
  {
    title: 'Instagram',
    path: 'https://instagram.com/pabloj_h',
  },
]

export default function index() {
  return (
    <div className={styles['socials-footer']}>
      <div className={styles.header}>
        <p>Socials</p>
      </div>
      <div className={styles.socials}>
        {socials.map((data, index) => {
          return (
            <a key={index} href={data.path} target="_blank" rel="noreferrer">
              {data.title}
            </a>
          )
        })}
      </div>
    </div>
  )
}
