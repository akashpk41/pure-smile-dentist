import React from "react";

const Blog = () => {
  return (
    <div className=" mx-2 md:w-4/5 md:mx-auto my-5  ">
      <div
        data-aos="flip-left"
        className="blog-1 border-2  rounded-lg shadow-2xl p-5  "
      >
        <h1 className="text-2xl text-center mb-3 ">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h1>
        <p className="text-base text-gray-800">
          বর্তমানে ওয়েবসাইটকে সিকিউর করা অনেক জরুরি আর তার jonno website এ লগিন
          সিস্টেম চালু করা উচিত। কারন website কিছু কিছু জিনিস আছে যা শুধু
          varified ইউজারদের জন্য প্রযোজ্য। আমি ফায়ারবেজ ব্যাবহার করি কারন
          ফায়ারবেজ থেকে ফ্রিতে Authentication সিস্টেম চালু করা যায় । ফায়ারবেজ
          গুগলের একটি প্রতিষ্ঠান যার কারনে এটা অনেক নিরাপদ। ফায়ারবেজের মতো অনেক
          সিস্টেম আছে যেইটা দিয়ে ওয়েবসাইটে Authentication সিস্টেম চালু করা যায় ।
          তেমন কয়েকটা হলোঃ Back4app, Parse , Heroku
        </p>
      </div>
      <div
        data-aos="flip-right"
        className="blog-2 border-2 my-10 rounded-lg shadow-2xl p-5  "
      >
        <h1 className="text-2xl text-center mb-3 ">
          What other services does firebase provide other than authentication
        </h1>
        <p className="text-base text-gray-800">
          গুগলের ফায়ারবেজ Authentication System ছাড়াও অনেক সার্ভিস প্রদান করে ।
          Authentication System ও অনেক বেশি জনপ্রিয় এবং বেশ কয়েকটা সার্ভিস হলোঃ
          Cloud Functions ,Authenticatio, Hosting, Cloud Storage, Google
          Analytics, Predictions, Cloud Messaging, Dynamic Links, Remote Config
          . Cloud Messaging এর মাধ্যমে ইউজারের কাছে কোন notification পাঠানো যায়,
          Hosting: আমরা ফ্রিতে আমাদের ওয়েবসাইটকে ফায় deploy করতে পারি, এবং
          সেই সাইটের লাইভ লিংক শেয়ার করতে পারি। এবং পপুলার অনেক services রয়েছে ।
        </p>
      </div>
    </div>
  );
};

export default Blog;
