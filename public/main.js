let n = 1;

getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `page${n+1}.json`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response);
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id;
                xxx.appendChild(li);
            });
            n += 1;
        }
    };
    request.send();
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '5.json')
    request.onreadystatechange = () => {
        //下载完成但是不知道是成功（2xx）还是失败（4xx 或 5xx）
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response)   //返回值是字符串
            const object = JSON.parse(request.response)  //把它变成对象
            console.log(object)
            myName.textContent = object.name 
        }
    };
    request.send();
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '3.html')
    request.onload = () => {
        console.log('html成功');
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    };
    request.onerror = () => {
        console.log('html失败');
    };
    request.send();
}

getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', "2.js")
    request.onload = () => {
        console.log('JS成功');
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    };
    request.onerror = () => {
        console.log('JS失败');
    };
    request.send();
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '4.xml'); //readyState为1
    request.onreadystatechange = () => {
        //下载完成但是不知道是成功（2xx）还是失败（4xx 或 5xx）
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.responseXML)
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        } else {
            alert('加载xml失败')
        }
    };
    request.send();
}

getCss.onclick = () => {
    const request = new XMLHttpRequest() 
    request.open('GET', 'style.css');   //readyState为1
    request.onreadystatechange = () => {
        //下载完成但是不知道是成功（2xx）还是失败（4xx 或 5xx）
        if (request.readyState === 4) {
            console.log('css下载完成')
        }
        if (request.status >= 200 && request.status < 300) {
            const style = document.createElement('style')
            style.innerHTML = request.response
            document.head.appendChild(style)
        } else {
            alert('加载css失败')
        }             
    };                                                              
    request.send();       
}








// getCss.onclick = () => {
//     const request = new XMLHttpRequest() //创建新的HttpQuest对象
//     request.open('GET', 'style.css'); //调用对象的open方法
//     request.onload = () => {
//         console.log('css成功');
//         const style = document.createElement('style')  //创建style标签
//         style.innerHTML = request.response              //填写style内容
//         document.head.appendChild(style)                //插入head标签
//     };                               //监听对象的onload事件
//     request.onerror = () => {
//         console.log('css失败');
//     };                                //监听对象的onerror事件
//     request.send();       
// }
