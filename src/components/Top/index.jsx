import React from "react";

const Top = () => {
  return (
    <>
      <div className="logo" style={{
        fontFamily: "Roboto, sans-serif",
        fontSize: "1,5rem",
        textAlign: "center",
        margin: "0 ",
        padding: "0",
        width: "100%",
        height: "auto",
        maxWidth: "370px",
        maxHeight: "200px",

      }}> O melhor controle de adoção de pets do Brasil
        <img src="./img/logo.jpeg" alt="Logo" style={{
          width: "100px",
          height: "auto",
          max: "370px",
          margin: "5px 0 2px",
          padding: "0",
        }} />

      </div >
      <div
        style={{
          padding: "15px 5% 0",
          height: "200px",
          position: "relative",
          boxShadow: "none",
          border: "none",
          background: "0 0",
        }}
      >

      </div>
    </>
  );
};

export default Top;
