!function(e){var a={};function t(p){if(a[p])return a[p].exports;var l=a[p]={i:p,l:!1,exports:{}};return e[p].call(l.exports,l,l.exports,t),l.l=!0,l.exports}t.m=e,t.c=a,t.d=function(e,a,p){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:p})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var p=Object.create(null);if(t.r(p),Object.defineProperty(p,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var l in e)t.d(p,l,function(a){return e[a]}.bind(null,l));return p},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=0)}([function(e,a,t){"use strict";t.r(a);const p=document.querySelector(".body"),l=document.querySelector(".navigation"),i=document.querySelector(".navigation__logo"),o=document.querySelector(".navigation__list"),r=document.querySelectorAll(".navigation__item"),n=document.querySelectorAll(".navigation__link"),c=document.querySelector(".navigation__menu-close-button"),m=document.querySelector(".navigation__menu-open-button"),g=document.querySelectorAll(".tab__link"),u=(document.querySelector(".place"),document.querySelector(".place__more-title"),document.querySelector(".place__more-text"),document.querySelector(".place__review"),document.querySelector(".place__review-text"),document.querySelector(".place__review-author-image-source"),document.querySelector(".place__review-author-image"),document.querySelector(".place__review-author-name"),document.querySelectorAll("[data-button-buy]")),b=document.querySelectorAll(".catalog__item"),s=document.querySelector(".callback__form"),d=document.querySelector(".callback__input-phone"),v=document.querySelector(".callback__input-email"),w=document.querySelector(".popup-buy-tour"),x=document.querySelector(".popup-buy-tour__form"),k=document.querySelector(".popup-buy-tour__form-input-phone"),y=document.querySelector(".popup-buy-tour__form-input-email"),I=(document.querySelector(".popup-buy-tour__form-input-push"),document.querySelector(".popup-buy-tour__form-button-close")),_=document.querySelector(".popup-buy-tour-success"),h=document.querySelectorAll("input"),f=(window.devicePixelRatio,window.innerWidth,window.innerWidth>=768&&window.innerWidth,window.innerWidth>=320&&window.innerWidth,[{placeTitle:"Греция",placeText:"На севере Греции находится один из крупнейших комплексов монастырей, расположенных на вершинах скал. Название его «Метеора» буквально переводится как «висящие в воздухе». Этот монастырь основная цель нашего путешествия в Греции. После покарения скал из песчанника и обломочной горной породы, достигающих в высоту 600 метров, наградой будет неописуемая красота природы и атмосфера, царящая в монастырях Метеоры.",placeImageDesktopWebpRetina:'url("img/place-greece-desktop@2x.webp") no-repeat 470px 65px',placeImageDesktopWebp:'url("img/place-greece-desktop.webp") no-repeat 470px 65px',placeImageDesktopRetina:'url("img/place-greece-desktop@2x.png") no-repeat 470px 65px',placeImageDesktop:'url("img/place-greece-desktop.png") no-repeat 470px 65px',placeImageTabletWebpRetina:'url("img/place-greece-tablet@2x.webp") no-repeat 0',placeImageTabletWebp:'url("img/place-greece-tablet.webp") no-repeat 0',placeImageTabletRetina:'url("img/place-greece-tablet@2x.png") no-repeat 0',placeImageTablet:'url("img/place-greece-tablet.png") no-repeat 0',placeImageMobileWebpRetina:'url("img/place-greece-mobile@2x.webp") no-repeat 0',placeImageMobileWebp:'url("img/place-greece-mobile.webp") no-repeat 0',placeImageMobileRetina:'url("img/place-greece-mobile@2x.png") no-repeat 0',placeImageMobile:'url("img/place-greece-mobile.png") no-repeat 0',reviewText:"Метеоры в Греции можно сравнить разве что с Монсерратт в Испании. Такие же высоченные скалы. Но здесь потрясает масштаб. Огромная территория, высоко в горах. Ощущение такое, как будто стоишь на краю света!",reviewName:"Влада Голицина",reviewImageWebpRetina:"img/review-author-vlada.webp 1x, img/review-author-vlada@2x.webp 2x",reviewImageRetina:"img/review-author-vlada@2x.png 2x",reviewImage:"img/review-author-vlada.png"},{placeTitle:"Албания",placeText:"В Албании мы посетим Курорт Ксамиль. Этот курорт поразит вас чистейшей водой и удивительным пляжем. Вначале кажется, что на пляже вас встречает обычный, правда невероятно белоснежный и слишком крупный песок. Однако, присмотревшись, можно понять, что это не песок, а камни, перетёртые до такого мелкого состояния.",placeImageDesktopWebpRetina:'url("img/place-albany-desktop@2x.webp") no-repeat 470px 65px',placeImageDesktopWebp:'url("img/place-albany-desktop.webp") no-repeat 470px 65px',placeImageDesktopRetina:'url("img/place-albany-desktop@2x.png") no-repeat 470px 65px',placeImageDesktop:'url("img/place-albany-desktop.png") no-repeat 470px 65px',placeImageTabletWebpRetina:'url("img/place-albany-tablet@2x.webp") no-repeat 0',placeImageTabletWebp:'url("img/place-albany-tablet.webp") no-repeat 0',placeImageTabletRetina:'url("img/place-albany-tablet@2x.png") no-repeat 0',placeImageTablet:'url("img/place-albany-tablet.png") no-repeat 0',placeImageMobileWebpRetina:'url("img/place-albany-mobile@2x.webp") no-repeat 0',placeImageMobileWebp:'url("img/place-albany-mobile.webp") no-repeat 0',placeImageMobileRetina:'url("img/place-albany-mobile@2x.png") no-repeat 0',placeImageMobile:'url("img/place-albany-mobile.png") no-repeat 0',reviewText:"Замечательный курорт, обязательно стоит посетить. В следующий раз возьму с собой сестру, чтобы тоже смогла вкусить все красоты природы :)",reviewName:"Маришка",reviewImageWebpRetina:"img/review-author-marishka.webp 1x, img/review-author-marishka@2x.webp 2x",reviewImageRetina:"img/review-author-marishka@2x.png 2x",reviewImage:"img/review-author-marishka.png"},{placeTitle:"Македония",placeText:"В Македонии нашей целью будет посетить Палаошник, который расположился в удивительно красивой лесистой местности возле Охридского озера и Самуиловой твердыни. А также мы заберемся на вершину горы Татичев Камен где находится  археологический памятник Кокино в длину около 100 метров.",placeImageDesktopWebpRetina:'url("img/place-makedonia-desktop@2x.webp") no-repeat 470px 65px',placeImageDesktopWebp:'url("img/place-makedonia-desktop.webp") no-repeat 470px 65px',placeImageDesktopRetina:'url("img/place-makedonia-desktop@2x.png") no-repeat 470px 65px',placeImageDesktop:'url("img/place-makedonia-desktop.png") no-repeat 470px 65px',placeImageTabletWebpRetina:'url("img/place-makedonia-tablet@2x.webp") no-repeat 0',placeImageTabletWebp:'url("img/place-makedonia-tablet.webp") no-repeat 0',placeImageTabletRetina:'url("img/place-makedonia-tablet@2x.png") no-repeat 0',placeImageTablet:'url("img/place-makedonia-tablet.png") no-repeat 0',placeImageMobileWebpRetina:'url("img/place-makedonia-mobile@2x.webp") no-repeat 0',placeImageMobileWebp:'url("img/place-makedonia-mobile.webp") no-repeat 0',placeImageMobileRetina:'url("img/place-makedonia-mobile@2x.png") no-repeat 0',placeImageMobile:'url("img/place-makedonia-mobile.png") no-repeat 0',reviewText:"Я бы сказал необычное старое здание. В архитектуре я не разбираюсь, но подъем в гору был очень веселым так как люди оказались легкими и заводными. Красота природы впечатлила, особенно после долгого пути в гору.",reviewName:"Михаил Кузьмин",reviewImageWebpRetina:"img/review-author-michael.webp 1x, img/review-author-michael@2x.webp 2x",reviewImageRetina:"img/review-author-michael@2x.png 2x",reviewImage:"img/review-author-michael.png"},{placeTitle:"Черногория",placeText:"Черногория удивит нас самым большим в Европе каньоном реки Тара, который в некоторых местах высотой берегов доходит до 1300 метров, а шириной не превышает трех. При этом длина каньона составляет 80 км.",placeImageDesktopWebpRetina:'url("img/place-montenegrin-desktop@2x.webp") no-repeat 470px 65px',placeImageDesktopWebp:'url("img/place-montenegrin-desktop.webp") no-repeat 470px 65px',placeImageDesktopRetina:'url("img/place-montenegrin-desktop@2x.png") no-repeat 470px 65px',placeImageDesktop:'url("img/place-montenegrin-desktop.png") no-repeat 470px 65px',placeImageTabletWebpRetina:'url("img/place-montenegrin-tablet@2x.webp") no-repeat 0',placeImageTabletWebp:'url("img/place-montenegrin-tablet.webp") no-repeat 0',placeImageTabletRetina:'url("img/place-montenegrin-tablet@2x.png") no-repeat 0',placeImageTablet:'url("img/place-montenegrin-tablet.png") no-repeat 0',placeImageMobileWebpRetina:'url("img/place-montenegrin-mobile@2x.webp") no-repeat 0',placeImageMobileWebp:'url("img/place-montenegrin-mobile.webp") no-repeat 0',placeImageMobileRetina:'url("img/place-montenegrin-mobile@2x.png") no-repeat 0',placeImageMobile:'url("img/place-montenegrin-mobile.png") no-repeat 0',reviewText:"Неописуемой красоты каньон! Ничего прекраснее в жизни не видела, разве что в фильмах :) Всем советую",reviewName:"Анастасия Мей",reviewImageWebpRetina:"img/review-author-anastasia.webp 1x, img/review-author-anastasia@2x.webp 2x",reviewImageRetina:"img/review-author-anastasia@2x.png 2x",reviewImage:"img/review-author-anastasia.png"},{placeTitle:"Хорватия",placeText:"В Хорватии мы посетим необычайную пещеру названную Бередине. Ее подземный мир увлечет вас на 80-ти метровую глубину через 5 освещенных залов, украшенных удивительными нерукотворными скульптурами —  сталактитами и сталагмитами —  формировавшимися тысячи и тысячи лет.",placeImageDesktopWebpRetina:'url("img/place-croatia-desktop@2x.webp") no-repeat 470px 65px',placeImageDesktopWebp:'url("img/place-croatia-desktop.webp") no-repeat 470px 65px',placeImageDesktopRetina:'url("img/place-croatia-desktop@2x.png") no-repeat 470px 65px',placeImageDesktop:'url("img/place-croatia-desktop.png") no-repeat 470px 65px',placeImageTabletWebpRetina:'url("img/place-croatia-tablet@2x.webp") no-repeat 0',placeImageTabletWebp:'url("img/place-croatia-tablet.webp") no-repeat 0',placeImageTabletRetina:'url("img/place-croatia-tablet@2x.png") no-repeat 0',placeImageTablet:'url("img/place-croatia-tablet.png") no-repeat 0',placeImageMobileWebpRetina:'url("img/place-croatia-mobile@2x.webp") no-repeat 0',placeImageMobileWebp:'url("img/place-croatia-mobile.webp") no-repeat 0',placeImageMobileRetina:'url("img/place-croatia-mobile@2x.png") no-repeat 0',placeImageMobile:'url("img/place-croatia-mobile.png") no-repeat 0',reviewText:"Мы поехали всей семьей, я, моя жена и родители. Пещера просто незабываема! А то, что все это формировалось тысячелетиями, мега необычно. Первоначально даже не верилось, но натур ни с чем не спутать по итогу :)",reviewName:"Владимир Мулицин",reviewImageWebpRetina:"img/review-author-vladimir.webp 1x, img/review-author-vladimir@2x.webp 2x",reviewImageRetina:"img/review-author-vladimir@2x.png 2x",reviewImage:"img/review-author-vladimir.png"}]),R=e=>{e.addEventListener("input",()=>e.reportValidity())},T=()=>{const e=window.scrollY;p.classList.add("body--disable-scroll"),p.dataset.position=e,p.style.top=-e+"px"},W=()=>{const e=parseInt(p.dataset.position,10);p.style.top="auto",p.classList.remove("body--disable-scroll"),window.scroll({top:e,left:0}),p.removeAttribute("data-position")},L=(e,a,t)=>{e.addEventListener("click",()=>{for(const e of tabLinks)e.classList.remove("tab__link--current");t&&t.classList.add("tab__link--current"),placeTitle.textContent=a.placeTitle,placeText.textContent=a.placeText,desktop&&(retina?place.style.background=a.placeImageDesktopRetina:place.style.background=a.placeImageDesktop,webp?place.style.background=a.placeImageDesktopWebp:place.style.background=a.placeImageDesktop,webp&&retina?place.style.background=a.placeImageDesktopWebpRetina:place.style.background=a.placeImageDesktop),tablet&&(place.style.background="",retina?review.style.background=a.placeImageTabletRetina:review.style.background=a.placeImageTablet,webp?review.style.background=a.placeImageTabletWebp:review.style.background=a.placeImageTablet,webp&&retina?review.style.background=a.placeImageTabletWebpRetina:review.style.background=a.placeImageTablet,review.style.backgroundSize="100% 415px"),mobile&&(place.style.background="",retina?review.style.background=a.placeImageMobileRetina:review.style.background=a.placeImageMobile,webp?review.style.background=a.placeImageMobileWebp:review.style.background=a.placeImageMobile,webp&&retina?review.style.background=a.placeImageMobileWebpRetina:review.style.background=a.placeImageMobile,review.style.backgroundSize="100% 415px"),reviewText.textContent=a.reviewText,reviewImage.src=a.reviewImage,reviewImage.srcset=a.reviewImageRetina,webp&&retina?reviewImageSource.srcset=a.reviewImageWebpRetina:reviewImageSource.remove(),reviewName.textContent=a.reviewName})};(async()=>{await(async()=>{self.createImageBitmap;const e=await fetch("data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=").then(e=>e.blob());return createImageBitmap(e).then(()=>!0,()=>!1)})()})();window.addEventListener("load",()=>{(()=>{for(let e=0;e<h.length;e++)R(h[e])})(),(()=>{for(const e of u)e.addEventListener("click",()=>{w.classList.remove("popup-buy-tour--hide"),k.focus(),T()});w.addEventListener("click",e=>{e.target===w&&(w.classList.add("popup-buy-tour--hide"),W())}),I.addEventListener("click",()=>{w.classList.add("popup-buy-tour--hide"),W()}),document.addEventListener("keydown",e=>{"Escape"!==e.key&&"ESC"!==e.key||(w.classList.add("popup-buy-tour--hide"),_.classList.add("popup-buy-tour-success--hide"),W())}),x.addEventListener("submit",e=>{e.preventDefault(),w.classList.add("popup-buy-tour--hide"),k.value="",y.value="",_.classList.remove("popup-buy-tour-success--hide"),W()}),_.addEventListener("click",()=>{_.classList.add("popup-buy-tour-success--hide"),W()}),s.addEventListener("submit",e=>{e.preventDefault(),d.value="",v.value="",_.classList.remove("popup-buy-tour-success--hide"),T()})})(),(()=>{for(let e=0;e<g.length;e++)L(g[e],f[e])})(),(()=>{for(let e=0;e<b.length;e++)L(b[e],f[e],g[e])})(),c.addEventListener("click",()=>{c.classList.add("navigation__menu-close-button--hide"),m.classList.remove("navigation__menu-open-button--hide"),l.classList.add("navigation--open"),i.classList.add("navigation__logo--hide"),o.classList.add("navigation__list--open");for(const e of r)e.classList.add("navigation__item--open");for(const e of n)e.classList.add("navigation__link--open")}),m.addEventListener("click",()=>{m.classList.add("navigation__menu-open-button--hide"),c.classList.remove("navigation__menu-close-button--hide"),i.classList.remove("navigation__logo--hide"),o.classList.remove("navigation__list--open"),l.classList.remove("navigation--open")}),(()=>{l.classList.remove("navigation--nojs"),i.classList.remove("navigation__logo--nojs"),o.classList.remove("navigation__list--nojs");for(const e of r)e.classList.remove("navigation__item--nojs");c.classList.remove("navigation__menu-close-button--nojs")})()})}]);