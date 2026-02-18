import "./YouTubePage.css";
export function YouTubePage() {
  return (
    <>
      <input className="searchbar" type="text" placeholder="Search" />
      <div className="video-grid">
        <div className="video-preview">
          <div className="thumbnail-row">
            <img src="hq720.png" className="thumbnail" />
          </div>
          <div className="detail-section">
            <div className="channel-img">
              <img src="ssd.png" className="profile-picture"></img>
            </div>
            <div className="video-details">
              <p className="video-title">Making TF2 As REALISTIC as possible</p>
              <p className="video-author">Pierce McTighe</p>
              <p className="video-stats">375k Views * 10 months ago</p>
            </div>
          </div>
        </div>
        <div className="video-preview">
          <div className="thumbnail-row">
            <img src="hqdefault.jpg" className="thumbnail" />
          </div>
          <div className="detail-section">
            <div className="video-details">
              <p className="video-title">My Mix</p>
              <p className="video-author">Poor Man's Poison</p>
            </div>
          </div>
        </div>
        <div className="video-preview">
          <div className="thumbnail-row">
            <img src="tf2.png" className="thumbnail" />
          </div>
          <div className="detail-section">
            <div className="channel-img">
              <img src="donut.png" className="profile-picture"></img>
            </div>
            <div className="video-details">
              <p className="video-title">Cool Hidden Spots in TF2</p>
              <p className="video-author">Joey Cheerio</p>
              <p className="video-stats">1.5M Views * 2 Years Ago</p>
            </div>
          </div>
        </div>
        <div className="video-preview">
          <div className="thumbnail-row">
            <img src="hq720.png" className="thumbnail" />
          </div>
          <div className="detail-section">
            <div className="channel-img">
              <img src="ssd.png" className="profile-picture"></img>
            </div>
            <div className="video-details">
              <p className="video-title">Making TF2 As REALISTIC as possible</p>
              <p className="video-author">Pierce McTighe</p>
              <p className="video-stats">375k Views * 10 months ago</p>
            </div>
          </div>
        </div>
        <div className="video-preview">
          <div className="thumbnail-row">
            <img src="hqdefault.jpg" className="thumbnail" />
          </div>
          <div className="detail-section">
            <div className="video-details">
              <p className="video-title">My Mix</p>
              <p className="video-author">Poor Man's Poison</p>
            </div>
          </div>
        </div>
        <div className="video-preview">
          <div className="thumbnail-row">
            <img src="tf2.png" className="thumbnail" />
          </div>
          <div className="detail-section">
            <div className="channel-img">
              <img src="donut.png" className="profile-picture"></img>
            </div>
            <div className="video-details">
              <p className="video-title">Cool Hidden Spots in TF2</p>
              <p className="video-author">Joey Cheerio</p>
              <p className="video-stats">1.5M Views * 2 Years Ago</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
