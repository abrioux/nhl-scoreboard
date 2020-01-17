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
const types_1 = __webpack_require__(/*! ./types */ "./src/types/index.ts");
const server = new apollo_server_1.ApolloServer({
    typeDefs: types_1.typeDefs,
    resolvers: types_1.resolvers,
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

/***/ "./src/types/index.ts":
/*!****************************!*\
  !*** ./src/types/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCx3QkFBd0IsbUJBQU8sQ0FBQyxvQ0FBZTtBQUMvQyxzQkFBc0IsbUJBQU8sQ0FBQywyQ0FBZTtBQUM3QyxzQkFBc0IsbUJBQU8sQ0FBQywyQ0FBZTtBQUM3QyxnQkFBZ0IsbUJBQU8sQ0FBQyxxQ0FBUztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxZQUFZLE1BQU0sb0NBQW9DLElBQUk7QUFDMUQsSUFBSSxJQUFVO0FBQ2Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkJhIiwiZmlsZSI6Im1haW4uMmYwYzMxMmVmNDBmN2MxZGRlNTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgYXBvbGxvX3NlcnZlcl8xID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXJcIik7XG5jb25zdCBlbnZpcm9ubWVudF8xID0gcmVxdWlyZShcIi4vZW52aXJvbm1lbnRcIik7XG5jb25zdCBkYXRhU291cmNlc18xID0gcmVxdWlyZShcIi4vZGF0YVNvdXJjZXNcIik7XG5jb25zdCB0eXBlc18xID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XG5jb25zdCBzZXJ2ZXIgPSBuZXcgYXBvbGxvX3NlcnZlcl8xLkFwb2xsb1NlcnZlcih7XG4gICAgdHlwZURlZnM6IHR5cGVzXzEudHlwZURlZnMsXG4gICAgcmVzb2x2ZXJzOiB0eXBlc18xLnJlc29sdmVycyxcbiAgICBkYXRhU291cmNlczogKCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmhsQVBJOiBuZXcgZGF0YVNvdXJjZXNfMS5OSExBUEkoKSxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGludHJvc3BlY3Rpb246IGVudmlyb25tZW50XzEuZW52aXJvbm1lbnQuYXBvbGxvLmludHJvc3BlY3Rpb24sXG4gICAgcGxheWdyb3VuZDogZW52aXJvbm1lbnRfMS5lbnZpcm9ubWVudC5hcG9sbG8ucGxheWdyb3VuZCxcbn0pO1xuc2VydmVyXG4gICAgLmxpc3RlbihlbnZpcm9ubWVudF8xLmVudmlyb25tZW50LnBvcnQpXG4gICAgLnRoZW4oKHsgdXJsIH0pID0+IGNvbnNvbGUubG9nKGBTZXJ2ZXIgcmVhZHkgYXQgJHt1cmx9LiBgKSk7XG5pZiAobW9kdWxlLmhvdCkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHNlcnZlci5zdG9wKCkpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4iXSwic291cmNlUm9vdCI6IiJ9