"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const map1 = new Map([['country', 'Germany']]);
// const map2 = new Map([['salary', 100]]);
// const map3 = new Map<string, string | number>([...map1, ...map2]);
// // 👇️ {'country' => 'Germany', 'salary' => 100}
// console.log(map3);
// ---------------------------------------------------
// EXAMPLE 2
const map1 = new Map([['country', 'Germany']]);
const map2 = new Map([['salary', 100]]);
const map3 = new Map([...map1, ...map2]);
// 👇️ {'country' => 'Germany', 'salary' => 100}
console.log(map3);
// ---------------------------------------------------
// EXAMPLE 3
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxrREFBa0Q7QUFDbEQsMkNBQTJDO0FBRTNDLHFFQUFxRTtBQUVyRSxtREFBbUQ7QUFDbkQscUJBQXFCO0FBRXJCLHNEQUFzRDtBQUV0RCxZQUFZO0FBRVosTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQWlCLENBQUMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9ELE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxDQUFpQixDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUV4RCxNQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBMEIsQ0FBQyxHQUFHLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7QUFFbEUsZ0RBQWdEO0FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFbEIsc0RBQXNEO0FBRXRELFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge307XG5cbi8vIGNvbnN0IG1hcDEgPSBuZXcgTWFwKFtbJ2NvdW50cnknLCAnR2VybWFueSddXSk7XG4vLyBjb25zdCBtYXAyID0gbmV3IE1hcChbWydzYWxhcnknLCAxMDBdXSk7XG5cbi8vIGNvbnN0IG1hcDMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyPihbLi4ubWFwMSwgLi4ubWFwMl0pO1xuXG4vLyAvLyDwn5GH77iPIHsnY291bnRyeScgPT4gJ0dlcm1hbnknLCAnc2FsYXJ5JyA9PiAxMDB9XG4vLyBjb25zb2xlLmxvZyhtYXAzKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEVYQU1QTEUgMlxuXG5jb25zdCBtYXAxID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oW1snY291bnRyeScsICdHZXJtYW55J11dKTtcbmNvbnN0IG1hcDIgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPihbWydzYWxhcnknLCAxMDBdXSk7XG5cbmNvbnN0IG1hcDMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyPihbLi4ubWFwMSwgLi4ubWFwMl0pO1xuXG4vLyDwn5GH77iPIHsnY291bnRyeScgPT4gJ0dlcm1hbnknLCAnc2FsYXJ5JyA9PiAxMDB9XG5jb25zb2xlLmxvZyhtYXAzKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEVYQU1QTEUgM1xuIl19