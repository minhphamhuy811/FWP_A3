import PropTypes from 'prop-types';
import styled from "styled-components";


const Wrapper = styled.div`
  background-color: #001c3d;
  padding-left: 2rem;
  height: ${props => props.theme.main.sizes.leftMenu.height};

  .leftMenuHeaderLink {
    &:hover {
      text-decoration: none;
    }
  }
  img {
    height: 40px;
    border: 1px solid transparent;
    border-radius: 9999px;
    background-color: white;
  }

  .projectName {
    display: grid;
    grid-template-columns: 40px 100px;
    align-items: center;
    justify-items: start;

    column-gap: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-right: 14rem;
  }

  .projectNameTitle{
    color: white;
    font-weight: bold;
  }

  .projectNameTitle:hover {
    color: gray;
  }
`;

Wrapper.defaultProps = {
  theme: {
    main: {
      colors: {
        leftMenu: {},
      },
      sizes: {
        header: {},
        leftMenu: {},
      },
    },
  },
};

Wrapper.propTypes = {
  theme: PropTypes.object,
};

export default Wrapper;
