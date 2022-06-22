// //1.按下回车键，把完整的数据存在本地存储里
// // var todolist = [{ title: "xx", done: false }]
// $(function() {
//     load(); //一进来就渲染
//     // alert(11);绑定成功
//     $("#title").on("keydown", function(event) {
//         if (event.keyCode === 13) {
//             // alert(11);
//             if ($(this).val() === "") {
//                 alert("请输入你要输入的内容！");
//             } else {
//                 //首先先读取数据
//                 var local = getData();
//                 // console.log(local);
//                 // 把local数组进行更新数据 把最新的数据追加给local数组
//                 local.push({ title: $(this).val(), done: false });
//                 //把这个数据存储到本地
//                 saveData(local);
//                 //渲染到页面上
//                 load();

//                 $(this).val("");

//             }
//         }
//     })


//     //获取数据函数
//     function getData() {
//         var data = localStorage.getItem("todolist");
//         if (data !== null) {
//             // 本地存的是字符串类型的，读取的是需要对象类型的
//             return JSON.parse(data);
//         } else {
//             return [];
//         }
//     }


//     //保存数据
//     function saveData() {
//         localStorage.setItem = ("todolist", JSON.stringify(data));
//     }


//     //3.todilist 删除本地存储的信息，先获取数据，再删除对应的数据，保存本地存储中，重新清空列表
//     $("ol,ul").on("click", "a", function() {
//             // alert(11);
//             var data = getData(); //获取数据
//             // 在删除对应的数据
//             console.log(data);

//             //修改数据
//             var index = $(this).attr("id"); //获取id的属性值
//             console.log(index);
//             data.splice(index, 1);
//             // 保存到存储里面去
//             saveData(data);
//             load();

//         })
//         // toDoList  正在进行和已完成选项操作
//         // 当我们点击了小的复选框，修改本地存储数据，再重新渲染数据列表。
//         // 点击之后，获取本地存储数据。
//         // 修改对应数据属性 done 为当前复选框的checked状态。
//         // 之后保存数据到本地存储
//         // 重新渲染加载数据列表
//         // load 加载函数里面，新增一个条件,如果当前数据的done为true 就是已经完成的，就把列表渲染加载到 ul 里面
//         // 如果当前数据的done 为false， 则是待办事项，就把列表渲染加载到 ol 里面


//     // 4. toDoList 正在进行和已完成选项操作
//     $("ol,ul").on("click", "input", function() {
//         alert(11); //看一看是否已经绑定
//         // 点击之后，获取本地存储数据。
//         var data = getData();
//         // 修改对应数据属性 done 为当前复选框的checked状态。
//         var index = $(this).sibling("a").attr("id");
//         console.log(index); //打印索引号
//         // data[ ? ].done = ?
//         data[index].done = $(this).prop("checked"); //当前复选框的选中状态
//         console.log(data);
//         //保存数据本地存储
//         saveData(data);
//         load();

//     })



//     //渲染加载数据
//     function load() {
//         var data = getData();
//         console.log(data);
//         //遍历这个数据，但是遍历之前要清空ol ul的里面的数据否则会一直存在
//         $("ol,ul").empty();


//         //来计数
//         var todoCount = 0;
//         var doneCount = 0;

//         $each(data, function(i, n) { //绑定每一个数据的序号和n每一条数据
//             console.log(n);

//             //遍历这个数据
//             $.each(data, function(i, n) {
//                 console.log(n);
//                 if (n.done) { //如果是done的话添加到ul里面去,把索引号id输出来
//                     // $("ul").prepend("<li><input type='checkbox' checked='checked'><p>" + n.title + "</p> <a href='javascipt: ;'> id =" + i + "</a></li>");
//                     $("ul").prepend("<li><input type='checkbox' checked='checked' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
//                     doneCount++;

//                 } else {
//                     // $("ol").prepend("<li><input type='checkbox' checked='checked'><p>" + n.title + "</p> <a href='javascipt: ;'> id=" + i + "</a></li>");
//                     $("ol").prepend("<li><input type='checkbox' checked='checked' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
//                     todoCount++;
//                 }
//             });

//             // 取得所有匹配元素的内容。简单的来说就是把我们写了多少条信息显示出来
//             $("todocount").text(todoCount);
//             $("donecount").text(doneCount);
//         });

//     }

// })

// $(function() {
//     // alert(11);
//     // 1. 按下回车 把完整数据 存储到本地存储里面
//     // 存储的数据格式  var todolist = [{title: "xxx", done: false}]
//     load();
//     $("#title").on("keydown", function(event) {
//         if (event.keyCode === 13) {
//             if ($(this).val() === "") {
//                 alert("请输入您的内容！");
//             } else {
//                 // 先读取本地存储原来的数据
//                 var local = getDate();
//                 // console.log(local);
//                 // 把local数组进行更新数据 把最新的数据追加给local数组
//                 local.push({ title: $(this).val(), done: false });
//                 // 把这个数组local 存储给本地存储
//                 saveDate(local);
//                 // 2. toDoList 本地存储数据渲染加载到页面
//                 load();
//                 $(this).val("");
//             }
//         }
//     });
//     // 3. toDoList 删除操作
//     $("ol, ul").on("click", "a", function() {
//         // alert(11);
//         // 先获取本地存储
//         var data = getDate();
//         console.log(data);
//         // 6修改数据
//         var index = $(this).attr("id"); //给a添加自定义属性 定位到某一个地方，a从0开始
//         console.log(index); //打印每一个序列号
//         data.splice(index, 1); //删除操作
//         // 保存到本地存储
//         saveDate(data);
//         // 重新渲染页面
//         load();
//     });
//     // 4. toDoList 正在进行和已完成选项操作
//     $("ol, ul").on("click", "input", function() { //操作复选框
//         // alert(11);
//         // 先获取本地存储的数据
//         var data = getDate();
//         // 修改数据
//         var index = $(this).siblings("a").attr("id"); //在复选框的兄弟找到a标签中的自定义属性id
//         console.log(index); //打印id号
//         // data[?].done = ?
//         data[index].done = $(this).prop("checked"); //ryu
//         console.log(data);

//         // 保存到本地存储
//         saveDate(data);
//         // 重新渲染页面
//         load();
//     });
//     // 读取本地存储的数据 
//     function getDate() {
//         var data = localStorage.getItem("todolist");
//         if (data !== null) {
//             // 本地存储里面的数据是字符串格式的 但是我们需要的是对象格式的
//             return JSON.parse(data);
//         } else {
//             return [];
//         }
//     }
//     // 保存本地存储数据
//     function saveDate(data) {
//         localStorage.setItem("todolist", JSON.stringify(data));
//     }
//     // 渲染加载数据
//     function load() {
//         // 读取本地存储的数据
//         var data = getDate();
//         console.log(data);
//         // 遍历之前先要清空ol里面的元素内容
//         $("ol, ul").empty();
//         var todoCount = 0; // 正在进行的个数
//         var doneCount = 0; // 已经完成的个数
//         // 遍历这个数据
//         $.each(data, function(i, n) {
//             // console.log(n);
//             if (n.done) { //如果做完了ul则是打钩"+放值+"
//                 $("ul").prepend("<li><input type='checkbox' checked='checked' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
//                 doneCount++;
//             } else {
//                 $("ol").prepend("<li><input type='checkbox' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
//                 todoCount++;
//             }

//         });
//         $("#todocount").text(todoCount);
//         $("#donecount").text(doneCount);

//     }

// })


// 自己写
$(function() {
    load();
    // 1. 按下回车 把完整数据 存储到本地存储里面
    // 存储的数据格式  var todolist = [{title: "xxx", done: false}]
    $("#title").on("keydown", function(event) {
        if (event.keyCode === 13) {
            if ($(this).val() === "") {
                alert('请输入你要输入的内容！');
            } else {
                var local = getData();
                // console.log(local);
                // 把local数组进行更新数据 把最新的数据追加给local数组
                local.push({ title: $(this).val(), done: false });
                saveData(local);
                load();
                $(this).val(""); //要记得清空
            }
        }
    });
    //获取本地的数据
    function getData() {
        var data = localStorage.getItem("todolist"); //获得名称
        // 如果数据不为空我们需要转化
        if (data !== null) {
            return JSON.parse(data);
        } else {
            return [];
        }

    }

    function saveData(data) { //保存数据时要传递参数
        localStorage.setItem("todolist", JSON.stringify(data)) //保存数据名为：todolist
    }



    // 3. toDoList 删除操作
    $("ol,ul").on("click", "a", function() {
        // alert(11);
        // 先获取本地存储
        var data = getData();
        console.log(data);
        //修改数据
        var index = $(this).attr("id"); //给a添加自定义的属性，序列号
        console.log(index);
        data.splice(index, 1); //删除的长度为1
        saveData(data);
        load();
    });
    // 4. toDoList 正在进行和已完成选项操作
    $("ol,ul").on("click", "input", function() {
        //先获取本地存储的数据
        var data = getData();
        var index = $(this).siblings("a").attr("id"); //在复选框的兄弟找到a标签中的自定义属性id
        console.log(index);
        // data[?].done = ?
        data[index].done = $(this).prop("checked");
        // 保存到本地存储
        console.log(data);
        // 记得要保存到页面上否则可能会不能正在进行的打钩选项
        saveData(data);
        // 重新渲染页面
        load();

    });
    //渲染加载数据
    function load() {
        var data = getData();
        console.log(data);
        var todoCount = 0;
        var doneCount = 0;
        //编写这个数据，遍历之前要清空ol里面的元素内容
        $("ol,ul").empty();
        //遍历整个个数据
        $.each(data, function(i, n) {
            if (n.done) {
                $("ul").prepend("<li> <input type = 'checkbox' checked = 'checked'> <p>" + n.title + "</p> <a href='javascript:;' id =" + i + "></a></li>")
                doneCount++;
            } else {
                $("ol").prepend("<li><input type = 'checkbox'> <p>" + n.title + "</p><a href='javascript:;' id=" + i + "></a></li>");
                todoCount++;
            }

        });
        $("#todocount").text(todoCount);
        $("#donecount").text(doneCount);
    }

})