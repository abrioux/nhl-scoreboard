exports.id = "main";
exports.modules = {

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = __webpack_require__(/*! apollo-server */ "apollo-server");
const environment_1 = __webpack_require__(/*! ./environment */ "./src/environment.ts");
const dataSources_1 = __webpack_require__(/*! ./dataSources */ "./src/dataSources.ts");
const server = new apollo_server_1.ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            nhlAPI: new dataSources_1.NHLAPI(),
        };
    },
    introspection: environment_1.environment.apollo.introspection,
    playground: environment_1.environment.apollo.playground,
});
server
    .listen(environment_1.environment.port)
    .then(({ url }) => console.log(`Server ready at ${url}. `));
if (true) {
    module.hot.accept();
    module.hot.dispose(() => server.stop());
}


/***/ }),

/***/ "./src/types/conference.ts":
false,

/***/ "./src/types/division.ts":
false,

/***/ "./src/types/franchise.ts":
false,

/***/ "./src/types/leagueRecord.ts":
false,

/***/ "./src/types/position.ts":
false,

/***/ "./src/types/team.ts":
false,

/***/ "./src/types/timezone.ts":
false,

/***/ "./src/types/venue.ts":
false,

/***/ "lodash.merge":
false

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELHdCQUF3QixtQkFBTyxDQUFDLG9DQUFlO0FBQy9DLHNCQUFzQixtQkFBTyxDQUFDLDJDQUFlO0FBQzdDLHNCQUFzQixtQkFBTyxDQUFDLDJDQUFlO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLFlBQVksTUFBTSxvQ0FBb0MsSUFBSTtBQUMxRCxJQUFJLElBQVU7QUFDZDtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5lOWE5NDA2MTdmMTQ1ODU4NWFkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBhcG9sbG9fc2VydmVyXzEgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlclwiKTtcbmNvbnN0IGVudmlyb25tZW50XzEgPSByZXF1aXJlKFwiLi9lbnZpcm9ubWVudFwiKTtcbmNvbnN0IGRhdGFTb3VyY2VzXzEgPSByZXF1aXJlKFwiLi9kYXRhU291cmNlc1wiKTtcbmNvbnN0IHNlcnZlciA9IG5ldyBhcG9sbG9fc2VydmVyXzEuQXBvbGxvU2VydmVyKHtcbiAgICB0eXBlRGVmcyxcbiAgICByZXNvbHZlcnMsXG4gICAgZGF0YVNvdXJjZXM6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5obEFQSTogbmV3IGRhdGFTb3VyY2VzXzEuTkhMQVBJKCksXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBpbnRyb3NwZWN0aW9uOiBlbnZpcm9ubWVudF8xLmVudmlyb25tZW50LmFwb2xsby5pbnRyb3NwZWN0aW9uLFxuICAgIHBsYXlncm91bmQ6IGVudmlyb25tZW50XzEuZW52aXJvbm1lbnQuYXBvbGxvLnBsYXlncm91bmQsXG59KTtcbnNlcnZlclxuICAgIC5saXN0ZW4oZW52aXJvbm1lbnRfMS5lbnZpcm9ubWVudC5wb3J0KVxuICAgIC50aGVuKCh7IHVybCB9KSA9PiBjb25zb2xlLmxvZyhgU2VydmVyIHJlYWR5IGF0ICR7dXJsfS4gYCkpO1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiBzZXJ2ZXIuc3RvcCgpKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=