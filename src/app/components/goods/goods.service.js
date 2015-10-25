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
      goodsByCategory: goodsByCategory,
      getGood: getGood
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
    }

    function goodsByCategory(category) {
      return getCatagorisedGoods(category.id);
    }

    function getGood(goodId) {
      if(goods) {
        for (var i=0; i<goods.length; i++) {
          if (goods[i].id == goodId) {
            return goods[i];
          }
        }
      }
      return undefined;
    }
  }

})();
