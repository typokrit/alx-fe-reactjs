import ProfilePage from "./components/ProfilePage";
import UserContext from "./components/UserContext";

function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    age: 30,
    bio: "Software developer and React enthusiast",
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
