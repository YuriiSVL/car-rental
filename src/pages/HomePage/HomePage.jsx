import css from './HomePage.module.css';

const MainPage = () => {
  return (
    <section className={css.container}>
      <h1>Introducing Ukraine's Premier Car Rental Service!</h1>
      <p>
        Discover the beauty of Ukraine at your own pace with our top-notch car
        rental service. Whether you're exploring the historic streets of Kyiv,
        admiring the natural wonders of the Carpathian Mountains, or taking a
        road trip along the scenic Black Sea coast, we've got the perfect
        vehicle for your adventure.
      </p>
      <h2>Why Choose Us?</h2>
      <ul className={css.list}>
        <li className={css.item}>
          <p>
            Wide Range of Vehicles: From compact cars to spacious SUVs, we have
            a diverse fleet to suit your needs and preferences.
          </p>
        </li>
        <li className={css.item}>
          <p>
            Affordable Rates: Enjoy competitive rental rates and flexible
            pricing options. We offer the best value for your money.
          </p>
        </li>
        <li className={css.item}>
          <p>
            Convenient Booking: Our user-friendly online platform allows you to
            book your rental in minutes. No hassle, no fuss.
          </p>
        </li>
        <li className={css.item}>
          <p>
            24/7 Support: Our dedicated customer support team is available
            around the clock to assist you with any questions or concerns.
          </p>
        </li>
        <li className={css.item}>
          <p>
            Safety First: Your safety is our priority. Our vehicles are
            regularly serviced and maintained to ensure a worry-free journey.
          </p>
        </li>
        <li className={css.item}>
          <p>
            Explore Ukraine: Unlock the freedom to explore Ukraine's hidden
            gems, from charming villages to vibrant cities, at your own pace.
          </p>
        </li>
      </ul>
      <p>
        Make your Ukrainian travel experience unforgettable with our reliable
        and efficient car rental service. Book your vehicle today and embark on
        an incredible journey through the heart of Ukraine.
      </p>
      <p>Discover Ukraine. Drive with us!</p>
    </section>
  );
};

export default MainPage;
