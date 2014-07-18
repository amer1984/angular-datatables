/**
 * @author l.lin
 * @created 18/07/14 09:29
 */
(function() {
    'use strict';
    angular.module('datatablesSampleApp').controller('serverSideProcessingCtrl', function ($scope, DTOptionsBuilder, DTColumnBuilder) {
        $scope.dtOptions = DTOptionsBuilder.fromSource('data.json')
            .withPaginationType('full_numbers');
//        $scope.dtOptions = DTOptionsBuilder.newOptions()
//            .withOption('ajax', {
//                url: 'data/serverSideProcessing',
//                type: 'POST'
//            })
//            .withOption('serverSide', true)
//            .withPaginationType('full_numbers');
        $scope.dtColumns = [
            DTColumnBuilder.newColumn('id').withTitle('ID'),
            DTColumnBuilder.newColumn('firstName').withTitle('First name'),
            DTColumnBuilder.newColumn('lastName').withTitle('Last name').notVisible()
        ];
    });
})();