import Layout from "../../components/Layout";
import home from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <Layout>
      <div className={home.header}>
        <div className={home.header__left}>
          <h1>Dashboard</h1>
        </div>
        <div className={home.header__right}>
          <ul className={home.header__right__icons}>
            <li>
              <FontAwesomeIcon size="2x" icon={faSearch} />
            </li>
            <li>
              <FontAwesomeIcon size="2x" icon={faUserCircle} />
            </li>
          </ul>
        </div>
      </div>
      <div className={home.section}>
        <div className={home.section__left}>
          <div className={home.section__left__balance}>
            <div className={home.wrapper}>
              <div className={home.section__left__balance__title}>
                Your balance
              </div>
              <h4 className={home.section__left__balance__price}>
                12.761,55 USD
              </h4>
              <div className={home.section__left__balance__chart}></div>
            </div>
          </div>

          <div className={home.section__left__following}>
            <div className={home.section__left__following__title}>
              Following
            </div>
            <div className={home.section__left__following__cards}>
              {/* Card */}
              <div className={home.card}>
                {/* Card icon */}
                <div className={home.card__icon}>
                  <img src="/icons/bitcoin-logo.png" alt="" />
                </div>

                {/* Card body */}
                <div className={home.card__body}>
                  <h6 className={home.card__body__name}>Bitcoin</h6>
                  <p className={home.card__body__price}>5.764,54 USD</p>
                  <span className={home.card__body__quantity}>0.30 BTC</span>
                </div>
                {/* Card chart */}
                <div className={home.card__chart}></div>
              </div>
              {/* Card */}
              <div className={home.card}>
                {/* Card icon */}
                <div className={home.card__icon}>
                  <img src="/icons/tether-logo.png" alt="" />
                </div>

                {/* Card body */}
                <div className={home.card__body}>
                  <h6 className={home.card__body__name}>Tether</h6>
                  <p className={home.card__body__price}>211,05 USD</p>
                  <span className={home.card__body__quantity}>15.2 USDT</span>
                </div>
                {/* Card chart */}
                <div className={home.card__chart}></div>
              </div>
              {/* Card */}
              <div className={home.card}>
                {/* Card icon */}
                <div className={home.card__icon}>
                  <img src="/icons/link-logo.png" alt="" />
                </div>

                {/* Card body */}
                <div className={home.card__body}>
                  <h6 className={home.card__body__name}>Chainlink</h6>
                  <p className={home.card__body__price}>983,13 USD</p>
                  <span className={home.card__body__quantity}>23 LINK</span>
                </div>
                {/* Card chart */}
                <div className={home.card__chart}></div>
              </div>
            </div>
          </div>
        </div>

        <div className={home.section__right}>
          <div className={home.section__right__chart}>
            <div className={home.section__right__chart__graph}></div>
            <div className={home.section__right__chart__list}>
              <div className={home.container}>
                <div className={home.item}>
                  <img
                    src="/icons/bitcoin-logo.png"
                    width="40"
                    height="40"
                    alt="coin icon"
                  />
                  <p className={home.item__name}>Bitcoin</p>
                </div>
                <div className={home.item}>
                  <img
                    src="/icons/link-logo.png"
                    width="40"
                    height="40"
                    alt="coin icon"
                  />
                  <p className={home.item__name}>Chainlink</p>
                </div>
                <div className={home.item}>
                  <img
                    src="/icons/cardano-logo.png"
                    width="40"
                    height="40"
                    alt="coin icon"
                  />
                  <p className={home.item__name}>Cardano</p>
                </div>
                <div className={home.item}>
                  <img
                    src="/icons/tether-logo.png"
                    width="40"
                    height="40"
                    alt="coin icon"
                  />
                  <p className={home.item__name}>Tether</p>
                </div>
              </div>
            </div>
          </div>

          <div className={home.section__right__activities}>
            <div className={home.title}>Latest activities</div>
            <div className={home.container}>
              <div className={home.list}>
                <div className={home.list__item}>
                  <div className={home.list__item__left}>
                    <img src="/icons/cardano-logo.png" alt="" />
                    <h5>Received ADA</h5>
                  </div>
                  <div className={home.list__item__mid}>
                    <p>09/28/2020 19.22</p>
                  </div>
                  <div className={home.list__item__end}>
                    <p>+15.08 USD</p>
                    <span>15.2 ADA</span>
                  </div>
                </div>
                <div className={home.list__item}>
                  <div className={home.list__item__left}>
                    <img src="/icons/bitcoin-logo.png" alt="" />
                    <h5>Received BTC</h5>
                  </div>
                  <div className={home.list__item__mid}>
                    <p>09/18/2020 09.15</p>
                  </div>
                  <div className={home.list__item__end}>
                    <p>+120.1 USD</p>
                    <span>0.0065 BTC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
