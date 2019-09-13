import React from 'react';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

class App extends React.Component {
    render() {
        return (
            <div id="top">
                <Header/>
                <IntroSection/>
                <About/>
                <Resume/>
                <Portfolio/>
            </div>
        )
    }
}

export default App;