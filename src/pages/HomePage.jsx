import { useAuth } from "../contexts/AuthContext/useAuth"; // Import the useAuth hook

const HomePage = () => {
  const { loading, isAuthenticated } = useAuth();

  console.log({ loading, isAuthenticated });

  return <div>HomePage</div>;
};

export default HomePage;
