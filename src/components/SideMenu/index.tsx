import Link from 'next/link';
import {
  CSSObject,
  List,
  ListItemButton,
  listItemButtonClasses,
  ListItemIcon,
  ListItemText,
  listItemTextClasses,
  styled,
  Theme,
} from '@mui/material';
import NoOp from '../NoOp';

const borderRadius = '4px';

export const sideMenuClasses = {
  listItem: 'side-menu-list-item',
  listItemSelected: 'side-menu-list-item-selected',
  listItemButton: 'side-menu-list-item-button',
  listItemButtonSelected: listItemButtonClasses.selected,
};

const StyledListItemIcon = styled(ListItemIcon, { shouldForwardProp: (p) => p !== 'selected' })<{
  selected: boolean;
}>(({ selected, theme }) => ({
  color: selected ? theme.palette.secondary[900] : theme.palette.secondary[700],
  height: '16px',
  width: '16px',
  marginRight: '8px',
  minWidth: 'unset',
  [theme.breakpoints.down('sm')]: {
    marginRight: 0,
  },
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export type SideMenuItem<TValue> = {
  icon?: React.ReactNode;
  label: string;
  value: TValue;
};

type SideMenuProps<TValue = string> = {
  className?: string;
  getViewPath?: (value: TValue) => string;
  items: SideMenuItem<TValue>[];
  value: string;
  onChange?: (value: TValue) => void;
};

const InternalSideMenu: React.FC<SideMenuProps> = ({
  className,
  items,
  getViewPath,
  value: selectedValue,
  onChange,
}) => (
  <List className={className} data-testid="side-menu">
    {items.map(({ icon, label, value }) => {
      const selected = selectedValue === value;

      const [Wrapper, href] = getViewPath ? [Link, getViewPath(value)] : [NoOp, ''];

      return (
        <li
          key={value}
          className={
            sideMenuClasses.listItem + (selected ? ` ${sideMenuClasses.listItemSelected}` : '')
          }
        >
          <Wrapper href={href} passHref>
            <ListItemButton
              {...(href && { component: 'a' })}
              className={sideMenuClasses.listItemButton}
              selected={selected}
              data-testid={`section-${value}`}
              {...(onChange && {
                onClick: () => onChange(value),
              })}
            >
              {icon && <StyledListItemIcon selected={selected}>{icon}</StyledListItemIcon>}
              <StyledListItemText primary={label} />
            </ListItemButton>
          </Wrapper>
        </li>
      );
    })}
  </List>
);

const listItemButtonStyles = (theme: Theme): CSSObject => {
  const pseudo = {
    [`&.${listItemButtonClasses.focusVisible}`]: {
      backgroundColor: theme.palette.secondary[100],
    },
    '&:hover': {
      backgroundColor: theme.palette.secondary[100],
      [`& .${listItemTextClasses.primary}`]: {
        color: theme.palette.secondary[800],
      },
    },
  };

  return {
    ...pseudo,
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
    height: '100%',
    [`&.${listItemTextClasses.primary}`]: {
      color: theme.palette.secondary[500],
    },
    [`&.${listItemButtonClasses.selected}`]: {
      ...pseudo,
      backgroundColor: 'transparent',
      [`& .${listItemTextClasses.primary}, &:hover .${listItemTextClasses.primary}`]: {
        color: theme.palette.secondary[900],
      },
    },
  };
};

const sharedStyles = (theme: Theme): CSSObject => {
  return {
    ...theme.typography.body1,
    backgroundColor: theme.palette.common.white,
    borderRadius,
    boxShadow: theme.boxShadows.card,
    display: 'flex',
    flexDirection: 'column',
    height: 'fit-content',
    marginRight: 24,
    padding: 0,
    whiteSpace: 'nowrap',
    [`& .${sideMenuClasses.listItem}`]: {
      height: '52px',
      ':first-of-type': {
        borderTopRightRadius: borderRadius,
        borderTopLeftRadius: borderRadius,
      },
      ':last-of-type': {
        borderBottomRightRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
      },
    },
    [`& .${sideMenuClasses.listItemButton}.${listItemButtonClasses.selected}::before`]: {
      backgroundColor: theme.palette.secondary[900],
      borderRadius: '0 1px 1px 0',
      content: '""',
      height: '24px',
      left: 0,
      overflow: 'hidden',
      position: 'absolute',
      width: '2px',
    },
  };
};

const stylesLg = (theme: Theme): CSSObject => ({
  ...sharedStyles(theme),
  [`& .${sideMenuClasses.listItemButton}`]: listItemButtonStyles(theme),
});

const stylesResponsive = (theme: Theme): CSSObject => {
  const createBorder = (color: string) => `solid 1px ${color}`;
  const border = createBorder(theme.palette.secondary[200]);
  const transparentBorder = createBorder('transparent');
  const borderRadiusSm = `${borderRadius} ${borderRadius} 0px 0px`;

  return {
    [`& .${sideMenuClasses.listItemButton}`]: listItemButtonStyles(theme),
    [theme.breakpoints.down('lg')]: {
      ...theme.typography.body1,
      backgroundColor: theme.palette.common.white,
      borderLeft: border,
      borderRadius: borderRadiusSm,
      borderRight: border,
      borderTop: border,
      display: 'grid',
      gridAutoColumns: 'minmax(0, 1fr)',
      gridAutoFlow: 'column',
      padding: 0,
      [`& .${sideMenuClasses.listItem}`]: {
        borderBottom: border,
        borderRadius: borderRadiusSm,
        [`&.${sideMenuClasses.listItemSelected}`]: {
          borderBottom: transparentBorder,
          [`&:not(:first-of-type)`]: {
            borderLeft: border,
          },
          [`&:not(:last-of-type)`]: {
            borderRight: border,
          },
        },
      },
      [`& .${sideMenuClasses.listItemButton}`]: {
        borderRadius: borderRadiusSm,
      },
      [`& .${sideMenuClasses.listItemButtonSelected}::before`]: {
        backgroundColor: theme.palette.secondary[900],
        borderRadius: borderRadiusSm,
        content: '""',
        height: '2px',
        left: '50%',
        position: 'absolute',
        top: '1px',
        transform: 'translateX(-50%)',
        width: '98%',
      },
    },
    [theme.breakpoints.up('lg')]: sharedStyles(theme),
  };
};

const SideMenu = styled(InternalSideMenu, { shouldForwardProp: (p) => p !== 'responsive' })<{
  responsive?: boolean;
}>(({ responsive, theme }) => (responsive ? stylesResponsive : stylesLg)(theme));

export default SideMenu;
