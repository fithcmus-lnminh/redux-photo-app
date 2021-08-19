import React from "react";
import Banner from "../../../../components/Banner/index";
import Images from "../../../../../src/constants/images";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

function MainPage(props) {
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <Link to="/photos/add">Add new photo</Link>
      </Container>
    </div>
  );
}

export default MainPage;
