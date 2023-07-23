
import styles from '../styles/Login.module.css';
import LoginCard from "../src/components/loginCard/loginCard"
import Input from '../src/components/input/input'
import Button from '../src/components/button/button'

export default function CadastroPage() {
  return (
    <div className={styles.background}>
     <form className={styles.form}>
        <LoginCard title="Cadastre sua conta" >
          <Input type="text" placeholder="Digite seu nome" />
          <Input type="email" placeholder="Digite seu email" />
          <Input type="password" placeholder="Sua senha" />
          <Button>Cadastrar</Button> 

        </LoginCard>

      </form>
    </div>
  )
}