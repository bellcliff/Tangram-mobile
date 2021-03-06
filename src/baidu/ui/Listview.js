/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.ui.createUI;

/**
 * 列表视图
 * @class Listview类
 * @param {Object}              options       选项。
 * @returns {Listview}                        Listview类
 */
baidu.ui.Listview = baidu.ui.createUI(function(options){
    
}).extend({
    uiType: 'listview',
    
    /**
     * 数据初始化
     * @private 
     */
    _setup: function(){
      var me = this;
      baidu.ui.Base._setup.call(me);  
      me.dispatchEvent('setup');
    },
    
    /**
     * 初始化列表视图
     * @private
     */
    _init: function(){
      var me = this;
      baidu.ui.Base._init.call(me);
      me.dispatchEvent('load');
    }
});
