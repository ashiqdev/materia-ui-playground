import { useEffect, useState } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Meal from './Component/Meal/Meal';

function App() {
  const [meals, setMeals] = useState([]);
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

  const [spacing, setSpacing] = useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a';
      const data = await (await fetch(url)).json();
      setMeals(data.meals);

      console.log(meals);
    };

    fetchData();
  }, []);
  return (
    // <div className='container'>
    //   {meals.map((meal) => (
    //     <div key={meal.idMeal} className='meal'>
    //       <img src={meal.strMealThumb} alt='ImageOfThumb' />
    //       <p>Name - {meal.strMeal}</p>
    //       <p>Category - {meal.strCategory}</p>
    //     </div>
    //   ))}
    // </div>

    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}> 
        <Grid container justify='center' spacing={spacing}>
          {meals.map((meal) => (
            <Meal key={meal.idMeal} {...meal}/>
          ))}
        </Grid>
      </Grid>
    
    </Grid>
  );
}

export default App;


// xs-12  (mobile 12 column)

/**
 * xs={12} md={6} 
 * props.meal.strThumb
 * 
 * props.strThumb
 * 
 */