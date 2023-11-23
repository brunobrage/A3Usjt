import React, { useState, useEffect } from "react";
import "./styles.css";
import background from "./fundoLivro.jpg";
import { useHistory } from "../../hooks/useHistory";
import { useParams } from "react-router-dom";
import Loading from "../Loading";

function Livro() {
  const { theme } = useParams();
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [section, setSection] = useState(1);
  
  const data = useHistory(theme);

  useEffect(() => {
    let preText = "";
    
    if (!data.isLoading) {
      const text = JSON.parse(JSON.stringify(data.data.completion)); // Parse the JSON string back to an object
      preText = text.replace(/\n|\"/g, ""); // Replace newline and double quote characters
    }

    const text = preText;
    const wordsArray = text.split(" ");
    const wordsPerPage = Math.ceil(wordsArray.length / 2);
    const pagesArray = [];

    for (let i = 0; i < wordsArray.length; i += wordsPerPage) {
      pagesArray.push(wordsArray.slice(i, i + wordsPerPage));
    }
    setPages(pagesArray);

    const interval = setInterval(() => {
      if (currentWordIndex < wordsArray.length - 1) {
        setCurrentWordIndex((prevIndex) => prevIndex + 1);
      } else if (currentPage < pagesArray.length - 1) {
        setCurrentPage((prevPage) => prevPage + 1);
      } else if (section <= 1) {
        setSection(2);
      }
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, [currentPage, currentWordIndex, data.data, data.isLoading, section]);

  return (
    <>
      {data.isLoading ? (
        <body className="spinner">
          <Loading />
        </body>
      ) : (
        <body className="container" style={{ backgroundImage: `url(${background})` }}>
          {pages.map((page, index) => (
            <div key={index} className={`section ${index <= currentPage ? "visible" : ""}`}>
              <div className="texto">
                {page.map((word, wordIndex) => (
                  <span
                    key={wordIndex}
                    className={
                      index === currentPage && wordIndex === currentWordIndex ? "brilho" : ""
                    }
                    style={{ display: wordIndex <= currentWordIndex ? "inline" : "none" }}
                  >
                    {word}{" "}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </body>
      )}
    </>
  );
}

export default Livro;
