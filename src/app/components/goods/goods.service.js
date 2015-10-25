(function() {
  'use strict';

  angular
      .module('striver')
      .service('goods', goods);

  /** @ngInject */
  function goods($http) {

    var goods = undefined;
    var categories = undefined;
    var goodsByCategoryData = {};

    activate();

    return {
      allCategories: allCategories,
      allGoods: allGoods,
      goodsByCategory: goodsByCategory
    };


    function activate() {
      $http.get("app/rest/categories.json").then(function (response) {
        categories = response.data;
      });

      $http.get("app/rest/goods.json").then(function (response) {
        goods = response.data;
        fillCaregoriesByGoods(goods);

      });
    }

    function allGoods() {
      return goods;
    }

    function allCategories() {
      return categories;
    }

    function getCatagorisedGoods(categoryId) {
      var listOfGoods = goodsByCategoryData[categoryId];
      if(!listOfGoods) {
        listOfGoods = [];
        goodsByCategoryData[categoryId]  = listOfGoods;
      }
      return listOfGoods;
    }

    function fillCaregoriesByGoods(goods) {
      angular.forEach(goods, function(good) {
        angular.forEach(good.categoryIds, function(categoryId) {
          getCatagorisedGoods(categoryId).push(good);
        });
      });

      console.log("ISD -----------------------", goodsByCategoryData);
    }

    function goodsByCategory(category) {
      console.log("ISD category" + category);
      var res = getCatagorisedGoods(category.id);
      console.log("ISD res ", res);
      return res;
    }
  }

})();
