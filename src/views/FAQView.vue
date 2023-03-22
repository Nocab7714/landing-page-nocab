<template>
  <section :style="{ backgroundImage: `url(${imageUrl.bgPaper})` }" class="text-center py-5">
    <div class="text-info fw-bold fs-4 mb-2">Q&A</div>
    <h2 class="fw-bold fs-2">常見問題</h2>
  </section>
  <section class="container py-5">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-6">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                方案的服務內容可以調整嗎？
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                興雙級信片有代意沒錢的壓。快不意去人，河過國了文的主府把期下北更座濟頭基身地真；汽拿院設數，聲身功親一論。此告心行條？個升再些，時比國驗評來爸不生球，來也實列南眼新師是業音到英交第許廠天人半中商物差。想曾溫現：停多比式，明四人個當亞思海滿二……樂而與爸的要能地也理度人但，育個德半體來也灣感地下會南的此邊小從好量金相病人備們？朋得轉……是目光單及但謝界向進往發！進念結去：們育高再：幾受時世居放！天我合我卻見度！商調生型星使爸出賣可特，表色想，低為度。
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                一次只能購買一年嗎？
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">是的!! 沒有錯喔</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                付款方式有哪些呢？
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                目前的付款方式有 : 信用卡（VISA/MasterCard/JCB 付款）、7-11 ibon /全家 famiport
                代碼繳費、7-11 取貨付款、轉帳付款、Apple Pay 等等
              </div>
            </div>
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
          'https://raw.githubusercontent.com/Nocab7714/landing-page-nocab/main/images/bg_paper.png'
      }
    }
  }
}
</script>
