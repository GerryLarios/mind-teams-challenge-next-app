import React, { createContext, useContext, useMemo } from 'react';
import { styled, ListItemIcon, MenuProps, Menu } from '@mui/material';
import { default as MenuItem, MenuItemColorVariant } from '../MenuItem';
import AppLink from '../AppLink';
import NoOp from '../NoOp';

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    boxShadow: theme.boxShadows.card,
    padding: '4px',
  },
  '& .MuiList-root': {
    padding: '0px',
  },
  '& .MuiMenuItem-root': {
    height: '44px',
    borderRadius: '4px',
  },
}));

const StyledIcon = styled(ListItemIcon)({
  minWidth: '16px !important',
  marginRight: '8px',
  color: 'inherit',
  svg: {
    width: '16px',
    height: '16px',
  },
});

const MenuItemLabel = styled('span')(({ theme }) => ({
  ...theme.typography.body1,
  color: 'inherit',
}));

const CloseMenuContext = createContext<() => void>(() => undefined);

type ContextMenuOptionProps = {
  className?: string;
  colorVariant?: MenuItemColorVariant;
  href?: string;
  icon: React.ReactNode;
  label: string;
  ContentWrapper?: React.ComponentType;
  onClick?: () => void;
};

const ContextMenuOption: React.VFC<ContextMenuOptionProps> = ({
  className,
  colorVariant,
  ContentWrapper,
  icon,
  label,
  onClick,
}) => {
  const closeMenu = useContext(CloseMenuContext);

  const Wrapper = ContentWrapper ?? NoOp;

  return (
    <MenuItem
      className={className}
      key={label}
      onClick={() => {
        closeMenu();
        onClick?.();
      }}
      colorVariant={colorVariant}
    >
      <Wrapper>
        <StyledIcon>{icon}</StyledIcon>
        <MenuItemLabel>{label}</MenuItemLabel>
      </Wrapper>
    </MenuItem>
  );
};

const ContextMenuOptionLinkRoot = styled(ContextMenuOption, {
  shouldForwardProp: (p) => p !== 'disabled',
})<{ disabled?: boolean }>(({ disabled, theme }) => ({
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0,
  ...(disabled && {
    color: theme.palette.secondary[600],
    pointerEvents: 'none',
  }),
}));

const StyledAppLink = styled(AppLink)({
  alignItems: 'center',
  display: 'flex',
  minHeight: '100%',
  paddingBottom: MenuItem.paddingY,
  paddingLeft: MenuItem.paddingX,
  paddingRight: MenuItem.paddingX,
  paddingTop: MenuItem.paddingY,
  width: '100%',
});

type ContextMenuOptionLinkProps = Omit<ContextMenuOptionProps, 'onClick'> & {
  disabled?: boolean;
  href: string;
};

const createLinkWrapper = (href: string) => {
  const LinkWrapper: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <StyledAppLink href={href}>{children}</StyledAppLink>
  );

  return LinkWrapper;
};

const ContextMenuOptionLink: React.VFC<ContextMenuOptionLinkProps> = ({ href, ...props }) => {
  const LinkWrapper = useMemo(() => createLinkWrapper(href), [href]);

  return <ContextMenuOptionLinkRoot {...props} ContentWrapper={LinkWrapper} />;
};

export type ContextMenuProps = Pick<MenuProps, 'anchorOrigin' | 'transformOrigin'> & {
  anchorElement: Element | null;
  children?: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

const ContextMenu: React.FC<ContextMenuProps> = ({
  anchorElement,
  anchorOrigin,
  children,
  open,
  transformOrigin,
  onClose,
}) => (
  <StyledMenu
    anchorEl={anchorElement}
    anchorOrigin={anchorOrigin}
    disableRestoreFocus
    open={open}
    transformOrigin={transformOrigin}
    onClose={onClose}
  >
    <CloseMenuContext.Provider value={onClose}>{children}</CloseMenuContext.Provider>
  </StyledMenu>
);

export default Object.assign(ContextMenu, {
  Option: ContextMenuOption,
  OptionLink: ContextMenuOptionLink,
});
