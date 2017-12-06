webpackJsonp([1],[,,,,,,,,,,,,,,function(t,e,s){"use strict";var a=s(7),o=s.n(a),n=s(106),r=s(94),i=s.n(r),c=s(93),l=s.n(c),d=s(96),m=s.n(d);o.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"Boards",component:i.a},{path:"/boards/:id",name:"Board",component:l.a},{path:"/login",name:"Login",component:m.a}]})},,,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";var a=s(39),o=s.n(a),n=s(7),r=s.n(n),i=s(108),c=s(14),l=s(92),d=(s.n(l),!window.location.host.includes("localhost")),m=d?"//kanban-project.herokuapp.com/":"//localhost:3000/",u=o.a.create({baseURL:m+"api/",timeout:2e3,withCredentials:!0}),p=o.a.create({baseURL:m,timeout:2e3,withCredentials:!0});r.a.use(i.a);var v=new i.a.Store({state:{boards:[],activeBoard:{},error:{},user:{},lists:[],tasks:{},comments:{}},mutations:{setBoards:function(t,e){t.boards=e},setActiveBoard:function(t,e){t.activeBoard=e},handleError:function(t,e){t.error=e},setUser:function(t,e){t.user=e},setLists:function(t,e){t.lists=e},setTasks:function(t,e){r.a.set(t.tasks,e.listId,e.data)},setComments:function(t,e){r.a.set(t.comments,e.taskId,e.data)}},actions:{getBoards:function(t){var e=t.commit;t.dispatch;u("userboards").then(function(t){e("setBoards",t.data.data)}).catch(function(t){e("handleError",t)})},getBoard:function(t,e){var s=t.commit;t.dispatch;u("boards/"+e).then(function(t){s("setActiveBoard",t.data.data)}).catch(function(t){s("handleError",t)})},createBoard:function(t,e){var s=t.commit,a=t.dispatch;u.post("boards/",e).then(function(t){a("getBoards")}).catch(function(t){s("handleError",t)})},removeBoard:function(t,e){var s=t.commit,a=t.dispatch;u.delete("boards/"+e._id).then(function(t){a("getBoards")}).catch(function(t){s("handleError",t)})},createList:function(t,e){var s=t.commit,a=t.dispatch;u.post("lists/",e).then(function(t){a("getLists",e.boardId)}).catch(function(t){s("handleError",t)})},getLists:function(t,e){var s=t.commit;t.dispatch;u("boards/"+e+"/lists").then(function(t){console.log(t),s("setLists",t.data.data)}).catch(function(t){s("handleError",t)})},removeList:function(t,e){var s=t.commit,a=t.dispatch;u.delete("lists/"+e._id).then(function(t){a("getLists",e.boardId)}).catch(function(t){s("handleError",t)})},getTasks:function(t,e){var s=t.commit;t.dispatch;u("boards/"+e.boardId+"/lists/"+e.listId+"/tasks").then(function(t){t.data.listId=e.listId,s("setTasks",t.data)}).catch(function(t){s("handleError",t)})},createTask:function(t,e){var s=t.commit,a=t.dispatch;u.post("tasks/",e).then(function(t){a("getTasks",e)}).catch(function(t){s("handleError",t)})},removeTask:function(t,e){var s=t.commit,a=t.dispatch;u.delete("tasks/"+e._id).then(function(t){a("getTasks",e)}).catch(function(t){s("handleError",t)})},createComment:function(t,e){var s=t.commit,a=t.dispatch;u.post("comments/",e).then(function(t){a("getComments",e)}).catch(function(t){s("handleError",t)})},getComments:function(t,e){var s=t.commit;t.dispatch;u("boards/"+e.boardId+"/lists/"+e.listId+"/tasks/"+e.taskId+"/comments/").then(function(t){t.data.taskId=e.taskId,s("setComments",t.data)}).catch(function(t){s("handleError",t)})},handleError:function(t,e){var s=t.commit;t.dispatch;s("handleError",e)},login:function(t,e){var s=t.commit;t.dispatch;p.post("login",e).then(function(t){s("setUser",t.data.data),c.a.push({name:"Boards"}),console.log(t)}).catch(function(t){s("handleError",t)})},register:function(t,e){var s=t.commit;t.dispatch;p.post("register",e).then(function(t){s("setUser",t.data.data),c.a.push({name:"Boards"}),console.log("User account successfully created")}).catch(function(t){s("handleError",t)})},logout:function(t){var e=t.commit;t.dispatch;p.delete("logout").then(function(t){e("setUser",{}),c.a.push({name:"Login"}),console.log("User session terminated")}).catch(function(t){e("handleError",t)})},authenticate:function(t){var e=t.commit;t.dispatch;p.get("authenticate").then(function(t){c.a.push({name:"Boards"}),e("setUser",t.data.data)}).catch(function(t){e("handleError",t),c.a.push({name:"Login"})})}}});e.a=v},function(t,e){},,function(t,e,s){s(77);var a=s(3)(s(57),s(100),null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(95),o=s.n(a);e.default={name:"app",methods:{logout:function(){this.$store.dispatch("logout")}},components:{Error:o.a},mounted:function(){this.$store.dispatch("authenticate")}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(97),o=s.n(a);e.default={name:"board",data:function(){return{list:{name:"",description:""}}},mounted:function(){this.$store.dispatch("getBoard",this.$route.params.id),this.$store.dispatch("getLists",this.$route.params.id)},computed:{board:function(){return this.$store.state.activeBoard},lists:function(){return this.$store.state.lists}},methods:{createList:function(){this.list={name:this.list.name,description:this.list.description,boardId:this.board._id},this.$store.dispatch("createList",this.list),this.list={name:""}},removeList:function(t){this.$store.dispatch("removeList",t)}},components:{list:o.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"boards",data:function(){return{board:{name:""}}},mounted:function(){this.$store.dispatch("getBoards")},computed:{boards:function(){return this.$store.state.boards}},methods:{createBoard:function(){this.$store.dispatch("createBoard",this.board),this.board={name:""}},removeBoard:function(t){this.$store.dispatch("removeBoard",t)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"error",computed:{error:function(){return this.$store.state.error}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{loginForm:!0,login:{email:"",password:""},register:{name:"",email:"",password:""}}},methods:{toggleLoginForm:function(){this.loginForm=!this.loginForm},submitLogin:function(){this.$store.dispatch("login",this.login),this.login={email:"",password:""}},submitRegister:function(){this.$store.dispatch("register",this.register)}},computed:{error:function(){return this.$store.state.error.message}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(98),o=s.n(a);e.default={name:"list",props:["listprop"],data:function(){return{task:{name:""}}},mounted:function(){this.$store.dispatch("getTasks",{boardId:this.$route.params.id,listId:this.listprop._id})},computed:{tasks:function(){return this.$store.state.tasks[this.listprop._id]}},methods:{createTask:function(){this.task={name:this.task.name,description:this.task.description,boardId:this.listprop.boardId,listId:this.listprop._id},this.$store.dispatch("createTask",this.task),this.task={name:""}},removeList:function(){this.$store.dispatch("removeList",this.listprop)}},components:{task:o.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"",props:["taskprop"],data:function(){return{comment:{message:""}}},mounted:function(){this.$store.dispatch("getComments",{boardId:this.$route.params.id,listId:this.taskprop.listId,taskId:this.taskprop._id})},computed:{comments:function(){return this.$store.state.comments[this.taskprop._id]}},methods:{createComment:function(){this.comment={message:this.comment.message,boardId:this.taskprop.boardId,listId:this.taskprop.listId,taskId:this.taskprop._id},this.$store.dispatch("createComment",this.comment),this.comment={message:""}},removeTask:function(){this.$store.dispatch("removeTask",this.taskprop),this.task={name:""}}},components:{}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(7),o=s.n(a),n=s(36),r=s.n(n),i=s(14),c=s(35),l=(s.n(c),s(33));s(34),new o.a({el:"#app",store:l.a,router:i.a,template:"<App/>",components:{App:r.a}})},,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,,,,,function(t,e,s){s(80);var a=s(3)(s(58),s(103),"data-v-5337eb44",null);t.exports=a.exports},function(t,e,s){s(76);var a=s(3)(s(59),s(99),"data-v-0c6e3af6",null);t.exports=a.exports},function(t,e,s){s(79);var a=s(3)(s(60),s(102),"data-v-49c58c80",null);t.exports=a.exports},function(t,e,s){s(81);var a=s(3)(s(61),s(104),null,null);t.exports=a.exports},function(t,e,s){s(78);var a=s(3)(s(62),s(101),"data-v-3aa38f94",null);t.exports=a.exports},function(t,e,s){s(82);var a=s(3)(s(63),s(105),"data-v-7a06f19d",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("br"),t._v(" "),s("form",{staticClass:"boardForm",on:{submit:function(e){e.preventDefault(),t.createBoard(e)}}},[s("div",{staticClass:"form-group "},[s("label",{staticStyle:{"font-size":"2em"},attrs:{for:"board"}},[t._v("Your Boards")]),t._v(" "),s("h3",[t._v("Create a new board:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.board.name,expression:"board.name"}],staticClass:"form-control ",attrs:{maxlength:"25",type:"text",name:"board",placeholder:"Board Name",required:""},domProps:{value:t.board.name},on:{input:function(e){e.target.composing||(t.board.name=e.target.value)}}}),t._v(" "),t._m(0)])]),t._v(" "),s("div",{staticClass:"row text-center"},[s("div",{staticClass:"card text-center"},t._l(t.boards,function(e){return s("div",{staticClass:"card-block"},[s("router-link",{staticClass:"card-title",staticStyle:{"font-size":"1.5em"},attrs:{to:"/boards/"+e._id}},[t._v(t._s(e.name))]),t._v(" "),s("button",{staticClass:"btn btn-danger",on:{click:function(s){t.removeBoard(e)}}},[t._v("delete")])],1)}))])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{attrs:{type:"submit"}},[s("samp",[t._v("Create Board")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("body",[s("div",{staticClass:"nav"},[s("nav",{staticClass:"navbar navbar-inverse"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"navbar-header"}),t._v(" "),t._m(0),t._v(" "),s("a",[s("h4",{staticClass:"logout text-right",on:{click:t.logout}},[t._v("Log Out")])])])]),t._v(" "),s("div",{staticClass:"row"}),t._v(" "),s("router-view")],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"nav navbar-nav"},[s("li",{staticClass:"active"}),s("li",[s("a",{attrs:{href:"#"}},[t._v("Home")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("My Profile")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12 col-sm-6 col-md-4 col-lg-4 text-center"},[s("h2",[t._v(t._s(t.listprop.name)+"  "),s("span",{staticClass:"glyphicon glyphicon-trash",attrs:{id:"end"},on:{click:t.removeList}})]),t._v(" "),t._l(t.tasks,function(t){return s("div",[s("task",{attrs:{taskprop:t}})],1)}),t._v(" "),s("form",{staticClass:"taskForm",on:{submit:function(e){e.preventDefault(),t.createTask(e)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.task.name,expression:"task.name"}],staticClass:"form-control",attrs:{type:"text",name:"task",placeholder:"task name",required:""},domProps:{value:t.task.name},on:{input:function(e){e.target.composing||(t.task.name=e.target.value)}}}),t._v(" "),t._m(0)])])],2)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn btn-primary"},[s("samp",[t._v("Add Task")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.error.message?s("div",[t._v(" \n  Error: "+t._s(t.error)+"\n")]):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",[s("h1",{staticClass:"text-center",staticStyle:{"font-size":"3em"}},[s("strong",[t._v(t._s(t.board.name))])]),t._v(" "),s("form",{staticClass:"listForm",on:{submit:function(e){e.preventDefault(),t.createList(e)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"list"}},[t._v("Create New List")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.list.name,expression:"list.name"}],staticClass:"form-control",attrs:{type:"text",name:"list",placeholder:"list name",required:""},domProps:{value:t.list.name},on:{input:function(e){e.target.composing||(t.list.name=e.target.value)}}}),t._v(" "),t._m(0)])])]),t._v(" "),t._l(t.lists,function(t){return s("div",[s("list",{attrs:{listprop:t}})],1)})],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{attrs:{type:"submit"}},[s("samp",[t._v("Add List")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("div",{staticClass:"row text-center"},[s("div",{staticClass:"col-xs-12"},[t.loginForm?s("h1",[t._v("Log in to view boards.")]):s("h1",[t._v("Please register to continue.")])])]),t._v(" "),t.error?s("h5",{staticClass:"text-danger"},[s("b",[t._v(t._s(t.error))])]):t._e(),t._v(" "),t.loginForm?s("div",{staticClass:"login"},[s("form",{staticClass:"form",on:{submit:function(e){e.preventDefault(),t.submitLogin(e)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.login.email,expression:"login.email"}],staticClass:"form-control",attrs:{type:"email",name:"email",placeholder:"bob@bob.co",required:""},domProps:{value:t.login.email},on:{input:function(e){e.target.composing||(t.login.email=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"********",name:"password",required:""},domProps:{value:t.login.password},on:{input:function(e){e.target.composing||(t.login.password=e.target.value)}}})]),t._v(" "),t._m(0)])]):s("div",{staticClass:"register"},[s("form",{staticClass:"form",on:{submit:function(e){e.preventDefault(),t.submitRegister(e)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"name"}},[t._v("Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.register.name,expression:"register.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:"Bob",required:""},domProps:{value:t.register.name},on:{input:function(e){e.target.composing||(t.register.name=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.register.email,expression:"register.email"}],staticClass:"form-control",attrs:{type:"email",name:"email",placeholder:"bob@email.com",required:""},domProps:{value:t.register.email},on:{input:function(e){e.target.composing||(t.register.email=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.register.password,expression:"register.password"}],staticClass:"form-control",attrs:{type:"password",name:"password",placeholder:"********",required:""},domProps:{value:t.register.password},on:{input:function(e){e.target.composing||(t.register.password=e.target.value)}}})]),t._v(" "),t._m(1)])]),t._v(" "),t.loginForm?s("p",{staticClass:"action",on:{click:t.toggleLoginForm}},[t._v("Don't have an account? "),s("strong",[t._v("Sign up!")])]):s("p",{staticClass:"action",on:{click:t.toggleLoginForm}},[t._v("Already a user? Click here to login")])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group"},[s("button",{attrs:{type:"submit"}},[t._v("Login")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group"},[s("button",{attrs:{type:"submit"}},[t._v("Register")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",[s("h5",{staticClass:"task text-center"},[t._v(t._s(t.taskprop.name)+"\n                "),s("span",{staticClass:"glyphicon glyphicon-trash",attrs:{id:"end"},on:{click:t.removeTask}}),t._v(" "),t._m(0)]),t._v(" "),t._l(t.comments,function(e){return s("div",[s("h3",[t._v(t._s(e.message))])])}),t._v(" "),s("form",{staticClass:"commentForm",on:{submit:function(e){e.preventDefault(),t.createComment(e)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.comment.message,expression:"comment.message"}],staticClass:"form-control",attrs:{type:"text",name:"comment",placeholder:"comment",required:""},domProps:{value:t.comment.message},on:{input:function(e){e.target.composing||(t.comment.message=e.target.value)}}}),t._v(" "),t._m(1)])])],2)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",[s("span",{staticClass:"glyphicon glyphicon-plane"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn btn-danger"},[s("samp",[t._v("Add Comment")])])}]}},,,,,,function(t,e){}],[64]);
//# sourceMappingURL=app.301ed9ccbc2065f5d190.js.map