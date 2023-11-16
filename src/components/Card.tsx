function Card() {
  return (
    <>
      <div className="itemCard pt-3 ps-4 pe-4 pb-4 d">
        <img
          src="/img/hearth.svg"
          alt="hearth"
          className="position-absolute hearthBtn"
          width={32}
          height={32}
        />
        <img
          src="/img/sneakers/sneakers-1.jpg"
          alt="sneakers"
          width={133}
          height={112}
          className="mb-3"
        />
        <p className="nameOfItem fw-normal">
          Мужские Кроссовки Nike Air Max 270
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex flex-column">
            <span className="text-muted text-uppercase">Цена:</span>
            <b>12 999 руб.</b>
          </div>
          <button className="button d-flex justify-content-center align-items-center">
            <img
              src="/img/plusBtn.svg"
              width={32}
              height={32}
              alt="plus icon"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
