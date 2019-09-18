import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default function ProductPage(props) {
  const [data, setData] = useState({ data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://cdn-discover.hooq.tv/v1.2/discover/titles/${props.match.params.id}`,
      );
      setData(result.data);
    };
    fetchData();
  });

  return (
    <div className="container">
      <h3>
        Title :
        { data.data.title }
      </h3>
      {data.data.description }
    </div>
  );
}

ProductPage.propTypes = {
  id: PropTypes.element.isRequired,
};
