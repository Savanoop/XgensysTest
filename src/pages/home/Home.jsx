import { homeData } from "../../helper/data";
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useState } from "react";
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  
  root: {
    // minWidth: 275,
    maxWidth: 80,
    maxHeight:80,
    minHeight:80,
    textAlign: 'center',
    margin: 20,
    padding: 20,
    borderRadius: "50%"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
function Home(props) {
  const classes = useStyles();
  const [selectedItem, setSelectedItem] = useState(0)
  const data = homeData
  return (
    <div>
       <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Home
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={1}>
        {homeData.map((item, i) =>
          <Grid item xs={3}>

            <Card style={i === selectedItem ? { background: "red" } : i % 2 ? { background: 'bisque' } : { background: "aliceblue" }} className={classes.root}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {item.Title}
                </Typography>
              </CardContent>
            </Card>
            </Grid>
        )}
      </Grid>
        <Button variant="contained" onClick={() => setSelectedItem(selectedItem - 1)} color="primary">
          Previous
        </Button><Button style={{ float: 'right' }} onClick={() => setSelectedItem(selectedItem + 1)} variant="contained" color="primary">
          Next
        </Button>
    </div>
  )
}

export default Home;