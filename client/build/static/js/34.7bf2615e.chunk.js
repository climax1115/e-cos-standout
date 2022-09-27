"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[34],{8832:function(e,s,i){i.r(s),i.d(s,{default:function(){return x}});var n=i(2791),t=i(885),a=i(1808),r=i(4242),c=(i(5257),i(4569)),o=i.n(c),l=i(1523),_=i(184);var d=function(){var e=(0,n.useState)([]),s=(0,t.Z)(e,2),i=s[0],c=s[1];return(0,n.useEffect)((function(){o().get("/product/trending/?page=".concat(1,"&limit=",9,"&sort=","&color=").concat([],"&size=").concat([])).then((function(e){if(200!==e.status)throw new Error;c(e.data.products)})).catch((function(e){console.log(e)}))}),[9]),(0,_.jsxs)("div",{className:"home__trending",children:[(0,_.jsx)("h1",{children:"Trending this week"}),i.length>0&&(0,_.jsx)("div",{className:"home__trending__items-container",children:(0,_.jsxs)(a.t,{spaceBetween:13,slidesPerView:2.5,grabCursor:!0,preloadImages:!1,lazy:!0,autoHeight:!0,breakpoints:{1900:{spaceBetween:39,slidesPerView:8.5},1800:{spaceBetween:36.4,slidesPerView:8.5},1600:{spaceBetween:33.8,slidesPerView:7.5},1400:{spaceBetween:28.6,slidesPerView:7.5},1200:{spaceBetween:23.4,slidesPerView:6.5},1100:{spaceBetween:18.2,slidesPerView:6.5},800:{spaceBetween:13,slidesPerView:5.5},700:{slidesPerView:4.5},600:{slidesPerView:3.5},500:{slidesPerView:3},400:{slidesPerView:2.5}},children:[i.map((function(e,s){return(0,_.jsx)(r.o,{children:(0,_.jsxs)("div",{className:"home__trending__items-container__item",children:[(0,_.jsx)("div",{className:"image-container",children:(0,_.jsx)(l.rU,{to:"/item/".concat(e._id),children:(0,_.jsx)("img",{src:e.stock[0].images[0],style:{opacity:0},onLoad:function(e){e.target.style.opacity="1"},alt:e.name,onError:function(e){e.target.src="/images/imgFailed.jpg"}})})}),(0,_.jsx)(l.rU,{to:"/item/".concat(e._id),children:(0,_.jsx)("p",{className:"name",children:e.name.length>15?e.name.slice(0,12)+"...":e.name})}),(0,_.jsxs)("p",{className:"price",children:["$",(e.price/100).toFixed(2)]})]})},s)})),(0,_.jsx)(r.o,{children:(0,_.jsx)("div",{className:"link",children:(0,_.jsx)(l.rU,{to:"/trending",children:"see more"})})})]})}),i.length<1&&(0,_.jsx)("div",{className:"home__loading__items-container",children:(0,_.jsx)(a.t,{spaceBetween:13,slidesPerView:2.5,grabCursor:!0,autoHeight:!0,breakpoints:{1900:{spaceBetween:39,slidesPerView:8.5},1800:{spaceBetween:36.4,slidesPerView:8.5},1600:{spaceBetween:33.8,slidesPerView:7.5},1400:{spaceBetween:28.6,slidesPerView:7.5},1200:{spaceBetween:23.4,slidesPerView:6.5},1100:{spaceBetween:18.2,slidesPerView:6.5},800:{spaceBetween:13,slidesPerView:5.5},700:{slidesPerView:4.5},600:{slidesPerView:3.5},500:{slidesPerView:3},400:{slidesPerView:2.5}},children:function(){for(var e=[],s=0;s<9;s++)e.push(s);return e}().map((function(e){return(0,_.jsx)(r.o,{children:(0,_.jsxs)("div",{className:"home__loading__items-container__item",children:[(0,_.jsx)("div",{className:"home__loading__items-container__item__img"}),(0,_.jsx)("div",{className:"home__loading__items-container__item__text"}),(0,_.jsx)("div",{className:"home__loading__items-container__item__text"})]})},e)}))})})]})};var m=function(){return(0,_.jsxs)("div",{className:" home__section home__section--women",children:[(0,_.jsxs)("div",{className:"home__section__content home__section--women__content",children:[(0,_.jsx)("h2",{children:"Shop Dresses, Jeans, Tops & More"}),(0,_.jsx)("p",{children:"Find women's clothing at StandOut. From dresses and jumpsuits, to jeans and dress pants, update your wardrobe all in one place. If you need to upgrade your style game at work, try a new suit, dressy top, work dress or dark wash jeans. Shop clothing for women online or in-store today."}),(0,_.jsx)("div",{className:"home__section__content__links-container",children:["dresses","rompers","tops","shoes"].map((function(e,s){return(0,_.jsxs)("div",{className:"home__section__content__links-container__link",children:[(0,_.jsx)(l.rU,{to:"/items/women/".concat(e),children:(0,_.jsx)("img",{src:"/images/links/women/".concat(e,".jpg"),alt:e})}),(0,_.jsx)(l.rU,{to:"/items/women/".concat(e),className:"home__section__content__links-container__link__a",children:e})]},s)}))})]}),(0,_.jsx)("div",{className:"home__section__img-container home__section--women__img-container",children:(0,_.jsx)("img",{className:"home__section__model-image",src:"./images/womanModel.png",alt:"woman model"})})]})};var h=function(){return(0,_.jsxs)("div",{className:" home__section home__section--men",children:[(0,_.jsx)("div",{className:"home__section__img-container home__section--men__img-container",children:(0,_.jsx)("img",{className:"home__section__model-image",src:"/images/manModel.png",alt:"male model"})}),(0,_.jsxs)("div",{className:"home__section__content  home__section--men__content",children:[(0,_.jsx)("h2",{children:"Shop Suits, Jeans, Shirts & More"}),(0,_.jsx)("p",{children:"Find new men's suits, dress pants, dress shirts, chinos, jeans and more all in one place at Express. Whether you need a new work wardrobe for your job or some casual pieces like shorts, we've got you covered. Shop clothing for men online or in-store today."}),(0,_.jsx)("div",{className:"home__section__content__links-container",children:["shirts","jackets","suitings","t-shirts"].map((function(e,s){return(0,_.jsxs)("div",{className:"home__section__content__links-container__link",children:[(0,_.jsx)(l.rU,{to:"/items/men/".concat(e),children:(0,_.jsx)("img",{src:"/images/links/men/".concat(e,".jpg"),alt:e})}),(0,_.jsx)(l.rU,{to:"/items/men/".concat(e),className:"home__section__content__links-container__link__a",children:e})]},s)}))})]})]})},g=i(9950),w=i(5822),p=i(1363);g.Z.use([w.Z]);var j=function(){var e=(0,n.useState)([]),s=(0,t.Z)(e,2),i=s[0],c=s[1];return(0,n.useEffect)((function(){o().get("/product/best-seller/?page=".concat(1,"&limit=",9,"&sort=","&color=").concat([],"&size=").concat([])).then((function(e){if(200!==e.status)throw new Error;c(e.data.products)})).catch((function(e){console.log(e)}))}),[9]),(0,_.jsxs)("div",{className:"home__best-seller",children:[(0,_.jsx)("h1",{children:"Best sellers"}),i.length>0&&(0,_.jsx)("div",{className:"home__best-seller__items-container",children:(0,_.jsxs)(a.t,{spaceBetween:13,slidesPerView:2.5,grabCursor:!0,autoHeight:!0,breakpoints:{1900:{spaceBetween:39,slidesPerView:8.5},1800:{spaceBetween:36.4,slidesPerView:8.5},1600:{spaceBetween:33.8,slidesPerView:7.5},1400:{spaceBetween:28.6,slidesPerView:7.5},1200:{spaceBetween:23.4,slidesPerView:6.5},1100:{spaceBetween:18.2,slidesPerView:6.5},800:{spaceBetween:13,slidesPerView:5.5},700:{slidesPerView:4.5},600:{slidesPerView:3.5},500:{slidesPerView:3},400:{slidesPerView:2.5}},children:[i.map((function(e,s){return(0,_.jsx)(r.o,{children:(0,_.jsxs)("div",{className:"home__best-seller__items-container__item",children:[(0,_.jsx)("div",{className:"image-container",children:(0,_.jsx)(l.rU,{to:"/item/".concat(e._id),children:(0,_.jsx)("img",{src:e.stock[0].images[0],alt:e.name,style:{opacity:0},onLoad:function(e){e.target.style.opacity="1"},onError:function(e){e.target.src="/images/imgFailed.jpg"}})})}),(0,_.jsx)(l.rU,{to:"/item/".concat(e._id),children:(0,_.jsx)("p",{className:"name",children:e.name.length>15?e.name.slice(0,12)+"...":e.name})}),(0,_.jsxs)("p",{className:e.totalRatings>=1?"price":"price margin",children:["$ ",(e.price/100).toFixed(2)]}),e.totalRatings>=1&&(0,_.jsxs)("div",{className:"rating-container",children:[(0,_.jsx)("div",{className:"rating-container__icons",children:"".concat(e.averageRating).split(".").map((function(e,s){if(0===s){for(var i=[],n=0;n<Number(e);n++)i.push((0,_.jsx)(p.G,{icon:"star",className:"rating-container__icons__icon"},n));return i}return(0,_.jsx)(p.G,{icon:"star-half",className:"rating-container__icons__icon"},9)}))}),(0,_.jsx)("p",{className:"rating-container__rating",children:e.averageRating.toFixed(1)}),(0,_.jsx)("p",{className:"rating-container__people",children:"(".concat(e.totalRatings,")")})]})]})},s)})),(0,_.jsx)(r.o,{children:(0,_.jsx)("div",{className:"link",children:(0,_.jsx)(l.rU,{to:"/best-sellers",children:"see more"})})})]})}),i.length<1&&(0,_.jsx)("div",{className:"home__loading__items-container",children:(0,_.jsx)(a.t,{spaceBetween:13,slidesPerView:2.5,grabCursor:!0,autoHeight:!0,breakpoints:{1900:{spaceBetween:39,slidesPerView:8.5},1800:{spaceBetween:36.4,slidesPerView:8.5},1600:{spaceBetween:33.8,slidesPerView:7.5},1400:{spaceBetween:28.6,slidesPerView:7.5},1200:{spaceBetween:23.4,slidesPerView:6.5},1100:{spaceBetween:18.2,slidesPerView:6.5},800:{spaceBetween:13,slidesPerView:5.5},700:{slidesPerView:4.5},600:{slidesPerView:3.5},500:{slidesPerView:3},400:{slidesPerView:2.5}},children:function(){for(var e=[],s=0;s<9;s++)e.push(s);return e}().map((function(e){return(0,_.jsx)(r.o,{children:(0,_.jsxs)("div",{className:"home__loading__items-container__item",children:[(0,_.jsx)("div",{className:"home__loading__items-container__item__img"}),(0,_.jsx)("div",{className:"home__loading__items-container__item__text"}),(0,_.jsx)("div",{className:"home__loading__items-container__item__text"})]})},e)}))})})]})};var u=function(){return(0,_.jsxs)("div",{className:"home__features",children:[(0,_.jsxs)("div",{className:"home__features__left",children:[(0,_.jsx)("div",{className:"home__features__1",children:(0,_.jsx)("img",{src:"./images/clothes.jpg",alt:"clothes"})}),(0,_.jsx)("div",{className:"home__features__2",children:(0,_.jsx)("img",{src:"./images/sewing.jpg",alt:"sewing"})})]}),(0,_.jsx)("div",{className:"home__features__left",children:(0,_.jsx)("div",{className:"home__features__3",children:(0,_.jsx)("img",{src:"./images/packageDelivery.jpg",alt:"package delivery"})})})]})};var x=function(){return(0,n.useEffect)((function(){document.title="Stand Out - Online Clothing Store | Stand Out"}),[]),(0,_.jsxs)("div",{className:"home",children:[(0,_.jsx)(d,{}),(0,_.jsx)(m,{}),(0,_.jsx)(h,{}),(0,_.jsx)(j,{}),(0,_.jsx)(u,{})]})}}}]);
//# sourceMappingURL=34.7bf2615e.chunk.js.map