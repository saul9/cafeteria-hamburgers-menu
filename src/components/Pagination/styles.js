export const styles = () => ({
  select: {
    border: '1px solid #c7cdd3',
    height: '25px',
  },
  button: {
    height: '27px',
    borderRadius: '13px',
    width: '27px',
    textAlign: 'center',
    '&:hover': {
      background: '#c7cdd3 !important',
      color: '#485465',
    },
    '&:hover *': {
      color: '#485465',
    },
  },
  buttonDisable: {
    height: '27px',
    borderRadius: '13px',
    width: '27px',
    textAlign: 'center',
  },
  selectMenu: {
    fontSize: '14px',
    textAlignLast: 'center',
    fontFamily: 'CircularStd',
    color: '#6c7b8a',
  },
});
