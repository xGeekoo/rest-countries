import styled from 'styled-components';
import Search from '../ui/Search';
import Filter from '../ui/Filter';
import Countries from '../features/countries/Countries';
import { useState } from 'react';

const StyledHome = styled.div`
  padding: 4.5rem 0;
`;

const Inputs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4.5rem;
  gap: 5rem;
  flex-wrap: wrap;
`;

function Home() {
  const [countrySearch, setCountrySearch] = useState('');

  return (
    <StyledHome>
      <Inputs>
        <Search
          countrySearch={countrySearch}
          setCountrySearch={setCountrySearch}
        />
        <Filter />
      </Inputs>
      <Countries countrySearch={countrySearch} />
    </StyledHome>
  );
}

export default Home;
