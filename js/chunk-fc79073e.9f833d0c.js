(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fc79073e"],{"0c20":function(e,t,i){"use strict";var r=i("7a23"),o={class:"slides px-3 relative bg-white"},a={ref:"wrapper",class:"flex justify-between mb-3"},c=Object(r["h"])("div",{class:"sideNav"},null,-1);function n(e,t,i,n,s,l){return Object(r["q"])(),Object(r["e"])("div",o,[Object(r["h"])("span",{onClick:t[1]||(t[1]=function(){return l.gotoPrev.apply(l,arguments)}),class:["left-arrow",i.leftArrowClasses]},Object(r["B"])(i.leftIcon),3),Object(r["h"])("span",{class:["right-arrow",i.rightArrowClasses],onClick:t[2]||(t[2]=function(){return l.gotoNext.apply(l,arguments)})},Object(r["B"])(i.rightIcon),3),Object(r["h"])("div",a,[Object(r["x"])(e.$slots,"top")],512),c,Object(r["h"])("div",{style:{width:s.innerWidht+"px",marginLeft:"-"+l.slidesInnerMarginLeft+"px"},class:"slider-inner  flex"},[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(i.slides,(function(t,o){return Object(r["q"])(),Object(r["e"])("div",{style:{width:s.singleWidth+"px"},class:i.singleSlideStyle,key:o},[Object(r["x"])(e.$slots,"default",{slide:t})],6)})),128))],4)])}var s={name:"Carousel",components:{},props:{responsive:{default:[{width:0,item:1},{width:768,item:2},{width:1024,item:3},{width:1280,item:4}]},slides:{required:!0,type:Array},singleSlideStyle:{type:String,default:"border-4 border-transparent"},leftIcon:{default:"<"},rightIcon:{default:">"},leftArrowClasses:{type:String,default:"rounded-l border text-gray-600 font-semibold px-1 pointer"},rightArrowClasses:{type:String,default:"rounded-r border text-gray-600 font-semibold px-1 pointer"}},data:function(){return{itemsPerSlide:0,innerWidht:0,singleWidth:0,currentIndex:0}},computed:{slidesInnerMarginLeft:function(){return this.currentIndex*this.singleWidth}},mounted:function(){for(var e=this.$refs.wrapper.clientWidth,t=0;t<this.responsive.length;t++)e>this.responsive[t].width&&(this.itemsPerSlide=this.responsive[t].item);var i=e/this.itemsPerSlide;this.singleWidth=i,this.innerWidht=i*this.slides.length},methods:{gotoPrev:function(){0!=this.currentIndex&&(this.currentIndex=this.currentIndex-1)},gotoNext:function(){this.currentIndex>=this.slides.length-this.itemsPerSlide||this.currentIndex++},gotoIndex:function(e){this.currentIndex=e+2}}},l=(i("1ad3"),i("d959")),d=i.n(l);const u=d()(s,[["render",n]]);t["a"]=u},"157e":function(e,t,i){"use strict";i.d(t,"c",(function(){return r})),i.d(t,"b",(function(){return o})),i.d(t,"a",(function(){return a})),i.d(t,"d",(function(){return c}));var r=[{id:1,name:"Lorem ipsum dolo consectetur adipisici explicabo!",description:"Lorem ipsum dolo consectetur adipisici explicabo! Lorem ipsum dolo consectetur adipisici explicabo!",brand:"# Partext Ltd",vendor:"Baba Jumburi",image_url:"1.png"},{id:2,name:"Lorem ipsum dolo consectetur adipisici explicabo!",description:"Lorem ipsum dolo consectetur adipisici explicabo! Lorem ipsum dolo consectetur adipisici explicabo!",brand:"# Partext Ltd",vendor:"Oiler Lux",image_url:"2.png"},{id:3,name:"Lorem ipsum dolo consectetur adipisici explicabo!",description:"Lorem ipsum dolo consectetur adipisici explicabo! Lorem ipsum dolo consectetur adipisici explicabo!",brand:"# Partext Ltd",vendor:"Solartod",image_url:"3.png"},{id:4,name:"Lorem ipsum dolo consectetur adipisici explicabo!",description:"Lorem ipsum dolo consectetur adipisici explicabo! Lorem ipsum dolo consectetur adipisici explicabo!",brand:"# Partext Ltd",vendor:"Jumburi",image_url:"4.png"},{id:5,name:"Lorem ipsum dolo consectetur adipisici explicabo!",description:"Lorem ipsum dolo consectetur adipisici explicabo! Lorem ipsum dolo consectetur adipisici explicabo!",brand:"# Partext Ltd",vendor:"Babalar",image_url:"5.png"},{id:6,name:"Lorem ipsum dolo consectetur adipisici explicabo!",description:"Lorem ipsum dolo consectetur adipisici explicabo! Lorem ipsum dolo consectetur adipisici explicabo!",brand:"# Partext Ltd",vendor:"Oracle",image_url:"6.png"},{id:7,name:"Lorem ipsum dolo consectetur adipisici explicabo!",description:"Lorem ipsum dolo consectetur adipisici explicabo! Lorem ipsum dolo consectetur adipisici explicabo!",brand:"# Partext Ltd",vendor:"Lord Of",image_url:"7.png"},{id:8,name:"Lorem ipsum dolo consectetur adipisici explicabo!",description:"Lorem ipsum dolo consectetur adipisici explicabo! Lorem ipsum dolo consectetur adipisici explicabo!",brand:"# Partext Ltd",vendor:"SamidVot",image_url:"8.png"},{id:9,name:"Lorem ipsum dolo consectetur adipisici explicabo!",description:"Lorem ipsum dolo consectetur adipisici explicabo! Lorem ipsum dolo consectetur adipisici explicabo!",brand:"# Partext Ltd",vendor:"LOcalHost",image_url:"9.png"},{id:10,name:"Lorem ipsum dolo consectetur adipisici explicabo!",description:"Lorem ipsum dolo consectetur adipisici explicabo! Lorem ipsum dolo consectetur adipisici explicabo!",brand:"# Partext Ltd",vendor:"Baba Jumburi",image_url:"10.png"},{id:11,name:"Lorem ipsum dolo consectetur adipisici explicabo!",description:"Lorem ipsum dolo consectetur adipisici explicabo! Lorem ipsum dolo consectetur adipisici explicabo!",brand:"# Partext Ltd",vendor:"Nematoda",image_url:"11.png"},{id:12,name:"Lorem ipsum dolo consectetur adipisici explicabo!",description:"Lorem ipsum dolo consectetur adipisici explicabo! Lorem ipsum dolo consectetur adipisici explicabo!",brand:"# Partext Ltd",vendor:"Portoptye",image_url:"12.png"},{id:13,name:"Lorem ipsum dolo consectetur adipisici explicabo!",description:"Lorem ipsum dolo consectetur adipisici explicabo! Lorem ipsum dolo consectetur adipisici explicabo!",brand:"# Partext Ltd",vendor:"Martlnoa",image_url:"13.png"},{id:14,name:"Lorem ipsum dolo consectetur adipisici explicabo!",description:"Lorem ipsum dolo consectetur adipisici explicabo! Lorem ipsum dolo consectetur adipisici explicabo!",brand:"# Partext Ltd",vendor:"Loftdjkfot",image_url:"14.png"},{id:15,name:"Lorem ipsum dolo consectetur adipisici explicabo!",description:"Lorem ipsum dolo consectetur adipisici explicabo! Lorem ipsum dolo consectetur adipisici explicabo!",brand:"# Partext Ltd",vendor:"Lndlord",image_url:"15.png"},{id:16,name:"Lorem ipsum dolo consectetur adipisici explicabo!",description:"Lorem ipsum dolo consectetur adipisici explicabo! Lorem ipsum dolo consectetur adipisici explicabo!",brand:"# Partext Ltd",vendor:"Loacalhost",image_url:"16.png"},{id:17,name:"Lorem ipsum dolo consectetur adipisici explicabo!",description:"Lorem ipsum dolo consectetur adipisici explicabo! Lorem ipsum dolo consectetur adipisici explicabo!",brand:"# Partext Ltd",vendor:"Baba Jumburi",image_url:"17.png"},{id:18,name:"Lorem ipsum dolo consectetur adipisici explicabo!",description:"Lorem ipsum dolo consectetur adipisici explicabo! Lorem ipsum dolo consectetur adipisici explicabo!",brand:"# Partext Ltd",vendor:"Baba Jumburi",image_url:"18.png"},{id:19,name:"Lorem ipsum dolo consectetur adipisici explicabo!",description:"Lorem ipsum dolo consectetur adipisici explicabo! Lorem ipsum dolo consectetur adipisici explicabo!",brand:"# Partext Ltd",vendor:"Baba Jumburi",image_url:"19.png"}],o=[{link:"https://facebook.com",icon:"/images/facebook.png"},{link:"https://facebook.com",icon:"/images/facebook.png"},{link:"https://facebook.com",icon:"/images/facebook.png"}],a=[{name:"Popular"},{name:"New Arrival"},{name:"Featured"}],c=[{id:1,image_url:"/images/some-of-client/1.png"},{id:2,image_url:"/images/some-of-client/2.png"},{id:3,image_url:"/images/some-of-client/3.png"},{id:4,image_url:"/images/some-of-client/4.png"},{id:5,image_url:"/images/some-of-client/5.png"},{id:6,image_url:"/images/some-of-client/6.png"},{id:7,image_url:"/images/some-of-client/7.png"},{id:8,image_url:"/images/some-of-client/8.png"},{id:9,image_url:"/images/some-of-client/9.png"},{id:10,image_url:"/images/some-of-client/10.png"},{id:11,image_url:"/images/some-of-client/1.png"},{id:12,image_url:"/images/some-of-client/2.png"},{id:13,image_url:"/images/some-of-client/3.png"},{id:14,image_url:"/images/some-of-client/4.png"},{id:15,image_url:"/images/some-of-client/5.png"}]},"1ad3":function(e,t,i){"use strict";i("7a7b")},"3a31":function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var r=[{id:1,image_url:"/images/certificate/1.png"},{id:2,image_url:"/images/certificate/3.png"},{id:3,image_url:"/images/certificate/5.png"},{id:4,image_url:"/images/certificate/7.png"},{id:5,image_url:"/images/certificate/9.png"},{id:6,image_url:"/images/certificate/2.png"},{id:7,image_url:"/images/certificate/4.png"},{id:8,image_url:"/images/certificate/6.png"},{id:9,image_url:"/images/certificate/8.png"},{id:10,image_url:"/images/certificate/10.png"}]},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,i){var r=i("1d80"),o=i("5899"),a="["+o+"]",c=RegExp("^"+a+a+"*"),n=RegExp(a+a+"*$"),s=function(e){return function(t){var i=String(r(t));return 1&e&&(i=i.replace(c,"")),2&e&&(i=i.replace(n,"")),i}};e.exports={start:s(1),end:s(2),trim:s(3)}},"5e45":function(e,t,i){"use strict";var r=i("7a23"),o={class:"p-3 rounded absolute bottom-0 w-full bg-gradient-to-r from-blue-500 to-teal-500"},a={class:"text-gray-100 text-sm"},c={class:"text-gray-100 text-xs text-yellow-400"},n=Object(r["h"])("span",{class:"mx-2"},"|",-1);function s(e,t,i,s,l,d){return Object(r["q"])(),Object(r["e"])("div",{class:"h-48 relative rounded bg-center bg-cover",style:{backgroundImage:"url("+i.image+")"}},[Object(r["h"])("div",o,[Object(r["h"])("p",a,Object(r["B"])(i.title),1),Object(r["h"])("p",c,[Object(r["g"])(Object(r["B"])(i.date)+" ",1),n,Object(r["g"])(" "+Object(r["B"])(i.type),1)])])],4)}var l={name:"GradientCard",components:{},props:{title:{type:String,default:"This is the default title on props"},image:{type:String,default:"/images/interior1.jpg"},date:{type:String,default:"07-Aug-2020"},type:{type:String,default:"Default"}},data:function(){return{}},computed:{},watch:{},methods:{}},d=i("d959"),u=i.n(d);const m=u()(l,[["render",s]]);t["a"]=m},"5eeb":function(e,t,i){"use strict";i("9424")},6519:function(e,t,i){"use strict";var r=i("7a23");function o(e,t,i,o,a,c){return Object(r["q"])(),Object(r["e"])("img",{src:i.image,alt:"",class:"".concat(i.heightWeight," shadow-md rounded-full")},null,10,["src"])}var a={name:"RoundImage",props:{image:{type:String,default:"/images/square.jpg"},heightWeight:{type:String,default:"w-32 h-32"}}},c=i("d959"),n=i.n(c);const s=n()(a,[["render",o]]);t["a"]=s},7156:function(e,t,i){var r=i("861d"),o=i("d2bb");e.exports=function(e,t,i){var a,c;return o&&"function"==typeof(a=t.constructor)&&a!==i&&r(c=a.prototype)&&c!==i.prototype&&o(e,c),e}},"71d8":function(e,t,i){"use strict";i("99af"),i("b0c0");var r=i("7a23"),o={class:"flex w-full"};function a(e,t,i,a,c,n){return Object(r["q"])(),Object(r["e"])("div",o,[Object(r["h"])("div",{class:"flex ".concat(i.tabPosition," border-b h-8 w-full")},[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(c.items,(function(e,t){return Object(r["q"])(),Object(r["e"])("button",{class:"focus:outline-none text-xs tex-grey-700 ".concat(i.tabMargin," ").concat(c.id==e.name?"border-b-2 border-blue-500":"border-b-2 border-transparent"),onClick:function(t){return c.id=e.name},key:t},Object(r["B"])(e.name),11,["onClick"])})),128))],2),Object(r["x"])(e.$slots,"nav",{class:"absolute"})])}var c={id:"top-bar",name:"TopBar",props:{tabPosition:String,tabMargin:{default:"mr-5"}},data:function(){return{id:"Popular",items:[{name:"Popular"},{name:"New Arrival"},{name:"Featured"}]}}},n=i("d959"),s=i.n(n);const l=s()(c,[["render",a]]);t["a"]=l},"7a7b":function(e,t,i){},9197:function(e,t,i){"use strict";i("9911");var r=i("7a23"),o={class:"font-md mr-3 font-semibold text-gray-700 capitalize "};function a(e,t,i,a,c,n){return Object(r["q"])(),Object(r["e"])("div",{class:"flex items-center ".concat(i.flexPosition," mr-10 mt-5")},[Object(r["h"])("p",o,Object(r["B"])(i.text),1),(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(i.links,(function(e,t){return Object(r["q"])(),Object(r["e"])("a",{key:t,href:e.link,class:"w-5 mx-1 text-xs sm:text-base"},[Object(r["h"])("img",{src:e.icon,alt:""},null,8,["src"])],8,["href"])})),128))],2)}var c={name:"SocialBox",props:{text:String,flexPosition:String,links:{required:!0}}},n=i("d959"),s=i.n(n);const l=s()(c,[["render",a]]);t["a"]=l},9424:function(e,t,i){},"9de4":function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var r=[{width:0,item:1},{width:768,item:3},{width:1024,item:5},{width:1280,item:5}]},a868:function(e,t,i){"use strict";i("df11")},a894:function(e,t,i){"use strict";var r=i("7a23"),o=Object(r["K"])("data-v-7a09faab");Object(r["t"])("data-v-7a09faab");var a={class:"product-card"},c={class:"product-card__image-area"},n={class:"relative",style:{"padding-bottom":"50%"}},s=Object(r["h"])("div",{class:"product-card__cart-icon simptip-position-bottom simptip-fade","data-tooltip":"I'm a tooltip with fade effect"},[Object(r["h"])("span",{class:"mdi mdi-cart text-gray-100"})],-1),l=Object(r["h"])("div",{class:"product-card__brand-name"}," #partext ltd ",-1),d={class:"font-medium text-xs text-gray-800"},u=Object(r["h"])("p",{class:"text-gray-700 text-xs"},[Object(r["h"])("span",{class:"text-gray-600"},"Vendor: "),Object(r["g"])(" Baba Jamburi ")],-1);Object(r["r"])();var m=o((function(e,t,i,m,p,b){var g=Object(r["y"])("router-link");return Object(r["q"])(),Object(r["e"])("div",a,[Object(r["h"])(g,{to:"/"},{default:o((function(){return[Object(r["h"])("div",c,[Object(r["h"])("div",n,[Object(r["h"])("img",{class:"absolute top-0 h-full w-full object-cover",src:"/images/product/".concat(i.url),alt:""},null,8,["src"])]),s,l]),Object(r["h"])("p",d,Object(r["B"])(i.id)+" Lorem ipsum dolo consectetur adipisici explicabo! ",1),u]})),_:1})])})),p=(i("a9e3"),{name:"ProductCard",props:{id:{type:Number},url:{type:String}}}),b=(i("c21d"),i("d959")),g=i.n(b);const f=g()(p,[["render",m],["__scopeId","data-v-7a09faab"]]);t["a"]=f},a9e3:function(e,t,i){"use strict";var r=i("83ab"),o=i("da84"),a=i("94ca"),c=i("6eeb"),n=i("5135"),s=i("c6b6"),l=i("7156"),d=i("c04e"),u=i("d039"),m=i("7c73"),p=i("241c").f,b=i("06cf").f,g=i("9bf2").f,f=i("58a8").trim,x="Number",h=o[x],O=h.prototype,j=s(m(O))==x,v=function(e){var t,i,r,o,a,c,n,s,l=d(e,!1);if("string"==typeof l&&l.length>2)if(l=f(l),t=l.charCodeAt(0),43===t||45===t){if(i=l.charCodeAt(2),88===i||120===i)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+l}for(a=l.slice(2),c=a.length,n=0;n<c;n++)if(s=a.charCodeAt(n),s<48||s>o)return NaN;return parseInt(a,r)}return+l};if(a(x,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var y,w=function(e){var t=arguments.length<1?0:e,i=this;return i instanceof w&&(j?u((function(){O.valueOf.call(i)})):s(i)!=x)?l(new h(v(t)),i,w):v(t)},L=r?p(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;L.length>_;_++)n(h,y=L[_])&&!n(w,y)&&g(w,y,b(h,y));w.prototype=O,O.constructor=w,c(o,x,w)}},afb3:function(e,t,i){"use strict";var r=i("7a23"),o={class:"text-2xl text-gray-100 uppercase font-semibold pl-10"},a={class:"mt-5 text-gray-700 text-sm"};function c(e,t,i,c,n,s){return Object(r["q"])(),Object(r["e"])("div",null,[Object(r["h"])("div",{class:"w-full flex items-center rounded h-20 bg-cover bg-center",style:{backgroundImage:"url("+i.image+")"}},[Object(r["h"])("p",o,Object(r["B"])(i.title),1)],4),Object(r["h"])("p",a,Object(r["B"])(i.detail),1)])}var n={name:"TextWithBgImage",components:{},props:{image:{type:String,default:"/images/lamp.jpg"},title:{type:String,default:"Our vision"},detail:String},data:function(){return{}},computed:{},watch:{},methods:{}},s=i("d959"),l=i.n(s);const d=l()(n,[["render",c]]);t["a"]=d},b0c0:function(e,t,i){var r=i("83ab"),o=i("9bf2").f,a=Function.prototype,c=a.toString,n=/^\s*function ([^ (]*)/,s="name";r&&!(s in a)&&o(a,s,{configurable:!0,get:function(){try{return c.call(this).match(n)[1]}catch(e){return""}}})},c21d:function(e,t,i){"use strict";i("d06f")},d06f:function(e,t,i){},d655:function(e,t,i){"use strict";i.r(t);var r=i("7a23");function o(e,t,i,o,a,c){var n=Object(r["y"])("CoverDescriptionSection"),s=Object(r["y"])("ProductServiceSection"),l=Object(r["y"])("AboutUsSection");return Object(r["q"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(n),Object(r["h"])(s,{textTitle:"products & services"}),Object(r["h"])(l)],64)}var a={class:"container bg-white mb-5 shadow-md pb-10 mx-auto"},c={class:"grid grid-cols-1 sm:grid-cols-2 gap-1"},n=Object(r["h"])("div",{style:{"background-image":"url('/images/interior2.png')"},class:"left h-48 relative rounded bg-center bg-cover bg-no-repeat sm:hidden"},[Object(r["h"])("a",{class:"rounded-full py-2 px-4 bg-blue-500 text-xs text-gray-100 capitalize absolute right-0 bottom-0 mb-5 mr-10",href:"#"},[Object(r["h"])("span",{class:"mdi mdi-printer"}),Object(r["g"])(" download company profile ")])],-1),s={style:{"background-image":"url('/images/interior1.jpg')"},class:"left h-48 rounded relative bg-center bg-cover bg-no-repeat"},l=Object(r["h"])("div",{style:{"background-image":"url('/images/interior2.png')"},class:"left h-48 relative rounded bg-center bg-cover bg-no-repeat hidden sm:block"},[Object(r["h"])("a",{class:"rounded-full py-2 px-4 bg-blue-500 text-xs text-gray-100 capitalize absolute right-0 bottom-0 mb-5 mr-10",href:"#"},[Object(r["h"])("span",{class:"mdi mdi-printer"}),Object(r["g"])(" download company profile ")])],-1),d={class:"w-full"},u={class:"grid grid-cols-10 gap-4 px-10"},m={class:"mt-5 md:col-span-3 col-span-10 pr-10"},p=Object(r["h"])("p",{class:"text-base sm:text-2xl text-gray-700 font-bold capitalize"},"Liva solution ltd.",-1),b=Object(r["h"])("p",{class:"text-xs sm:text-base font-semibold text-gray-700 mb-5"},"Brick, Tiles and Ciramic Materials",-1),g=Object(r["h"])("div",{class:"md:col-span-7 col-span-10 md:border-l md:pl-10 sm:pl-0"},[Object(r["h"])("p",{class:"text-xl font-bold text-gray-700 mb-2"},"About"),Object(r["h"])("p",{class:"text-xs sm:text-sm text-gray-700"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quasi voluptatem illo, unde earum quos. Soluta in aperiam quidem facilis, adipisci, enim eius optio ipsa, minima simil dipisci, enim eius optio ipsa, minima simil dipisci, enim eius optio ipsa, minima similique aliquid est doloremque earum, architecto ur? Aperiam itaque aliquid adipisci. Omnis consequuntur sed aut in magni perferendis laborum quod ab illo ipsam quae nisi rerum, mollitia nihil, sunt non ratione repellendus voluptate blanditiis dolorum voluptates temporibus enim tempora, magnam! Dolorem quas sit modi officia fugit adipisci ipsa consectetur illo animi, laudantium totam, recusandae qui voluptatibus. Aspernatur non aut voluptatem sit, commodi laboriosam unde libero suscipit asperiores, eveniet, odio magnam impedit, at. Quaerat, explicabo, veniam?")],-1);function f(e,t,i,o,f,x){var h=Object(r["y"])("RoundImage"),O=Object(r["y"])("SocialBox"),j=Object(r["y"])("TextWithIcon");return Object(r["q"])(),Object(r["e"])("div",a,[Object(r["h"])("div",c,[n,Object(r["h"])("div",s,[Object(r["h"])(h,{class:"absolute ml-10 custom-position"})]),l]),Object(r["h"])("div",d,[Object(r["h"])(O,{links:x.links,text:"follow on",flexPosition:"justify-end"},null,8,["links"])]),Object(r["h"])("div",u,[Object(r["h"])("div",m,[p,b,Object(r["h"])(j,{icon:"mdi mdi-google-maps",iconStyle:"text-blue-300 text-xs sm:text-sm",text:"Lorem ipsum dolor siectetur adipisicin",textStyle:"text-gray-700 text-xs sm:text-sm"}),Object(r["h"])(j,{icon:"mdi mdi-phone",iconStyle:"text-blue-300 text-xs sm:text-sm",text:"+990227 44488",textStyle:"text-gray-700 text-xs sm:text-sm"}),Object(r["h"])(j,{icon:"mdi mdi-email-outline",iconStyle:"text-blue-300 text-xs sm:text-sm",text:"support@domain.com",textStyle:"text-gray-700 text-xs sm:text-sm"})]),g])])}var x=i("6519"),h=i("9197"),O=i("157e"),j=i("13ca"),v={name:"CoverDescription",components:{RoundImage:x["a"],SocialBox:h["a"],TextWithIcon:j["a"]},computed:{links:function(){return O["b"]}}},y=(i("5eeb"),i("d959")),w=i.n(y);const L=w()(v,[["render",f]]);var _=L,S={class:"container bg-white mx-auto shadow-md py-2 px-5 pb-10 mb-5"},I={class:"flex mb-10"},C={class:"grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2  gap-2 px-3"},q={class:"mt-10 flex p-3 h-48 mb-10 relative border border-solid border-gray-300 flex-col items-center"},P=Object(r["h"])("div",null,[Object(r["h"])("p",{class:"text-gray-800 uppercase font-bold"},"John doe"),Object(r["h"])("p",{class:"text-sm text-gray-700"},"CEO, Thundeal Ltd")],-1),k=Object(r["h"])("p",{class:"mt-5 text-gray-700 text-xs italic"},"Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Alias dolor hic, officiis cum provident autem laborum vel deleniti id ipsa enim. Distinctio, officia. Soluta et obcaecati beatae dolor. Accusamus, nihil.",-1);function B(e,t,i,o,a,c){var n=Object(r["y"])("TextWithIcon"),s=Object(r["y"])("TopBar"),l=Object(r["y"])("ProductCard"),d=Object(r["y"])("GradientCard"),u=Object(r["y"])("Carousel"),m=Object(r["y"])("Card"),p=Object(r["y"])("RoundImage");return Object(r["q"])(),Object(r["e"])("div",S,[Object(r["h"])("div",I,[Object(r["h"])(n,{class:"mt-3",icon:"",iconStyle:"text-pink-600 text-xl",text:i.textTitle,textStyle:"text-gray-700 mr-3 font-bold text-md truncate uppercase"},null,8,["text"]),Object(r["h"])(s,{tabMargin:"mr-5"})]),Object(r["h"])("div",C,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(c.products,(function(e,t){return Object(r["q"])(),Object(r["e"])("div",{class:"mb-5",key:t},[Object(r["h"])(l,{url:e.image_url,id:e.id},null,8,["url","id"])])})),128))]),Object(r["h"])(u,{class:"mt-10","left-arrow-classes":"group-left-arrow rounded-l border text-gray-600 font-semibold px-1 pointer","right-arrow-classes":"group-right-arrow rounded-l border text-gray-600 font-semibold px-1 pointer",slides:a.slides,responsive:a.responsive},{default:Object(r["I"])((function(e){var t=e.slide;return[Object(r["h"])(d,{image:t.img},null,8,["image"])]})),top:Object(r["I"])((function(){return[Object(r["h"])(n,{class:"mt-2",text:"Sme of Our Project",textStyle:"text-md uppercase text-gray-700 font-bold"})]})),_:1},8,["slides","responsive"]),Object(r["h"])(u,{class:"mt-10","left-arrow-classes":"group-left-arrow rounded-l border text-gray-600 font-semibold px-1 pointer","right-arrow-classes":"group-right-arrow rounded-l border text-gray-600 font-semibold px-1 pointer",slides:c.someOfClients,responsive:a.someOfOurClientCarousel},{default:Object(r["I"])((function(e){var t=e.slide;return[Object(r["h"])(m,{image:t.image_url,border:"none"},null,8,["image"])]})),top:Object(r["I"])((function(){return[Object(r["h"])(n,{class:"mt-2",text:"Sme of Our client",textStyle:"text-md uppercase text-gray-700 font-bold"})]})),_:1},8,["slides","responsive"]),Object(r["h"])(u,{class:"mt-10","left-arrow-classes":"group-left-arrow rounded-l border text-gray-600 font-semibold px-1 pointer","right-arrow-classes":"group-right-arrow rounded-l border text-gray-600 font-semibold px-1 pointer",slides:c.someOfClients,responsive:a.clientTestimonialCarousel},{default:Object(r["I"])((function(e){var t=e.slide;return[Object(r["h"])("div",q,[Object(r["h"])(p,{class:"inside-image absolute left-0 ml-5",heightWeight:"w-24 h-24",image:t.image_url},null,8,["image"]),P,k])]})),top:Object(r["I"])((function(){return[Object(r["h"])(n,{class:"mt-2",text:"client's testimonial",textStyle:"text-md uppercase text-gray-700 font-bold"})]})),_:1},8,["slides","responsive"])])}i("fb6a");var T=i("71d8"),A=i("a894"),N=i("5e45"),W=i("0c20"),E=i("aee2"),M=i("eca3"),R=i("f8a2"),J=[{width:0,item:1},{width:768,item:3},{width:1024,item:6},{width:1280,item:6}],D=[{width:0,item:1},{width:768,item:2},{width:1024,item:3},{width:1280,item:3}],F={name:"ProductByCategory",props:{textTitle:{default:"Shop by items"}},components:{TextWithIcon:j["a"],TopBar:T["a"],ProductCard:A["a"],Carousel:W["a"],GradientCard:N["a"],Card:E["a"],RoundImage:x["a"]},data:function(){return{slides:M["a"],responsive:R["b"],someOfOurClientCarousel:J,clientTestimonialCarousel:D}},computed:{products:function(){return O["c"].slice(0,10)},someOfClients:function(){return O["d"]}}};i("a868");const V=w()(F,[["render",B]]);var U=V,z={class:"container mx-auto bg-white shadow-md mb-5 pb-24 px-5 py-10"},G={class:"grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 px-5"},$={class:"flex justify-center items-center"},X=Object(r["h"])("div",null,[Object(r["h"])("p",{class:"ml-3 text-sm sm:text-md font-semibold text-gray-700"},"Comandar Bolta"),Object(r["h"])("p",{class:"ml-3 text-xs text-gray-600"},"Team Co-Ordinator")],-1);function Y(e,t,i,o,a,c){var n=Object(r["y"])("TextWithBgImage"),s=Object(r["y"])("Card"),l=Object(r["y"])("TextWithIcon"),d=Object(r["y"])("Carousel"),u=Object(r["y"])("RoundImage");return Object(r["q"])(),Object(r["e"])("div",z,[Object(r["h"])("div",G,[Object(r["h"])(n,{title:"Our Mission",detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\n                proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(r["h"])(n,{title:"Our Vision",detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\n                proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]),Object(r["h"])(d,{class:"mt-10",slides:c.certificates,"left-arrow-classes":"group-left-arrow rounded-l border text-gray-600 font-semibold px-1 pointer","right-arrow-classes":"group-right-arrow rounded-l border text-gray-600 font-semibold px-1 pointer",responsive:a.certificateCarousel},{default:Object(r["I"])((function(e){var t=e.slide;return[Object(r["h"])(s,{image:t.image_url,imgStyle:"h-32",title:"Buet certified brand",titleStyle:"font-semibold text-sm text-gray-700 capitalize text-center mt-4",border:"border-0",subTitle:"more detail will be here",subTitleStyle:"text-xs sm:text-sm text-center",detailStyle:"text-xs text-center",detail:"Lorem ipsum dolor sit amet, consectetur adipisicin sed do eiusmod tempor ncididunt"},null,8,["image"])]})),top:Object(r["I"])((function(){return[Object(r["h"])(l,{class:"mt-2",text:"Certification, authorization & licenses",textStyle:"text-md uppercase text-gray-700 font-bold"})]})),_:1},8,["slides","responsive"]),Object(r["h"])(d,{"left-arrow-classes":"group-left-arrow rounded-l border text-gray-600 font-semibold px-1 pointer","right-arrow-classes":"group-right-arrow rounded-l border text-gray-600 font-semibold px-1 pointer",class:"mt-10",slides:c.certificates,responsive:a.certificateCarousel},{default:Object(r["I"])((function(e){var t=e.slide;return[Object(r["h"])("div",$,[Object(r["h"])(u,{image:t.image_url,heightWeight:"w-16 h-16 sm:w-24 sm:h-24"},null,8,["image"]),X])]})),top:Object(r["I"])((function(){return[Object(r["h"])(l,{class:"mt-2",text:"our Management",textStyle:"text-md uppercase text-gray-700 font-bold"})]})),_:1},8,["slides","responsive"])])}var H=i("afb3"),K=i("3a31"),Q=i("9de4"),Z={name:"AboutUs",components:{TextWithBgImage:H["a"],Carousel:W["a"],Card:E["a"],RoundImage:x["a"],TextWithIcon:j["a"]},props:{},data:function(){return{certificateCarousel:Q["a"]}},computed:{certificates:function(){return K["a"]}},watch:{},methods:{}};const ee=w()(Z,[["render",Y]]);var te=ee,ie={name:"Vendor",components:{CoverDescriptionSection:_,ProductServiceSection:U,AboutUsSection:te}};const re=w()(ie,[["render",o]]);t["default"]=re},df11:function(e,t,i){},eca3:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var r=[{img:"/images/interior1.jpg"},{img:"/images/interior2.png"},{img:"/images/interior1.jpg"},{img:"/images/interior2.png"},{img:"/images/interior1.jpg"},{img:"/images/interior2.png"}]},f8a2:function(e,t,i){"use strict";i.d(t,"b",(function(){return r})),i.d(t,"a",(function(){return o}));var r=[{width:0,item:1},{width:768,item:2},{width:1024,item:3},{width:1280,item:4}],o=[{width:0,item:1},{width:768,item:5},{width:1024,item:7},{width:1280,item:10}]}}]);
//# sourceMappingURL=chunk-fc79073e.9f833d0c.js.map