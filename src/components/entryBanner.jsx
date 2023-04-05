import "../App.css";

function EntryBanner() {
  return (
    <div className="entry-banner">
      <div className="logo-container">
        <h2 className="logo-heading">NCR Tech</h2>
      </div>
      <div className="scroll-down-icon-container">
        <img src="/images/scrollDown.png" id="scroll-down-icon" />
      </div>
    </div>
  );
}

export default EntryBanner;
