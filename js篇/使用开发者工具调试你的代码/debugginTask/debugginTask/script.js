
        let box = document.querySelector('.container')
        let btn1 = document.querySelector('.btn1');
        let btn2 = document.querySelector('.btn2');
        let div1 = document.querySelector('.one');
        btn1.addEventListener('click',function(){
            addNewDiv()
        })
        btn2.addEventListener('click',function(){
            deleteDiv()
        })
        function addNewDiv(){
            let suqare = document.createElement('div')
            box.append(suqare);
        }
        function deleteDiv(){
            let lastSuqure = document.querySelector('.container div:last-child')
            // 判断它是否非空
            if(lastSuqure){
                box.removeChild(lastSuqure)
            }else{
                debugger
            }

        }
     
