import CarList from '../../components/CarList/CarList';

const FavoriteCarsPage = () => {
  // const [favoriteCars, setFavoriteCars] = useState([]);

  const favoriteCars = JSON.parse(localStorage.getItem('favoriteCars')) || [];

  // useEffect(() => {
  //   const existingFavoriteCars =
  //     JSON.parse(localStorage.getItem("favoriteCars")) || [];
  //   setFavoriteCars(existingFavoriteCars);
  // }, []);

  return <CarList cars={favoriteCars} />;
};

export default FavoriteCarsPage;
