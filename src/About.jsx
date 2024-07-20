import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">About My Personal Blog Platform</h1>
      <p className="text-lg mb-4 text-gray-600 text-justify">
        Welcome to my personal blog platform! Here, I share my thoughts, experiences, and insights on various topics that interest me.
      </p>
      <p className="text-lg mb-4 text-gray-600 text-justify">
        Whether it's technology, travel, or personal development, you'll find a range of articles that reflect my passions and interests.
      </p>
      <h2 className="text-3xl font-semibold mt-8 mb-4 text-gray-800 border-b-2 border-gray-800 pb-2">What You'll Find Here:</h2>
      <ul className="list-disc list-inside mb-4 text-lg text-gray-600">
        <li className="mb-2">Insightful articles on technology trends and innovations.</li>
        <li className="mb-2">Travelogues and tips based on my explorations around the world.</li>
        <li className="mb-2">Personal development reflections and strategies.</li>
        <li className="mb-2">And much more!</li>
      </ul>
      <p className="text-lg mb-4 text-gray-600 text-justify bg-cyan-700">
        My goal with this blog platform is to create a space for meaningful discussions and sharing of ideas. I hope you find inspiration and value in what I have to offer.
      </p>
    </div>
  );
}

export default AboutPage;
