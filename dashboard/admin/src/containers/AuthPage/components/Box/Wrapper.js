import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 4rem auto;
  width: 41.6rem;
  padding: 5px 30px 25px 30px;
  border-radius: 15px;
  border-color:  ${({ theme }) => theme.main.colors.black};
  background-color: ${({ theme }) => theme.main.colors.white};
  box-shadow: 0 2px 4px 0 ${({ theme }) => theme.main.colors.darkGrey};
`;

export default Wrapper;
