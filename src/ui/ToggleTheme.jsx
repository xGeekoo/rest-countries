import { FaRegMoon, FaRegSun } from 'react-icons/fa6';
import styled from 'styled-components';
import { useThemes } from '../contexts/ThemesContext';

const StyledToggleTheme = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
`;

const StyledFaRegMoon = styled(FaRegMoon)`
  font-size: 2rem;
`;

const StyledFaRegSun = styled(FaRegSun)`
  font-size: 2rem;
`;

function ToggleTheme() {
  const { theme, setTheme } = useThemes();

  function handleClick() {
    setTheme(theme => {
      const newTheme = theme === 'black' ? 'white' : 'black';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  }

  return (
    <StyledToggleTheme onClick={handleClick}>
      {theme === 'black' ? <StyledFaRegSun /> : <StyledFaRegMoon />}
      <span>{theme === 'black' ? 'White' : 'Black'} Mode</span>
    </StyledToggleTheme>
  );
}

export default ToggleTheme;
