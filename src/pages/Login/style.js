import styled from '@emotion/styled';

export default styled.div`
  label: login-page;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
  }
  .wrap-login {
    width: 400px;
  }
  .wrap-login .form > div {
    margin-bottom: 20px;
  }
  button {
    padding: 6px 20px;
  }
  .forgot-password {
    margin-top: 20px;
    display: block;
    text-align: center;
    background: var(--color-light-gary);
    padding: 20px 0;
    a {
      display: inline-block;
      padding: 10px 20px;
      color: var(--color-black);
      text-decoration: underline;
    }
  }
  @media (max-width: 768px) {
    height: auto;
    margin-top: 100px;
    .wrap-login {
      width: 100%;
      .form {
        padding: 20px;
      }
    }
  }
`;
