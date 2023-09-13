import React from 'react';

function NewsItem({ item }) {
  return (
    <li>
      <img src='https://2.bp.blogspot.com/-ZOQEZzLsB50/V89wZ4z27uI/AAAAAAAAAaU/UqejOE-PfQoVAGWO-gq3l__fPPQM9l7zgCLcB/s1920/Nature_Wave_Ocean_Sunset_Sunlight_Water_hd.jpg'></img>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
    </li>
  );
}

export default NewsItem;
