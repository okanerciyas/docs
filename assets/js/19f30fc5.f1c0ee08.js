"use strict";(self.webpackChunksqb_docs=self.webpackChunksqb_docs||[]).push([[477],{9332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>m});n(7294);var r=n(3905),o=n(3070),a=n(551);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={title:"Executing Queries",sidebar_position:6,slug:"/connectionwrapper/executingqueries",description:"Executing Queries",keywords:["execute","query"]},u="Executing Queries",p={unversionedId:"ConnectionWrapper/ExecutingQueries",id:"ConnectionWrapper/ExecutingQueries",title:"Executing Queries",description:"Executing Queries",source:"@site/docs/ConnectionWrapper/ExecutingQueries.mdx",sourceDirName:"ConnectionWrapper",slug:"/connectionwrapper/executingqueries",permalink:"/docs/docs/connectionwrapper/executingqueries",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Executing Queries",sidebar_position:6,slug:"/connectionwrapper/executingqueries",description:"Executing Queries",keywords:["execute","query"]},sidebar:"tutorialSidebar",previous:{title:"MetaData Class",permalink:"/docs/docs/connectionwrapper/metadataclass"},next:{title:"Enumerated Types",permalink:"/docs/docs/enumeratedtypes"}},d={},m=[{value:"Query.execute(options)",id:"queryexecuteoptions",level:2}],b={toc:m},k="wrapper";function f(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(k,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},b,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"executing-queries"},"Executing Queries"),(0,r.kt)("p",null,"Queries can be executed as long as they are created by Connection or DbPool objects. Both Connection and DbPool objects have same methods within sqb namespace for creating queries. Just like sqb namespace, ",(0,r.kt)("inlineCode",{parentName:"p"},".select()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".insert()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".update()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".delete()"),", etc. is used to start query sequence. Unlike formal queries, this ones supports ",(0,r.kt)("inlineCode",{parentName:"p"},".execute()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".then()")," methods which executes the query."),(0,r.kt)("h2",{id:"queryexecuteoptions"},"Query.execute(","[options]",")"),(0,r.kt)("p",null,"This method executes the Query."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," Returns a Promise",(0,r.kt)("inlineCode",{parentName:"p"},"<Object>"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," (Object) : Execute options."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"values")," (Array|Object) : Array of values or object that contains param/value pairs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"autoCommit")," (Boolean=false) : If this property is true, the transaction committed at the end of query execution."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cursor")," (Boolean=false) : If this property is true, query returns a ",(0,r.kt)("inlineCode",{parentName:"li"},"Cursor"),' object that works in unidirectional "cursor" mode. ',(0,r.kt)("strong",{parentName:"li"},"Important!")," ",(0,r.kt)("inlineCode",{parentName:"li"},"Cursor")," keeps connection open until ",(0,r.kt)("inlineCode",{parentName:"li"},"cursor.close()")," method is called."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"coercion")," Function) : Function for converting data before returning response."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fetchRows"),' (Number) : In "cursor" mode; it provides an initial suggested number of rows to prefetch. Prefetching is a tuning option to maximize data transfer efficiency and minimize round-trips to the database.\nIn regular mode; it provides the maximum number of rows that are fetched from Connection instance.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ignoreNulls")," (Boolean=false) : Determines whether object rows contains NULL fields."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"naming")," (Enum",(0,r.kt)("inlineCode",{parentName:"li"},"<String>"),") : Sets the naming rule for fields. It affects field names in object rows and metadata."),(0,r.kt)("li",{parentName:"ul"},"lowercase: Table/field names are lower case characters"),(0,r.kt)("li",{parentName:"ul"},"uppercase: Table/field names are upper case characters"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"objectRows")," (Boolean=false) : Determines whether query rows should be returned as Objects or Arrays. This property applies to ResultSet.objectRows property also."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"showSql")," (Boolean=false): If set true, result object contains executed sql and values.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important! :")," ",(0,r.kt)("em",{parentName:"p"},"Cursor keeps connection open till ",(0,r.kt)("inlineCode",{parentName:"em"},"cursor.close()")," method is called. When the Cursor is no longer needed, it must be closed.")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"Example 1",label:"Example 1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"require('sqb-connect-oracledb'); // Load oracledb wrappper pluging\nconst sqb = require('sqb');\nconst\ndb = sqb.pool({\n    dialect: 'oracledb',\n    user: 'anyuser',\n    password: 'anypass',\n    connectString: '192.168.0.1:1521/mydb'\n});\ndb.select('current_date')\n.execute().then(result => {\n    console.log(result.rows);\n})\n"))),(0,r.kt)(a.Z,{value:"Example 2",label:"Example 2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"db.select('current_date').execute().then(result => {\n        console.log(result.rows);\n    });\n"))),(0,r.kt)(a.Z,{value:"Example 3",label:"Example 3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Execute within a single transaction. Connection will be automatically closed after returned promise resolved.\ndb.acquire(connection => {\n    return connection.select('current_date')\n    .execute().then(result => {\n        console.log(result.rows);\n    })\n});\n")))))}f.isMDXComponent=!0}}]);