(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d209172"],{a827:function(e,o,t){"use strict";t.r(o);var r=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"content-page"},[t("div",{staticClass:"content-nav"},[t("el-breadcrumb",{staticClass:"breadcrumb",attrs:{separator:"/"}},[t("el-breadcrumb-item",{attrs:{to:{name:"shipper_list"}}},[e._v("快递公司")]),t("el-breadcrumb-item",[e._v(e._s(e.infoForm.id?"编辑快递公司":"添加快递公司"))])],1),t("div",{staticClass:"operation-nav"},[t("el-button",{attrs:{type:"primary",icon:"arrow-left"},on:{click:e.goBackPage}},[e._v("返回列表")])],1)],1),t("div",{staticClass:"content-main"},[t("div",{staticClass:"form-table-box"},[t("el-form",{ref:"infoForm",attrs:{rules:e.infoRules,model:e.infoForm,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"名字",prop:"name"}},[t("el-input",{model:{value:e.infoForm.name,callback:function(o){e.$set(e.infoForm,"name",o)},expression:"infoForm.name"}})],1),t("el-form-item",{attrs:{label:"代号",prop:"code"}},[t("el-input",{model:{value:e.infoForm.code,callback:function(o){e.$set(e.infoForm,"code",o)},expression:"infoForm.code"}})],1),t("el-form-item",{attrs:{label:"客户编号"}},[t("el-input",{model:{value:e.infoForm.CustomerName,callback:function(o){e.$set(e.infoForm,"CustomerName",o)},expression:"infoForm.CustomerName"}}),t("div",{staticClass:"form-tips"},[e._v("打印电子面单，需要填写")])],1),t("el-form-item",{attrs:{label:"月结账号"}},[t("el-input",{model:{value:e.infoForm.MonthCode,callback:function(o){e.$set(e.infoForm,"MonthCode",o)},expression:"infoForm.MonthCode"}}),t("div",{staticClass:"form-tips"},[e._v("打印电子面单，需要填写")])],1),t("el-form-item",{attrs:{label:"排序",prop:"sort_order"}},[t("el-input-number",{attrs:{min:1,max:1e3},model:{value:e.infoForm.sort_order,callback:function(o){e.$set(e.infoForm,"sort_order",o)},expression:"infoForm.sort_order"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmitInfo}},[e._v("确定保存")]),t("el-button",{on:{click:e.goBackPage}},[e._v("取消")])],1)],1)],1)])])},i=[],n=t("a3be"),a={data:function(){return{infoForm:{id:0,name:"",code:"",sort_order:0},infoRules:{name:[{required:!0,message:"请输入快递公司名字",trigger:"blur"}],code:[{required:!0,message:"请输入快递公司代号",trigger:"blur"}],MonthCode:[{required:!0,message:"请输入快递公司月结账号",trigger:"blur"}]}}},methods:{goBackPage:function(){this.$router.go(-1)},onSubmitInfo:function(){var e=this;this.$refs["infoForm"].validate((function(o){if(!o)return!1;e.axios.post("shipper/store",e.infoForm).then((function(o){0===o.data.errno?(e.$message({type:"success",message:"保存成功"}),e.$router.go(-1)):e.$message({type:"error",message:"保存失败"})}))}))},getInfo:function(){if(this.infoForm.id<=0)return!1;var e=this;this.axios.get("shipper/info",{params:{id:e.infoForm.id}}).then((function(o){var t=o.data.data;e.infoForm=t}))}},components:{},mounted:function(){this.infoForm.id=this.$route.query.id||0,this.getInfo(),console.log(n["a"])}},s=a,m=t("2877"),l=Object(m["a"])(s,r,i,!1,null,null,null);o["default"]=l.exports}}]);