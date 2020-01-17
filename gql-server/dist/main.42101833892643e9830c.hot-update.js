exports.id = "main";
exports.modules = {

/***/ "./src/types/team.ts":
/*!***************************!*\
  !*** ./src/types/team.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDef = `
  extend type Query {
    team(id: Int): Team
    teams: [Team]
  }

  type Team {
    id: ID!
    name: String
    venue: Venue
    abbreviation: String
    teamName: String
    locationName: String
    firstYearOfPlay: String
    division: Division
    conference: Conference
    franchise: Franchise
    shortName: String
    officialSiteUrl: String
    franchiseId: ID
    active: Boolean
  }
`;
exports.resolvers = {
    Query: {
        team: (parent, args, context) => context.dataSources.nhlAPI.getTeam(args.id),
        teams: (parent, args, context) => context.dataSources.nhlAPI.getTeams(),
    },
    Team: {
        division: (parent, args, context) => context.dataSources.nhlAPI.getDivision(parent.division.id),
        conference: (parent, args, context) => context.dataSources.nhlAPI.getConference(parent.conference.id),
        franchise: (parent, args, context) => {
            return context.dataSources.nhlAPI.getFranchise(parent.franchiseId);
        },
    },
};


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvdGVhbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wiLCJmaWxlIjoibWFpbi40MjEwMTgzMzg5MjY0M2U5ODMwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnR5cGVEZWYgPSBgXG4gIGV4dGVuZCB0eXBlIFF1ZXJ5IHtcbiAgICB0ZWFtKGlkOiBJbnQpOiBUZWFtXG4gICAgdGVhbXM6IFtUZWFtXVxuICB9XG5cbiAgdHlwZSBUZWFtIHtcbiAgICBpZDogSUQhXG4gICAgbmFtZTogU3RyaW5nXG4gICAgdmVudWU6IFZlbnVlXG4gICAgYWJicmV2aWF0aW9uOiBTdHJpbmdcbiAgICB0ZWFtTmFtZTogU3RyaW5nXG4gICAgbG9jYXRpb25OYW1lOiBTdHJpbmdcbiAgICBmaXJzdFllYXJPZlBsYXk6IFN0cmluZ1xuICAgIGRpdmlzaW9uOiBEaXZpc2lvblxuICAgIGNvbmZlcmVuY2U6IENvbmZlcmVuY2VcbiAgICBmcmFuY2hpc2U6IEZyYW5jaGlzZVxuICAgIHNob3J0TmFtZTogU3RyaW5nXG4gICAgb2ZmaWNpYWxTaXRlVXJsOiBTdHJpbmdcbiAgICBmcmFuY2hpc2VJZDogSURcbiAgICBhY3RpdmU6IEJvb2xlYW5cbiAgfVxuYDtcbmV4cG9ydHMucmVzb2x2ZXJzID0ge1xuICAgIFF1ZXJ5OiB7XG4gICAgICAgIHRlYW06IChwYXJlbnQsIGFyZ3MsIGNvbnRleHQpID0+IGNvbnRleHQuZGF0YVNvdXJjZXMubmhsQVBJLmdldFRlYW0oYXJncy5pZCksXG4gICAgICAgIHRlYW1zOiAocGFyZW50LCBhcmdzLCBjb250ZXh0KSA9PiBjb250ZXh0LmRhdGFTb3VyY2VzLm5obEFQSS5nZXRUZWFtcygpLFxuICAgIH0sXG4gICAgVGVhbToge1xuICAgICAgICBkaXZpc2lvbjogKHBhcmVudCwgYXJncywgY29udGV4dCkgPT4gY29udGV4dC5kYXRhU291cmNlcy5uaGxBUEkuZ2V0RGl2aXNpb24ocGFyZW50LmRpdmlzaW9uLmlkKSxcbiAgICAgICAgY29uZmVyZW5jZTogKHBhcmVudCwgYXJncywgY29udGV4dCkgPT4gY29udGV4dC5kYXRhU291cmNlcy5uaGxBUEkuZ2V0Q29uZmVyZW5jZShwYXJlbnQuY29uZmVyZW5jZS5pZCksXG4gICAgICAgIGZyYW5jaGlzZTogKHBhcmVudCwgYXJncywgY29udGV4dCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQuZGF0YVNvdXJjZXMubmhsQVBJLmdldEZyYW5jaGlzZShwYXJlbnQuZnJhbmNoaXNlSWQpO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==