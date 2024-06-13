function CabinetComponent() {

    return (
      <div className="header__right">
      <h2 className="profile_title">Мой профиль</h2>
      <div className="profile-avatar">
        <img className="profile-avatar-img" src="./public/markup/images/Avatar.svg" alt="Аватар" />
        <img className="profile-avatar-img-circle" src="./public/markup/images/circle.svg" alt="круг" />
        <button className="button_bell">
          <img src="./public/markup/images/Bell.svg" alt="колокольчик" />
        </button>
      </div>
      <div className="profile-info">
        <span className="profile-name">Маша Иванова</span>
        <span className="profile-role">Член Команды</span>
        <button className="button_exit">
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.20898 10.5004V13.7546C4.20898 14.4485 4.7719 15.0114 5.46577 15.0114H10.9491C11.643 15.0114 12.2059 14.4485 12.2059 13.7546V4.19183C12.2059 3.49757 11.643 2.93506 10.9491 2.93506H5.46577C4.7719 2.93506 4.20898 3.49757 4.20898 4.19183V7.44561" stroke="#ED1C29" stroke-width="1.19399" stroke-miterlimit="2" stroke-linecap="square"/>
            <path d="M5.52344 10.5003V13.3793C5.52344 13.5547 5.66562 13.6969 5.84102 13.6969H10.5741C10.7495 13.6969 10.8917 13.5547 10.8917 13.3793V4.56647C10.8917 4.39107 10.7495 4.2489 10.5741 4.2489H5.84102C5.66562 4.2489 5.52344 4.39107 5.52344 4.56647V7.4455" stroke="#ED1C29" stroke-width="0.238799" stroke-miterlimit="10" stroke-linecap="square"/>
            <path d="M2.08221 8.96567L2.07972 8.97318L2.08221 8.98068L2.90632 11.4706H1.88104L1.05445 8.97318L1.88104 6.47578H2.90632L2.08221 8.96567Z" fill="#ED1C29" stroke="#ED1C29" stroke-width="0.0477597"/>
            <path d="M1.27148 8.97327H7.14737" stroke="#ED1C29" stroke-width="1.19399" stroke-miterlimit="10"/>
            </svg>

        </button>
      </div>
      <h2 className="title_certificates">Мои Сертификаты</h2>
      <div className="certificates">
        <div className="certificate">
          <div className="icon">
            <img src="./public/markup/images/certificates.jpg" alt="Иконка сертификата" />
          </div>
          <div className="info">
            <h3>Сертификат Обслуживание</h3>
            <div className="progress">
              <div className="bar"></div>
            </div>
            <p>В процессе</p>
          </div>
        </div>
        <div className="certificate">
          <div className="icon">
            <img src="./public/markup/images/certificates.jpg" alt="Иконка сертификата" />
          </div>
          <div className="info">
            <h3>Сертификат Обслуживание</h3>
            <p>Присвоена</p>
            <p>15.03.2023</p>
          </div>
        </div>
        <div className="certificates-controls">
          <button className="prev-certificate">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99974 1.16823C14.8774 1.16823 18.8315 5.12236 18.8315 10C18.8315 14.8777 14.8774 18.8318 9.99974 18.8318C5.12209 18.8318 1.16797 14.8777 1.16797 10C1.16797 5.12236 5.12209 1.16823 9.99974 1.16823Z"
                stroke="#858687"
                stroke-width="1.37852"
                stroke-linejoin="bevel"
              />
              <path
                d="M11.5605 6.0704L6.93359 9.99991L11.5605 13.9294"
                stroke="#858687"
                stroke-width="1.38"
                stroke-linejoin="bevel"
              />
            </svg>
          </button>
          <button className="next-certificate">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6667 2.06964C15.3226 2.06964 19.097 5.84402 19.097 10.5C19.097 15.1559 15.3226 18.9303 10.6667 18.9303C6.01072 18.9303 2.23633 15.1559 2.23633 10.5C2.23633 5.84402 6.01072 2.06964 10.6667 2.06964Z"
                stroke="#858687"
                stroke-width="1.37852"
                stroke-linejoin="bevel"
              />
              <path
                d="M8.69922 14.251L13.1158 10.5001L8.69922 6.74916"
                stroke="#858687"
                stroke-width="1.38"
                stroke-linejoin="bevel"
              />
            </svg>
          </button>
        </div>
      </div>
      <button className="button_certificates">
        <img src="./public/markup/images/bell-pink.svg" alt="Иконка уведомления" />
        <p>Внеплановая сертификация</p>
      </button>
      <div className="calendar">
        <h3>Календарь Мероприятий</h3>
        <div className="ivent">
          <div className="ivent-info">
            <h4>WCO</h4>
            <p>01.03.2024 14:00</p>
          </div>
          <img src="./public/markup/images/ivent-image.svg" alt="Иконка календаря" />
        </div>
      </div>
</div>
    )
}

export default CabinetComponent