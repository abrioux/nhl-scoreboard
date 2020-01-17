exports.id = "main";
exports.modules = {

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = __webpack_require__(/*! apollo-server */ "apollo-server");
const lodash_merge_1 = __importDefault(__webpack_require__(/*! lodash.merge */ "lodash.merge"));
const environment_1 = __webpack_require__(/*! ./environment */ "./src/environment.ts");
const dataSources_1 = __webpack_require__(/*! ./dataSources */ "./src/dataSources.ts");
const conference_1 = __webpack_require__(/*! ./types/conference */ "./src/types/conference.ts");
const division_1 = __webpack_require__(/*! ./types/division */ "./src/types/division.ts");
const Query = `
  type Query {
    _empty: String
  }
`;
const resolvers = lodash_merge_1.default({}, conference_1.resolvers, division_1.resolvers);
const typeDefs = [Query, conference_1.typeDef, division_1.typeDef];
const server = new apollo_server_1.ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            nhlAPI: new dataSources_1.NHLAPI(),
        };
    },
    introspection: environment_1.environment.apollo.introspection || true,
    playground: environment_1.environment.apollo.playground || true,
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
/*!*********************************!*\
  !*** ./src/types/conference.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDef = `
  extend type Query {
    conference(id: Int): Conference
    conferences: [Conference]
  }

  type Conference {
    id: ID!
    name: String
    abbreviation: String
    shortName: String
    active: Boolean
  }
`;
exports.resolvers = {
    Query: {
        conference: (parent, args, context) => context.dataSources.nhlAPI.getConference(args.id),
        conferences: (parent, args, { dataSources }) => context.dataSources.nhlAPI.getConferences(),
    },
};


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL2NvbmZlcmVuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsd0JBQXdCLG1CQUFPLENBQUMsb0NBQWU7QUFDL0MsdUNBQXVDLG1CQUFPLENBQUMsa0NBQWM7QUFDN0Qsc0JBQXNCLG1CQUFPLENBQUMsMkNBQWU7QUFDN0Msc0JBQXNCLG1CQUFPLENBQUMsMkNBQWU7QUFDN0MscUJBQXFCLG1CQUFPLENBQUMscURBQW9CO0FBQ2pELG1CQUFtQixtQkFBTyxDQUFDLGlEQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsWUFBWSxNQUFNLG9DQUFvQyxJQUFJO0FBQzFELElBQUksSUFBVTtBQUNkO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25DYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxjQUFjO0FBQ25ELEtBQUs7QUFDTCIsImZpbGUiOiJtYWluLjM3Y2NiNTk4YTczMjAzZjAxMDhlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGFwb2xsb19zZXJ2ZXJfMSA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyXCIpO1xuY29uc3QgbG9kYXNoX21lcmdlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImxvZGFzaC5tZXJnZVwiKSk7XG5jb25zdCBlbnZpcm9ubWVudF8xID0gcmVxdWlyZShcIi4vZW52aXJvbm1lbnRcIik7XG5jb25zdCBkYXRhU291cmNlc18xID0gcmVxdWlyZShcIi4vZGF0YVNvdXJjZXNcIik7XG5jb25zdCBjb25mZXJlbmNlXzEgPSByZXF1aXJlKFwiLi90eXBlcy9jb25mZXJlbmNlXCIpO1xuY29uc3QgZGl2aXNpb25fMSA9IHJlcXVpcmUoXCIuL3R5cGVzL2RpdmlzaW9uXCIpO1xuY29uc3QgUXVlcnkgPSBgXG4gIHR5cGUgUXVlcnkge1xuICAgIF9lbXB0eTogU3RyaW5nXG4gIH1cbmA7XG5jb25zdCByZXNvbHZlcnMgPSBsb2Rhc2hfbWVyZ2VfMS5kZWZhdWx0KHt9LCBjb25mZXJlbmNlXzEucmVzb2x2ZXJzLCBkaXZpc2lvbl8xLnJlc29sdmVycyk7XG5jb25zdCB0eXBlRGVmcyA9IFtRdWVyeSwgY29uZmVyZW5jZV8xLnR5cGVEZWYsIGRpdmlzaW9uXzEudHlwZURlZl07XG5jb25zdCBzZXJ2ZXIgPSBuZXcgYXBvbGxvX3NlcnZlcl8xLkFwb2xsb1NlcnZlcih7XG4gICAgdHlwZURlZnMsXG4gICAgcmVzb2x2ZXJzLFxuICAgIGRhdGFTb3VyY2VzOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuaGxBUEk6IG5ldyBkYXRhU291cmNlc18xLk5ITEFQSSgpLFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgaW50cm9zcGVjdGlvbjogZW52aXJvbm1lbnRfMS5lbnZpcm9ubWVudC5hcG9sbG8uaW50cm9zcGVjdGlvbiB8fCB0cnVlLFxuICAgIHBsYXlncm91bmQ6IGVudmlyb25tZW50XzEuZW52aXJvbm1lbnQuYXBvbGxvLnBsYXlncm91bmQgfHwgdHJ1ZSxcbn0pO1xuc2VydmVyXG4gICAgLmxpc3RlbihlbnZpcm9ubWVudF8xLmVudmlyb25tZW50LnBvcnQpXG4gICAgLnRoZW4oKHsgdXJsIH0pID0+IGNvbnNvbGUubG9nKGBTZXJ2ZXIgcmVhZHkgYXQgJHt1cmx9LiBgKSk7XG5pZiAobW9kdWxlLmhvdCkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHNlcnZlci5zdG9wKCkpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnR5cGVEZWYgPSBgXG4gIGV4dGVuZCB0eXBlIFF1ZXJ5IHtcbiAgICBjb25mZXJlbmNlKGlkOiBJbnQpOiBDb25mZXJlbmNlXG4gICAgY29uZmVyZW5jZXM6IFtDb25mZXJlbmNlXVxuICB9XG5cbiAgdHlwZSBDb25mZXJlbmNlIHtcbiAgICBpZDogSUQhXG4gICAgbmFtZTogU3RyaW5nXG4gICAgYWJicmV2aWF0aW9uOiBTdHJpbmdcbiAgICBzaG9ydE5hbWU6IFN0cmluZ1xuICAgIGFjdGl2ZTogQm9vbGVhblxuICB9XG5gO1xuZXhwb3J0cy5yZXNvbHZlcnMgPSB7XG4gICAgUXVlcnk6IHtcbiAgICAgICAgY29uZmVyZW5jZTogKHBhcmVudCwgYXJncywgY29udGV4dCkgPT4gY29udGV4dC5kYXRhU291cmNlcy5uaGxBUEkuZ2V0Q29uZmVyZW5jZShhcmdzLmlkKSxcbiAgICAgICAgY29uZmVyZW5jZXM6IChwYXJlbnQsIGFyZ3MsIHsgZGF0YVNvdXJjZXMgfSkgPT4gY29udGV4dC5kYXRhU291cmNlcy5uaGxBUEkuZ2V0Q29uZmVyZW5jZXMoKSxcbiAgICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=