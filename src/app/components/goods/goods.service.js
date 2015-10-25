(function() {
  'use strict';

  angular
      .module('striver')
      .service('goods', goods);

  /** @ngInject */
  function goods($q, $http) {

    var activatedPromise;

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
      var activatedDefer = $q.defer();
      activatedPromise = activatedDefer.promise;

      var categoriesPromise = $http.get("app/rest/categories.json").then(function (response) {
        categories = response.data;
      });

      var goodsPromise = $http.get("app/rest/goods.json").then(function (response) {
        goods = response.data;
        fillCaregoriesByGoods(goods);
      });

      $q.all([categoriesPromise, goodsPromise]).then(function () {
        activatedDefer.resolve();
      })
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
      return activatedPromise.then(function () {
        if(!goods) {
          return undefined;
        }

        for (var i=0; i<goods.length; i++) {
          if (goods[i].id == goodId) {
            return goods[i];
          }
        }
      });
    }
  }

})();
