
const BoasVindas = (props) => {
  return (
    <h1>Seja Bem-vindo(a) {props.nome} {props.genero && `do genero ${props.genero}`}</h1>
  );
}

const Card = ({titulo, texto, children}) => {
  return(
    <div>
      {children}
      <h5>{titulo}</h5>
      <p>{texto}</p>
    </div>
  );
}

const Lista = ({children}) => {
  return(
    <div style={{display: 'flex'}}>
      {children}
    </div>
  );
}

const App = () => {
  const alunos = ['Matheus', 'Marcus', 'Paulo', 'Luciana'];
  return (
    <>
      {/* <BoasVindas />
      <BoasVindas nome="João" genero="Masculino"/>
      <BoasVindas nome="Thiago"/>
      <BoasVindas nome="Isaac"/>
      <BoasVindas nome="Adriana" genero="Feminino"/>
      {
        alunos.map(aluno => (
          <BoasVindas nome={aluno} />
        ))
      } */}
      <Lista>
        <Card titulo={'noticia 1'} texto={'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'}>
          <img src="https://upload.wikimedia.org/wikipedia/pt/thumb/c/cd/Nazar%C3%A9_Confusa.jpg/640px-Nazar%C3%A9_Confusa.jpg" alt="" />
        </Card>
        <Card titulo={'noticia 1'} texto={'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'}>
          <img src="https://upload.wikimedia.org/wikipedia/pt/thumb/c/cd/Nazar%C3%A9_Confusa.jpg/640px-Nazar%C3%A9_Confusa.jpg" alt="" />
        </Card>
      </Lista>

    </>
  );
}

export default App;
