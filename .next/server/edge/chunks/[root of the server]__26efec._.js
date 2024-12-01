(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root of the server]__26efec._.js", {

"[externals]/ [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:async_hooks");

module.exports = mod;
}}),
"[externals]/ [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:buffer");

module.exports = mod;
}}),
"[externals]/ [external] (node:util, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:util");

module.exports = mod;
}}),
"[project]/src/middleware.js [middleware] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
// middleware.js
// import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";
// // Define protected and public routes
// const protectedRoutes = ["/dashboard"];
// const publicPaths = ["/login", "/register"];
// export function middleware(request) {
//   const { cookies } = request;
//   const token = cookies.token;
// console.log(request)
//   const url = request.nextUrl.clone();
//   // Protecting Routes
//   if (
//     protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
//   ) {
//     if (!token) {
//       url.pathname = "/login";
//       return NextResponse.redirect(url);
//     }
//     try {
//       jwt.verify(token, process.env.JWT_SECRET);
//       return NextResponse.next();
//     } catch (error) {
//       url.pathname = "/login";
//       return NextResponse.redirect(url);
//     }
//   }
//   // Prevent authenticated users from accessing login/register
//   if (publicPaths.some((path) => request.nextUrl.pathname === path)) {
//     if (token) {
//       try {
//         jwt.verify(token, process.env.JWT_SECRET);
//         url.pathname = "/dashboard";
//         return NextResponse.redirect(url);
//       } catch (error) {
//         // Invalid token, proceed to public page
//       }
//     }
//   }
//   // Allow all other requests
//   return NextResponse.next();
// }
// export const config = {
//   matcher: ["/dashboard", "/login", "/register", "/protected/:path*"],
// };
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__26efec._.js.map