import { Container } from "./styles";
import back from "../../assets/back.jpg";
import DropDown from "../../components/select";
import Context from "../../context/navigation";
import { useContext } from "react";
export default function Form() {
  const { setName, setImg, setLanguages, setPage } = useContext(Context);

  return (
    <Container>
      <img src={back} alt="background" className="background" />
      <div className="form">
        <h1>Dados Pessoais</h1>
        <div className="group-input">
          <label>Foto de Perfil</label>
          <div class="upload-btn-wrapper">
            <button class="btn">
              Enviar uma foto
              <input
                type="file"
                name="myfile"
                onChange={(e) => {
                  setImg(URL.createObjectURL(e.target.files[0]));
                }}
              />
            </button>
          </div>
        </div>
        <div className="group-input">
          <label>NOME</label>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setName(e.target.value);
            }}
          />
        </div>
        <div className="group-input">
          <label>TECNOLOGIAS</label>
          <DropDown
            onChange={(e) => {
              setLanguages(e);
            }}
          ></DropDown>
        </div>
        <button
          className="btn-submit"
          onClick={() => {
            setPage("card");
          }}
        >
          Gerar Cartão
        </button>
      </div>
    </Container>
  );
}
