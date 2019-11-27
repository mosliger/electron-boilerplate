import styled from '@emotion/styled';

export default styled.header`
  label: navigation;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #333;
  height: 60px;
  padding-left: 40px;
  padding-right: 40px;
  color: #fff;
  > nav > ul {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    > li {
      list-style-type: none;
      padding: 0;
      margin: 0;
      a {
        color: #fff;
        text-transform: uppercase;
        text-decoration: none;
        padding: 6px 10px;
        letter-spacing: 1.25px;
        &.active {
          font-weight: bold;
          text-decoration: underline;
        }
      }
    }
  }
`;
