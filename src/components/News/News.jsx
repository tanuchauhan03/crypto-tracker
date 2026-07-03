import React, { useEffect, useState } from "react";
import "./News.css";

const News = () => {

  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {

      const response = await fetch(
        `https://newsdata.io/api/1/news?apikey=${import.meta.env.VITE_NEWS_API_KEY}&q=cryptocurrency&language=en`
      );

      const data = await response.json();

      setNews(data.results);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <section className="news" id="blog">

      <h2>Latest Crypto News</h2>

      <div className="news-container">

        {news?.slice(0,6).map((item,index)=>(

          <div className="news-card" key={index}>

            <img
              src={item.image_url}
              alt={item.title}
            />

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              Read More →
            </a>

          </div>

        ))}

      </div>

    </section>
  );
};

export default News;
