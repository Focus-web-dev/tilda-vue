"use strict";(self["webpackChunktilda_clone"]=self["webpackChunktilda_clone"]||[]).push([[430],{18:function(t,e,o){o.d(e,{Z:function(){return p}});var i=o(252);const s=(0,i._)("svg",{class:"waves-icon",width:"14",height:"14","aria-hidden":"true",role:"img"},[(0,i._)("use",{href:"#waves"})],-1),a={class:"container"},l={class:"wrapper row"};function n(t,e,o,n,c,d){return(0,i.wg)(),(0,i.iD)("header",null,[s,(0,i._)("div",a,[(0,i._)("div",l,[(0,i.WI)(t.$slots,"leftItems"),(0,i.WI)(t.$slots,"rightItems")])])])}var c={name:"HeaderComponent"},d=o(744);const r=(0,d.Z)(c,[["render",n]]);var p=r},541:function(t,e,o){o.d(e,{Z:function(){return d}});var i=o(252),s=o(577);function a(t,e,o,a,l,n){return(0,i.wg)(),(0,i.iD)("div",{class:(0,s.C_)({options:o.optionsOpen,"visually-hidden":!o.optionsOpen})},[(0,i.WI)(t.$slots,"optionsHead"),(0,i.WI)(t.$slots,"optionsBody")],2)}var l={name:"OptionsList",props:{optionsOpen:{type:Boolean}}},n=o(744);const c=(0,n.Z)(l,[["render",a]]);var d=c},861:function(t,e,o){o.d(e,{Z:function(){return R}});var i=o(252),s=o(577),a=o(732);const l={class:"page-blocks"},n={class:"tools"},c=(0,i._)("div",{class:"tools__left"},[(0,i._)("div",{class:"buttons-group"},[(0,i._)("button",{class:"buttons-group__button"},[(0,i._)("svg",{class:"icon icon-text",width:"24",height:"24","aria-hidden":"true",role:"img"},[(0,i._)("use",{href:"#settings-icon"})]),(0,i.Uk)(" Настройки ")]),(0,i._)("button",{class:"buttons-group__button apply"},[(0,i._)("svg",{class:"icon icon-text",width:"24",height:"24","aria-hidden":"true",role:"img"},[(0,i._)("use",{href:"#edit-icon"})]),(0,i.Uk)(" Контент ")])])],-1),d={class:"tools__right"},r={class:"buttons-group"},p=["onClick"],u=(0,i._)("svg",{class:"icon",width:"24",height:"24","aria-hidden":"true",role:"img"},[(0,i._)("use",{href:"#duplicate-icon"})],-1),g=[u],h=["onClick"],_=(0,i._)("svg",{class:"icon",width:"24",height:"24","aria-hidden":"true",role:"img"},[(0,i._)("use",{href:"#trash-icon"})],-1),k=[_],m=["onClick"],b=(0,i._)("svg",{class:"icon",width:"24",height:"24","aria-hidden":"true",role:"img"},[(0,i._)("use",{href:"#power-icon"})],-1),v=[b],w={class:"buttons-group"},B=["onClick"],M=(0,i._)("svg",{class:"icon",width:"24",height:"24","aria-hidden":"true",role:"img"},[(0,i._)("use",{href:"#move-up-icon"})],-1),D=[M],O=["onClick"],I=(0,i._)("svg",{class:"icon",width:"24",height:"24","aria-hidden":"true",role:"img"},[(0,i._)("use",{href:"#move-down-icon"})],-1),S=[I],f={key:2,class:"hidden-block"},C=(0,i._)("h6",null,'Блок скрыт. Нажмите кнопку "Спрятать / Показать" справа, чтобы сделать его видимым.',-1),y=[C],H=["onClick"],E=(0,i._)("img",{src:a,class:"add-button__icon",alt:"create new page"},null,-1),j=[E];function V(t,e,o,a,u,_){const b=(0,i.up)("TextBlock"),M=(0,i.up)("BackgroundImageBlock");return(0,i.wg)(),(0,i.iD)("div",l,[o.blocks.length?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("button",{key:0,class:"page-blocks__button button apply",onClick:e[0]||(e[0]=(...t)=>_.addNewNoteButtonHandler&&_.addNewNoteButtonHandler(...t))}," Добавить запись ")),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.blocks,((e,a)=>((0,i.wg)(),(0,i.iD)("div",{key:e.id,class:"page-blocks__block"},[(0,i._)("div",n,[c,(0,i._)("div",d,[(0,i._)("div",r,[(0,i._)("button",{class:"buttons-group__button","aria-label":"Clone block",onClick:t=>_.optionButtonHandler(e.code,e)},g,8,p),(0,i._)("button",{class:"buttons-group__button","aria-label":"Delete block",onClick:t=>_.removeBlockButtonHandler(e.id)},k,8,h),(0,i._)("button",{class:"buttons-group__button","aria-label":"Hide block",onClick:o=>t.changeBlockVisibility(e.id)},v,8,m)]),(0,i._)("div",w,[0!==a?((0,i.wg)(),(0,i.iD)("button",{key:0,class:"buttons-group__button","aria-label":"Move block up",onClick:t=>_.moveBlockButtonHandler(a,"up")},D,8,B)):(0,i.kq)("",!0),a!==o.blocks.length-1?((0,i.wg)(),(0,i.iD)("button",{key:1,class:"buttons-group__button","aria-label":"Move block down",onClick:t=>_.moveBlockButtonHandler(a,"down")},S,8,O)):(0,i.kq)("",!0)])])]),1!==e.code||e.hidden?2!==e.code||e.hidden?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(M,{key:1,"block-id":e.id},{title:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(e.title),1)])),description:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(e.description),1)])),_:2},1032,["block-id"])):((0,i.wg)(),(0,i.j4)(b,{key:0,"block-id":e.id},{title:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(e.title),1)])),description:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(e.description),1)])),_:2},1032,["block-id"])),e.hidden?((0,i.wg)(),(0,i.iD)("div",f,y)):(0,i.kq)("",!0),(0,i._)("button",{class:"add-button",onClick:t=>_.addNewNoteButtonHandler(a)},j,8,H)])))),128))])}const W={class:"background-image-block",style:{"background-image":"url('/img/page-img.jpg')"}},$={class:"background-image-block__text"};function N(t,e,o,s,a,l){return(0,i.wg)(),(0,i.iD)("section",W,[(0,i._)("div",$,[(0,i._)("h1",{class:"title",contenteditable:"true",onBlur:e[0]||(e[0]=(...t)=>l.changeBlockTitle&&l.changeBlockTitle(...t))},[(0,i.WI)(t.$slots,"title")],32),(0,i._)("p",{class:"description",contenteditable:"true",onBlur:e[1]||(e[1]=(...t)=>l.changeBlockDescription&&l.changeBlockDescription(...t))},[(0,i.WI)(t.$slots,"description")],32)])])}var T=o(907),U={name:"BackgroundImageBlock",props:{blockId:{type:Number,default:0}},methods:{...(0,T.OI)(["setBlockTitle","setBlockDescription"]),changeBlockTitle(t){let e={id:this.blockId,title:t.target.innerText};this.setBlockTitle(e)},changeBlockDescription(t){let e={id:this.blockId,description:t.target.innerText};this.setBlockDescription(e)}}},x=o(744);const P=(0,x.Z)(U,[["render",N]]);var L=P;const Z={class:"text-block"},q={class:"text"};function z(t,e,o,s,a,l){return(0,i.wg)(),(0,i.iD)("div",Z,[(0,i._)("div",q,[(0,i._)("h2",{class:"text__title",contenteditable:"true",onBlur:e[0]||(e[0]=(...t)=>l.changeBlockTitle&&l.changeBlockTitle(...t))},[(0,i.WI)(t.$slots,"title")],32),(0,i._)("p",{class:"text__description",contenteditable:"true",onBlur:e[1]||(e[1]=(...t)=>l.changeBlockDescription&&l.changeBlockDescription(...t))},[(0,i.WI)(t.$slots,"description")],32)])])}var Y={name:"TextBlock",props:{blockId:{type:Number,default:0}},methods:{...(0,T.OI)(["setBlockTitle","setBlockDescription"]),changeBlockTitle(t){let e={id:this.blockId,title:t.target.innerText};this.setBlockTitle(e)},changeBlockDescription(t){let e={id:this.blockId,description:t.target.innerText};this.setBlockDescription(e)}}};const K=(0,x.Z)(Y,[["render",z]]);var A=K,F={name:"PageLayout",components:{BackgroundImageBlock:L,TextBlock:A},props:{blocks:{type:Array,default(){return[]}},activeOptionsModalSection:{type:Number,default:0}},computed:{...(0,T.Se)(["getOptionsModalSections","getOptionsModalState","getSelectedBlock"])},emits:{closeOptionsModal:null,updateBlocks:null},methods:{...(0,T.OI)(["setOptionsModalSections","setOptionsModalOptions","setSelectedBlock","addNewBlock","removeBlock","moveBlock","changeBlockVisibility"]),addNewNoteButtonHandler(t){this.setOptionsModalSections([{title:"Текстовые блоки",code:1,options:[{title:"Блок с текстом",code:1,description:"Блок, содержащий простой текст"}]},{title:"Обложки",code:2,options:[{title:"Текст с фоновой картинкой",code:2,description:"Блок, содержащий текст на фоне картинки"}]}]),this.setSelectedBlock(t),this.setOptionsModalOptions(this.getOptionsModalSections.find((t=>t.code===this.activeOptionsModalSection)).options),this.$emit("closeOptionsModal")},optionButtonHandler(t,e={}){this.addNewBlock({code:t,index:this.getSelectedBlock,duplicateBlock:e}),this.getOptionsModalState&&this.$emit("closeOptionsModal")},removeBlockButtonHandler(t){this.removeBlock(t),this.$emit("updateBlocks")},moveBlockButtonHandler(t,e){this.moveBlock({index:t,direction:e})}}};const G=(0,x.Z)(F,[["render",V]]);var R=G},856:function(t,e,o){o.d(e,{Z:function(){return g}});var i=o(252);const s={class:"content"},a={class:"content__head"},l={class:"content__body"},n={class:"content__footer"};function c(t,e,o,c,d,r){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",s,[(0,i._)("div",a,[(0,i.WI)(t.$slots,"modalHead")]),(0,i._)("div",l,[(0,i.WI)(t.$slots,"modalBody")]),(0,i._)("div",n,[(0,i.WI)(t.$slots,"modalFooter")])])])}var d=o(907),r={name:"ModalLayout",computed:{...(0,d.Se)(["getModalState"])},mounted(){document.addEventListener("click",(t=>{t.target===document.querySelector("#settingsModal")?this.changeSettingsModalState():t.target===document.querySelector("#modal")&&this.changeModalState()}))},methods:{...(0,d.OI)(["changeModalState","changeSettingsModalState"])}},p=o(744);const u=(0,p.Z)(r,[["render",c]]);var g=u},430:function(t,e,o){o.r(e),o.d(e,{default:function(){return wt}});var i=o(252),s=o(577),a=o(963);const l={class:"left-items col-12 col-md-4"},n={class:"left-items__breadcrumbs"},c=(0,i._)("svg",{class:"link__icon",width:"14",height:"14","aria-hidden":"true",role:"img"},[(0,i._)("use",{href:"#home-icon"})],-1),d=(0,i.Uk)(" Мои сайты "),r=(0,i._)("span",{class:"breadcrumb"},"⟶",-1),p={class:"left-items__pages-list"},u=(0,i._)("svg",{id:"more-card-options",class:"icon",width:"24",height:"24","aria-hidden":"true",role:"img"},[(0,i._)("use",{href:"#arrow-down"})],-1),g=[u],h={class:"options-list"},_={key:0,class:"link__icon",width:"14",height:"14","aria-hidden":"true",role:"img"},k=(0,i._)("use",{href:"#home-icon"},null,-1),m=[k],b={class:"right-items col-12 col-md-8"},v={class:"nav-list"},w={class:"nav-list__item"},B=(0,i.Uk)(" Отменить "),M={class:"nav-list__item"},D=(0,i.Uk)(" Предпросмотр "),O={class:"nav-list__item"},I={class:"nav-list__item nav-list__item-options"},S=(0,i.Uk)(" Ещё "),f=(0,i._)("use",{href:"#arrow-down"},null,-1),C=[f],y={class:"options-list"},H={class:"options-list__item"},E={class:"options-list__item"},j=(0,i.Uk)(" Мои сайты "),V={class:"options-list__item"},W=(0,i.Uk)(" Профиль "),$=(0,i._)("h6",null,"Библиотека блоков",-1),N=(0,i._)("button",{"aria-label":"Search"},[(0,i._)("svg",{class:"icon",width:"20",height:"20","aria-hidden":"true",role:"img"},[(0,i._)("use",{href:"#search-icon"})])],-1),T={class:"list"},U=["onClick"],x={class:"list"},P=["onClick"],L={class:"description"},Z={class:"top"},q=(0,i._)("h6",null,"Настройки страницы",-1),z={class:"tabs"},Y=["onClick"],K={key:0,class:"main"},A={class:"main__field"},F=(0,i._)("label",{for:"title-input"},"Заголовок",-1),G={class:"main__field"},R=(0,i._)("label",{for:"description-input"},"Описание",-1),J={class:"main__field"},Q=(0,i._)("label",{for:"url-input"},"Адрес страницы",-1),X={key:1,class:"badge"},tt=(0,i._)("h5",null,"Выберите изображение бейджика",-1),et={class:"previews-list"},ot=["onClick"],it=["src","alt"];function st(t,e,o,u,k,f){const st=(0,i.up)("router-link"),at=(0,i.up)("OptionsList"),lt=(0,i.up)("Header"),nt=(0,i.up)("PageBlocks"),ct=(0,i.up)("OptionsModal"),dt=(0,i.up)("InputModal");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(lt,{class:"header header_inversion"},{leftItems:(0,i.w5)((()=>[(0,i._)("div",l,[(0,i._)("div",n,[(0,i.Wm)(st,{class:"breadcrumb link",to:"/","aria-label":"Go to homepage"},{default:(0,i.w5)((()=>[c,d])),_:1}),r,(0,i.Wm)(st,{class:"breadcrumb link",to:"/project/"+t.getEditData.projectData.id,"aria-label":"Return to project settings"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(t.getEditData.projectData.title),1)])),_:1},8,["to"])]),(0,i._)("div",p,[(0,i._)("button",{class:(0,s.C_)([{"pages-list-button_opened":k.pagesOptionsOpen},"pages-list-button"]),"aria-label":"Select page",onClick:e[0]||(e[0]=t=>k.pagesOptionsOpen=!0)},g,2),(0,i.Wm)(at,{"options-open":k.pagesOptionsOpen,class:"options_pages",onMouseleave:e[3]||(e[3]=t=>k.pagesOptionsOpen=!1)},{optionsHead:(0,i.w5)((()=>[(0,i._)("button",{class:"button apply",onClick:e[1]||(e[1]=t=>f.addNewPageButtonHandler())}," Создать новую страницу ")])),optionsBody:(0,i.w5)((()=>[(0,i._)("ul",h,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.getEditData.projectData.pages,(o=>((0,i.wg)(),(0,i.iD)("li",{key:o.id,class:"options-list__item"},[(0,i.Wm)(st,{to:"/project/"+t.getEditData.projectData.id+"/edit/"+o.id,class:(0,s.C_)([{active:o.id===t.getEditData.pageData.id},"link"]),onClick:e[2]||(e[2]=t=>k.optionsOpen=!1)},{default:(0,i.w5)((()=>[o.main?((0,i.wg)(),(0,i.iD)("svg",_,m)):(0,i.kq)("",!0),(0,i.Uk)(" "+(0,s.zw)(o.title),1)])),_:2},1032,["to","class"])])))),128))])])),_:1},8,["options-open"])])])])),rightItems:(0,i.w5)((()=>[(0,i._)("div",b,[(0,i._)("ul",v,[(0,i._)("li",w,[(0,i.Wm)(st,{to:"/project/"+t.$route.params.projectId,class:"link"},{default:(0,i.w5)((()=>[B])),_:1},8,["to"])]),(0,i._)("li",M,[(0,i.Wm)(st,{to:`/project/${t.$route.params.projectId}/preview/${t.$route.params.pageId}`,class:(0,s.C_)([{link_disabled:0===k.blocks.length},"link link_action"])},{default:(0,i.w5)((()=>[D])),_:1},8,["to","class"])]),(0,i._)("li",O,[(0,i._)("button",{class:"link",onClick:e[4]||(e[4]=(...t)=>f.settingsButtonHandler&&f.settingsButtonHandler(...t))}," Настройки ")]),(0,i._)("li",I,[(0,i._)("button",{class:(0,s.C_)([{"pages-list-button_opened":k.optionsOpen},"nav-list-item-button"]),"aria-label":"Select page",onClick:e[5]||(e[5]=t=>k.optionsOpen=!0)},[S,((0,i.wg)(),(0,i.iD)("svg",{id:"more-card-options",class:(0,s.C_)([{icon__active:k.optionsOpen},"icon"]),width:"20",height:"20","aria-hidden":"true",role:"img"},C,2))],2),(0,i.Wm)(at,{"options-open":k.optionsOpen,class:"options_pages",onMouseleave:e[7]||(e[7]=t=>k.optionsOpen=!1)},{optionsBody:(0,i.w5)((()=>[(0,i._)("ul",y,[(0,i._)("li",H,[(0,i._)("button",{class:"link",onClick:e[6]||(e[6]=(...t)=>f.settingsButtonHandler&&f.settingsButtonHandler(...t))}," Настройки страницы ")]),(0,i._)("li",E,[(0,i.Wm)(st,{to:"/",class:"link"},{default:(0,i.w5)((()=>[j])),_:1})]),(0,i._)("li",V,[(0,i.Wm)(st,{to:"/profile",class:"link"},{default:(0,i.w5)((()=>[W])),_:1})])])])),_:1},8,["options-open"])])])])])),_:1}),(0,i.Wm)(nt,{blocks:k.blocks,"active-options-modal-section":k.activeOptionsModalSection,onCloseOptionsModal:f.closeOptionsModal,onUpdateBlocks:f.updateBlocks},null,8,["blocks","active-options-modal-section","onCloseOptionsModal","onUpdateBlocks"]),(0,i.Wm)(ct,{id:"optionsModal",class:(0,s.C_)(["options-modal",{"options-modal":t.getOptionsModalState,"options-modal_hidden":!t.getOptionsModalState}])},{optionsModalHead:(0,i.w5)((()=>[$,N,(0,i._)("button",{class:"close","aria-label":"Close modal",onClick:e[8]||(e[8]=(...e)=>t.changeOptionsModalState&&t.changeOptionsModalState(...e))})])),optionsModalSections:(0,i.w5)((()=>[(0,i._)("ul",T,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.getOptionsModalSections,(t=>((0,i.wg)(),(0,i.iD)("li",{key:t.code,class:(0,s.C_)([{active:k.activeOptionsModalSection===t.code},"list__item"])},[(0,i._)("button",{class:"link",onClick:e=>f.sectionButtonHandler(t)},(0,s.zw)(t.title),9,U)],2)))),128))])])),optionsModalOptions:(0,i.w5)((()=>[(0,i._)("ul",x,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.getOptionsModalOptions,(t=>((0,i.wg)(),(0,i.iD)("li",{key:t.code,class:"list__item"},[(0,i._)("button",{class:"link",onClick:e=>f.optionButtonHandler(t.code)},[(0,i.Uk)((0,s.zw)(t.title)+" ",1),(0,i._)("span",L,(0,s.zw)(t.description),1)],8,P)])))),128))])])),_:1},8,["class"]),(0,i.Wm)(dt,{id:"settingsModal",class:(0,s.C_)({modal:t.getSettingsModalState,"visually-hidden":!t.getSettingsModalState})},{modalHead:(0,i.w5)((()=>[(0,i._)("div",Z,[q,(0,i._)("button",{class:"close","aria-label":"Close modal",onClick:e[9]||(e[9]=(...t)=>f.closeSettingsModal&&f.closeSettingsModal(...t))})]),(0,i._)("div",z,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.getTabs.list,(e=>((0,i.wg)(),(0,i.iD)("button",{key:e.id,class:(0,s.C_)([{active:e.title===t.getTabs.active},"tabs__tab"]),onClick:o=>t.setActiveTab(e.title)},(0,s.zw)(e.title),11,Y)))),128))])])),modalBody:(0,i.w5)((()=>["Главное"===t.getTabs.active?((0,i.wg)(),(0,i.iD)("div",K,[(0,i._)("div",A,[F,(0,i.wy)((0,i._)("input",{id:"title-input","onUpdate:modelValue":e[10]||(e[10]=t=>k.titleInputValue=t),class:(0,s.C_)({error:k.titleError}),placeholder:"Page 1",onInput:e[11]||(e[11]=e=>f.checkTitleInputValue(k.titleInputValue,t.getSettingsModalContent.title))},null,34),[[a.nr,k.titleInputValue]])]),(0,i._)("div",G,[R,(0,i.wy)((0,i._)("input",{id:"description-input","onUpdate:modelValue":e[12]||(e[12]=t=>k.descriptionInputValue=t),placeholder:"Описание страницы"},null,512),[[a.nr,k.descriptionInputValue]])]),(0,i._)("div",J,[Q,(0,i.wy)((0,i._)("input",{id:"url-input","onUpdate:modelValue":e[13]||(e[13]=t=>k.urlInputValue=t),class:(0,s.C_)({error:k.urlError}),placeholder:"page-1",onInput:e[14]||(e[14]=e=>f.checkUrlInputValue(k.urlInputValue,t.getSettingsModalContent.url))},null,34),[[a.nr,k.urlInputValue]])])])):"Бейджик"===t.getTabs.active?((0,i.wg)(),(0,i.iD)("div",X,[tt,(0,i._)("ul",et,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.getImageLibrary,(t=>((0,i.wg)(),(0,i.iD)("li",{key:t,class:"previews-list__item"},[(0,i._)("button",{class:(0,s.C_)({active:t===k.activeImage}),onClick:e=>k.activeImage=t},[(0,i._)("img",{src:t,alt:t},null,8,it)],10,ot)])))),128))])])):(0,i.kq)("",!0)])),modalFooter:(0,i.w5)((()=>[(0,i._)("button",{class:"button cancel",onClick:e[15]||(e[15]=(...t)=>f.closeSettingsModal&&f.closeSettingsModal(...t))}," Закрыть "),(0,i._)("button",{class:(0,s.C_)([{error:k.titleError||k.urlError},"button apply"]),onClick:e[16]||(e[16]=e=>f.saveChangesButtonHandler(t.getSettingsModalContent.id))}," Сохранить изменения ",2)])),_:1},8,["class"])],64)}var at=o(907),lt=o(18),nt=o(541),ct=o(856);const dt={class:"sections"},rt={class:"sections__head"},pt={class:"sections__options"};function ut(t,e,o,s,a,l){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",dt,[(0,i._)("div",rt,[(0,i.WI)(t.$slots,"optionsModalHead")]),(0,i.WI)(t.$slots,"optionsModalSections"),(0,i._)("div",pt,[(0,i.WI)(t.$slots,"optionsModalOptions")])])])}var gt={name:"OptionsModalLayout",computed:{...(0,at.Se)(["getOptionsModalState"])},mounted(){document.addEventListener("click",(t=>{t.target===document.querySelector("#optionsModalLayout")&&this.changeOptionsModalState()}))},methods:{...(0,at.OI)(["changeOptionsModalState"])}},ht=o(744);const _t=(0,ht.Z)(gt,[["render",ut]]);var kt=_t,mt=o(861),bt={name:"EditPage",components:{Header:lt.Z,OptionsList:nt.Z,InputModal:ct.Z,OptionsModal:kt,PageBlocks:mt.Z},data(){return{optionsOpen:!1,pagesOptionsOpen:!1,titleError:!1,urlError:!1,activeImage:"",titleInputValue:"",descriptionInputValue:"",urlInputValue:"",activeOptionsModalSection:1,blocks:[],currentAddButton:Number}},computed:{...(0,at.Se)(["getEditData","getProjectData","getTabs","getSettingsModalState","getSettingsModalContent","getImageLibrary","getOptionsModalState","getOptionsModalSections","getOptionsModalOptions","getSelectedBlock"])},watch:{$route(t){"EditPage"===t.name&&(this.fetchPageData({projectId:Number(t.params.projectId),pageId:Number(t.params.pageId)}),this.blocks=this.getEditData.pageData.blocks)},getEditData:function(){this.titleInputValue=this.getEditData.pageData.title,this.descriptionInputValue=this.getEditData.pageData.description,this.urlInputValue=this.getEditData.pageData.url,this.activeImage=this.getEditData.pageData.img}},mounted(){let t={projectId:Number(this.$route.params.projectId),pageId:Number(this.$route.params.pageId)};this.fetchPageData(t),this.blocks=this.getEditData.pageData.blocks},methods:{...(0,at.nv)(["fetchPageData"]),...(0,at.OI)(["updatePageData","addNewPage","setActiveTab","changeSettingsModalState","setSettingsModalContent","savePageDataChanges","setOptionsModalSections","setOptionsModalOptions","changeOptionsModalState","addNewBlock","removeBlock","moveBlock","changeBlockVisibility","changeBlockContentModalState"]),addNewPageButtonHandler(){this.addNewPage(),this.fetchPageData({projectId:Number(this.$route.params.projectId),pageId:Number(this.$route.params.pageId)})},settingsButtonHandler(){this.setSettingsModalContent(this.getEditData.pageData),this.changeSettingsModalState()},checkTitleInputValue(t,e){for(let o of this.getEditData.projectData.pages){let i=o.title.toLowerCase().split(" ").join(""),s=t.toLowerCase().split(" ").join("");if(i===s&&s!==e.toLowerCase().split(" ").join("")||0===s.length){this.titleError=!0;break}this.titleError=!1}},checkUrlInputValue(t,e){for(let o of this.getEditData.projectData.pages){let i=o.url.toLowerCase().split(" ").join(""),s=t.toLowerCase().split(" ").join("");if(i===s&&s!==e.toLowerCase().split(" ").join("")||s.length<3){this.urlError=!0;break}this.urlError=!1}},closeSettingsModal(){this.error=!1,this.changeSettingsModalState()},saveChangesButtonHandler(t){this.savePageDataChanges({id:t,title:this.titleInputValue,description:this.descriptionInputValue,url:this.urlInputValue,img:this.activeImage,main:this.getEditData.pageData.main,blocks:this.getEditData.pageData.blocks}),this.closeSettingsModal()},closeOptionsModal(){this.activeOptionsModalSection=1,this.changeOptionsModalState()},sectionButtonHandler(t){this.activeOptionsModalSection=t.code,this.setOptionsModalOptions(t.options)},optionButtonHandler(t,e={}){this.addNewBlock({code:t,index:this.getSelectedBlock,duplicateBlock:e}),this.getOptionsModalState&&this.closeOptionsModal()},updateBlocks(){this.blocks=this.getEditData.pageData.blocks}}};const vt=(0,ht.Z)(bt,[["render",st]]);var wt=vt},732:function(t,e,o){t.exports=o.p+"img/plus.053d5610.svg"}}]);
//# sourceMappingURL=430.8e7cb14a.js.map