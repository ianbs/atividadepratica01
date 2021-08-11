import { ContentContainer } from "../components/Content/styles";
import { Header } from "../components/Header";

export const AboutPage = () => {
  return (
    <>
      <Header />
      <ContentContainer>
        <h2>Sobre</h2>
        <article>
          <p>
            Meu nome é Ian, sou formado em Sistemas de Informação pela faculdade
            Prominas em Montes Claros. Atualmente faço pós em Engenharia de
            Software pela PUC Minas.
          </p>
        </article>
      </ContentContainer>
    </>
  );
};
