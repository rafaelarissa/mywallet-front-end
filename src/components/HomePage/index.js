import { Container } from "../HomePage/style";

function HomePage(){
  return (
    <Container>
      <h1>Olá, Fulano</h1>
      <main>
        Não há registros de <br/>
        entrada ou saída
      </main>
      <div class="container-new-transaction">
        <div>Nova Entrada</div>
        <div>Nova Saída</div>
      </div>
    </Container>
  );

}

export default HomePage;