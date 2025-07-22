import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import JSXRules from "./JSXRules";
import Expre from "./expressions";
import Greeting from "./Greeting";
import ProductInfo from "./ProductInfo";
import Listing from "./lists";
import UserList from "./UserList";
import Propp from "./Props_prac";
import User from "./Person";
import Card from "./components/card";
import Password from "./conditionals";
import Cart from "./cart";
import Weather from "./Weather";
import UserStatus from "./UserStatus";
import Hello from "./Hello";
import InlineStyle from "./inlinestyle";
import Icons from "./react-icons";
import StyledCard from "./StyledCard";
import ProfileCard from "./ProfileCard";
import IconComponent from "./IconComponent";
import Events from "./Events";
import StateApp from "./states";
import StateArrayApp from "./states-array";
import StateObjectApp from "./states-object";
import StateObjectArrayApp from "./states-arryofobjects";
import ShareState from "./share-state";
import Counter from "./Counter";
import TodoList from "./TodoList";
import Profile from "./Profile";
import ShoppingList from "./ShoppingList";
import CopyInput from "./components/CopyInput";
import UseEffectApp from "./useeffectapp";
import DataFetchUseEffect from "./datafetching";
import BasicEffect from "./BasicEffect";
import CounterEffect from "./CounterEffect";
import FetchDataEffect from "./FetchDataEffect";
import AppforContext from "./AppforContext";
import UserProvider from "./UserContext";

const App = () => {
  return (
    <div>
      {/* <Header />
      <MainContent />
      <JSXRules />
      <Expre />
      <Footer /> */}

      {/* <Greeting />
      <ProductInfo /> */}

      {/* // Lists */}
      {/* <Listing />
      <UserList /> */}

      {/* // Props */}
      {/* <Propp />
      <User /> // Person */}
      {/* <Card>
          <h1>Card 1</h1>
          <p>This is some content for card 1</p>
      </Card>
      <Card>
          <h1>Card 2</h1>
          <p>This is some content for card 2</p>
      </Card>
      <Card>
          <h1>Card 3</h1>
          <p>This is some content for card 3</p>
      </Card> */}

      {/* // Conditional Rendering */}
      {/* <Password isValid={true}/>
      <Cart /> */}
      {/*<Weather temperature = {[23, 19, 39, 23]} /> {/* Conditional rendering with Props */}
      {/*<UserStatus loggedIn={true} isAdmin={true}/>  {/* Conditional rendering with && operator */}
      {/*<Hello timeOfDay={"afternoon"}/> {/* Conditional rendering with ternary operator */}

      {/* Styling
      <InlineStyle />
      <StyledCard />
      <ProfileCard /> */}

      {/* Icons
      <Icons />
      <IconComponent /> */}

      {/* // Event handling
      <Events /> */}

      {/* // States 
      <StateApp />
      <StateArrayApp />
      <StateObjectApp />
      <StateObjectArrayApp />
      <ShareState />
      <Counter />
      <TodoList />
      <Profile />
      <ShoppingList /> */}

      {/* // Portal
      <CopyInput /> */}

      {/* // UseEffect functionality and we need to disable strictmode in main.jsx for learning/testing useEffect
      <UseEffectApp />
      <DataFetchUseEffect />
      <BasicEffect />
      <CounterEffect />
      <FetchDataEffect /> */removeEventListener}

      {/* // Context API(Prop Drilling solution)
      <AppforContext />
      <UserProvider /> */}

    </div>
  )
}

export default App;