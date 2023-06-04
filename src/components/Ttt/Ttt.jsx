import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const ComponentWithPageQueryParam = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleAddPageQueryParam = () => {
    setSearchParams(searchParams => {
      searchParams.set('page', '2');
      return searchParams;
    });
  };

  return (
    <div>
        <p>${searchParams}</p>
      <button onClick={handleAddPageQueryParam}>Add Page Query Parameter</button>

    </div>
  );
};

export default ComponentWithPageQueryParam;
