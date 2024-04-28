import { requests } from "./request"
import { Row } from "./components/Row"
import { Banner } from "./components/Banner"
import { Header } from "./components/Header"

function App() {

  return (
    <div className="App bg-slate-950">
      <Header/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title="Trend Movies" fetchUrl={requests.fetchTrending} isLargeRow={false} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow={false}/>
      <Row title="News Movies" fetchUrl={requests.fetchNewsMovies} isLargeRow={false}/>
      <Row title="Kids Movies" fetchUrl={requests.fetchKidsMovies} isLargeRow={false}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow={false}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentMovies} isLargeRow={false}/>
    </div>
  )
}

export default App
