import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import background from "./fundoLivro.jpg";

function Livro() {
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [section, setSection] = useState(1);

  useEffect(() => {
    const text = `Era uma vez Alice, uma jovem aventureira que vivia em uma pequena cidade. Ela era conhecida por sua curiosidade e espírito destemido. Um dia, enquanto explorava a floresta nos arredores da cidade, Alice se deparou com uma entrada secreta que levava a um mundo completamente novo. A floresta encantada era um lugar mágico, cheio de árvores gigantes que tocavam o céu, criaturas coloridas e trilhas sinuosas. Alice ficou fascinada com a beleza e o mistério do lugar. Ela decidiu entrar mais profundamente na floresta, ansiosa para descobrir seus segredos. Enquanto caminhava, Alice encontrou um grupo de pequenas fadas dançando ao redor de uma fonte brilhante. As fadas eram encantadoras e convidaram Alice para se juntar a elas em uma dança mágica. Ela aceitou o convite e dançou alegremente com as fadas até o pôr do sol. Quando a noite caiu, Alice percebeu que estava perdida na floresta encantada. Ela começou a procurar um caminho de volta, mas logo se deparou com um rio cujas águas eram feitas de estrelas cintilantes. Uma criatura mágica, metade peixe e metade pássaro, ofereceu ajuda a Alice, prometendo levá-la de volta para casa. Juntos, eles navegaram pelo rio estelar e, ao amanhecer, Alice encontrou-se de volta à entrada da floresta. Ela se despediu de sua nova amiga e voltou para sua cidade, com o coração cheio de histórias incríveis e uma jornada.`;

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
        changeSection(2);
      }
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, [currentPage, currentWordIndex, section]);

  function changeSection(section) {
    setSection(section);
    if (currentPage === pages.length - 1 && section === 2) {
      return;
    }
    if (section === 2) {
      setCurrentWordIndex(0);
    } else {
      setCurrentWordIndex(currentPage * wordsPerPage);
    }

    const firstSection = pages[0];
    firstSection.style.position = "absolute";
    firstSection.style.top = "0";
    firstSection.style.left = "0";

    // Oculta as palavras da segunda seção que ainda não devem ser visíveis
    for (let i = 0; i < wordsPerPage; i++) {
      const span = firstSection.querySelector("span:nth-child(" + (i + 1) + ")");
      span.style.display = "none";}
  }

  return (
    <body className="container" style={{ backgroundImage: `url(${background})` }}>
      {pages.map((page, index) => (
        <div key={index} className={`section ${index <= currentPage ? "visible" : ""}`}>
          <div className="texto">
            {page.map((word, wordIndex) => (
              <span
                key={wordIndex}
                className={
                  index === currentPage && wordIndex === currentWordIndex ? "brilho" : ""}
                style={{ display: wordIndex <= currentWordIndex ? "inline" : "none" }}
              >
                {word}{" "}
              </span>
            ))}
          </div>
        </div>
      ))}
    </body>
  );
}

export default Livro;
