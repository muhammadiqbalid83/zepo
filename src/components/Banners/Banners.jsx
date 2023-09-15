export default function Banners() {
  return (
    <div className="w-full h-auto pt-[80px]">
      <div className="container mx-auto flex justify-center gap-8">
        <div className="relative overflow-hidden">
          <img
            src="https://schuse-codezeel.myshopify.com/cdn/shop/files/sub-banner-1.jpg?v=1671265575"
            alt="men's collection"
            className="hover:scale-110 transition duration-500"
          />
          <div className="w-[500px] py-7 bg-white absolute bottom-[30px] left-[35px]">
            <h1 className="text-[30px] text-center">Men’s Collection</h1>
            <p className="text-center text-orange hover:underline">
              <a href="#" className="text-center">
                BERBELANJA SEKARANG
              </a>
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <img
            src="https://schuse-codezeel.myshopify.com/cdn/shop/files/sub-banner-2.jpg?v=1671265575"
            alt=""
            className="hover:scale-110 transition duration-500"
          />
          <div className="w-[500px] py-7 bg-white absolute bottom-[30px] left-[35px]">
            <h1 className="text-[30px] text-center">Women Collection</h1>
            <p className="text-center text-orange hover:underline">
              <a href="#" className="text-center">
                BERBELANJA SEKARANG
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
