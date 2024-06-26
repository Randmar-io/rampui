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
  gap: 4px;
  padding-left: var(--r-spacing-10);
  
  @media screen and (min-width: 900px) {
    padding-left: var(--r-spacing-50);
  }
`

const MenuButton = styled(Button)`
  @media screen and (min-width: 900px) {
    display: none;
  }
`

export function TopBar({ logo, searchBar, rightMenu, toggleShowMenu, ...rest }: TopBarProps) {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <TopBarContainer {...rest}>
      <Stack direction="row" justifyContent="space-between" sx={{ flexShrink: 0, height: 'var(--r-height-topbar)', width: '100%' }}>
        <LogoContainer>
          <MenuButton variant="primary" iconOnly starticon={List} onClick={toggleShowMenu} />
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
          {
            rightMenu &&
            <Box ml={1}>
              {rightMenu}
            </Box>
          }
        </CenteredFlexbox>
      </Stack>
      {
        mobileSearchOpen &&
        <Box sx={{ p: 1, pt: 0 }}>
          {searchBar}
        </Box>
      }
    </TopBarContainer>
  )
}