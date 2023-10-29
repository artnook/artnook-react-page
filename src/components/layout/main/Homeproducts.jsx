import React from "react";

import thumb1 from "../../../assets/images/suprem1.png";
import styles from "../../../css/styles.module.css";

const HomeProducts = () => {
  return (
    <div>
      <div className={styles.Containertitle}>
        <div className={styles.Titlewrap}>
          <div className={styles.Title}>Just Dropped</div>
          <div className={styles.Subtitle}>발매 상품</div>
        </div>
        <div className={styles.plus}>
          <a href="#" className={styles.Containerdestination}>
            더보기
          </a>
        </div>
      </div>
      <div className={styles.Productlistwrap}>
        <div className={styles.Productlistfirst}>
          <div className={styles.Productitem}>
            <a href="#" className={styles.Iteminner}>
              <div className={styles.Thumbbox}>
                <img src={thumb1} alt="supreme" />
              </div>
              <div className={styles.Infobox}>
                <div className={styles.Brand}>
                  <p className={styles.Brandtext}>Supreme</p>
                </div>
                <p className={styles.Name}>
                  Supreme x Stone Island Denim Trucker Jacket Reflective - 23FW
                </p>
                <div className={styles.Price}>
                  <div className={styles.Amountlg}>
                    <em className={styles.Num}>1,824,000원</em>
                  </div>
                  <div className={styles.Desc}>
                    <p>즉시 구매가</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className={styles.Productitem}>
            <a href="#" className={styles.Iteminner}>
              <div className={styles.Thumbbox}>
                <img src={thumb1} alt="supreme" />
              </div>
              <div className={styles.Infobox}>
                <div className={styles.Brand}>
                  <p className={styles.Brandtext}>Supreme</p>
                </div>
                <p className={styles.Name}>
                  Supreme x Stone Island Denim Trucker Jacket Reflective - 23FW
                </p>
                <div className={styles.Price}>
                  <div className={styles.Amountlg}>
                    <em className={styles.Num}>1,824,000원</em>
                  </div>
                  <div className={styles.Desc}>
                    <p>즉시 구매가</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className={styles.Productitem}>
            <a href="#" className={styles.Iteminner}>
              <div className={styles.Thumbbox}>
                <img src={thumb1} alt="supreme" />
              </div>
              <div className={styles.Infobox}>
                <div className={styles.Brand}>
                  <p className={styles.Brandtext}>Supreme</p>
                </div>
                <p className={styles.Name}>
                  Supreme x Stone Island Denim Trucker Jacket Reflective - 23FW
                </p>
                <div className={styles.Price}>
                  <div className={styles.Amountlg}>
                    <em className={styles.Num}>1,824,000원</em>
                  </div>
                  <div className={styles.Desc}>
                    <p>즉시 구매가</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className={styles.Productitem}>
            <a href="#" className={styles.Iteminner}>
              <div className={styles.Thumbbox}>
                <img src={thumb1} alt="supreme" />
              </div>
              <div className={styles.Infobox}>
                <div className={styles.Brand}>
                  <p className={styles.Brandtext}>Supreme</p>
                </div>
                <p className={styles.Name}>
                  Supreme x Stone Island Denim Trucker Jacket Reflective - 23FW
                </p>
                <div className={styles.Price}>
                  <div className={styles.Amountlg}>
                    <em className={styles.Num}>1,824,000원</em>
                  </div>
                  <div className={styles.Desc}>
                    <p>즉시 구매가</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className={styles.Productitem}>
            <a href="#" className={styles.Iteminner}>
              <div className={styles.Thumbbox}>
                <img src={thumb1} alt="supreme" />
              </div>
              <div className={styles.Infobox}>
                <div className={styles.Brand}>
                  <p className={styles.Brandtext}>Supreme</p>
                </div>
                <p className={styles.Name}>
                  Supreme x Stone Island Denim Trucker Jacket Reflective - 23FW
                </p>
                <div className={styles.Price}>
                  <div className={styles.Amountlg}>
                    <em className={styles.Num}>1,824,000원</em>
                  </div>
                  <div className={styles.Desc}>
                    <p>즉시 구매가</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.Btnproduct}>
        <a href="#" className={styles.Btnoutlinegrey}>
          더보기
        </a>
      </div>
    </div>
  );
};

export default HomeProducts;
