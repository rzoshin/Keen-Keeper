import AppProvider from "./AppProvider";
import FriendProvider from "./FriendProvider";

const Providers = ({ children }) => {
  return (
    <AppProvider>
      <FriendProvider>
        {children}
      </FriendProvider>
    </AppProvider>
  );
};

export default Providers;