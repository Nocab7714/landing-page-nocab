<template>
  <header
    class="header px-4 py-5 d-flex align-items-lg-center justify-content-center"
    :style="{ backgroundImage: `url(${imageUrl.bgHome})` }"
  >
    <div class="text-white text-center">
      <p>你是不是也有夢想</p>
      <h1 class="fw-bold display-48">當個小懶蟲?</h1>
      <p>
        想有人幫你丟垃圾、澆花、買飯、洗衣服，最好還可以幫你寫功課、工作！<br />
        不想做討厭的事也不想被罵，只想把時間花在更喜歡的事情上，<br />
        來！就讓我們幫你實現願望^__^!
      </p>
    </div>
  </header>
  <section class="container my-5" id="serviceIntroduction">
    <div class="row flex-row-reverse justify-content-center">
      <div class="col-lg-6 d-flex align-items-center">
        <div>
          <h2 class="fw-bold">讓我們幫你節省寶貴的時間</h2>
          <p class="text-secondary lh-lg">
            我們有專業的清潔大師、花草大師，<br />
            也有學霸、來自各界的專業人才，<br />
            幫您處理您沒時間做的小事、大事，<br />
            讓你安心把人生花在你覺得更有意義的事情上！<br />
            （只要您有錢即可
          </p>
        </div>
      </div>
      <div class="col-lg-6">
        <img :src="`${imageUrl.info}`" alt="info" class="w-100 img-fluid" />
      </div>
    </div>
  </section>
  <section class="py-5" :style="{ backgroundImage: `url(${imageUrl.bgPaper})` }">
    <div class="container">
      <h2 class="text-center fs-2 mb-5 fw-bold">你有這些煩惱嗎？</h2>
      <div class="row row-cols-1 row-cols-lg-4 g-3 g-lg-4">
        <div class="col">
          <div class="card border-0 shadow">
            <div class="card-body text-center">
              <i class="bi bi-trash-fill text-info display-48"></i>
              <h3 class="card-title h4 fw-bold mt-2">追不到垃圾車</h3>
              <p class="card-text text-secondary lh-lg">
                每天追垃圾很煩嗎？倒個垃圾還要走出門好累對吧？
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card border-0 shadow">
            <div class="card-body text-center">
              <i class="bi bi-tree-fill text-info display-48"></i>
              <h3 class="card-title h4 fw-bold mt-2">不會照顧盆栽</h3>
              <p class="card-text text-secondary lh-lg">
                覺得很可愛所以買一堆，結果根本不會照顧，快死光了？
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card border-0 shadow">
            <div class="card-body text-center">
              <i class="bi bi-journal-bookmark-fill text-info display-48"></i>
              <h3 class="card-title h4 fw-bold mt-2">作業不會寫</h3>
              <p class="card-text text-secondary lh-lg">
                什麼微積分、程式設計、或是設計稿，不會做也不想做？
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card border-0 shadow">
            <div class="card-body text-center">
              <i class="bi bi-emoji-frown-fill text-info display-48"></i>
              <h3 class="card-title h4 fw-bold mt-2">很不開心</h3>
              <p class="card-text text-secondary lh-lg">
                每天都把時間花在不想做的事情就飽了，怎麼快樂？
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="container my-5" id="costOfTheSolution">
    <h2 class="fw-bold text-center mb-4">方案費用</h2>
    <div class="row row-cols-1 row-cols-lg-3 g-4">
      <div class="col">
        <div class="card border-0 shadow h-100">
          <div
            class="cart-header text-secondary fs-4 text-center fw-bold py-2"
            style="background-color: #f8f9fa"
          >
            小小搭懶蟲
          </div>
          <div class="card-body text-center flex-grow-0">
            <img :src="`${imageUrl.plan01}`" alt="plan01.jpg" class="img-fluid my-3" />
            <div class="text-info fw-bold">NT<strong class="fs-1"> 298 </strong>/月</div>
          </div>
          <ul class="list-group list-group-flush border-top border-bottom">
            <li class="list-group-item text-secondary">
              <i class="bi bi-check-lg text-info me-2"></i>每週三天定時收垃圾
            </li>

            <li class="list-group-item text-secondary">
              <i class="bi bi-check-lg text-info me-2"></i>當你的小鬧鐘，提醒你要完成的重要事項
            </li>
            <li class="list-group-item text-secondary">
              <i class="bi bi-check-lg text-info me-2"></i>幫你查資料
            </li>
          </ul>
          <div class="card-body d-flex">
            <button type="button" class="btn btn-info text-black w-100 fw-bold fs-5 align-self-end">
              選擇方案
            </button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card border-0 shadow h-100">
          <div class="cart-header text-white bg-info fs-4 text-center fw-bold py-2">睡一整天囉</div>
          <div class="card-body text-center">
            <img :src="`${imageUrl.plan02}`" alt="plan02.jpg" class="img-fluid my-3" />
            <div class="text-info fw-bold">NT<strong class="fs-1"> 666 </strong>/月</div>
          </div>
          <ul class="list-group list-group-flush border-top border-bottom">
            <li class="list-group-item text-secondary">
              <i class="bi bi-check-lg text-info me-2"></i>小懶蟲方案所有服務
            </li>
            <li class="list-group-item text-secondary">
              <i class="bi bi-check-lg text-info me-2"></i>每週一天幫你整理房間
            </li>
            <li class="list-group-item text-secondary">
              <i class="bi bi-check-lg text-info me-2"></i>幫你安排三餐（會先確認你的喜好）
            </li>
            <li class="list-group-item text-secondary">
              <i class="bi bi-check-lg text-info me-2"></i>每週一天幫你採買日用品（限台灣）
            </li>
          </ul>
          <div class="card-body">
            <button type="button" class="btn btn-info text-black w-100 fw-bold fs-5">
              選擇方案
            </button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card border-0 shadow h-100">
          <div
            class="cart-header text-secondary fs-4 text-center fw-bold py-2"
            style="background-color: #f8f9fa"
          >
            自由自在的人生
          </div>
          <div class="card-body text-center flex-grow-0">
            <img :src="`${imageUrl.plan03}`" alt="plan03.jpg" class="img-fluid my-3" />
            <div class="text-info fw-bold fs-5 my-3 flex-grow-0">客製化詢價</div>
          </div>
          <ul class="list-group list-group-flush border-top border-bottom">
            <li class="list-group-item text-secondary ps-5">
              <i class="bi bi-check-lg text-info me-2 position-absolute start-0 ms-3"></i
              >希望有個小秘書、小幫手，完成您交辦的客製化任務，歡迎與我們聯繫！
            </li>
          </ul>
          <div class="card-body d-flex">
            <button type="button" class="btn btn-info text-black w-100 fw-bold fs-5 align-self-end">
              選擇方案
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: {
        bgPaper:
          'https://raw.githubusercontent.com/Nocab7714/landing-page-nocab/main/public/images/bg_paper.webp',
        bgHome:
          'https://raw.githubusercontent.com/Nocab7714/landing-page-nocab/main/public/images/home_bg.webp',
        info: 'https://raw.githubusercontent.com/Nocab7714/landing-page-nocab/main/public/images/info.webp',
        plan01:
          'https://raw.githubusercontent.com/Nocab7714/landing-page-nocab/main/public/images/plan01.webp',
        plan02:
          'https://raw.githubusercontent.com/Nocab7714/landing-page-nocab/main/public/images/plan02.webp',
        plan03:
          'https://raw.githubusercontent.com/Nocab7714/landing-page-nocab/main/public/images/plan03.webp'
      }
    }
  }
}
</script>
<style lang="scss">
// header
.header {
  height: 627px;
  background-position: bottom, center;
  background-size: cover;
}
</style>
