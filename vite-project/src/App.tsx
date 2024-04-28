import { requests } from "./request"
import { Row } from "./components/Row"

function App() {

  return (
    <div className="App bg-slate-950">
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trend Movies" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow/>
      <Row title="News Movies" fetchUrl={requests.fetchNewsMovies} isLargeRow/>
      <Row title="Kids Movies" fetchUrl={requests.fetchKidsMovies} isLargeRow/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentMovies} isLargeRow/>
    </div>
  )
}

export default App
