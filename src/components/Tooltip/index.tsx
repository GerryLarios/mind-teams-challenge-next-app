import { styled, Tooltip, tooltipClasses, TooltipProps } from '@mui/material';

export default styled((props: TooltipProps) => <Tooltip arrow placement="top" {...props} />)(
  ({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      backgroundColor: theme.palette.grey[700],
      color: theme.palette.secondary[50],
    },
    [`& .${tooltipClasses.tooltip}`]: {
      ...theme.typography.caption,
      backgroundColor: theme.palette.grey[700],
      color: theme.palette.secondary[50],
    },
  }),
);
