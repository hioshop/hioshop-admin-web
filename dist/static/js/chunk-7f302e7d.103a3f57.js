(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f302e7d"],{"14d9":function(e,t,r){"use strict";var n=r("23e7"),o=r("7b0b"),a=r("07fa"),s=r("3a34"),i=r("3511"),c=r("d039"),l=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),d=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},m=l||!d();n({target:"Array",proto:!0,arity:1,forced:m},{push:function(e){var t=o(this),r=a(t),n=arguments.length;i(r+n);for(var c=0;c<n;c++)t[r]=arguments[c],r++;return s(t,r),r}})},"3a34":function(e,t,r){"use strict";var n=r("83ab"),o=r("e8b5"),a=TypeError,s=Object.getOwnPropertyDescriptor,i=n&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=i?function(e,t){if(o(e)&&!s(e,"length").writable)throw a("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},"64c8":function(e,t,r){"use strict";r("dd04")},c612:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content-page"},[r("div",{staticClass:"content-nav"},[r("el-breadcrumb",{staticClass:"breadcrumb",attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:{name:"admin"}}},[e._v("管理员")]),r("el-breadcrumb-item",[e._v(e._s(e.infoForm.id?"编辑管理员":"添加管理员"))])],1),r("div",{staticClass:"operation-nav"},[r("el-button",{attrs:{type:"primary",icon:"arrow-left"},on:{click:e.goBackPage}},[e._v("返回列表")])],1)],1),r("div",{staticClass:"content-main"},[r("div",{staticClass:"form-table-box"},[r("el-form",{ref:"infoForm",attrs:{rules:e.infoRules,model:e.infoForm,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"管理员用户名",prop:"username"}},[r("el-input",{model:{value:e.infoForm.username,callback:function(t){e.$set(e.infoForm,"username",t)},expression:"infoForm.username"}})],1),e.infoForm.id?r("el-form-item",{attrs:{label:"新密码",prop:"newpassword"}},[r("el-switch",{attrs:{"active-color":"#13ce66"},model:{value:e.change,callback:function(t){e.change=t},expression:"change"}})],1):e._e(),e.change?r("el-form-item",{attrs:{label:"",prop:"newpassword"}},[r("el-input",{attrs:{type:"password",placeholder:"输入新的密码"},model:{value:e.infoForm.newpassword,callback:function(t){e.$set(e.infoForm,"newpassword",t)},expression:"infoForm.newpassword"}})],1):e._e(),e.infoForm.id?e._e():r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password"},model:{value:e.infoForm.password,callback:function(t){e.$set(e.infoForm,"password",t)},expression:"infoForm.password"}})],1),r("el-form-item",[e.infoForm.id>0?r("el-button",{attrs:{type:"primary"},on:{click:e.saveAdminInfo}},[e._v("确定保存")]):r("el-button",{attrs:{type:"primary"},on:{click:e.addAdminInfo}},[e._v("确定添加")]),r("el-button",{on:{click:e.goBackPage}},[e._v("取消")])],1)],1)],1)])])},o=[],a=(r("ac1f"),r("5319"),r("14d9"),r("a3be"),{data:function(){return{change:!1,infoForm:{id:0,username:"",newpassword:"",password:""},infoRules:{username:[{required:!0,message:"请输入昵称",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{testa:function(){console.log(this.tableData),console.log(this.infoForm)},goBackPage:function(){this.$router.go(-1)},saveAdminInfo:function(){var e=this,t=this.infoForm;if(1==this.change){var r=t.newpassword;if(void 0==r&&(t.newpassword=""),void 0!=r&&r.replace(/(^\s*)|(\s*$)/g,"").length<6)return this.$message({type:"error",message:"密码请大于6个字符"}),!1}this.$refs["infoForm"].validate((function(r){if(!r)return!1;e.axios.post("admin/adminSave",{user:t,change:e.change}).then((function(t){0===t.data.errno?e.$message({type:"success",message:"保存成功"}):400===t.data.errno?e.$message({type:"error",message:t.data.errmsg}):e.$message({type:"error",message:"保存失败"})}))}))},addAdminInfo:function(){var e=this,t=this.infoForm,r=t.password;if(void 0==r&&(t.password=""),void 0!=r&&r.replace(/(^\s*)|(\s*$)/g,"").length<6)return this.$message({type:"error",message:"密码请大于6个字符"}),!1;this.$refs["infoForm"].validate((function(r){if(!r)return!1;e.axios.post("admin/adminAdd",{user:t}).then((function(t){0===t.data.errno?(e.$message({type:"success",message:"添加成功"}),e.$router.push({name:"admin"})):e.$message({type:"error",message:"添加失败"})}))}))},getInfo:function(){var e=this;this.axios.post("admin/adminDetail",{id:e.infoForm.id}).then((function(t){if(0===t.data.errno){var r=t.data.data;e.infoForm=r}}))}},components:{},mounted:function(){this.infoForm.id=this.$route.query.id||0,console.log(this.infoForm.id),this.getInfo()}}),s=a,i=(r("64c8"),r("2877")),c=Object(i["a"])(s,n,o,!1,null,null,null);t["default"]=c.exports},dd04:function(e,t,r){}}]);