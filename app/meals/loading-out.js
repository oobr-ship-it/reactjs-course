/* temporary loading page for the /meals route is out, 
since I will use suspense for partial loading of the meals grid, 
but I will keep this file for reference */

import classes from './loading.module.css';
export default function MealsLoadingPage() {
  return <p className={classes.loading}>Fetching meals...</p>;
}
