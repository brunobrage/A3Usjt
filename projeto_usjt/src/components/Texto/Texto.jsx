import React, { useState, useEffect } from "react";
import "./styles.css";

function Livro() {
  const [words, setWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const text = `Era uma vez Alice, uma jovem aventureira que vivia em uma pequena cidade. Ela era conhecida por sua curiosidade e espírito destemido. Um dia, enquanto explorava a floresta nos arredores da cidade, Alice se deparou com uma entrada secreta que levava a um mundo completamente novo. A floresta encantada era um lugar mágico, cheio de árvores gigantes que tocavam o céu, criaturas coloridas e trilhas sinuosas. Alice ficou fascinada com a beleza e o mistério do lugar. Ela decidiu entrar mais profundamente na floresta, ansiosa para descobrir seus segredos. Enquanto caminhava, Alice encontrou um grupo de pequenas fadas dançando ao redor de uma fonte brilhante. As fadas eram encantadoras e convidaram Alice para se juntar a elas em uma dança mágica. Ela aceitou o convite e dançou alegremente com as fadas até o pôr do sol. Quando a noite caiu, Alice percebeu que estava perdida na floresta encantada. Ela começou a procurar um caminho de volta, mas logo se deparou com um rio cujas águas eram feitas de estrelas cintilantes. Uma criatura mágica, metade peixe e metade pássaro, ofereceu ajuda a Alice, prometendo levá-la de volta para casa. Juntos, eles navegaram pelo rio estelar e, ao amanhecer, Alice encontrou-se de volta à entrada da floresta. Ela se despediu de sua nova amiga e voltou para sua cidade, com o coração cheio de histórias incríveis e uma jornada inesquecível.`;

    const wordsArray = text.split(" ");
    setWords(wordsArray);

    const interval = setInterval(() => {
      if (currentIndex < wordsArray.length) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 600); // Ajuste o intervalo de tempo conforme necessário

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <body className="fundoLivro" >
      <div className="texto">
        {words.map((word, index) => (
          <span
            key={index}
            className={index === currentIndex ? "brilho" : ""}
            style={{ display: index <= currentIndex ? "inline" : "none" }}
          >
            {word}{" "}
          </span>
        ))}
      </div>
    </body>
  );
}

export default Livro;
