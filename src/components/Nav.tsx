import { useNavigate } from "react-router";
import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Nav() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar>
        <LogoWrap href="/">
          <LogoImg />
        </LogoWrap>
        <BtnWrap>
          <PostBtn onClick={() => navigate("/post")}>새 글 작성</PostBtn>
        </BtnWrap>
      </Navbar>
    </>
  );
}

const Navbar = styled.nav`
  @media ${({ theme }) => theme.device.mobile} {
    height: 60px;
  }
  margin: auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 85px;
  padding: 0 10px;
  border-bottom: 1px #ffcccc dotted;
`;
const LogoWrap = styled.a``;
const LogoImg = styled.img.attrs({
  src: `${logo}`,
})`
  height: 90px;
  @media ${({ theme }) => theme.device.mobile} {
    height: 50px;
  }
`;
const BtnWrap = styled.div`
  display: flex;
  grid-gap: 30px;
  gap: 30px;
  align-items: center;
`;

const PostBtn = styled.button`
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 15px;
  }
  font-size: 20px;
  font-weight: 500;
  outline: none;
  border: none;
  background-color: #fff;
  cursor: pointer;
`;
