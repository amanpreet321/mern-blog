import React from "react";

function post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://duet-cdn.vox-cdn.com/thumbor/0x0:1600x871/1200x800/filters:focal(800x436:801x437):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24566758/unnamed__7_.png"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p className="info">
          <a href="#" className="author">
            amanpreet
          </a>
          <timne>06-12-2023</timne>
        </p>
        <p className="summary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          quos? Necessitatibus provident sit veniam iure reprehenderit delectus
          quas? Quis officia exercitationem odio incidunt perferendis impedit
          fugit praesentium nam voluptas debitis?
        </p>
      </div>
    </div>
  );
}

export default post;
