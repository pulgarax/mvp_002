import React from "react";
import styled from "styled-components";

const Modal = ({ children, estado, cambiarEstado }) => {
  return (
    <>
      {estado && (
        <Overlay>
          <ContenedorModal>
            <EncabezadoModal>
              <h3>RODEO</h3>
            </EncabezadoModal>
            <BotonCerrar onClick={() => cambiarEstado(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </BotonCerrar>
            {children}
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
};

export default Modal;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);

  display: flex;
  padding: 0px;

  justify-content: center;
`;

const ContenedorModal = styled.div`
  width: 300px;
  height: 300px;
  background: #fff;
  position: relative;
  border-radius: 1px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 10px;
  padding: 20px;
`;

const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e8e8e8;

  h3 {
    font-weight: 500;
    font-size: 16px;
    color: #1766dc;
  }
`;

const BotonCerrar = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
  border: none;
  background: #none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 2px;
  color: #1766dc;

  &:hover {
    background: #f2f2f2;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
