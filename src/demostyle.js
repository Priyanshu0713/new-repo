import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  root: {
    backgroundColor: 'red',
    color: 'white',
    padding: '10px',
  },
});

function Demostyle() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>This is some text </p>
    </div>
  );
}

export default Demostyle;