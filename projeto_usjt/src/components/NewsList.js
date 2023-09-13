import React from 'react';
import NewsItem from './NewsItem';

function NewsList({ news }) {
  return (
    <div>
      <h2>Últimas Notícias</h2>
      <ul>
        <img href='https://2.bp.blogspot.com/-ZOQEZzLsB50/V89wZ4z27uI/AAAAAAAAAaU/UqejOE-PfQoVAGWO-gq3l__fPPQM9l7zgCLcB/s1920/Nature_Wave_Ocean_Sunset_Sunlight_Water_hd.jpg'></img>
        {news.map((item, index) => (
          <NewsItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default NewsList;
