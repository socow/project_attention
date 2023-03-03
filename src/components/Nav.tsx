import styled from "styled-components";
import logo from "../assets/logo.png";
import GoogleLoginBtn from "./GoogleButton";
export default function Nav() {
  return (
    <>
      <Navbar>
        <LogoWrap href="/">
          <LogoImg />
        </LogoWrap>
        <BtnWrap>
          <PostBtn>새 글 작성</PostBtn>
          <LoginBtn>로그인</LoginBtn>
          <GoogleLoginBtn />
        </BtnWrap>
      </Navbar>
    </>
  );
}

const Navbar = styled.nav`
  margin: auto;
  max-width: 1180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 85px;
  padding: 0 10px;
`;
const LogoWrap = styled.a``;
const LogoImg = styled.img.attrs({
  src: `${logo}`,
})`
  height: 100px;
`;
const BtnWrap = styled.div`
  display: flex;
  grid-gap: 30px;
  gap: 30px;
  align-items: center;
`;
const LoginBtn = styled.button`
  font-size: 20px;
  font-weight: 500;
  outline: none;
  border: none;
  background-color: #fff;
  cursor: pointer;
`;
const PostBtn = styled.button`
  font-size: 20px;
  font-weight: 500;
  outline: none;
  border: none;
  background-color: #fff;
  cursor: pointer;
`;
