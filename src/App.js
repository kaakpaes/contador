import React, { Component } from "react";
import styled from "styled-components";
import "./styles.css";

const ContainerGeral = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  width: 100vw;
  height: 100vh;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const Titulo = styled.h1`
  color: #000;
  font-size: 7rem;
`;

const BoxBtn = styled.div``;

const Btn = styled.button`
  background-color: #a9006f;
  border: none;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #17ffc7;
  }
`;

class Contador extends Component {
  state = {
    numero: 0
  };

  adicionar = () => {
    if (this.state.numero < 10) {
      this.setState({
        numero: this.state.numero + 1
      });
    }
  };

  subtrair = () => {
    if (this.state.numero > 0) {
      this.setState({
        numero: this.state.numero - 1
      });
    }
  };

  render() {
    return (
      <>
        <ContainerGeral>
          <Box>
            <Titulo>{this.state.numero}</Titulo>
            <BoxBtn>
              <Btn onClick={this.adicionar}>+</Btn>
              <Btn onClick={this.subtrair}>-</Btn>
            </BoxBtn>
          </Box>
        </ContainerGeral>
      </>
    );
  }
}

export default Contador;
