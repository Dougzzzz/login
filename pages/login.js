import Link from 'next/link'
import styles from '../styles/Login.module.css'
import LoginCard from "../src/components/loginCard/loginCard"
import Input from '../src/components/input/input'
import Button from '../src/components/button/button'

export default function LoginPage() {
  return (
    <div className={styles.background}>
      <form className={styles.form}>
        <LoginCard title="Entre com sua conta" >
          <Input type="email" placeholder="Seu email" />
          <Input type="password" placeholder="Sua senha" />
          <Button>Entrar</Button> 
          <Link href="/cadastro">Ainda não possui conta?</Link>
        </LoginCard>

      </form>
    </div>
  )
}