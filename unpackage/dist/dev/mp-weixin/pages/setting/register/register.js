"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  onLoad() {
  },
  methods: {
    inputname: function(e) {
      this.name = e.detail.value;
    },
    inputmobile: function(e) {
      this.mobile = e.detail.value;
    },
    getUserInfo() {
      const that = this;
      common_vendor.index.getSystemInfo({
        success: function(res) {
          that.deviceId = res.deviceId;
        },
        fail: function(err) {
          console.log(err);
        }
      });
      console.log("\u7528\u6237\u6635\u79F0\uFF1A" + this.name);
      console.log("\u624B\u673A\u53F7\uFF1A" + this.mobile);
      console.log("\u8BBE\u5907ID\uFF1A" + that.deviceId);
      if (this.name === null || this.name === "") {
        common_vendor.index.hideLoading();
        common_vendor.index.showModal({
          content: "\u6635\u79F0\u4E0D\u80FD\u4E3A\u7A7A",
          showCancel: false
        });
      } else {
        if (this.mobile === null || this.mobile === "") {
          common_vendor.index.hideLoading();
          common_vendor.index.showModal({
            content: "\u624B\u673A\u53F7\u4E0D\u80FD\u4E3A\u7A7A",
            showCancel: false
          });
        } else {
          var mobileNumber = this.mobile.toString().length;
          console.log("\u624B\u673A\u53F7\u957F\u5EA6: " + mobileNumber);
          if (mobileNumber < 11) {
            common_vendor.index.hideLoading();
            common_vendor.index.showModal({
              content: "\u624B\u673A\u53F7\u957F\u5EA6\u4E0D\u8DB311",
              showCancel: false
            });
          } else {
            common_vendor.tn.callFunction({
              name: "insertUserData",
              data: {
                userName: this.name,
                mobile: this.mobile,
                deviceID: that.deviceId
              }
            }).then((res) => {
              common_vendor.index.hideLoading();
              common_vendor.index.showModal({
                content: "\u6CE8\u518C\u6210\u529F",
                showCancel: false
              });
            }).catch((err) => {
              common_vendor.index.hideLoading();
              common_vendor.index.showModal({
                content: "\u6CE8\u518C\u5931\u8D25",
                showCancel: false
              });
            });
          }
        }
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.inputname && $options.inputname(...args)),
    b: common_vendor.o((...args) => $options.inputmobile && $options.inputmobile(...args)),
    c: common_vendor.o(($event) => $options.getUserInfo())
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Coding/Kitchen/pages/setting/register/register.vue"]]);
wx.createPage(MiniProgramPage);
