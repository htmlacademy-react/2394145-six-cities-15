import MainPage from '../pages/main';


type AppProps = {
  placesCount: number;
};

function App({placesCount}: AppProps): JSX.Element {
  return (
    <MainPage placesCount={placesCount} />
  );
}

export default App;

