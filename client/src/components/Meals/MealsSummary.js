import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary} data-aos="zoom-in" data-aos-duration="1000">
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Saddle up for a flavor-packed journey with our mouthwatering burgers<br /> guaranteed to satisfy your cravings!
      </p>
    </section>
  );
};

export default MealsSummary;
