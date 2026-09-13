import desktopMockup from "../../../images/desktop-mockup.svg";
import tabletMockup from "../../../images/tablet-mockup.svg";
import mobileMockup from "../../../images/mobile-mockup.svg";

const AppScreen = () => {
  return (
    <picture>
      <source media="(max-width: 39.99rem)" srcSet={mobileMockup} />

      <source media="(max-width: 47.99rem)" srcSet={tabletMockup} />

      <img
        src={desktopMockup}
        alt="desktop app mockup"
        className="w-full h-auto"
      />
    </picture>
  );
};

export default AppScreen;
