import { createContext, useState } from 'react';

const StatsContext = createContext();

const StatsContextProvider = ({ children }) => {
  const [visibleHeaderNotification, setVisibleHeaderNotification] = useState(true);

  return (
    <StatsContext.Provider value={{ visibleHeaderNotification, setVisibleHeaderNotification }}>
      {children}
    </StatsContext.Provider>
  )
}

export { StatsContext, StatsContextProvider };
