const leftArr = document.getElementById("leftArr");
const rightArr = document.getElementById("rigthArr");
const textDiv = document.querySelector(".texts");
const sliderCon = document.querySelector(".sliderCon"); // to swipe left / right on mobile
let index = 0;

const texts = [
  "Antalya’nın Kumluca İlçesi, Sarıcasu Köyü yakınındaki Rhodiapolis, Rodoslular tarafından kurulmuş ve Likya Birliği üyesi olmuştur. En ünlü kişisi, Antonius Pius döneminde yaşamış hayırsever Opramoas’tır. Kent, Klasik Çağ kaya mezarları dışında, daha eski kalıntılara sahip değildir ve çoğunlukla Roma ve Bizans dönemi yapıları barındırır.Önemli kalıntılar arasında tiyatro, hamam, agora/stoa, tapınaklar, kilise, sarnıçlar ve nekropoller bulunur. Rhodiapolis’te ayrıca Grek planlı küçük bir tiyatro ve Opramoas’ın anıt-mezarı dikkat çeker. Nekropollerde Likya dilinde yazıtlı kaya mezarları da yer alır.",
  
  
  
  
  "Gelidonya Feneri, Antalya'nın Kumluca ilçesinde, Akdeniz manzarasına hakim bir noktada, Türkiye'nin en yüksek rakımlı deniz feneridir. 1936'da inşa edilen fener, 227 metre yükseklikte yer alır ve denizcilere rehberlik eder. Likya Yolu üzerinde bulunan fener, doğa yürüyüşçüleri için popüler bir destinasyondur. Tarihi ve stratejik önemiyle dikkat çeken Gelidonya Feneri, denizcilere hizmet vermeye devam ederken, doğa severler ve fotoğrafçılar için de büyüleyici bir ziyaret noktasıdır.",
  

  "Olympos Antik Kenti, Antalya'nın Kumluca ilçesinde, Likya Birliği'nin önemli şehirlerinden biri olarak M.Ö. 2. yüzyılda kurulmuştur. Tarihi kalıntıları arasında tiyatro, hamam, tapınaklar ve mezarlar bulunur. Roma döneminde önemli bir liman kenti olan Olympos, bugün tarihi ve doğal güzellikleriyle turistlerin ilgisini çeker. Kentin içinden geçen Olympos Çayı ve çevresindeki plajlar, ziyaretçilere eşsiz bir deneyim sunar. ",

  
  
];

function slideLeft() {
  if (index == 0) index = texts.length - 1;
  else index--;
  gsap.to(".images", 0.3, { x: `${-index * 100}%` });
  textDiv.textContent = texts[index];
  gsap.from(textDiv, 0.5, { y: -20, opacity: 0, ease: "power3.out" });
}

function slideRight() {
  if (index == texts.length - 1) index = 0;
  else index++;
  gsap.to(".images", 0.3, { x: `${-index * 100}%` });
  textDiv.textContent = texts[index];
  gsap.from(textDiv, 0.5, { y: -20, opacity: 0, ease: "power3.out" });
}

leftArr.addEventListener("click", slideLeft);
rightArr.addEventListener("click", slideRight);

// SWIPE FUNCTIONALITY FOR MOBILE ⬇
let start = null;
sliderCon.addEventListener("touchstart", function (event) {
  if (event.touches.length === 1) start = event.touches.item(0).clientX;
  else start = null;
});

sliderCon.addEventListener("touchend", function (event) {
  let offset = 30; // at least 30px
  if (start) {
    let end = event.changedTouches.item(0).clientX;
    if (end > start + offset) slideLeft();
    if (end < start - offset) slideRight();
  }
});
