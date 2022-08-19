import styled from 'styled-components';
import React from 'react';
import { ReactDOM } from 'react';
import { useState, useEffect } from 'react';
import './styled.css';

function SearchResultList() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [q, setQ] = useState('');
  const [searchParam] = useState(['capital', 'name', 'numericCode']);
  const [filterParam, setFilterParam] = useState(['All']);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json',
    )
      .then(res => res.json())
      .then(result => {
        setIsLoaded(true);
        setItems(result);
      });
  }, []);

  const data = Object.values(items);

  function search(items) {
    return items.filter(item => {
      if (item.region == filterParam) {
        return searchParam.some(newItem => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam == 'All') {
        return searchParam.some(newItem => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      }
    });
  }

  if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <div className="wrapper">
        <div className="search-wrapper">
          <div className="select">
            <select
              onChange={e => {
                setFilterParam(e.target.value);
              }}
              className="custom-select"
              aria-label="Filter Countries By Region"
            >
              <option value="All">별점 순</option>
              <option value="Africa">리뷰 많은 순</option>
              <option value="Americas">조회순</option>
            </select>
            <span className="focus"></span>
          </div>
        </div>
        <ul className="card-grid">
          {search(data).map(item => (
            <li>
              <article className="card" key={item.alpha3Code}>
                <div className="card-image">
                  <img src={item.flag.large} alt={item.name} />
                </div>
                <div className="card-content">
                  <h2 className="card-name">{item.name}</h2>
                  <ol className="card-list">
                    <li>
                      별점{' '}
                      <span style={{ color: 'orange' }}>{item.region}</span>{' '}
                      브랜드 <span>{item.capital}</span>{' '}
                    </li>
                    <li>
                      키워드 <span>{item.population}</span>{' '}
                    </li>
                    <li>
                      조회수 <span>{item.population}</span>리뷰수{' '}
                      <span>{item.population}</span>
                    </li>
                  </ol>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default SearchResultList;
