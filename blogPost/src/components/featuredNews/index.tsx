import React from "react";
type News = {
  image?: any,
  title?: any,
  author?: any,
  time?: any
} & { [key: string]: any }
const FeaturedNews = () => {
  return (
    <div className="max-w-screen-xl mx-auto lg:p-6 grid grid-cols-12 gap-6">
      {/* Left Side Articles */}
      <div className="col-span-3  flex-col  gap-y-4 hidden lg:flex">
        <ArticleCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFeWnzyB-T1LJ3QMBsazBTe3BTW-gx7-EugA&s"
          title="The Trump Effect on Young Voters is Real"
          author="David Thornton"
          time="14 mins ago"
        />
        <ArticleCard
          image="https://deadline.com/wp-content/uploads/2024/04/last-week-tonight-john-oliver-hbo.jpg?w=681&h=383&crop=1"
          title="Brian Kemp Steps Down as Secretary of State in Georgia"
          author="Steve Berman"
          time="35 mins ago"
        />
      </div>

      {/* Main Article */}
      <div className="col-span-12 lg:col-span-6 flex flex-col flex-1">
        <MainArticleCard
          // className="hidden lg:block"
          image="https://deadline.com/wp-content/uploads/2024/09/the-franchise-copy.jpg"
          title="Justice Ruth Bader Ginsburg Hospitalized After Fall"
          author="Steve Berman"
          time="2 mins ago"
        />
        <FeaturedVideos />
      </div>

      {/* Sidebar */}
      <div className="col-span-12 lg:col-span-3 space-y-4">
        <LiveShow  title="Conversations With Congressman Getting Groceries" details="Paul Ryan, Trump, Grocery Store" />
        <TrendingNews className="hidden lg:block" title="When Trump Has Whitaker Fire Mueller... Twice" author="Stacey Lennox" time="38 mins ago" />
        <TrendingNews className="hidden lg:block"title="Rick Scott and Marco Rubio Go After Broward County" author="Jake Wagner" time="42 mins ago" />
        <TrendingNews className="hidden lg:block" title="Rick Scott and Marco Rubio Go After Broward County" author="Jake Wagner" time="42 mins ago" />
      </div>
    </div>
  );
};

const ArticleCard = ({ image, title, author, time }: News) => (
  <div className="overflow-hidden h-1/2 border">
    <img src={image} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <p className="text-gray-700 text-sm">by {author} • {time}</p>
      <b className="font-bold text-lg mt-2">{title}</b>
    </div>
  </div>
);

const MainArticleCard = ({ image, title, author, time,className }: News) => (
  <div className={`relative w-full  flex-1 ${className}`}>
    <img src={image} alt={title} className="w-full h-full object-cover " />
    <div className="absolute bottom-0 bg-black/80 text-white lg:p-4 w-full">
      <p className="text-sm">by {author} • {time}</p>
      <b className="text-sm lg:text-2xl font-bold">{title}</b>
    </div>
  </div>
);

const FeaturedVideos = () => (
  <div className="mt-6">
    <h6 className="font-bold text-xl mb-4 text-uppercase">Featured Videos</h6>
    <div className="grid lg:grid-cols-3 grid-cols-3 gap-4">
      <VideoCard title="Gun Debates Won't Fix This Problem" time="3:25" />
      <VideoCard title="Democrats and the Art of Blowing 2018" time="1:34" />
      <VideoCard title="Trump’s First State of the Union Address" time="0:45" />
      {/* <VideoCard  title="Here's What Trump is Serving" time="10:21" /> */}
    </div>
  </div>
);

const VideoCard = ({ title, time }: News) => (
  <div className="bg-gray-100 p-3  text-center">
    <p className="blogContent text-xs lg:text-sm font-bold">{title}</p>
    <p className="text-gray-600 text-xs">{time}</p>
  </div>
);

const LiveShow = ({ title, details,className }: News) => (
  <div className={`bg-gray-100 p-4 max-w-md ${className}`}>
    <p className="text-sm font-semibold text-gray-600">The Erick Erickson Show</p>
    <h2 className="text-xl font-bold text-blue-900 leading-tight">
      {title}
    </h2>
    <p className="text-gray-500 text-sm mt-2">
      {details}
    </p>
    <div className="mt-3 inline-flex items-center bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
      ⚪ ON AIR
    </div>
  </div>

);

const TrendingNews = ({ title, author, time,className }: News) => (
  <div className={`border-b pb-2 ${className}`}>
    <p className="text-gray-700 text-sm">by {author} • {time}</p>
    <b className="font-bold mt-1">{title}</b>
  </div>
);

export default FeaturedNews;