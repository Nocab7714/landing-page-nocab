<template>
  <section :style="{ backgroundImage: `url(${imageUrl.bgPaper})` }" class="text-center py-5">
    <div class="text-info fw-bold fs-4 mb-2">HAPPY LIFE</div>
    <h2 class="fw-bold fs-2">開始當個小懶蟲</h2>
  </section>
  <section class="py-5 container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <!-- 此處陰影已將 _utilities.scss 的 shadow 設定 responsive: true 並且關閉 values 的 lg 值-->
        <!-- lg 以變更為設定斷點 -->
        <form class="shadow-lg p-lg-5 needs-validation" novalidate>
          <h3 class="fw-bold fs-4 deco-line mb-3">選擇方案</h3>
          <div class="row row-cols-1 row-cols-lg-3 g-2 mb-5 text-gray">
            <div class="col">
              <a href="" class="btn btn-outline-info text-dark fw-bold w-100 btn-lg py-3"
                >小小搭懶蟲 <br class="d-none d-lg-block" />
                NT 298/月</a
              >
            </div>
            <div class="col">
              <a href="" class="btn btn-outline-info text-dark fw-bold w-100 btn-lg py-3"
                >睡一整天囉 <br class="d-none d-lg-block" />
                NT 666/月</a
              >
            </div>
            <div class="col">
              <a
                href=""
                class="btn btn-outline-info fw-bold w-100 btn-lg py-3 active btn-active-special"
                >客製化方案 <br class="d-none d-lg-block" />
                客服詢價</a
              >
            </div>
          </div>
          <h3 class="fw-bold fs-4 deco-line mb-3">填寫資料</h3>
          <div class="row row-cols-1 row-cols-lg-2 gx-2 mb-3">
            <div class="col">
              <label class="form-label" for="name">名字</label>
              <input class="form-control" type="text" id="name" required />
              <div class="invalid-feedback">請輸入您的名字</div>
            </div>
            <div class="col">
              <label class="form-label" for="surname">姓氏</label>
              <input class="form-control" type="text" id="surname" required />
              <div class="invalid-feedback">請輸入您的姓氏</div>
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label" for="phone">電話</label>
            <input class="form-control" type="phone" id="phone" required />
            <div class="invalid-feedback">請輸入您的電話號碼</div>
          </div>
          <div class="mb-3">
            <label class="form-label" for="email">電子郵件</label>
            <input class="form-control" type="email" id="email" required />
            <div class="invalid-feedback">請輸入您的電子郵件</div>
          </div>
          <div class="mb-3">
            <label class="form-label" for="address">住址</label>
            <input class="form-control" type="text" id="address" required />
            <div class="invalid-feedback">請輸入您的住址</div>
          </div>
          <div class="mb-3">
            <label class="form-label" for="contactTime">方便聯繫時間</label>
            <select class="form-select" id="contactTime" required>
              <option value="08-12">8:00-12:00</option>
              <option value="13-17" selected>13:00-17:00</option>
              <option value="19-22">19:00-22:00</option>
              <div class="invalid-feedback">請選擇方便聯繫您的時間!!</div>
            </select>
          </div>
          <fieldset class="mb-3">
            <legend class="col-form-label">加購服務</legend>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                value="option01"
                id="formCheckBoxAddOn01"
              />
              <label class="form-check-label" for="formCheckBoxAddOn01">每週一清掃家裡+100</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                value="option02"
                id="formCheckBoxAddOn02"
              />
              <label class="form-check-label" for="formCheckBoxAddOn02">按摩+50</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                value="option03"
                id="formCheckBoxAddOn03"
              />
              <label class="form-check-label" for="formCheckBoxAddOn03">聽你說話+150</label>
            </div>
          </fieldset>
          <div class="mb-4">
            <label class="form-label" for="comment">備註說明</label>
            <textarea
              class="form-control"
              name=""
              id="comment"
              placeholder="這邊可以留下您的備註!!"
              style="height: 86px"
            ></textarea>
          </div>
          <button class="btn btn-info text-dark w-100" type="submit">選擇方案</button>
        </form>
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
          'https://raw.githubusercontent.com/Nocab7714/landing-page-nocab/main/src/assets/images/bg_paper.png'
      }
    }
  },
  mounted() {
    // 驗證表單
    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach((form) => {
      form.addEventListener(
        'submit',
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        },
        false
      )
    })
  }
}
</script>
<style lang="scss">
@import '../assets/all.scss';
.deco-line {
  padding-left: 1rem;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 3px;
    background-color: $info;
  }
}
.btn-active-special {
  &.active {
    box-shadow: $box-shadow;
    color: $light;
  }
}
</style>
