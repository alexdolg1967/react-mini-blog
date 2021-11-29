import React from "react";
import {
  Badge,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
} from "reactstrap";
import classes from "./ArticleCard.module.css";

const ArticleCard = (props) => {
  return (
    <Card className={classes.ArticleCard}>
      <CardImg
        top
        width="100%"
        src="https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?cs=srgb&dl=pexels-ruvim-miksanskiy-1438761.jpg&fm=jpg"
        alt="Card Image"
        className={classes.CardImg}
      />
      <CardBody className={classes.CardBody}>
        <CardTitle className={classes.CardTitle}>Title</CardTitle>
        <CardSubtitle className={classes.CardSubtitle}>
          <Badge className={classes.ArticleLabel}>fdgbdsfgds</Badge>
        </CardSubtitle>
      </CardBody>
    </Card>
  );
};

export default ArticleCard;
