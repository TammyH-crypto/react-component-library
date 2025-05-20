import React from "react";

export default function Card() {
  return (
    <div className="card">
      <img
        className="card__image"
        src="https://target.scene7.com/is/image/Target/GUEST_f11dfae8-f38b-450d-b4b4-54c60372bf99?wid=800&hei=800&qlt=80&fmt=pjpeg"
      />
      <div className="card__content">
        <h2 className="card__title"></h2>
        <p className="card__description"></p>
      </div>
      <div className="card">
        <img
          className="card__image"
          src="https://target.scene7.com/is/image/Target/GUEST_f11dfae8-f38b-450d-b4b4-54c60372bf99?wid=800&hei=800&qlt=80&fmt=pjpeg"
        />
        <div className="card__content">
          <h2 className="card__title"></h2>
          <p className="card__description"></p>
        </div>
      </div>
    </div>
  );
}
