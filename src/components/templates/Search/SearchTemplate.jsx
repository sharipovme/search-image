import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Container, ImagesContainer, Title, Wrapper } from "./SearchTemplate.e";
import { useDispatch, useSelector } from "react-redux";
import { fetchImagesRequest } from "../../../store/actions";
import Image from "../../atoms/Image/Image";

function Search() {
  const { searchTerm } = useParams();
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images);

  useEffect(() => {
    dispatch(fetchImagesRequest(searchTerm));
  }, [dispatch]);

  return (
    <Wrapper>
      <Container>
        <Title>{searchTerm}</Title>
        <ImagesContainer>
          {images.length === 0 && <p>Loading...</p>}
          {images.map((image, index) => (
            <Image key={index} data={image} />
          ))}
        </ImagesContainer>
      </Container>
    </Wrapper>
  );
}

export default Search;

Search.propTypes = {
  fetching: PropTypes.bool,
  images: PropTypes.array,
  onRequestImage: PropTypes.func,
  error: PropTypes.string,
};
