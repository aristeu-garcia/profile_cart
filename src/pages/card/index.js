import { Container, Plug } from "./styles";
import Context from "../../context/navigation";
import { useContext } from "react";

export default function Card() {
  const { name, img, languages } = useContext(Context);

  return (
    <Container>
      <Plug></Plug>
      <img src={img} alt="foto" className="profile_photo" />
      <div className="identification">
        <h1 className="name">{name}</h1>
        <h2>Desenvolvedor</h2>
      </div>
      <h2 className="name">LINGUAGENS</h2>

      <div className="languages">
        {languages.map((language) => (
          <img src={language.icon} alt={language.label} />
        ))}
      </div>
    </Container>
  );
}
