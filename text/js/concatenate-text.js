var _$_907e=["\x23\x69\x6E\x70\x75\x74\x5F\x63\x6F\x6C\x41","\x23\x69\x6E\x70\x75\x74\x5F\x63\x6F\x6C\x42","\x23\x6F\x75\x74\x70\x75\x74\x5F\x74\x65\x78\x74","\x74\x61\x5F\x65\x78\x61\x6D\x70\x6C\x65\x73","\x67\x65\x74","\x23\x75\x70\x6C\x6F\x61\x64\x5F\x63\x6F\x6C\x41","\x55\x54\x46\x2D\x38","\x23\x75\x70\x6C\x6F\x61\x64\x5F\x63\x6F\x6C\x42","\x4E\x6F\x20\x62\x6C\x6F\x62\x73\x20\x6F\x6E\x20\x49\x45\x20\x76\x65\x72\x3C\x31\x30","\x0D\x0A","\x6F\x75\x74\x70\x75\x74\x5F\x74\x65\x78\x74","\x74\x65\x78\x74\x2F\x70\x6C\x61\x69\x6E","\x6E\x75\x6C\x6C\x2E\x74\x78\x74","\x46\x69\x6C\x65\x20\x6E\x61\x6D\x65\x3A","\x4E\x65\x77\x20\x44\x6F\x63\x75\x6D\x65\x6E\x74","\x2E\x74\x78\x74","\x61","\x6E\x6F\x6E\x65","\x41\x0A\x42\x0A\x43","\x31\x0A\x32\x0A\x33","\x23\x70\x72\x65\x66\x69\x78","\x23\x69\x6E\x66\x69\x78","\x23\x73\x75\x66\x66\x69\x78","\x0A","","\x63\x68\x65\x63\x6B\x65\x64","\x23\x69\x73\x45\x6D\x70\x74\x79","\x43\x6F\x6D\x62\x69\x6E\x65\x64\x20\x4C\x69\x6E\x65\x73\x3A\x20","\x20\x28","\x2C\x20","\x29","\x23\x69\x6E\x73\x74\x61\x6E\x63\x65\x73","\x23\x70\x72\x65\x6D\x65\x72\x67\x65\x2C\x20\x23\x66\x69\x6C\x65\x5F\x75\x70\x6C\x6F\x61\x64\x2C\x20\x23\x6F\x70\x74\x69\x6F\x6E\x73","\x23\x6D\x65\x72\x67\x65\x64\x2C\x20\x23\x66\x69\x6C\x65\x5F\x64\x6F\x77\x6E\x6C\x6F\x61\x64","\x4D\x65\x72\x67\x65\x64\x20","\x20\x6C\x69\x6E\x65\x73","\x23\x63\x6F\x6D\x62\x69\x6E\x65\x54\x65\x78\x74","\x23\x73\x74\x61\x72\x74\x4F\x76\x65\x72","\x2E\x63\x6C\x69\x70\x62\x6F\x61\x72\x64","\x23\x69\x6E\x70\x75\x74\x5F\x63\x6F\x6C\x41\x2C\x20\x23\x69\x6E\x70\x75\x74\x5F\x63\x6F\x6C\x42\x2C\x20\x23\x6F\x75\x74\x70\x75\x74\x5F\x74\x65\x78\x74","\x23\x63\x6C\x65\x61\x72\x41\x6C\x6C","\x23\x66\x69\x6C\x65\x5F\x64\x6F\x77\x6E\x6C\x6F\x61\x64"];var colA=$(_$_907e[0]),colB=$(_$_907e[1]),area=$(_$_907e[2]),examples=JSON.parse(localStorage.getItem(_$_907e[3]));function loadTextA(){var a=$(_$_907e[5])[_$_907e[4]](0).files[0],g= new FileReader;g.onload= function(a){var g=a.target.result;$(_$_907e[0]).val(g)},g.readAsText(a,_$_907e[6])}function loadTextB(){var a=$(_$_907e[7])[_$_907e[4]](0).files[0],g= new FileReader;g.onload= function(a){var g=a.target.result;$(_$_907e[1]).val(g)},g.readAsText(a,_$_907e[6])}function saveText(a,g){var d=navigator.userAgent.match(/MSIE\s([\d.]+)/),c=navigator.userAgent.match(/Trident\/7.0/)&& navigator.userAgent.match(/rv:11/),b=navigator.userAgent.match(/Edge/g),f=d?d[1]:c?11:b?12:-1;if(d&& f< 10){console.log(_$_907e[8])}else {g= (g= document.getElementById(_$_907e[10]).value).replace(/\r?\n/g,_$_907e[9]);var h= new Blob([g],{type:_$_907e[11]});if(_$_907e[12]!= (a= prompt(_$_907e[13],_$_907e[14])+ _$_907e[15])){if(f>  -1){window.navigator.msSaveBlob(h,a)}else {var j=document.createElement(_$_907e[16]);j.download= a,j.href= window.URL.createObjectURL(h),j.onclick= function(a){document.body.removeChild(a.target)},j.style.display= _$_907e[17],document.body.appendChild(j),j.click()}}}}1== examples&& (colA.val(_$_907e[18]),colB.val(_$_907e[19])),$(_$_907e[36]).click(function(){prefix= $(_$_907e[20]).val(),infix= $(_$_907e[21]).val(),suffix= $(_$_907e[22]).val(),input1= colA.val().replace(/\r\n|\r|\n/gm,_$_907e[23]).split(_$_907e[23]),input2= colB.val().replace(/\r\n|\r|\n/gm,_$_907e[23]).split(_$_907e[23]);var a=input1.length,g=input2.length,d=a+ g,c=0,b=Math.max(input1.length,input2.length),f=[];for(c= 0;c< b;c++){null== input1[c]&& (input1[c]= _$_907e[24]),null== input2[c]&& (input2[c]= _$_907e[24]),$(_$_907e[26]).prop(_$_907e[25])?input1[c]+ input2[c]!= _$_907e[24]&& (f[c]= prefix+ input1[c]+ infix+ input2[c]+ suffix):f[c]= prefix+ input1[c]+ infix+ input2[c]+ suffix};f= f.join(_$_907e[23]),$(_$_907e[2]).val(f),$(_$_907e[31]).html(_$_907e[27]+ d+ _$_907e[28]+ a+ _$_907e[29]+ g+ _$_907e[30]),$(_$_907e[32]).hide(),$(_$_907e[33]).show(),Toast(_$_907e[34]+ d+ _$_907e[35])}),$(_$_907e[37]).click(function(){$(_$_907e[33]).hide(),$(_$_907e[32]).show()}),$(_$_907e[38]).click(function(){Clipboard(area)}),$(_$_907e[40]).click(function(){$(_$_907e[39]).val(_$_907e[24])}),$(_$_907e[41]).click(function(){saveText()})