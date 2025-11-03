
import React, { useContext } from 'react';
import { AppContext } from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Page1Intro from './components/pages/Page1_Intro';
import Page2ActivityPersonalData from './components/pages/Page2_ActivityPersonalData';
import Page3HowToProtect from './components/pages/Page3_HowToProtect';
import Page4ActivityDetectRisk from './components/pages/Page4_ActivityDetectRisk';
import Page5PasswordRequirements from './components/pages/Page5_PasswordRequirements';
import Page6PasswordTechniques from './components/pages/Page6_PasswordTechniques';
import Page7PasswordChecker from './components/pages/Page7_PasswordChecker';
import Page8PasswordCautions from './components/pages/Page8_PasswordCautions';
import Page9ActivityMatchPitfalls from './components/pages/Page9_ActivityMatchPitfalls';
import Page10Quiz from './components/pages/Page10_Quiz';
import Page11Certificate from './components/pages/Page11_Certificate';
import { TOTAL_PAGES } from './constants';

const App: React.FC = () => {
  const { state } = useContext(AppContext);

  const renderPage = () => {
    switch (state.currentPage) {
      case 1:
        return <Page1Intro />;
      case 2:
        return <Page2ActivityPersonalData />;
      case 3:
        return <Page3HowToProtect />;
      case 4:
        return <Page4ActivityDetectRisk />;
      case 5:
        return <Page5PasswordRequirements />;
      case 6:
        return <Page6PasswordTechniques />;
      case 7:
        return <Page7PasswordChecker />;
      case 8:
        return <Page8PasswordCautions />;
      case 9:
        return <Page9ActivityMatchPitfalls />;
      case 10:
        return <Page10Quiz />;
      case 11:
        return <Page11Certificate />;
      default:
        return <Page1Intro />;
    }
  };

  return (
    <div className="bg-[#FEFBF0] min-h-screen flex flex-col font-sans text-gray-800">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-4 md:p-8">
        {renderPage()}
      </main>
      <Footer currentPage={state.currentPage} totalPages={TOTAL_PAGES} />
    </div>
  );
};

export default App;
