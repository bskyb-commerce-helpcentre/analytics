"undefined"==typeof _wiki&&(_wiki={}),_wiki.setup=function(){function a(){$(".toggle-code-example").on("click",e),$("#btn_page_load").on("click",g),$("#debug-on-load").on("click",u),$("#btn_ajax_event").on("click",t),$("#btn-page-load-var").on("click",l),$("#search-results-trackPage").on("click",o),$("#btn_error_trackPage").on("click",s),$("#btn_error_event").on("click",i),$("#standard-vars-onLoad-a").on("click",r),$("#standard-events-onLoad-a").on("click",d),$(document).on("click","#manualBind, #manualBindA",analytics.trackClick),n(),c()}function e(){var a=$(this),e=$("#"+a.attr("for"));e.hasClass("open")?(a.removeClass("open"),e.removeClass("open")):(a.addClass("open"),e.addClass("open"))}function n(){$("[data-tracking-variable=how_about_pina_coladas]").attr("data-tracking-value",$("input[name=radio_field]:checked").val()),$("[data-tracking-variable=drink]").attr("data-tracking-value",$("#input_field").val()),$("#input_field").on("blur",function(){$("[data-tracking-variable=drink]").attr("data-tracking-value",$(this).val())}),$("#radio-input input").on("click",function(){$("[data-tracking-variable=how_about_pina_coladas]").attr("data-tracking-value",$(this).val())}),$("#text-input button, #radio-input button").on("click",function(a){a.preventDefault()})}function t(a){a.preventDefault(),analytics.trackPage({site:"global",section:"skyglobal/analytics",account:"bskybglobaldev",page:"Analytics single page apps demo page",customEvents:[{ajax_happened:{event:101,onPageLoad:!0}}],customVariables:[{colour:{"var":71}},{drink:{"var":72}},{how_about_pina_coladas:{"var":73}}]})}function o(a){a.preventDefault(),analytics.trackPage({site:"global",section:"skyglobal/analytics",account:"bskybglobaldev",page:"Analytics single page apps demo page",loadVariables:{searchResults:0,searchType:"weather",searchTerm:"london"}})}function l(a){a.preventDefault(),analytics.trackPage({site:"global",section:"skyglobal/analytics",account:"bskybglobaldev",page:"Analytics single page apps demo page",customVariables:[{how_about_pina_coladas:{"var":73,value:"my val on load",onPageLoad:!0}}]})}function c(){$("#manualTrackingOff").on("click",function(){$("#manualTrackingOff").trigger("analytics-track")}),$("#manualTrack").on("click",function(){$("#manualTrack").trigger("analytics-track")})}function i(){analytics.trackError("myCustomError i.e. 404 or no-package-found")}function s(){SITECAT_CONFIG={site:"global",section:"skyglobal/analytics/debug",headline:"",contentType:"demo",contentId:"",account:"bskybglobaldev",page:"Analytics debug demo page",loadVariables:{errors:"404"}},analytics.trackPage(SITECAT_CONFIG)}function r(){analytics.trackPage({site:"global",section:"skyglobal/analytics",account:"bskybdemodev",page:"Analytics demo page",loadVariables:{videoTitle:"My Home Video",externalSearchTerm:"thrill rides"}})}function d(){analytics.trackPage({site:"global",section:"skyglobal/analytics",account:"bskybdemodev",page:"Analytics demo page",loadEvents:["liveChat"]})}function g(){SITECAT_CONFIG={site:"global",section:"skyglobal/analytics",headline:"",contentType:"skyglobal",contentId:"",account:"bskybmyglobaldev",page:"Analytics demo page",customEvents:[{magic_happened:{event:99,onPageLoad:!0}}],customVariables:[{my_custom_prop:{prop:40,onPageLoad:!0,value:"my custom prop value"}},{my_custom_variable:{eVar:41,prop:41,onPageLoad:!0,value:"my custom eVar value"}}]},analytics.trackPage(SITECAT_CONFIG)}function u(){SITECAT_CONFIG={site:"global",section:"skyglobal/analytics/debug",headline:"",contentType:"demo",contentId:"",account:"bskybglobaldev",page:"Analytics debug demo page",debug:!0},analytics.trackPage(SITECAT_CONFIG)}a()}(),"function"==typeof window.define&&window.define.amd&&define("wiki",[],function(){return _wiki});