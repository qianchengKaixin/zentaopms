/*!
 * ZUI - v1.3.2 - 2015-07-28
 * http://zui.sexy
 * GitHub: https://github.com/easysoft/zui.git 
 * Copyright (c) 2015 cnezsoft.com; Licensed MIT
 */

!function(a){"use strict";var b="zui.datatable",c=(a.zui.store,function(c,d){this.name=b,this.$=a(c),this.isTable="TABLE"===this.$[0].tagName,this.firstShow=!0,this.isTable?(this.$table=this.$,this.id="datatable-"+(this.$.attr("id")||a.zui.uuid())):(this.$datatable=this.$.addClass("datatable"),this.$.attr("id")?this.id=this.$.attr("id"):(this.id="datatable-"+a.zui.uuid(),this.$.attr("id",this.id))),this.getOptions(d),this.load(),this.callEvent("ready")});c.DEFAULTS={checkable:!1,checkByClickRow:!0,checkedClass:"active",checkboxName:null,sortable:!1,storage:!0,fixedHeader:!0,fixedHeaderOffset:0,fixedLeftWidth:"30%",fixedRightWidth:"30%",flexHeadDrag:!0,scrollPos:"in",rowHover:!0,colHover:!0,hoverClass:"hover",colHoverClass:"col-hover",mergeRows:!1,minColWidth:20,minFixedLeftWidth:200,minFixedRightWidth:200,minFlexAreaWidth:200},c.prototype.getOptions=function(b){var d=this.$;b=a.extend({},c.DEFAULTS,this.$.data(),b),b.tableClass=b.tableClass||"",b.tableClass=" "+b.tableClass+" table-datatable",a.each(["bordered","condensed","striped","condensed","fixed"],function(a,c){c="table-"+c,d.hasClass(c)&&(b.tableClass+=" "+c)}),(d.hasClass("table-hover")||b.rowHover)&&(b.tableClass+=" table-hover"),this.options=b},c.prototype.load=function(c){var d,e=this.options;if(a.isPlainObject(c))this.data=c;else if("string"==typeof c){var f=a(c);f.length&&(this.$table=f.first(),this.$table.data(b,this),this.isTable=!0),c=null}else c=e.data;if(!c){if(!this.isTable)throw new Error("No data avaliable!");c={cols:[],rows:[]},d=c.cols;var g,h,i,j,k,l,m=c.rows,n=this.$table;n.find("thead > tr:first").children("th").each(function(){h=a(this),d.push(a.extend({text:h.html(),flex:!1||h.hasClass("flex-col"),width:"auto",cssClass:h.attr("class"),css:h.attr("style"),type:"string",ignore:h.hasClass("ignore"),sort:!h.hasClass("sort-disabled"),mergeRows:h.attr("merge-rows")},h.data()))}),n.find("tbody > tr").each(function(){i=a(this),k=a.extend({data:[],checked:!1,cssClass:i.attr("class"),css:i.attr("style"),id:i.attr("id")},i.data()),i.children("td").each(function(){if(j=a(this),l=j.attr("colspan")||1,k.data.push(a.extend({cssClass:j.attr("class"),css:j.attr("style"),text:j.html(),colSpan:l,title:j.attr("title")},j.data())),l>1)for(g=1;l>g;g++)k.data.push({empty:!0})}),m.push(k)});var o=n.find("tfoot");o.length&&(c.footer=a('<table class="table'+e.tableClass+'"></table>').append(o))}c.flexStart=-1,c.flexEnd=-1,d=c.cols,c.colsLength=d.length;for(var g=0;g<c.colsLength;++g){var p=d[g];p.flex&&(c.flexStart<0&&(c.flexStart=g),c.flexEnd=g)}0===c.flexStart&&c.flexEnd===c.colsLength&&(c.flexStart=-1,c.flexEnd=-1),c.flexArea=c.flexStart>=0,c.fixedRight=c.flexEnd>=0&&c.flexEnd<c.colsLength-1,c.fixedLeft=c.flexStart>0,c.flexStart<0&&c.flexEnd<0&&(c.fixedLeft=!0,c.flexStart=c.colsLength,c.flexEnd=c.colsLength),this.data=c,this.callEvent("afterLoad",{data:c}),this.render()},c.prototype.render=function(){var c,d,e,f,g=this,h=g.$datatable||(g.isTable?a('<div class="datatable" id="'+g.id+'"/>'):g.$datatable),i=g.options,j=g.data,k=g.data.cols,l=g.data.rows,m=i.checkable,n='<div class="datatable-rows-span datatable-span"><div class="datatable-wrapper"><table class="table"></table></div></div>',o='<div class="datatable-head-span datatable-span"><div class="datatable-wrapper"><table class="table"><thead></thead></table></div></div>';h.children(".datatable-head, .datatable-rows, .scroll-wrapper").remove(),h.toggleClass("sortable",i.sortable);var p,q,r,s=a('<div class="datatable-head"/>');for(c=a("<tr/>"),e=a("<tr/>"),f=a("<tr/>"),d=0;d<k.length;d++)r=k[d],p=d<j.flexStart?c:d>=j.flexStart&&d<=j.flexEnd?f:e,0===d&&m&&p.append('<th data-index="check" class="check-all check-btn"><i class="icon-check-empty"></i></th>'),r.ignore||(q=a("<th/>"),q.toggleClass("sort-down","down"===r.sort).toggleClass("sort-up","up"===r.sort).toggleClass("sort-disabled",r.sort===!1),q.addClass(r.cssClass).addClass(r.colClass).html(r.text).attr({"data-index":d,"data-type":r.type,style:r.css}),p.append(q));var t;j.fixedLeft&&(t=a(o),t.addClass("fixed-left").find("table").addClass(i.tableClass).find("thead").append(c),s.append(t)),j.flexArea&&(t=a(o),t.addClass("flexarea").find(".datatable-wrapper").append('<div class="scrolled-shadow scrolled-in-shadow"></div><div class="scrolled-shadow scrolled-out-shadow"></div>').find("table").addClass(i.tableClass).find("thead").append(f),s.append(t)),j.fixedRight&&(t=a(o),t.addClass("fixed-right").find("table").addClass(i.tableClass).find("thead").append(e),s.append(t)),h.append(s);var u,v,w,x,y,z,A,B,C=a('<div class="datatable-rows">'),D=l.length;c=a("<tbody/>"),e=a("<tbody/>"),f=a("<tbody/>");for(var E=0;D>E;++E){for(z=l[E],"undefined"==typeof z.id&&(z.id=E),z.index=E,u=a("<tr/>"),u.addClass(z.cssClass).toggleClass(i.checkedClass,z.checked).attr({"data-index":E,"data-id":z.id}),v=u.clone(),w=u.clone(),B=z.data.length,d=0;B>d;++d)A=z.data[d],d>0&&A.empty||(p=d<j.flexStart?u:d>=j.flexStart&&d<=j.flexEnd?v:w,0===d&&m&&(y=a('<td data-index="check" class="check-row check-btn"><i class="icon-check-empty"></i></td>'),i.checkboxName&&y.append('<input class="hide" type="checkbox" name="'+i.checkboxName+'" value="'+z.id+'">'),p.append(y)),k[d].ignore||(a.isPlainObject(A)?(A.row=E,A.index=d):A={text:A,row:E,index:d},z.data[d]=A,x=a("<td/>"),x.html(A.text).addClass(A.cssClass).addClass(k[d].colClass).attr("colspan",A.colSpan).attr({"data-row":E,"data-index":d,"data-flex":!1,"data-type":k[d].type,style:A.css,title:A.title||""}),p.append(x)));c.append(u),f.append(v),e.append(w)}var F;j.fixedLeft&&(F=a(n),F.addClass("fixed-left").find("table").addClass(i.tableClass).append(c),C.append(F)),j.flexArea&&(F=a(n),F.addClass("flexarea").find(".datatable-wrapper").append('<div class="scrolled-shadow scrolled-in-shadow"></div><div class="scrolled-shadow scrolled-out-shadow"></div>').find("table").addClass(i.tableClass).append(f),C.append(F)),j.fixedRight&&(F=a(n),F.addClass("fixed-right").find("table").addClass(i.tableClass).append(e),C.append(F)),h.append(C),j.flexArea&&h.append('<div class="scroll-wrapper"><div class="scroll-slide scroll-pos-'+i.scrollPos+'"><div class="bar"></div></div></div>');var G=h.children(".datatable-footer").detach();j.footer?(h.append(a('<div class="datatable-footer"/>').append(j.footer)),j.footer=null):G.length&&h.append(G),g.$datatable=h.data(b,g),g.isTable&&g.firstShow&&(g.$table.attr("data-datatable-id",this.id).hide().after(h),g.firstShow=!1),g.bindEvents(),g.refreshSize(),g.callEvent("render")},c.prototype.bindEvents=function(){var b=this,c=this.data,d=this.options,e=a.zui.store,f=this.$datatable,g=b.$dataSpans=f.children(".datatable-head, .datatable-rows").find(".datatable-span"),h=b.$rowsSpans=f.children(".datatable-rows").children(".datatable-rows-span"),i=b.$headSpans=f.children(".datatable-head").children(".datatable-head-span"),j=b.$cells=g.find("td, th"),k=b.$dataCells=j.filter("td");b.$headCells=j.filter("th");var l=b.$rows=b.$rowsSpans.find(".table > tbody > tr");if(d.rowHover){var m=d.hoverClass;h.on("mouseenter","td",function(){k.filter("."+m).removeClass(m),l.filter("."+m).removeClass(m),l.filter('[data-index="'+a(this).addClass(m).closest("tr").data("index")+'"]').addClass(m)}).on("mouseleave","td",function(){k.filter("."+m).removeClass(m),l.filter("."+m).removeClass(m)})}if(d.colHover){var n=d.colHoverClass;i.on("mouseenter","th",function(){j.filter("."+n).removeClass(n),j.filter('[data-index="'+a(this).data("index")+'"]').addClass(n)}).on("mouseleave","th",function(){j.filter("."+n).removeClass(n)})}if(c.flexArea){var o,p,q,r,s,t,u,v=f.find(".scroll-slide"),w=f.find(".datatable-span.flexarea"),x=f.find(".datatable-span.fixed-left"),y=f.find(".datatable-span.flexarea .table"),z=v.children(".bar"),A=b.id+"_scrollOffset";b.width=f.width(),f.resize(function(){b.width=f.width()});var B=function(a,b){s=Math.max(0,Math.min(o-p,a)),b||f.addClass("scrolling"),z.css("left",s),u=0-Math.floor((q-o)*s/(o-p)),y.css("left",u),r=s,f.toggleClass("scrolled-in",s>2).toggleClass("scrolled-out",o-p-2>s),d.storage&&e.pageSet(A,s)},C=function(){o=w.width(),v.width(o).css("left",x.width()),q=y.width(),p=Math.floor(o*o/q),z.css("width",p),y.css("min-width",o),f.toggleClass("show-scroll-slide",q>o),t||o===p||(t=!0,B(e.pageGet(A,0),!0)),f.hasClass("size-changing")&&B(s,!0)};w.resize(C),d.storage&&C();var D={move:!1,stopPropagation:!0,drag:function(a){B(z.position().left+a.smallOffset.x*(a.element.hasClass("bar")?1:-1))},finish:function(){f.removeClass("scrolling")}};z.draggable(D),d.flexHeadDrag&&f.find(".datatable-head-span.flexarea").draggable(D),v.mousedown(function(a){var b=a.pageX-v.offset().left;B(b-p/2)})}if(d.checkable){var E,F=b.id+"_checkedStatus",G=d.checkedClass,H=function(){var f=h.first().find(".table > tbody > tr"),g=f.filter("."+G);f.find(".check-row input:checkbox").prop("checked",!1);var j={checkedAll:f.length===g.length&&g.length>0,checks:g.map(function(){return E=a(this).data("id"),d.checkboxName&&a(this).find(".check-row input:checkbox").prop("checked",!0),E}).toArray()};a.each(c.rows,function(b,c){c.checked=a.inArray(c.id,j.checks)>-1}),i.find(".check-all").toggleClass("checked",j.checkedAll),d.storage&&e.pageSet(F,j),b.callEvent("checksChanged",{checks:j})};this.$rowsSpans.on("click",d.checkByClickRow?"tr":".check-row",function(){l.filter('[data-index="'+a(this).closest("tr").data("index")+'"]').toggleClass(G),H()});var I="click.zui.datatable.check-all";if(this.$datatable.off(I).on(I,".check-all",function(){l.toggleClass(G,a(this).toggleClass("checked").hasClass("checked")),H()}).on("click",".check-none",function(){l.toggleClass(G,!1),H()}).on("click",".check-inverse",function(){l.toggleClass(G),H()}),d.storage){var J=e.pageGet(F);J&&(i.find(".check-all").toggleClass("checked",J.checkedAll),J.checkedAll?l.addClass(G):(l.removeClass(G),a.each(J.checks,function(a,b){l.filter('[data-id="'+b+'"]').addClass(G)})),J.checks.length&&H())}}if(d.fixedHeader){var K,L,M,N=f.children(".datatable-head"),O=d.fixedHeaderOffset||a(".navbar.navbar-fixed-top").height()||0,P=function(){K=f.offset().top,M=a(window).scrollTop(),L=f.height(),f.toggleClass("head-fixed",M+O>K&&K+L>M+O),f.hasClass("head-fixed")?N.css({width:f.width(),top:O}):N.attr("style","")};a(window).scroll(P),P()}d.sortable?(i.on("click","th:not(.sort-disabled, .check-btn)",function(){f.hasClass("size-changing")||b.sortTable(a(this))}),d.storage&&b.sortTable()):d.mergeRows&&this.mergeRows()},c.prototype.mergeRows=function(){for(var b=this.$rowsSpans.find(".table > tbody > tr > td"),c=this.data.cols,d=0;d<c.length;d++){var e=c[d];if(e.mergeRows){var f=b.filter('[data-index="'+d+'"]');if(f.length>1){var g,h;f.each(function(){var b=a(this);g&&b.html()===g.html()?(h=g.attr("rowspan")||1,"number"!=typeof h&&(h=parseInt(h),isNaN(h)&&(h=1)),g.attr("rowspan",h+1).css("vertical-align","middle"),b.remove()):g=b})}}}},c.prototype.sortTable=function(b){var c=a.zui.store,d=this.options,e=this.id+"_datatableSorter",f=d.storage?c.pageGet(e):null;if(b||(b=f?this.$headCells.filter('[data-index="'+f.index+'"]').addClass("sort-"+f.type):this.$headCells.filter(".sort-up, .sort-down").first()),b.length){var g,h,i,j=this.data,k=j.cols,l=j.rows,m=this.$headCells;g=!b.hasClass("sort-up"),m.removeClass("sort-up sort-down"),b.addClass(g?"sort-up":"sort-down"),i=b.data("index"),g=b.hasClass("sort-up"),a.each(k,function(a,b){a==i||"up"!==b.sort&&"down"!==b.sort?a==i&&(b.sort=g?"up":"down",h=b.type):b.sort=!0});var n,o,p,q=this.$dataCells.filter('[data-index="'+i+'"]');l.sort(function(a,b){return a=a.data[i],b=b.data[i],n=q.filter('[data-row="'+a.row+'"]').text(),o=q.filter('[data-row="'+b.row+'"]').text(),"number"===h?(n=parseFloat(n),o=parseFloat(o)):"date"===h?(n=Date.parse(n),o=Date.parse(o)):(n=n.toLowerCase(),o=o.toLowerCase()),p=n>o?1:o>n?-1:0,g&&(p=-1*p),p});var r,s,t,u=this.$rows,v=[];a.each(l,function(b,c){r=u.filter('[data-index="'+c.index+'"]'),r.each(function(b){t=a(this),s=v[b],s?s.after(t):t.parent().prepend(t),v[b]=t})}),f={index:i,type:g?"up":"down"},d.storage&&c.pageSet(e,f),this.callEvent("sort",{sorter:f})}},c.prototype.refreshSize=function(){var b,c=this.$datatable,d=this.options,e=this.data.rows,f=this.data.cols;c.find(".datatable-span.fixed-left").css("width",d.fixedLeftWidth),c.find(".datatable-span.fixed-right").css("width",d.fixedRightWidth);var g=function(b){var c,d,e=0;return b.css("height","auto"),b.each(function(){c=a(this),d=c.attr("rowspan"),d&&1!=d||(e=Math.max(e,c.outerHeight()))}),e},h=this.$dataCells,i=this.$cells,j=this.$headCells;for(b=0;b<f.length;++b)i.filter('[data-index="'+b+'"]').css("width",f[b].width);var k=g(j);j.css("min-height",k).css("height",k);var l;for(b=0;b<e.length;++b){l=h.filter('[data-row="'+b+'"]');var m=g(l);l.css("min-height",m).css("height",m)}},c.prototype.callEvent=function(a,b){var c=this.$.callEvent(a+"."+this.name,b,this).result;return!(void 0!==c&&!c)},a.fn.datatable=function(d){return this.each(function(){var e=a(this),f=e.data(b),g="object"==typeof d&&d;f||e.data(b,f=new c(this,g)),"string"==typeof d&&f[d]()})},a.fn.datatable.Constructor=c}(jQuery);