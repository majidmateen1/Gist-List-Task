import styled from "styled-components";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import GistList from "./components/GistList";
import { Provider } from "react-redux";
import store from "./redux/Store/Index";
import ApiDefinitions from "./components/ApiDefinitions";

const App = () => {
  return (
    // Wrap the entire application with the Redux Provider
    <Provider store={store}>
      <Wrapper className="App" data-testid="app">
        {/* Render the Header component */}
        <Header />

        {/* Render the GistList component */}
        <GistList />

        {/* Render the ApiDefinitions component */}
        <ApiDefinitions />

        <GlobalStyles />
      </Wrapper>
    </Provider>
  );
};

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
