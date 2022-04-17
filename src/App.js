import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="You own store of Nifty NFTs. Start selling & Growing"
        description="Buy, Store, Collect NFTs, 10+ Million people are using CryptoEx Marketplace"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />

      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a smooth UI of CryptoEx NFT MarketPlace. Smooth constant colors of a fluent UI design"
        mockupImg={assets.homeCards}
        reverse
      />

      <Features />

      <SectionWrapper
        title="Deployement"
        description="CryptoEx is built Using Expo which runs natively on all users devies you can eaily get your app in peoples hand"
        mockupImg={assets.feature}
        reverse
      />

      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screen . the first screen lists all the NFT's while the second on shows the details of it for your to bid on "
        mockupImg={assets.mockup}
        banner="banner02"
      />

      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {""}
        <span className="bold">AMAN YADAV</span>
        </p>
        
      </div>
    </>
  );
};

export default App;
