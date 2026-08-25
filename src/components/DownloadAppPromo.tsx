import promoImg from "../assets/images/mainPage/promo-app.avif";

export default function DownloadAppPromo() {
  return (
    <div className="w-full rounded-b-3xl mb-12">
      <img 
        className="w-full min-h-36 h-full" 
        src={promoImg} 
        alt="App OneFootball" 
      />
    </div>
  );
}