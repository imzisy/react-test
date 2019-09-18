import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ListingPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://cdn-discover.hooq.tv/v1.2/discover/feed?region=ID&page=1&perPage=20',
      );
      setData(
        result.data.data.filter(
          (key) => key.type === 'Multi-Title-Manual-Curation',
        ),
      );
    };
    fetchData();
  }, [data]);
  return (
    <div>
      <h1>Home Page</h1>
      <section id="app-features">
        <div className="container">
          {data.map((rows) => (
            <div className="row" key={rows.row_id}>
              {rows.data.map((row) => (
                <div className="col-4-app wow fadeInLeft" key={row.id}>
                  <div className="scrollimg">
                    { row.images.map((image) => (
                      image.type === 'POSTER'
                        ? <Link to={row.id}><img className="img" src={image.url} alt="" /></Link> : ''
                    ))}
                  </div>
                  <h3>{row.title}</h3>
                </div>
              ))}
            </div>
          ))}
          <div />
        </div>
      </section>
    </div>
  );
}
