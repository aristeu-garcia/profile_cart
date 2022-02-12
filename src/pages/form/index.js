import { Container } from "./styles";
import back from "../../assets/back.jpg";
import DropDown from "../../components/select";
export default function Form() {
  return (
    <Container>
      <img src={back} alt="background" className="background" />
      <div className="form">
        <h1>Dados Pessoais</h1>
        <div className="group-input">
          <label>Foto de Perfil</label>
          <div class="upload-btn-wrapper">
            <button class="btn">Enviar uma foto</button>
            <input type="file" name="myfile" />
          </div>
        </div>
        <div className="group-input">
          <label>NOME</label>
          <input type="text" />
        </div>
        <div className="group-input">
          <label>TECNOLOGIAS</label>
          <DropDown></DropDown>
        </div>
      </div>
    </Container>
  );
}
