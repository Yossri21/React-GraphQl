
import styled from "styled-components";


const Loading = styled.div`
 
    animation: spin 2s linear infinite;
    border: 3px solid var(--light);
    border-top: 3px solid var(--dark);
    border-radius: 50%;
    display: inline-block;
    height: 20px;
    width: 20px;
    position: absolute;
    left: 50%;
    top: 113px;
    left: 199px;
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  `;

export default Loading;
  