import { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  CardFooter,
  CardHeader,
  FooterLeft,
  Img,
  Wrapper,
} from "./image.e";
import downloadImage from "../../../helpers/downloadImage";

function Image({ data }) {
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);

  console.log(data);

  return (
    <Wrapper>
      <CardHeader className="header">
        <Button
          onClick={() => setLiked(!liked)}
          className={liked ? "liked" : ""}
          disableElevation
        >
          <i className="fa-solid fa-heart" />
        </Button>
        <Button
          onClick={() => setAdded(!added)}
          className={added ? "added" : ""}
          disableElevation
        >
          <i className="fa-solid fa-plus" />
        </Button>
      </CardHeader>
      <Img src={data.urls.regular} alt="" />
      <CardFooter className="footer">
        <FooterLeft>
          <img
            style={{ borderRadius: "50%", width: "35px" }}
            src={data.user.profile_image.medium}
            alt={data.user.username}
          />
          <p className="heading">{data.user.username}</p>
        </FooterLeft>
        <Button
          title="Download photo"
          onClick={() => downloadImage(data.urls.full, data.id)}
        >
          <i className="fa-solid fa-arrow-down" />
        </Button>
      </CardFooter>
    </Wrapper>
  );
}

export default Image;

Image.propTypes = {
  data: PropTypes.object,
};
