(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{14:function(e,r,t){},8:function(e,r,t){e.exports=t(9)},9:function(e,r,t){"use strict";t.r(r);var a=t(4),n=t(1),i=t(2),s=t(5),d=t(3),o=t(0),m=t.n(o),l=t(7),c=t.n(l);t(14);function h(e){return m.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}function u(e){return m.a.createElement("button",{className:"parallelogram",onClick:e.onClick},e.value)}var D=function(e){Object(s.a)(t,e);var r=Object(d.a)(t);function t(){return Object(n.a)(this,t),r.apply(this,arguments)}return Object(i.a)(t,[{key:"renderSquare",value:function(e){var r=this;return m.a.createElement(h,{value:this.props.squares[e],onClick:function(){return r.props.onClick(e)}})}},{key:"renderDiamond",value:function(e){var r=this;return m.a.createElement(u,{value:this.props.squares[e],onClick:function(){return r.props.onClick(e)}})}},{key:"render",value:function(){var e=this.props.size,r=this.props.dimention;return 4==e?2==r?m.a.createElement("div",null,m.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2),this.renderSquare(3)),m.a.createElement("div",{className:"board-row"},this.renderSquare(4),this.renderSquare(5),this.renderSquare(6),this.renderSquare(7)),m.a.createElement("div",{className:"board-row"},this.renderSquare(8),this.renderSquare(9),this.renderSquare(10),this.renderSquare(11)),m.a.createElement("div",{className:"board-row"},this.renderSquare(12),this.renderSquare(13),this.renderSquare(14),this.renderSquare(15))):m.a.createElement("div",null,m.a.createElement("div",null,m.a.createElement("div",{className:"board-row",style:{marginLeft:120}},this.renderDiamond(0),this.renderDiamond(1),this.renderDiamond(2),this.renderDiamond(3)),m.a.createElement("div",{className:"board-row",style:{marginLeft:90}},this.renderDiamond(4),this.renderDiamond(5),this.renderDiamond(6),this.renderDiamond(7)),m.a.createElement("div",{className:"board-row",style:{marginLeft:60}},this.renderDiamond(8),this.renderDiamond(9),this.renderDiamond(10),this.renderDiamond(11)),m.a.createElement("div",{className:"board-row",style:{marginLeft:30}},this.renderDiamond(12),this.renderDiamond(13),this.renderDiamond(14),this.renderDiamond(15))),m.a.createElement("br",null),m.a.createElement("div",null,m.a.createElement("div",{className:"board-row",style:{marginLeft:120}},this.renderDiamond(16),this.renderDiamond(17),this.renderDiamond(18),this.renderDiamond(19)),m.a.createElement("div",{className:"board-row",style:{marginLeft:90}},this.renderDiamond(20),this.renderDiamond(21),this.renderDiamond(22),this.renderDiamond(23)),m.a.createElement("div",{className:"board-row",style:{marginLeft:60}},this.renderDiamond(24),this.renderDiamond(25),this.renderDiamond(26),this.renderDiamond(27)),m.a.createElement("div",{className:"board-row",style:{marginLeft:30}},this.renderDiamond(28),this.renderDiamond(29),this.renderDiamond(30),this.renderDiamond(31))),m.a.createElement("br",null),m.a.createElement("div",null,m.a.createElement("div",{className:"board-row",style:{marginLeft:120}},this.renderDiamond(32),this.renderDiamond(33),this.renderDiamond(34),this.renderDiamond(35)),m.a.createElement("div",{className:"board-row",style:{marginLeft:90}},this.renderDiamond(36),this.renderDiamond(37),this.renderDiamond(38),this.renderDiamond(39)),m.a.createElement("div",{className:"board-row",style:{marginLeft:60}},this.renderDiamond(40),this.renderDiamond(41),this.renderDiamond(42),this.renderDiamond(43)),m.a.createElement("div",{className:"board-row",style:{marginLeft:30}},this.renderDiamond(44),this.renderDiamond(45),this.renderDiamond(46),this.renderDiamond(47))),m.a.createElement("br",null),m.a.createElement("div",null,m.a.createElement("div",{className:"board-row",style:{marginLeft:120}},this.renderDiamond(48),this.renderDiamond(49),this.renderDiamond(50),this.renderDiamond(51)),m.a.createElement("div",{className:"board-row",style:{marginLeft:90}},this.renderDiamond(52),this.renderDiamond(53),this.renderDiamond(54),this.renderDiamond(55)),m.a.createElement("div",{className:"board-row",style:{marginLeft:60}},this.renderDiamond(56),this.renderDiamond(57),this.renderDiamond(58),this.renderDiamond(59)),m.a.createElement("div",{className:"board-row",style:{marginLeft:30}},this.renderDiamond(60),this.renderDiamond(61),this.renderDiamond(62),this.renderDiamond(63)))):2==r?m.a.createElement("div",null,m.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),m.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),m.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8))):m.a.createElement("div",null,m.a.createElement("div",null,m.a.createElement("div",{className:"board-row",style:{marginLeft:90}},this.renderDiamond(0),this.renderDiamond(1),this.renderDiamond(2)),m.a.createElement("div",{className:"board-row",style:{marginLeft:60}},this.renderDiamond(3),this.renderDiamond(4),this.renderDiamond(5)),m.a.createElement("div",{className:"board-row",style:{marginLeft:30}},this.renderDiamond(6),this.renderDiamond(7),this.renderDiamond(8))),m.a.createElement("br",null),m.a.createElement("div",null,m.a.createElement("div",{className:"board-row",style:{marginLeft:90}},this.renderDiamond(9),this.renderDiamond(10),this.renderDiamond(11)),m.a.createElement("div",{className:"board-row",style:{marginLeft:60}},this.renderDiamond(12),this.renderDiamond(13),this.renderDiamond(14)),m.a.createElement("div",{className:"board-row",style:{marginLeft:30}},this.renderDiamond(15),this.renderDiamond(16),this.renderDiamond(17))),m.a.createElement("br",null),m.a.createElement("div",null,m.a.createElement("div",{className:"board-row",style:{marginLeft:90}},this.renderDiamond(18),this.renderDiamond(19),this.renderDiamond(20)),m.a.createElement("div",{className:"board-row",style:{marginLeft:60}},this.renderDiamond(21),this.renderDiamond(22),this.renderDiamond(23)),m.a.createElement("div",{className:"board-row",style:{marginLeft:30}},this.renderDiamond(24),this.renderDiamond(25),this.renderDiamond(26))))}}]),t}(m.a.Component);function v(e){var r,t=e.length;if(16==t||64==t){r=16==t?[[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15],[0,4,8,12],[1,5,9,13],[2,6,10,14],[3,7,11,15],[0,5,10,15],[3,6,9,12]]:[[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15],[16,17,18,19],[20,21,22,23],[24,25,26,27],[28,29,30,31],[32,33,34,35],[36,37,38,39],[40,41,42,43],[44,45,46,47],[48,49,50,51],[52,53,54,55],[56,57,58,59],[60,61,62,63],[0,4,8,12],[1,5,9,13],[2,6,10,14],[3,7,11,15],[16,20,24,28],[17,21,25,29],[18,22,26,30],[19,23,27,31],[32,36,40,44],[33,37,41,45],[34,38,42,46],[35,39,43,47],[48,52,56,60],[49,53,57,61],[50,54,58,62],[51,55,59,63],[0,16,32,48],[1,17,33,49],[2,18,34,50],[3,19,35,51],[4,20,36,52],[5,21,37,53],[6,22,38,54],[7,23,39,55],[8,24,40,56],[9,25,41,57],[10,26,42,58],[11,27,43,59],[12,28,44,60],[13,29,45,61],[14,30,46,62],[15,31,47,63],[0,5,10,15],[3,6,9,12],[16,21,26,31],[19,22,25,28],[32,37,42,47],[35,38,41,44],[48,53,58,63],[51,54,57,60],[0,17,34,51],[3,18,33,48],[4,21,38,55],[7,22,37,52],[8,25,42,59],[11,26,41,55],[12,29,46,63],[15,30,45,60],[0,20,40,60],[12,24,36,48],[1,21,41,61],[13,25,37,49],[2,22,42,62],[14,26,38,50],[3,23,43,63],[15,27,39,51],[0,21,42,63],[15,26,37,48],[3,22,41,60],[12,25,38,51]];for(var n=0;n<r.length;n++){var i=Object(a.a)(r[n],4),s=i[0],d=i[1],o=i[2],m=i[3];if(e[s]&&e[s]==e[d]&&e[s]==e[o]&&e[s]==e[m])return e[s]}return null}r=9==t?[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]:[[0,1,2],[3,4,5],[6,7,8],[9,10,11],[12,13,14],[15,16,17],[18,19,20],[21,22,23],[24,25,26],[0,3,6],[1,4,7],[2,5,8],[9,12,15],[10,13,16],[11,14,17],[18,21,24],[19,22,25],[20,23,26],[0,9,18],[1,10,19],[2,11,20],[3,12,21],[4,13,22],[5,14,23],[6,15,24],[7,16,25],[8,17,26],[0,4,8],[2,4,6],[9,13,17],[11,13,15],[18,22,26],[20,22,24],[0,10,20],[2,10,18],[3,13,23],[5,13,21],[6,16,26],[8,16,24],[0,12,24],[6,12,18],[1,13,25],[7,13,19],[2,14,26],[8,14,20],[0,13,26],[8,13,18],[2,13,24],[6,13,20]];for(var l=0;l<r.length;l++){var c=Object(a.a)(r[l],3),h=c[0],u=c[1],D=c[2];if(e[h]&&e[h]==e[u]&&e[h]==e[D])return e[h]}return null}var E=function(e){Object(s.a)(t,e);var r=Object(d.a)(t);function t(e){var a;return Object(n.a)(this,t),(a=r.call(this,e)).state={size:3,dimention:2,history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},a}return Object(i.a)(t,[{key:"handleClick",value:function(e){var r=this.state.history.slice(0,this.state.stepNumber+1),t=r[r.length-1].squares.slice();v(t)||t[e]||(t[e]=this.state.xIsNext?"X":"O",this.setState({history:r.concat([{squares:t}]),stepNumber:r.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2==0})}},{key:"changeSize",value:function(e){var r=this.state.dimention;this.setState({size:e,history:[{squares:Array(Math.pow(e,r)).fill(null)}],stepNumber:0,xIsNext:!0})}},{key:"changeDimention",value:function(e){var r=this.state.size;this.setState({dimention:e,history:[{squares:Array(Math.pow(r,e)).fill(null)}],stepNumber:0,xIsNext:!0})}},{key:"render",value:function(){var e,r=this,t=this.state.size,a=this.state.dimention,n=this.state.history,i=n[this.state.stepNumber],s=v(i.squares),d=n.map((function(e,t){var a=t?"Go to move #"+t:"Go to game start";return m.a.createElement("li",{key:t},m.a.createElement("button",{onClick:function(){return r.jumpTo(t)}},a))}));return e=s?"Winner: "+s:"Next player: "+(this.state.xIsNext?"X":"O"),m.a.createElement("div",{className:"game-info"},m.a.createElement("li",null,m.a.createElement("button",{onClick:function(){return r.changeSize(3)}},"3 X 3"),m.a.createElement("button",{onClick:function(){return r.changeSize(4)}},"4 X 4")),m.a.createElement("li",null,m.a.createElement("button",{onClick:function(){return r.changeDimention(2)}},"2D"),m.a.createElement("button",{onClick:function(){return r.changeDimention(3)}},"3D")),m.a.createElement("div",{className:"game"},m.a.createElement("div",{className:"game-board"},m.a.createElement(D,{size:t,dimention:a,squares:i.squares,onClick:function(e){return r.handleClick(e)}})),m.a.createElement("div",{className:"game-info"},m.a.createElement("div",null,e),m.a.createElement("ol",null,d))))}}]),t}(m.a.Component);c.a.render(m.a.createElement(E,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.0a1b555d.chunk.js.map