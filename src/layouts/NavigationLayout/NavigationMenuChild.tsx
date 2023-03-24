import { ComponentProps } from 'react';
import {
  ListItemButton,
  listItemButtonClasses,
  ListItemIcon,
  ListItemText,
  styled,
} from '@mui/material';

type StyleProps = {
  $darkerIconOnHover?: boolean;
};

const StyledListItemButton = styled(ListItemButton, {
  shouldForwardProp: (p) => p !== '$darkerIconOnHover',
})<StyleProps>(({ $darkerIconOnHover, theme }) => {
  const svgFocusStyles = $darkerIconOnHover && {
    svg: { color: theme.palette.secondary[900] },
  };

  const focus = {
    [`&:not(:hover).${listItemButtonClasses.focusVisible}`]: {
      backgroundColor: theme.palette.grey[50],
      ...svgFocusStyles,
    },
    '&:hover': {
      backgroundColor: theme.palette.secondary[100],
      ...svgFocusStyles,
    },
  };

  return {
    minWidth: '40px',
    height: '40px',
    borderRadius: '4px',
    marginLeft: '6px',
    padding: '12px',
    ...focus,
    [`&.${listItemButtonClasses.selected}`]: {
      backgroundColor: theme.palette.secondary[100],
      ...focus,
    },
  };
}) as React.ComponentType<
  { component?: React.ElementType } & StyleProps & ComponentProps<typeof ListItemButton>
>;

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  marginLeft: '12px',
  ['& span']: {
    color: theme.palette.secondary[900],
  },
}));

const StyledListItem = styled('li')({
  width: '100%',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'flex-start',
  marginLeft: '-2px',
  marginBottom: '4px',
  ['&:last-child']: {
    marginBottom: '0',
  },
});

const Indicator = styled('div', { shouldForwardProp: (p) => p !== 'selected' })<{
  selected?: boolean;
}>(({ theme, selected }) => ({
  minWidth: '2px',
  height: '16px',
  backgroundColor: selected ? theme.palette.secondary.main : 'transparent',
  borderRadius: '0 1px 1px 0',
}));

const StyledListItemIcon = styled(ListItemIcon, {
  shouldForwardProp: (p) => p !== 'selected' && p !== 'color',
})<{
  color?: string;
  selected?: boolean;
}>(({ color, selected, theme }) => ({
  display: 'block',
  minWidth: 'initial',
  height: '16px',
  width: '16px',
  transition: 'color ease-in-out 1000ms',
  color: color ?? (selected ? theme.palette.secondary[900] : theme.palette.secondary[600]),
  svg: {
    height: '16px',
    width: '16px',
  },
}));

const Parts = {
  Button: StyledListItemButton,
  Icon: StyledListItemIcon,
  Indicator,
  Label: StyledListItemText,
  Root: StyledListItem,
};

export default Parts;
