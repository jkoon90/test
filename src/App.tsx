import { Content, Epit, Footer, Header } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Content>
        <Epit.ServiceTech />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
