(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-components-module~product-product-module"],{

/***/ "./src/app/data/carousels.ts":
/*!***********************************!*\
  !*** ./src/app/data/carousels.ts ***!
  \***********************************/
/*! exports provided: carouselData, carouselImages, carouselThumbs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carouselData", function() { return carouselData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carouselImages", function() { return carouselImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carouselThumbs", function() { return carouselThumbs; });
const carouselData = [
    {
        id: 'carousel-0',
        title: 'Homemade Cheesecake with Fresh Berries and Mint',
        img: '/assets/img/cards/thumb-1.jpg',
        detail: '10.12.2019',
        category: 'Cupcakes',
        badges: ['NEW']
    },
    {
        id: 'carousel-1',
        title: 'Wedding Cake with Flowers Macarons and Blueberries',
        img: '/assets/img/cards/thumb-2.jpg',
        detail: '10.06.2020',
        category: 'Cakes',
        badges: ['TRENDING']
    },
    {
        id: 'carousel-2',
        title: 'Cheesecake with Chocolate Cookies and Cream Biscuits',
        img: '/assets/img/cards/thumb-3.jpg',
        detail: '03.01.2020',
        category: 'Cupcakes',
        badges: ['PROCESSED']
    },
    {
        id: 'carousel-3',
        title: 'Homemade Cheesecake with Dried Lemon on Top',
        img: '/assets/img/cards/thumb-1.jpg',
        detail: '22.02.2020',
        category: 'Cakes',
        badges: ['']
    },
    {
        id: 'carousel-4',
        title: 'Cupcake with Cream Biscuit Bananas and Sour Cherry',
        img: '/assets/img/cards/thumb-2.jpg',
        detail: '12.05.2020',
        category: 'Cakes',
        badges: ['DONE']
    }
];
const carouselImages = [
    {
        id: 'large-0',
        img: '/assets/img/products/parkin.jpg',
    },
    {
        id: 'large-1',
        img: '/assets/img/products/napoleonshat.jpg',
    },
    {
        id: 'large-2',
        img: '/assets/img/products/marble-cake.jpg',
    },
    {
        id: 'large-3',
        img: '/assets/img/products/fruitcake.jpg',
    },
    {
        id: 'large-4',
        img: '/assets/img/products/magdalena.jpg',
    },
    {
        id: 'large-5',
        img: '/assets/img/products/tea-loaf.jpg',
    }
];
const carouselThumbs = [
    {
        id: 'thumb-0',
        img: '/assets/img/products/parkin-thumb.jpg',
    },
    {
        id: 'thumb-1',
        img: '/assets/img/products/napoleonshat-thumb.jpg',
    },
    {
        id: 'thumb-2',
        img: '/assets/img/products/marble-cake-thumb.jpg',
    },
    {
        id: 'thumb-3',
        img: '/assets/img/products/fruitcake-thumb.jpg',
    },
    {
        id: 'thumb-4',
        img: '/assets/img/products/magdalena-thumb.jpg',
    },
    {
        id: 'thumb-5',
        img: '/assets/img/products/tea-loaf-thumb.jpg',
    }
];


/***/ }),

/***/ "./src/app/data/charts.ts":
/*!********************************!*\
  !*** ./src/app/data/charts.ts ***!
  \********************************/
/*! exports provided: polarAreaChartData, lineChartData, areaChartData, conversionChartData, scatterChartData, barChartData, radarChartData, pieChartData, doughnutChartData, smallChartData1, smallChartData2, smallChartData3, smallChartData4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polarAreaChartData", function() { return polarAreaChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartData", function() { return lineChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartData", function() { return areaChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conversionChartData", function() { return conversionChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scatterChartData", function() { return scatterChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartData", function() { return barChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radarChartData", function() { return radarChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartData", function() { return pieChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doughnutChartData", function() { return doughnutChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smallChartData1", function() { return smallChartData1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smallChartData2", function() { return smallChartData2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smallChartData3", function() { return smallChartData3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smallChartData4", function() { return smallChartData4; });
/* harmony import */ var _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/colors.service */ "./src/app/constants/colors.service.ts");

const polarAreaChartData = {
    labels: ['Sales', 'Orders', 'Stock'],
    datasets: [
        {
            data: [80, 90, 70],
            borderWidth: 2,
            borderColor: [_constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1, _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor2, _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor3],
            backgroundColor: [
                _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1_10,
                _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor2_10,
                _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor3_10
            ]
        }
    ]
};
const lineChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            label: '',
            data: [54, 63, 60, 65, 60, 68, 60],
            borderColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1,
            pointBackgroundColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().foregroundColor,
            pointBorderColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1,
            pointHoverBackgroundColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1,
            pointHoverBorderColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().foregroundColor,
            pointRadius: 4,
            pointBorderWidth: 2,
            pointHoverRadius: 6,
            borderWidth: 2,
            fill: false
        }
    ]
};
const areaChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            label: '',
            data: [54, 63, 60, 65, 60, 68, 60],
            borderColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1,
            pointBackgroundColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().foregroundColor,
            pointBorderColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1,
            pointHoverBackgroundColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1,
            pointHoverBorderColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().foregroundColor,
            pointRadius: 4,
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            fill: true,
            borderWidth: 2,
            backgroundColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1_10
        }
    ]
};
const conversionChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            label: '',
            data: [65, 60, 68, 60, 58, 63, 60],
            borderColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor2,
            pointBackgroundColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().foregroundColor,
            pointBorderColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor2,
            pointHoverBackgroundColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor2,
            pointHoverBorderColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().foregroundColor,
            pointRadius: 4,
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            fill: true,
            borderWidth: 2,
            backgroundColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor2_10
        }
    ]
};
const scatterChartData = {
    datasets: [
        {
            borderWidth: 2,
            showLine: false,
            label: 'Cakes',
            borderColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1,
            backgroundColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1_10,
            data: [
                { x: 62, y: -78 },
                { x: -0, y: 74 },
                { x: -67, y: 45 },
                { x: -26, y: -43 },
                { x: -15, y: -30 },
                { x: 65, y: -68 },
                { x: -28, y: -61 }
            ]
        },
        {
            borderWidth: 2,
            showLine: false,
            label: 'Desserts',
            borderColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor2,
            backgroundColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor2_10,
            data: [
                { x: 79, y: 62 },
                { x: 62, y: 0 },
                { x: -76, y: -81 },
                { x: -51, y: 41 },
                { x: -9, y: 9 },
                { x: 72, y: -37 },
                { x: 62, y: -26 }
            ]
        }
    ]
};
const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            label: 'Cakes',
            borderColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1,
            backgroundColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1_10,
            data: [456, 479, 324, 569, 702, 600],
            borderWidth: 2
        },
        {
            label: 'Desserts',
            borderColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor2,
            backgroundColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor2_10,
            data: [364, 504, 605, 400, 345, 320],
            borderWidth: 2
        }
    ]
};
const radarChartData = {
    datasets: [
        {
            label: 'Stock',
            borderWidth: 2,
            pointBackgroundColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1,
            borderColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1,
            backgroundColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1_10,
            data: [80, 90, 70]
        },
        {
            label: 'Order',
            borderWidth: 2,
            pointBackgroundColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor2,
            borderColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor2,
            backgroundColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor2_10,
            data: [68, 80, 95]
        }
    ],
    labels: ['Cakes', 'Desserts', 'Cupcakes']
};
const pieChartData = {
    labels: ['Cakes', 'Cupcakes', 'Desserts'],
    datasets: [
        {
            label: '',
            borderColor: [_constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1, _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor2, _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor3],
            backgroundColor: [
                _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1_10,
                _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor2_10,
                _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor3_10
            ],
            borderWidth: 2,
            data: [15, 25, 20]
        }
    ]
};
const doughnutChartData = {
    labels: ['Cakes', 'Cupcakes', 'Desserts'],
    datasets: [
        {
            label: '',
            borderColor: [_constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor3, _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor2, _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1],
            backgroundColor: [
                _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor3_10,
                _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor2_10,
                _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1_10
            ],
            borderWidth: 2,
            data: [15, 25, 20]
        }
    ]
};
const smallChartData1 = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            label: 'Orders',
            borderColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1,
            pointBorderColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1,
            pointHoverBackgroundColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1,
            pointHoverBorderColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1,
            pointRadius: 3,
            pointBackgroundColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1,
            pointBorderWidth: 0,
            pointHoverRadius: 3,
            fill: false,
            borderWidth: 2,
            data: [1250, 1300, 1550, 921, 1810, 1106, 1610],
            datalabels: {
                align: 'end',
                anchor: 'end'
            }
        }
    ]
};
const smallChartData2 = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            label: 'Revenue',
            borderColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1,
            pointBorderColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1,
            pointHoverBackgroundColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1,
            pointHoverBorderColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1,
            pointRadius: 2,
            pointBorderWidth: 3,
            pointHoverRadius: 2,
            fill: false,
            borderWidth: 2,
            data: [115, 120, 300, 222, 105, 85, 36],
            datalabels: {
                align: 'end',
                anchor: 'end'
            }
        }
    ]
};
const smallChartData3 = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            label: 'Costs',
            borderColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1,
            pointBorderColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1,
            pointHoverBackgroundColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1,
            pointHoverBorderColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1,
            pointRadius: 2,
            pointBorderWidth: 3,
            pointHoverRadius: 2,
            fill: false,
            borderWidth: 2,
            data: [350, 452, 762, 952, 630, 85, 158],
            datalabels: {
                align: 'end',
                anchor: 'end'
            }
        }
    ]
};
const smallChartData4 = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            label: 'Returns',
            borderColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1,
            pointBorderColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1,
            pointHoverBackgroundColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1,
            pointHoverBorderColor: _constants_colors_service__WEBPACK_IMPORTED_MODULE_0__["Colors"].getColors().themeColor1,
            pointRadius: 2,
            pointBorderWidth: 3,
            pointHoverRadius: 2,
            fill: false,
            borderWidth: 2,
            data: [200, 452, 250, 630, 125, 85, 20],
            datalabels: {
                align: 'end',
                anchor: 'end'
            }
        }
    ]
};


/***/ })

}]);
//# sourceMappingURL=default~components-components-module~product-product-module.js.map