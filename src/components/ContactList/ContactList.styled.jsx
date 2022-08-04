import styled from '@emotion/styled';

export const List = styled.ul`
  width: 500px;
  display: flex;
  flex-direction: column;

  font-size: 18px;

  border-radius: 10px;
  padding: 30px 20px;
  margin: 0;

  color: rgb(16, 16, 144);
  background-image: linear-gradient(
    to right,
    rgb(223, 236, 253) 15%,
    rgb(194, 223, 254) 40%,
    rgb(176, 212, 249) 65%,
    rgb(175, 212, 252)
  );
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px 0px;
`;
