import promoPhoto from "../assets/images/mainPage/promo-photo.avif";

export default function FeaturedBanner() {
  return (
    <div className="w-full lg:grow-2 lg:basis-0 flex">
      <img
        className="object-cover w-full h-full min-h-75 rounded-3xl"
        src={promoPhoto}
        alt="promo photo"
      />
    </div>
  );
}