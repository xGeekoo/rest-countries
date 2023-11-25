import { useSearchParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {
  FaCaretLeft,
  FaCaretRight,
  FaBackward,
  FaForward
} from 'react-icons/fa6';
import { useEffect } from 'react';
import { mediaQueries } from '../styles/mediaQueries';

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;

  ${mediaQueries(
    'mobile-lg',
    css`
      gap: 0.5rem;
    `
  )}
`;

const Span = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  background-color: var(--element-color);
  width: 5rem;
  height: 5rem;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s, color 0.3s;
  color: var(--text-color);

  ${props =>
    props.$active &&
    css`
      background-color: var(--focus-color);
      color: var(--element-color);
    `}

  &:hover, &:active {
    background-color: var(--focus-color);
    color: var(--element-color);
  }

  ${mediaQueries(
    'tablet',
    css`
      width: 3rem;
      height: 3rem;
    `
  )}

  ${props =>
    props.$arrow &&
    css`
      font-size: 3.5rem;

      ${mediaQueries(
        'tablet',
        css`
          font-size: 2.5rem;
        `
      )}
    `}

  ${props =>
    props.$smallArrow &&
    css`
      font-size: 2.5rem;

      ${mediaQueries(
        'tablet',
        css`
          font-size: 1.5rem;
        `
      )}
    `}
`;

function Pagination({ numOfPage }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    function handleKey(e) {
      if (e.code === 'ArrowLeft' && page > 1) {
        setSearchParams(searchParams => {
          searchParams.set('page', page - 1);
          return searchParams;
        });
      }

      if (e.code === 'ArrowRight' && page < numOfPage) {
        setSearchParams(searchParams => {
          searchParams.set('page', page + 1);
          return searchParams;
        });
      }
    }

    document.addEventListener('keydown', handleKey);

    return () => document.removeEventListener('keydown', handleKey);
  }, [page, numOfPage, setSearchParams]);

  function handleClick(pg) {
    setSearchParams(params => {
      params.set('page', pg);
      return params;
    });
  }

  function handleClickArrow(direction) {
    if (direction === 'left' && page > 1) {
      setSearchParams(searchParams => {
        searchParams.set('page', page - 1);
        return searchParams;
      });
    }

    if (direction === 'right' && page < numOfPage) {
      setSearchParams(searchParams => {
        searchParams.set('page', page + 1);
        return searchParams;
      });
    }

    if (direction === 'fullLeft') {
      setSearchParams(searchParams => {
        searchParams.set('page', 1);
        return searchParams;
      });
    }

    if (direction === 'fullRight') {
      setSearchParams(searchParams => {
        searchParams.set('page', numOfPage);
        return searchParams;
      });
    }
  }

  return (
    <StyledPagination>
      <Span $smallArrow onClick={() => handleClickArrow('fullLeft')}>
        <FaBackward />
      </Span>
      <Span $arrow onClick={() => handleClickArrow('left')}>
        <FaCaretLeft />
      </Span>
      {numOfPage === 1 && (
        <Span $active={page === 1} key={1} onClick={() => handleClick(1)}>
          1
        </Span>
      )}

      {numOfPage === 2 && (
        <>
          <Span $active={page === 1} key={1} onClick={() => handleClick(1)}>
            1
          </Span>
          <Span $active={page === 2} key={2} onClick={() => handleClick(2)}>
            2
          </Span>
        </>
      )}

      {(numOfPage === 3 || ([1, 2, 3].includes(page) && numOfPage > 4)) && (
        <>
          <Span $active={page === 1} key={1} onClick={() => handleClick(1)}>
            1
          </Span>
          <Span $active={page === 2} key={2} onClick={() => handleClick(2)}>
            2
          </Span>
          <Span $active={page === 3} key={3} onClick={() => handleClick(3)}>
            3
          </Span>
        </>
      )}

      {numOfPage === 4 && (
        <>
          <Span $active={page === 1} key={1} onClick={() => handleClick(1)}>
            1
          </Span>
          <Span $active={page === 2} key={2} onClick={() => handleClick(2)}>
            2
          </Span>
          <Span $active={page === 3} key={3} onClick={() => handleClick(3)}>
            3
          </Span>
          <Span $active={page === 4} key={4} onClick={() => handleClick(4)}>
            4
          </Span>
        </>
      )}

      {numOfPage > 4 && ![1, 2, 3].includes(page) && page !== numOfPage && (
        <>
          <Span key={1} onClick={() => handleClick(page - 1)}>
            {page - 1}
          </Span>
          <Span $active key={2} onClick={() => handleClick(page)}>
            {page}
          </Span>
          <Span key={3} onClick={() => handleClick(page + 1)}>
            {page + 1}
          </Span>
        </>
      )}

      {numOfPage > 4 && page === numOfPage && (
        <>
          <Span key={1} onClick={() => handleClick(page - 2)}>
            {page - 2}
          </Span>
          <Span key={2} onClick={() => handleClick(page - 1)}>
            {page - 1}
          </Span>
          <Span $active key={3} onClick={() => handleClick(page)}>
            {page}
          </Span>
        </>
      )}
      <Span $arrow onClick={() => handleClickArrow('right')}>
        <FaCaretRight />
      </Span>
      <Span $smallArrow onClick={() => handleClickArrow('fullRight')}>
        <FaForward />
      </Span>
    </StyledPagination>
  );
}

export default Pagination;
