import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <Wrapper className="loading">
      <div className="loading-spinner-container">
        <div className="spinner">
          <div></div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;
export default Loader;
