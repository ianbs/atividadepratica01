import { ContentContainer } from "../components/Content/styles";
import { Header } from "../components/Header";

export const DescriptionPage = () => {
  return (
    <>
      <Header />
      <ContentContainer>
        <h2>Descrição</h2>
        <article>
          <p>
            Projeto desenvolvido como atividade pratica do modulo 1 da
            disciplina de Arquitetura Front End do curso de pós graduação em
            Engenharia de Software da PUC Minas.
          </p>
        </article>
      </ContentContainer>
    </>
  );
};
