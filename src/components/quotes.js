import React, { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import {
  QuoteContainer,
  Row,
  Col,
  QuoteItem,
  QuoteIcon,
  QuoteAuthor,
  QuotePhoto,
  QuoteButton,
} from "./styles";
import profile from "../img/profile.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export const Quotes = () => {
  const api = "https://api.kanye.rest/";
  const [quotes, loading, fetchUrl] = useFetch(api);

  const tweetMe = `https://twitter.com/intent/tweet?text=${quotes} - Kanye West`;

  const handleNewQuote = () => {
    fetchUrl(api)
  }

  return (
    <QuoteContainer>
      <Row theme={{ margin: "15px" }}>
        <QuoteItem>{quotes}</QuoteItem>
      </Row>
      <Row theme={{ margin: "30px" }}>
        <Col theme={{ width: "70%" }}>
          <Row theme={{ align: "flex-start" }}>
            <Col>
              <QuotePhoto src={profile} />
            </Col>
            <Col>
              <QuoteAuthor>Kanye West</QuoteAuthor>
            </Col>
          </Row>
        </Col>
        <Col theme={{ width: "30%" }}>
          <Row theme={{ align: "flex-end" }}>
            <QuoteIcon
              className="twitter"
              target="_blank"
              rel="noopener noreferrer"
              href={tweetMe}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </QuoteIcon>
          </Row>
        </Col>
      </Row>
      <Row>
        <QuoteButton onClick={handleNewQuote}>New quote</QuoteButton>
      </Row>
    </QuoteContainer>
  );
};
