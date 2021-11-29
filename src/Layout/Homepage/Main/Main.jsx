import React, { Component } from "react";
import { Container } from "reactstrap";
import ArticleCard from "../../../components/ArticleCard/ArticleCard";
import classes from "./Main.modules.css";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <ArticleCard />
      </div>
    );
  }
}
