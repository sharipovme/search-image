import { useNavigate } from "react-router-dom";
import { Bg, Container, Content, SearchInput, Wrapper } from "./Hero.e";
import BgImage from "@/assets/images/bg.png";
import SearchLogo from "@/assets/images/search.svg";
import ShootIcon from "@/assets/images/shoot.svg";

function Hero() {
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const search = e.target.value;
    if (search) navigate(`/s/${search}`);
  };

  return (
    <Wrapper>
      <Bg src={BgImage} alt="" />
      <Content>
        <Container>
          <h1>Unsplash</h1>
          <p>
            The internet’s source of <span>freely-usable images</span>.
          </p>
          <p>Powered by creators everywhere.</p>
          <SearchInput>
            <img src={SearchLogo} alt="Unsplash" />
            <input
              placeholder="Search free high-resolution photos"
              type="text"
              onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit(e)}
            />
            <img
              src={ShootIcon}
              alt="Search free high-resolution photos"
              onClick={handleSearchSubmit}
            />
          </SearchInput>
        </Container>
      </Content>
    </Wrapper>
  );
}

export default Hero;
