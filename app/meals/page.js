import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';

async function MealsWrapper() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default async function Meals() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meal <span className={classes.highlight}></span>
        </h1>
        <p>
          Choose your favorite meal and enjoy it with your friends and family.
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favourite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        /* I will use suspense for partial loading of the meals grid, so I will
        not use a loading page for the /meals route */
        <Suspense
          fallback={<p className={classes.loading}>Loading meals...</p>}
        >
          <MealsWrapper />
        </Suspense>
      </main>
    </>
  );
}
