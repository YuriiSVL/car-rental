"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[339],{9365:function(s,e,a){a.d(e,{Z:function(){return E}});var n=a(3433),i=a(9439),t=a(2791),r="CarCard_price__0-UcI",c="CarCard_title__ti-8M",l="CarCard_img__1THPu",o="CarCard_item__o5ild",d="CarCard_model__l0jZI",p="CarCard_description__-J9bM",m="CarCard_btn__FvHat",h="CarCard_toFavoriteBtn__VAsX-",u=a(5646),x=a(2739),j=a(2817),_=a(6747),f="ModalWindow_img__E6oa7",g="ModalWindow_title__aFQhi",C="ModalWindow_model__BEqPf",b="ModalWindow_summary__jt5gQ",v="ModalWindow_description__JMFVa",N="ModalWindow_subtitle__jzXQo",k="ModalWindow_rentalCarBtn__cBIws",y="ModalWindow_conditions__QlgGd",w="ModalWindow_condition__NcMMm",M="ModalWindow_conditionValue__5F-Sq",S="ModalWindow_closeBtn__VhZJD";var Z=a.p+"static/media/closeModalIcon.f3cbdd58dc25ca7cbb3d242106b56fb9.svg",I=a(184),W={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"541px",padding:"40px",bgcolor:"background.paper",borderRadius:"24px",boxShadow:24,alightItems:"center",justifyContent:"center"};function F(s){var e=s.onClick,a=s.id,n=s.img,r=s.description,c=s.make,l=s.model,o=s.year,d=s.city,p=s.country,m=s.type,h=s.fuel,F=s.engine,J=s.accessories,B=s.functionalities,L=s.conditions,P=s.price,E=s.mileage,O=(0,t.useState)(!0),Q=(0,i.Z)(O,2),V=Q[0],z=Q[1],A=function(){z(!1)},R=E.toLocaleString("en-US");return(0,I.jsx)("div",{children:(0,I.jsx)(u.Z,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:V,onClose:function(){A(),e()},closeAfterTransition:!0,slots:{backdrop:x.Z},slotProps:{backdrop:{timeout:300}},children:(0,I.jsx)(j.Z,{in:V,children:(0,I.jsxs)(_.Z,{sx:W,children:[(0,I.jsx)("button",{type:"button",onClick:A,className:S,children:(0,I.jsx)("img",{src:Z,alt:"close modal window"})}),(0,I.jsx)("img",{src:n,alt:r,className:f}),(0,I.jsxs)("h2",{className:g,children:[c," ",(0,I.jsx)("span",{className:C,children:l}),", ",o]}),(0,I.jsxs)("div",{className:b,children:[(0,I.jsxs)("p",{children:[(0,I.jsx)("span",{children:d}),(0,I.jsxs)("span",{children:[" ",p]}),(0,I.jsxs)("span",{children:[" Id: ",a]}),(0,I.jsxs)("span",{children:[" Year: ",o]}),(0,I.jsxs)("span",{children:[" Type: ",m]})]}),(0,I.jsxs)("p",{children:[(0,I.jsxs)("span",{children:[" Fuel Consumption: ",h]}),(0,I.jsxs)("span",{children:[" Engine Size: ",F," "]})]})]}),(0,I.jsx)("p",{className:v,children:r}),(0,I.jsx)("h3",{className:N,children:"Accessories and functionalitiestionalities:"}),(0,I.jsxs)("div",{className:b,children:[(0,I.jsxs)("p",{children:[(0,I.jsx)("span",{children:J[0]}),(0,I.jsx)("span",{children:J[1]}),(0,I.jsx)("span",{children:J[2]})]}),(0,I.jsxs)("p",{children:[(0,I.jsx)("span",{children:B[0]}),(0,I.jsx)("span",{children:B[1]}),(0,I.jsx)("span",{children:B[2]})]})]}),(0,I.jsx)("h3",{className:N,children:"Rental conditions:"}),(0,I.jsxs)("div",{className:y,children:[(0,I.jsxs)("span",{className:w,children:["Minimum age:"," ",(0,I.jsx)("span",{className:M,children:L.split("\n")[0].match(/\d+/)})]}),(0,I.jsx)("span",{className:w,children:L.split("\n")[1]}),(0,I.jsx)("span",{className:w,children:L.split("\n")[2]}),(0,I.jsxs)("span",{className:w,children:["Mileage:"," ",(0,I.jsx)("span",{className:M,children:R})]}),(0,I.jsxs)("span",{className:w,children:["Price: ",(0,I.jsx)("span",{className:M,children:P})]})]}),(0,I.jsx)("a",{href:"tel:380730000000",className:k,children:"Rental car"})]})})})})}var J=a.p+"static/media/toFavoriteIcon.ac060e771360fcc26ebb0c86173c8396.svg";var B=a.p+"static/media/inFavoriteIcon.623a3b874365d724c658e79a860ad4a4.svg",L=function(s){var e=s.car,a=(JSON.parse(localStorage.getItem("favoriteCars"))||[]).some((function(s){return s.id===e.id})),u=(0,t.useState)(!1),x=(0,i.Z)(u,2),j=x[0],_=x[1],f=(0,t.useState)(a||!1),g=(0,i.Z)(f,2),C=g[0],b=g[1],v=function(){var s=JSON.parse(localStorage.getItem("favoriteCars"))||[];if(C){b(!1);var a=s.filter((function(s){return s.id!==e.id}));localStorage.setItem("favoriteCars",JSON.stringify(a))}else{var i=[].concat((0,n.Z)(s),[e]);localStorage.setItem("favoriteCars",JSON.stringify(i))}b(!C)};return(0,I.jsxs)("li",{className:o,children:[(0,I.jsx)("img",{className:l,src:e.img||e.photoLink,alt:e.description}),(0,I.jsx)("button",{type:"button",className:h,onClick:v,children:(0,I.jsx)("img",{src:C?B:J,alt:"to favorite button"})}),(0,I.jsxs)("h2",{className:c,children:[e.make,"\xa0",(0,I.jsx)("span",{className:d,children:e.model}),","," ",e.year,(0,I.jsx)("span",{className:r,children:e.rentalPrice})]}),(0,I.jsxs)("div",{className:p,children:[(0,I.jsxs)("p",{children:[(0,I.jsx)("span",{children:e.address.split(",")[1]}),(0,I.jsx)("span",{children:e.address.split(",")[2]}),(0,I.jsx)("span",{children:e.rentalCompany})]}),(0,I.jsxs)("p",{children:[(0,I.jsx)("span",{children:e.type}),(0,I.jsx)("span",{children:e.make}),(0,I.jsx)("span",{children:e.id}),(0,I.jsx)("span",{children:e.accessories[0]})]})]}),(0,I.jsx)("button",{className:m,type:"button",onClick:function(){_(!0)},children:"Learn more"}),j&&(0,I.jsx)(F,{onClick:v,id:e.id,img:e.img||e.photoLink,description:e.description,make:e.make,model:e.model,year:e.year,city:e.address.split(",")[1],country:e.address.split(",")[2],type:e.type,fuel:e.fuelConsumption,engine:e.engineSize,accessories:e.accessories,functionalities:e.functionalities,conditions:e.rentalConditions,price:e.rentalPrice,mileage:e.mileage})]})},P="CarList_list__Bss5J",E=function(s){var e=s.cars;return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)("ul",{className:P,children:e.map((function(s){return(0,I.jsx)(L,{car:s},s.id)}))})})}},2339:function(s,e,a){a.r(e);var n=a(5861),i=a(9439),t=a(4687),r=a.n(t),c=a(2791),l=a(9365),o=a(1243),d=a(184);e.default=function(){var s=(0,c.useState)([]),e=(0,i.Z)(s,2),a=e[0],t=e[1],p=(0,c.useState)(8),m=(0,i.Z)(p,2),h=m[0],u=m[1];(0,c.useEffect)((function(){function s(){return(s=(0,n.Z)(r().mark((function s(){var e,a;return r().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,o.Z.get("https://650afba7dfd73d1fab095a36.mockapi.io/adverts");case 3:e=s.sent,a=e.data,console.log(a),t(a.slice(0,h)),s.next=12;break;case 9:s.prev=9,s.t0=s.catch(0),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0456\u0434 \u0447\u0430\u0441 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f \u0434\u0430\u043d\u0438\u0445:",s.t0);case 12:case"end":return s.stop()}}),s,null,[[0,9]])})))).apply(this,arguments)}!function(){s.apply(this,arguments)}()}),[h]);return(0,d.jsxs)("section",{children:[(0,d.jsx)(l.Z,{cars:a}),(0,d.jsx)("button",{onClick:function(){u(h+8)},children:"Load more"})]})}}}]);
//# sourceMappingURL=339.d31036a0.chunk.js.map