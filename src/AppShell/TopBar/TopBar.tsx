import styled from "@emotion/styled";
import { Box, Stack } from "@mui/system";
import { CaretUp, List, MagnifyingGlass } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Button } from "../../Button";
import { CenteredFlexbox } from "../../utility/CenteredFlexbox";

interface TopBarProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: React.ReactNode;
  searchBar?: React.ReactNode;
  rightMenu?: React.ReactNode;
  toggleShowMenu?: () => void;
}

const TopBarContainer = styled.div`
  background-color: ${({ theme }) => theme.color[500]};
  z-index: 40;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: var(--r-width-nav-menu);
  
  @media screen and (min-width: 768px) {
    padding-left: var(--r-spacing-50);
  }
`

const MenuButton = styled(Button)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export function TopBar({ logo, searchBar, rightMenu, toggleShowMenu, ...rest }: TopBarProps) {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <TopBarContainer {...rest}>
      <Stack direction="row" sx={{ flexShrink: 0, height: 'var(--r-height-topbar)' }}>
        <LogoContainer>
          <MenuButton variant="primary" starticon={List} onClick={toggleShowMenu} />
          {logo}
        </LogoContainer>
        <Box sx={{ display: { xs: 'none', md: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1 } }}>
          {searchBar}
        </Box>
        <CenteredFlexbox style={{ flexShrink: 0, width: 'max-content', paddingRight: 'var(--r-spacing-30)' }}>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Button
              iconOnly
              starticon={mobileSearchOpen ? CaretUp : MagnifyingGlass}
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            />
          </Box>
          {rightMenu}
        </CenteredFlexbox>
      </Stack>
      {
        mobileSearchOpen &&
        <Box sx={{ p: 1 }}>
          {searchBar}
        </Box>
      }
    </TopBarContainer>
  )
}