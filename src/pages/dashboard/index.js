import { Container } from "./styles";
import Form from "../form";
import Card from "../card";
import Context from "../../context/navigation";
import { useContext, useState } from "react";
export default function Dashboard() {
  const [page, setPage] = useState("form");
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [languages, setLanguages] = useState([]);
  return (
    <Context.Provider
      value={{
        page,
        setPage,
        name,
        setName,
        img,
        setImg,
        languages,
        setLanguages,
      }}
    >
      <Container>{page === "form" ? <Form /> : <Card />}</Container>
    </Context.Provider>
  );
}
