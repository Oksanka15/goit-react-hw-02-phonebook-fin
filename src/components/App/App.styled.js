import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1170px;
  padding: 24px;
  margin: 0 auto;
`;
export const Button = styled.button`
  background-color: #E6E6FA;
  border: 0;
  border-radius: .5rem;
  box-sizing: border-box;
  color: #8A2BE2;
  font: 400 "Roboto";
  line-height: 1rem;
  padding: 3px .5rem;
  text-align: center;
  text-decoration: none;
  text-decoration-thickness: auto;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
    background-color: #FFF0F5;
  }
  &:focus-visible {
    box-shadow: none;
  }
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;
export const InputGroup = styled.div`
  width: 250px;
  height: 30px;
  overflow: hidden;
  position: relative;
  margin: 5px;
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 10px;
  color:#F8F8FF;
  font: 400 "Roboto";
  cursor: text;
  transition: .25s ease;
`;
export const Input = styled.input`
  display: block;
  width: 100%;
  padding-top: 15px;
  border: none;
  border-radius: 0;
  color: #8A2BE2;
  background: #F8F8FF;
 
  transition: .3s ease;
  &:not([value=""]) {
    ~label {
      top: 0;
      font: 700 "Roboto";
      
    }
  }
  &:focus {
    outline: none;
    ~label {
      top: 0;
      font: 700 "Roboto";
      color:  #8A2BE2;
    }
    ~ div:before {
      transform: translateX(0);
    }
  }
  
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #F8F8FF inset;
    -webkit-text-fill-color: #483D8B !important;
    ~label {
      color: #FFFAFA;
    }
  }
`;

export const InputBar = styled.div`
  
  content: '';
  width: 250px;
  height: 20px;
  transition: .3s ease;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 150%;
    background: #F8F8FF;
    transform: translateX(-100%);
  }
`;
// export const InputGroup = styled.div`
// margin: 10px;
//   overflow: hidden;
//   position: relative;
// `;

// export const InputLabel = styled.label`
//   position: absolute;
//   margin: 10px;
//   cursor: text;
//   transition: .25s ease;
// `;

// export const Input = styled.input`
//   display: block;
//   width: 100%;
  
//   border: 1px solid black;
//   border-radius: 0;
//   margin: 10px;
//   transition: .3s ease;
//   &:not([value=""]) {
//     ~label {
//       top: 0;
//       f
//     }
//   }
//   &:focus {
//     outline: none;
//     ~label {
//       top: 0;
      
//     }
//     ~ div:before {
//       transform: translateX(0);
//     }
//   }
  
  
//   }
// `;

// export const InputBar = styled.div`
  
//   content: '';
 
//   transition: .3s ease;
//   position: relative;
//   &:before {
//     content: '';
//     position: absolute;
//     width: 100%;
//     height: 150%;
    
//     transform: translateX(-100%);
//   }
// `;